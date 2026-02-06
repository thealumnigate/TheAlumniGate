import Company from "../../models/company.js";

/**
 * @desc    Create a new company
 * @route   POST /api/admin/company
 * @access  Private (admin only)
 */
export const createCompany = async (req, res) => {
  try {
    const companyData = req.body;

    // Validate required fields
    if (!companyData.company_name || !companyData.job_role || !companyData.application_code) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields"
      });
    }

    // Create new company
    const newCompany = new Company(companyData);
    await newCompany.save();

    res.status(201).json({
      success: true,
      message: "Company added successfully",
      company: newCompany
    });
  } catch (err) {
    console.error("Error adding company:", err);

    // Handle duplicate application_code error
    if (err.code === 11000) {
      return res.status(400).json({
        success: false,
        message: "Application code already exists"
      });
    }

    // Handle validation errors
    if (err.name === 'ValidationError') {
      return res.status(400).json({
        success: false,
        message: "Validation error",
        error: err.message
      });
    }

    res.status(500).json({
      success: false,
      message: "Server error",
      error: err.message
    });
  }
};
