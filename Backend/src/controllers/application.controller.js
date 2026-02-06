import Applications from "../models/application.js";

/**
 * @desc    Apply to a company
 * @route   POST /api/apply
 * @access  Private (requires token)
 */
export const applyToCompany = async (req, res) => {
  try {
    const { companyId } = req.body;
    const studentId = req.user.id; // retrieved from token

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
};

/**
 * @desc    Get applied companies for a student
 * @route   GET /api/applied-companies
 * @access  Private (requires token)
 */
export const getAppliedCompanies = async (req, res) => {
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
};
