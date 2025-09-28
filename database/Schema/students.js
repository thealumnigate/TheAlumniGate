const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    rollno: {
      type: String,
      required: true,
      unique: true, // ensures no duplicate roll numbers
      trim: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    backlogs: {
      type: Number,
      default: 0,
      min: 0,
    },
    branch: {
      type: String,
      required: true,
      trim: true,
    },
    year: {
      type: Number,
      required: true,
      min: 1,
      max: 4,
    },
    semester: {
      type: Number,
      required: true,
      min: 1,
      max: 8,
    },
    cgpa: {
      type: Number,
      required: true,
      min: 0,
      max: 10,
    },
    no_of_internships: {
      type: Number,
      default: 0,
      min: 0,
    },
    sector_of_interest: [
      {
        type: String,
        trim: true,
      },
    ],
    is_registered: {
      type: Boolean,
      default: false,
    },
    resume: {
      url: { type: String, default: "" },
      file_name: { type: String, default: "" },
    },
  },
  {
    timestamps: true, // adds createdAt & updatedAt automatically
  }
);

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;