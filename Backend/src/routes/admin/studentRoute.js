import express from "express";
import { getStudentByRollno, updateStudent } from "../../controllers/admin/student.controller.js";

const router = express.Router();

// Get student by roll number
router.get("/:rollno", getStudentByRollno);

// Update student by roll number
router.put("/:rollno", updateStudent);

export default router;
