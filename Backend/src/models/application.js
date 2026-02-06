import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

const applicationSchema = new mongoose.Schema({
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
    required: true,
  },
  companyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Company",
    required: true,
  },
  applicationId: { type: String, default: uuidv4 }, // unique token
  appliedAt: { type: Date, default: Date.now },

  status: {
    type: String,
    enum: ["Applied", "Under Review", "Shortlisted", "Rejected", "Selected"], // "Applied" has been added
    default: "Applied",
  },
});

const Applications = mongoose.model("Applications", applicationSchema);
export default Applications;
