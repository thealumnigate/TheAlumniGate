import express from "express";
import { getAllCompanies, getCompaniesForYou } from "../controllers/company.controller.js";

const router = express.Router();

// Get all companies
router.get("/companies", getAllCompanies);

// Get eligible companies for a student
router.get("/companies-for-you/:studentId", getCompaniesForYou);

export default router;
