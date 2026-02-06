import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

// Error handling middleware
import { notFoundHandler, errorHandler } from "./src/middlewares/errorHandler.js";

// Student Routes
import authRoutes from "./src/routes/auth.js";
import companyRoutes from "./src/routes/companies.js";
import applicationRoutes from "./src/routes/applications.js";
import profileRoutes from "./src/routes/profile.js";
import eligibilityRoutes from "./src/routes/eligibility.js";

// Admin Routes
import adminLoginRoute from "./src/routes/admin/login.js";
import adminStudentRoute from "./src/routes/admin/studentRoute.js";
import adminCompanyRoute from "./src/routes/admin/companyRoute.js";
import evaluateResultsRoute from "./src/routes/admin/evaluateResultsRoute.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 8080;

app.use(
  cors({
    origin: "*", // frontend URL
    credentials: true,
  })
);

app.use(express.json()); // for JSON request body
app.use(express.urlencoded({ extended: true }));

const MONGO_URL = process.env.MONGODB_URL;

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

app.get("/", (req, res) => {
  res.send("working");
});

// Student Page routes
app.use("/api/auth", authRoutes);
app.use("/api", companyRoutes);
app.use("/api", applicationRoutes);
app.use("/api", profileRoutes);
app.use("/api", eligibilityRoutes);

// Admin routes
app.use("/api/admin", adminLoginRoute);
app.use("/api/admin", evaluateResultsRoute);
app.use("/api/admin/student", adminStudentRoute);
app.use("/api/admin/company", adminCompanyRoute);

// Error handling (must be after all routes)
app.use(notFoundHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log("port listening");
});
