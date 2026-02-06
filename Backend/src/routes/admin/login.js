import express from "express";
import verifyAdminToken from "../../../middlewares/VerifyAdminToken.js";
import { login, getAdminDetails } from "../../controllers/admin/adminAuth.controller.js";

const router = express.Router();

// Admin login (single-step: email + password)
router.post("/login", login);

// Get current admin details
router.get("/me", verifyAdminToken, getAdminDetails);

export default router;
