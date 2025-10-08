import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Students from "../models/student.js";

const router = express.Router();

//api for login
router.post("/login", async (req, res) => {
  try {
    const { rollno, password } = req.body;
    const student = await Students.findOne({ rollno });

    if (!student) {
      return res
        .status(400)
        .json({ message: "Invalid Roll Number or Password" });
    }

    const isMatch = await bcrypt.compare(password, student.password);

    if (!isMatch) {
      return res
        .status(400)
        .json({ message: "Invalid Roll Number or Password" });
    }

    const token = jwt.sign({ id: student._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    return res
      .status(200)
      .json({ message: "Login successful", token, student });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
});

export default router;
