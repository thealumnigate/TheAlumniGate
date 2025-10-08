import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";


import authRoutes from "./src/routes/auth.js";
import companyRoutes from "./src/routes/companies.js";
import applicationRoutes from "./src/routes/applications.js";
import profileRoutes from "./src/routes/profile.js";
import eligibilityRoutes from "./src/routes/eligibility.js";

dotenv.config();
const app = express();


app.use(cors({
  origin: "http://localhost:5173", // frontend URL
  credentials: true,               // if you need cookies
}));



app.use(express.json()); // for JSON request body
app.use(express.urlencoded({extended:true}));

const MONGO_URL = process.env.MONGODB_URL;

main()
  .then(()=>{
    console.log("connected to DB");
  })
  .catch((err)=>{
    console.log(err);
  })

async function main() {
  await mongoose.connect(MONGO_URL);
}

app.get("/" , (req,res)=>{
  res.send("working");
});

// Mount routes
app.use("/api", authRoutes);
app.use("/api", companyRoutes);
app.use("/api", applicationRoutes);
app.use("/api", profileRoutes);
app.use("/api", eligibilityRoutes);



app.listen(8080 , () =>{
  console.log("port listening")
})