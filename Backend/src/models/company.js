import mongoose from "mongoose";

const salarySchema = new mongoose.Schema(
  {
    min: { type: Number, required: true },
    max: { type: Number, required: true },
    unit: { type: String, default: "LPA" },
  },
  { _id: false }
);

const companySchema = new mongoose.Schema(
  {
    company_name: { type: String, required: true, trim: true },
    job_role: { type: String, required: true, trim: true },
    salary: { type: salarySchema, required: true },

    application_code: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    eligibility: {
      branches: { type: [String], required: true },
      min_gpa: { type: Number, default: 0 },
      max_backlogs: { type: Number, default: 0 },
      min_internships: { type: Number, default: 0 },
    },

    deadline: { type: Date, required: true },
    openings: { type: Number, required: true },

    required_skills: { type: [String], required: true },

    company_overview: {
      description: { type: String, required: true },
      website: {
        type: String,
        match: [/^https?:\/\/.+/, "Please enter a valid URL"],
      },
      headquarters: { type: String },
    },

    job_description: {
      title: { type: String, required: true },
      overview: { type: String, required: true },
      duties_and_responsibilities: {
        type: [String],
        required: true,
      },
    },
    
  },
  { timestamps: true }
);

// Useful indexes
companySchema.index({ job_role: 1 });
companySchema.index({ deadline: 1 });
companySchema.index({ required_skills: 1 });

const Company = mongoose.model("Company", companySchema);
export default Company;