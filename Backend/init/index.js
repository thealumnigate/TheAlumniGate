import mongoose from "mongoose";
import companies from "./companies.js";
import students from "./students.js";
import Company from "../src/models/company.js";
import Student from "../src/models/student.js";
import bcrypt from "bcrypt";
import dotenv from "dotenv";

dotenv.config({ path: "../.env" });

const port = process.env.PORT || 5000;
const MONGO_URI = process.env.MongoDB_URL;

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("DB connection error:", err);
    process.exit(1);
  }
};

const initDBCompanies = async () => {
  try {
    await Company.deleteMany({});
    await Company.insertMany(companies);
    console.log("Companies data inserted successfully");
  } catch (err) {
    console.error("Error inserting companies:", err);
  }
};

const initDBStudents = async () => {
  try {
    await Student.deleteMany({});

    const studentsWithHashedPwds = await Promise.all(
      students.map(async (student) => {
        const hashedPwd = await bcrypt.hash(student.password, 10);
        return { ...student, password: hashedPwd };
      })
    );

    await Student.insertMany(studentsWithHashedPwds);
    console.log("Students data inserted");
  } catch (err) {
    console.error("Error inserting students:", err);
  }
};

const seed = async () => {
  await connectDB();
  await initDBCompanies();
  await initDBStudents();
  console.log("Database seeding completed!");
  process.exit();
};

seed();
