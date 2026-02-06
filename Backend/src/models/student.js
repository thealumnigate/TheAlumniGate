import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  rollno: { type: String, required: true, unique: true, trim: true },
  name: { type: String, required: true, trim: true },
  email: { 
    type: String, 
    required: true, 
    unique: true, 
    trim: true,
    match: [/^\S+@\S+\.\S+$/, "Please provide a valid email"]
  },
  password: { type: String, required: true },

  // academic details
  year: { type: Number, required: true },
  semester: { type: Number, required: true },
  branch: { type: String, required: true },
  cgpa: {
    type: Number,
    required: true,
    min: 0,
    max: 10
  },
  backlogs: { type: Number, default: 0 },

  // additional info
  no_of_internships: { type: Number, default: 0 },
  sector_of_interest: { type: [String], default: [] }, // multiple sectors possible

  isRegisteredBefore: {
    type: Boolean,
    default: false,
  },
  resume: {
    url: { type: String, default: "" },
    file_name: { type: String, default: "" },
  },

  resetPasswordToken: String,
  resetPasswordExpire: Date,

}, { timestamps: true });

const Student =  mongoose.model("Student", studentSchema);
export default Student;