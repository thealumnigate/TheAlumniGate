import express from "express";
import Companies from "../models/company.js";

const router = express.Router();

router.get("/companies", async (req, res) => {
  try {
    const companies = await Companies.find({});
    res.json(companies);
  } catch (err) {
    console.error("Error fetching companies:", err);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;