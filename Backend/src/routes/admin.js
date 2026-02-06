import express from "express";
import Students from "../models/student.js";

const router = express.Router();

router.get("/student/:rollno", async (req, res) => {
  try {
    const { rollno } = req.params;

    const student = await Students.findOne({ rollno })
      .select("rollno name email password year semester branch cgpa backlogs");

    if (!student) {
      return res.status(404).json({ success: false, message: "Student not found" });
    }

    res.status(200).json({ success: true, student });
  } catch (err) {
    console.error("Error fetching student by rollno:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

router.put("/student/:rollno", async (req, res) => {
  try {
    const { rollno } = req.params;
    const updates = req.body;

    const student = await Students.findOneAndUpdate(
      { rollno },
      { $set: updates },
      { new: true }
    ).select("rollno name email password year semester branch cgpa backlogs -_id");

    if (!student)
      return res.status(404).json({ success: false, message: "Student not found" });

    res.status(200).json({ success: true, student });
  } catch (err) {
    console.error("Error updating student:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

export default router;