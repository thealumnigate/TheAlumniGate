import Company from "../../models/company.js";
import Applications from "../../models/application.js";

/**
 * @desc    Get all companies for admin
 * @route   GET /api/admin/companies
 * @access  Private (admin only)
 */
export const getAllCompanies = async (req, res) => {
  try {
    const companies = await Company.find()
      .select("company_name job_role application_code deadline")
      .sort({ createdAt: -1 });

    res.status(200).json({ success: true, companies });
  } catch (err) {
    console.error("Error fetching companies:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

/**
 * @desc    Get all applications for a specific company
 * @route   GET /api/admin/applications/:companyId
 * @access  Private (admin only)
 */
export const getApplicationsByCompany = async (req, res) => {
  try {
    const { companyId } = req.params;

    // Fetch applications and populate student details
    const applications = await Applications.find({ companyId })
      .populate("studentId", "name rollno email branch cgpa")
      .populate("companyId", "company_name job_role")
      .sort({ appliedAt: -1 });

    res.status(200).json({ success: true, applications });
  } catch (err) {
    console.error("Error fetching applications:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

/**
 * @desc    Update application status
 * @route   PUT /api/admin/application/:applicationId/status
 * @access  Private (admin only)
 */
export const updateApplicationStatus = async (req, res) => {
  try {
    const { applicationId } = req.params;
    const { status } = req.body;

    // Validate status
    const validStatuses = ["Under Review", "Shortlisted", "Rejected", "Selected"];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({
        success: false,
        message: "Invalid status value"
      });
    }

    // Update the application status
    const updatedApplication = await Applications.findByIdAndUpdate(
      applicationId,
      { status },
      { new: true, runValidators: true }
    )
      .populate("studentId", "name rollno email")
      .populate("companyId", "company_name job_role");

    if (!updatedApplication) {
      return res.status(404).json({
        success: false,
        message: "Application not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Status updated successfully",
      application: updatedApplication
    });
  } catch (err) {
    console.error("Error updating application status:", err);
    res.status(500).json({
      success: false,
      message: "Server error",
      error: err.message
    });
  }
};
