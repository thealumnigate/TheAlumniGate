// Company Schema Definition using Mongoose

const mongoose = require("mongoose");

const companySchema = new mongoose.Schema(
  {
    company_name: {
      type: String,
      required: true,
      trim: true,
    },
    job_role: {
      type: String,
      required: true,
      trim: true,
    },
    salary: {
      min: { type: Number, required: true },
      max: { type: Number, required: true },
      unit: { type: String, default: "LPA" },
    },
    application_code: {
      type: String,
      required: true,
      unique: true, // ensures no duplicate codes
      trim: true,
    },
    eligibility: {
      branches: [{ type: String, required: true }],
      min_gpa: { type: Number, required: true },
      max_backlogs: { type: Number, required: true },
      min_internships: { type: Number, default: 0 },
    },
    deadline: {
      type: Date,
      required: true,
    },
    openings: {
      type: Number,
      required: true,
    },
    required_skills: [{ type: String, required: true }],
    company_overview: {
      description: { type: String, required: true },
      website: { type: String },
      headquarters: { type: String },
    },
  },
  {
    timestamps: true, // auto adds createdAt & updatedAt
  }
);

const Company = mongoose.model("Company", companySchema);

module.exports = Company;
