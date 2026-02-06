import jwt from "jsonwebtoken";
import fs from "fs/promises";
import Students from "../models/student.js";
import cloudinary from "../../cloudConfig.js";

/**
 * @desc    Get current user profile
 * @route   GET /api/me
 * @access  Private (requires token)
 */
export const getProfile = async (req, res) => {
  try {
    const student = await Students.findById(req.user.id);
    if (!student) return res.status(404).json({ message: "Student not found" });
    res.json({ student });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

/**
 * @desc    Complete student registration with resume upload
 * @route   POST /api/register
 * @access  Private (requires token)
 */
export const register = async (req, res) => {
  try {
    const studentId = req.user?.id;
    if (!studentId) {
      return res.status(400).json({ message: "Student ID missing from token" });
    }

    let resumeData = { url: "", file_name: "" };

    if (req.file) {
      // Upload to Cloudinary as raw (PDF)
      const uploaded = await cloudinary.uploader.upload(req.file.path, {
        folder: "resumes",
        resource_type: "raw",
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
};

/**
 * @desc    Update student preferences
 * @route   PUT /api/update-preferences
 * @access  Private (requires token)
 */
export const updatePreferences = async (req, res) => {
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
};
