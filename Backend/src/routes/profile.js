import express from "express";
import verifyToken from "../../middlewares/verifyToken.js";
import upload from "../../middlewares/multer.js";
import { getProfile, register, updatePreferences } from "../controllers/profile.controller.js";

const router = express.Router();

// Get current user profile
router.get("/me", verifyToken, getProfile);

// Complete registration with resume upload
router.post("/register", verifyToken, upload.single("resume"), register);

// Update preferences
router.put("/update-preferences", verifyToken, upload.single("resume"), updatePreferences);

export default router;