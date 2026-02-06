import express from "express";
import verifyToken from "../../middlewares/verifyToken.js";
import { applyToCompany, getAppliedCompanies } from "../controllers/application.controller.js";

const router = express.Router();

// Apply to a company
router.post("/apply", verifyToken, applyToCompany);

// Get applied companies
router.get("/applied-companies", verifyToken, getAppliedCompanies);

export default router;