import express from "express";
import { createCompany } from "../../controllers/admin/company.controller.js";

const router = express.Router();

// Create new company
router.post("/", createCompany);

export default router;
