import Students from "../models/student.js";
import Companies from "../models/company.js";

/**
 * @desc    Check eligibility for a specific company
 * @route   GET /api/eligibility/:code
 * @access  Private (requires token)
 */
export const checkEligibility = async (req, res) => {
  try {
    const { code } = req.params;
    const studentId = req.user.id || req.user?._id;
    const student = await Students.findById(studentId);
    const company = await Companies.findOne({ application_code: code });

    if (!student || !company) {
      return res.status(404).json({ success: false, message: "Student or Company not found" });
    }

    const branchMatch = company.eligibility.branches.some(
      (branch) => branch.trim().toLowerCase() === student.branch.trim().toLowerCase()
    );

    if (
      student.cgpa < company.eligibility.min_gpa ||
      student.backlogs > company.eligibility.max_backlogs ||
      !branchMatch ||
      student.no_of_internships < company.eligibility.min_internships
    ) {
      console.log("Eligibility failed for student");
      return res.status(403).json({
        success: false,
        message: "You do not meet the eligibility criteria for this company.",
      });
    }

    console.log("Eligibility passed");
    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Eligibility check error:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
