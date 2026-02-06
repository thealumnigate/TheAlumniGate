// pages/AdminPage.jsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import EvaluateResults from "../AdminComponents/EvaluateResults";
import AddCompanyForm from "../AdminComponents/AddCompanyForm";
import StudentDetails from "../AdminComponents/StudentDetails";

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState("evaluate");
  const [companies, setCompanies] = useState([]);
  const [applications, setApplications] = useState([]);
  const [selectedCompanyName, setSelectedCompanyName] = useState("");
  const [selectedCompanyCode, setSelectedCompanyCode] = useState("");

  useEffect(() => {
    const savedCompanies = JSON.parse(localStorage.getItem("companies")) || [];
    const savedApplications =
      JSON.parse(localStorage.getItem("applications")) || [];
    setCompanies(savedCompanies);
    setApplications(savedApplications);
  }, []);

  const handleAddCompany = (newCompany) => {
    const updated = [...companies, { ...newCompany, id: Date.now() }];
    setCompanies(updated);
    localStorage.setItem("companies", JSON.stringify(updated));
    alert("✅ Company added successfully!");
  };

  return (
    <div className="min-h-screen bg-transparent p-6 pt-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        className="max-w-7xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Admin Dashboard
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Manage companies, evaluate applications, and view student details
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex justify-center mb-8 gap-4 flex-wrap"
        >
          {[
            { id: "evaluate", label: "Evaluate Results" },
            { id: "add", label: "Add Company" },
            { id: "student", label: "Student Details" },
          ].map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? "text-white shadow-lg"
                  : "bg-white/80 dark:bg-dark-800/30 text-gray-700 dark:text-gray-300 border border-gray-300/40 dark:border-gray-700/30 hover:bg-gray-50 dark:hover:bg-gray-700/30"
              }`}
              style={activeTab === tab.id ? { backgroundColor: '#0ea5e9' } : {}}
              onMouseEnter={(e) => {
                if (activeTab === tab.id) {
                  e.target.style.backgroundColor = '#0284c7';
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab === tab.id) {
                  e.target.style.backgroundColor = '#0ea5e9';
                }
              }}
            >
              {tab.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Tab Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-white/80 dark:bg-dark-800/30 border border-gray-300/40 dark:border-gray-700/30 shadow-lg dark:shadow-none rounded-2xl p-8 backdrop-blur-sm"
        >
          {activeTab === "evaluate" && (
            <EvaluateResults
              companies={companies}
              applications={applications}
              selectedCompanyName={selectedCompanyName}
              setSelectedCompanyName={setSelectedCompanyName}
              selectedCompanyCode={selectedCompanyCode}
              setSelectedCompanyCode={setSelectedCompanyCode}
            />
          )}
          {activeTab === "add" && (
            <AddCompanyForm onAddCompany={handleAddCompany} />
          )}
          {activeTab === "student" && <StudentDetails />}
        </motion.div>
      </motion.div>
    </div>
  );
}