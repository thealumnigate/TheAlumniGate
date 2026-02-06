import express from "express";
import verifyToken from "../../middlewares/verifyToken.js";
import { checkEligibility } from "../controllers/eligibility.controller.js";

const router = express.Router();

// Check eligibility for a specific company
router.get("/eligibility/:code", verifyToken, checkEligibility);

export default router;