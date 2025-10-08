import express from "express";
const app = express();
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import cors from "cors";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import multer from "multer";
import cloudinary from "./cloudConfig.js";
import upload from "./middlewares/multer.js";
import fs from "fs/promises";

dotenv.config();

const verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader) {
    return res.status(401).json({ message: "No token provided" });
  }

  const token = authHeader.split(" ")[1]; // "Bearer <token>"
  if (!token) {
    return res.status(401).json({ message: "Invalid token format" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); 
    req.user = decoded; // e.g., { id: "studentId123", ... }
    next();
  } catch (err) {
    console.error("JWT error:", err);
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};

app.use(cors({
  origin: "http://localhost:5173", // frontend URL
  credentials: true,               // if you need cookies
}));

import Companies from "./src/models/company.js";
import Students from "./src/models/student.js";
import Applications from "./src/models/application.js";

app.use(express.json()); // for JSON request body
app.use(express.urlencoded({extended:true}));

const MONGO_URL = "mongodb://127.0.0.1:27017/TheAlumniGate";

main()
  .then(()=>{
    console.log("connected to DB");
  })
  .catch((err)=>{
    console.log(err);
  })

async function main() {
  await mongoose.connect(MONGO_URL);
}

app.get("/" , (req,res)=>{
  res.send("working");
});

// ------------------- LOGIN ROUTE -------------------
app.post("/api/login", async (req, res) => {
  try {
    const { rollno, password } = req.body;
    const student = await Students.findOne({ rollno });

    if (!student) {
      return res.status(400).json({ message: "Invalid Roll Number or Password" });
    }

    const isMatch = await bcrypt.compare(password, student.password);
    
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid Roll Number or Password" });
    }

    const token = jwt.sign({ id: student._id }, process.env.JWT_SECRET, { expiresIn: "7d" });

    return res.status(200).json({message: "Login successful", token, student });
    // return res.status(200).json({ message: "Login successful", student });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
});


app.get("/api/me", verifyToken, async (req, res) => {
  try {
    const student = await Students.findById(req.user.id);
    if (!student) return res.status(404).json({ message: "Student not found" });
    res.json({ student });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

app.get("/login" , (req, res)=>{
  res.send("you are on login page");
});
//ends here

// ------------------- GET COMPANIES -------------------

app.get("/api/companies", async (req, res) => {
  try {
    const companies = await Companies.find({});
    res.json(companies);
  } catch (err) {
    console.error("Error fetching companies:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// ----------- Registration From API ----------------


app.post("/api/register",verifyToken, upload.single("resume"), async (req, res) => {
  try {
    const studentId = req.user?.id;
    if (!studentId) {
      return res.status(400).json({ message: "Student ID missing from token" });
    }

    let resumeData = { url: "", file_name: "" };

    if (req.file) {
      //  Upload to Cloudinary as raw (PDF)
      const uploaded = await cloudinary.uploader.upload(req.file.path, {
        folder: "resumes",
        resource_type: "raw", // 👈 important for PDFs
      });

      resumeData = {
        url: uploaded.secure_url,
        file_name: req.file.originalname,
      };

      await fs.unlink(req.file.path);
    }

    const updateData = {
      no_of_internships: req.body.internship,
      sector_of_interest: JSON.parse(req.body.sector_of_interest || "[]"),
      resume: resumeData,
      isRegisteredBefore: true,
    };

    const updatedStudent = await Students.findByIdAndUpdate(studentId, updateData, { new: true });

    if (!updatedStudent) {
      return res.status(404).json({ message: "Student not found" });
    }

    // generate new token with updated payload
    const newToken = jwt.sign(
      { id: updatedStudent._id, email: updatedStudent.email, isRegisteredBefore: true },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    // Send single response
    res.json({
      success: true,
      token: newToken,
      student: updatedStudent,
      message: "Registration successful",
    });

  } catch (err) {
    console.error("Registration error:", err);
    res.status(500).json({ message: "Error registering student" });
  }
});

//update preference api

app.put("/api/update-preferences", verifyToken, upload.single("resume"), async (req, res) => {
  try {
    const studentId = req.user?.id;
    if (!studentId) {
      return res.status(400).json({ message: "Student ID missing from token" });
    }

    const student = await Students.findById(studentId);
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    // build update object dynamically
    let updateData = {};

    if (req.body.internship !== undefined) {
      updateData.no_of_internships = req.body.internship;
    }

    if (req.body.sector_of_interest !== undefined) {
      updateData.sector_of_interest = JSON.parse(req.body.sector_of_interest);
    }

    if (req.file) {
      const uploaded = await cloudinary.uploader.upload(req.file.path, {
        folder: "resumes",
        resource_type: "raw",
      });

      updateData.resume = {
        url: uploaded.secure_url,
        file_name: req.file.originalname,
      };

      await fs.unlink(req.file.path);
    }

    if (Object.keys(updateData).length === 0) {
      return res.status(400).json({ message: "No fields provided for update" });
    }

    const updatedStudent = await Students.findByIdAndUpdate(
      studentId,
      { $set: updateData },
      { new: true }
    );

    const newToken = jwt.sign(
      { id: updatedStudent._id, email: updatedStudent.email, isRegisteredBefore: true },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.json({
      success: true,
      token: newToken,
      student: updatedStudent,
      message: "Preferences updated successfully",
    });

  } catch (err) {
    console.error("Update preferences error:", err);
    res.status(500).json({ message: "Error updating preferences" });
  }
});



// -----------API for company apply -------------

// POST /api/apply
app.post("/api/apply", verifyToken, async (req, res) => {
  try {
    const { companyId } = req.body;
    const studentId = req.user.id; //  retrieved from token

    // Eligibility check
    // if (
    //   Students.cgpa < Companies.eligibilty.min_gpa ||
    //   Students.backlogs > Companies.max_backlogs ||
    //   !Companies.branches.includes(Students.branch) ||
    //   Students.no_of_internships < Companies.min_internships
    // ) {
    //   return res.status(403).json({
    //     success: false,
    //     message: "You do not meet the eligibility criteria for this company.",
    //   });
    // }
    
    // Check if already applied
    const existingApplication = await Applications.findOne({ studentId, companyId });
    if (existingApplication) {
      return res.status(400).json({
        success: false,
        message: "You have already applied to this company.",
      });
    }

    // Create and save new application
    const newApplication = new Applications({ studentId, companyId });
    await newApplication.save();

    res.status(201).json({
      success: true,
      applicationId: newApplication.applicationId,
      message: "Application submitted successfully!",
    });
  } catch (error) {
    console.error("Error creating application:", error);
    res.status(500).json({
      success: false,
      message: "Server error while applying for company.",
    });
  }
});

//------------- Displaying applied companies data ---------------

app.get("/api/applied-companies", verifyToken, async (req, res) => {
  try {
    const applications = await Applications.find({ studentId: req.user.id })
      .populate("companyId", "company_name job_role")
      .sort({ appliedAt: -1 });

    res.json({
      success: true,
      applications,
    });
  } catch (err) {
    console.error("Error fetching applied companies:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

app.listen(8080 , () =>{
  console.log("port listening")
})


