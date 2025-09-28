// initilization script for companies and users data into the database

const mongoose = require("mongoose");
const initDataCompanies = require("./companies.js");
const initDataUsers = require("./students.js");
const Database_Schema_Companies = require("../Schema/companies.js");
const Database_Schema_Users = require("../Schema/students.js");

main()
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://localhost:27017/TheAlumniGate");
}

const initDBCompanies = async () => {
  await companies.insertMany(initDataCompanies.data);
  console.log("Database Initialized");
};

const initDBUsers = async () => {
  await companies.insertMany(initDataUsers.data);
  console.log("Database Initialized");
};

initDBCompanies();
initDBUsers();
