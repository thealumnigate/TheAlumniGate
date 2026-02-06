import express from "express";
import { login, forgotPassword, resetPassword } from "../controllers/auth.controller.js";

const router = express.Router();

// Student login
router.post("/login", login);

// Forgot Password (send reset link)
router.post("/forgot-password", forgotPassword);

// Reset Password
router.post("/reset-password/:token", resetPassword);

export default router;
