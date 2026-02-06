import express from "express";
import {
  getAllCompanies,
  getApplicationsByCompany,
  updateApplicationStatus
} from "../../controllers/admin/results.controller.js";

const router = express.Router();

// Get all companies
router.get("/companies", getAllCompanies);

// Get all applications for a specific company
router.get("/applications/:companyId", getApplicationsByCompany);

// Update application status
router.put("/application/:applicationId/status", updateApplicationStatus);

export default router;
