import express from "express";
import verifyToken from "../../middlewares/verifyToken.js";
import Students from "../models/student.js";
import Companies from "../models/company.js";

const router = express.Router();

router.get("/eligibility/:code", verifyToken, async (req, res) => {
  try {
    const { code } = req.params;
    const studentId = req.user?._id;
    const student = await Students.findById(studentId);
    const company = await Companies.findOne({ company_code: code });

    if (!student || !company) {
      return res.status(404).json({ success: false });
    }

    const studentSector = student.sector_of_interest;
    // Eligibility logic
    if (
      student.cgpa < company.eligibility.min_gpa ||
      student.backlogs > company.max_backlogs ||
      !company.branches.includes(student.branch) ||
      student.no_of_internships < company.min_internships ||
      (studentSector &&
        !company.job_role.toLowerCase().includes(studentSector.toLowerCase()))
    ) {
      return res.status(403).json({
        success: false,
        message: "You do not meet the eligibility criteria for this company.",
      });
    }

    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false });
  }
});

export default router;
