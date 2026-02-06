import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  DollarSign,
  Users,
  Calendar,
  BookOpen,
  CheckCircle,
} from "lucide-react";
import apiClient from "../services/apiClient";

export default function CompanyDetails() {
  const { code } = useParams();
  const [company, setCompany] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get("/companies")
      .then((res) => {
        const found = res.data.find((c) => c.application_code === code);
        if (found) {
          setCompany(found);
        } else {
          setError("Company not found!");
        }
      })
      .catch((err) => {
        console.error("Error fetching companies:", err);
        setError("Error fetching company details.");
      });
  }, [code]);

  if (error) {
    return (
      <div className="p-6 text-center text-red-600 dark:text-red-400 font-bold text-xl">
        {error}
      </div>
    );
  }

  if (!company) {
    return (
      <div className="p-6 text-center text-gray-800 dark:text-gray-300 text-lg">
        Loading company details...
      </div>
    );
  }

  const logoUrl = company.company_overview?.website
    ? `https://logo.clearbit.com/${company.company_overview.website.replace(
      /^https?:\/\//,
      ""
    )}`
    : null;

  const initials = company.company_name
    .split(" ")
    .map((w) => w[0])
    .join("");

  const info = [
    {
      label: "Role",
      value: company.job_role,
      icon: (
        <Briefcase className="w-6 h-6 text-primary-600 dark:text-primary-500" />
      ),
    },
    {
      label: "Salary",
      value: `₹${company.salary.min} - ₹${company.salary.max} ${company.salary.unit}`,
      icon: (
        <DollarSign className="w-6 h-6 text-green-600 dark:text-green-500" />
      ),
    },
    {
      label: "Openings",
      value: company.openings,
      icon: <Users className="w-6 h-6 text-blue-600 dark:text-blue-500" />,
    },
    {
      label: "Deadline",
      value: new Date(company.deadline).toDateString(),
      icon: <Calendar className="w-6 h-6 text-pink-600 dark:text-pink-500" />,
    },
  ];

  const eligibility = company.eligibility;
  const jobDesc = company.job_description;

  return (
    <div className="p-6 md:p-12 min-h-screen bg-transparent text-gray-900 dark:text-gray-100 flex justify-center max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl w-full bg-white/80 dark:bg-dark-800/30 border border-gray-300/40 dark:border-gray-700/30 rounded-2xl shadow-lg dark:shadow-none overflow-hidden relative"
      >
        {/* Gradient accent bar */}
        <div className="absolute left-0 top-0 h-full w-2 bg-gradient-to-b from-primary-500 to-primary-600 rounded-l-2xl"></div>

        {/* Header with logo */}
        <div className="flex items-center p-6 md:p-10 gap-6 relative z-10 border-b border-gray-300/40 dark:border-gray-700/30">
          <div className="w-24 h-24 rounded-full shadow-xl bg-white dark:bg-white flex items-center justify-center overflow-hidden p-3">
            {logoUrl ? (
              <img
                src={logoUrl}
                alt={company.company_name}
                className="w-full h-full object-contain"
                onError={(e) => {
                  const domain = company.company_overview?.website
                    ?.replace(/^https?:\/\//, "")
                    .split("/")[0];
                  if (domain && !e.target.dataset.faviconTried) {
                    e.target.dataset.faviconTried = "1";
                    e.target.src = `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;
                  }
                }}
              />
            ) : (
              <img
                src={
                  company.company_overview?.website
                    ? `https://www.google.com/s2/favicons?domain=${company.company_overview.website
                      .replace(/^https?:\/\//, "")
                      .split("/")[0]
                    }&sz=128`
                    : ""
                }
                alt={company.company_name}
                className="w-full h-full object-contain"
              />
            )}
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-gray-100">
            {company.company_name}
          </h1>
        </div>

        {/* Info Section */}
        <div className="p-6 md:p-10 relative z-10">
          {/* Info boxes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {info.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="flex items-start gap-4 bg-gray-100/50 dark:bg-white/5 rounded-xl p-5 shadow-sm hover:shadow-md border border-gray-300/40 dark:border-gray-700/30"
              >
                {item.icon}
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                    {item.label}
                  </p>
                  <p className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                    {item.value}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Eligibility Section */}
          <div className="bg-blue-50/70 dark:bg-blue-900/20 border border-blue-200/50 dark:border-blue-700/30 rounded-xl p-6 mb-6">
            <h2 className="text-xl font-bold text-blue-700 dark:text-blue-400 mb-3 flex items-center gap-2">
              <CheckCircle className="text-blue-600 dark:text-blue-500 w-5 h-5" />{" "}
              Eligibility Criteria
            </h2>
            <ul className="list-disc ml-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>
                <b>Branches:</b> {eligibility.branches.join(", ")}
              </li>
              <li>
                <b>Minimum GPA:</b> {eligibility.min_gpa}
              </li>
              <li>
                <b>Max Backlogs Allowed:</b> {eligibility.max_backlogs}
              </li>
              <li>
                <b>Minimum Internships Required:</b>{" "}
                {eligibility.min_internships}
              </li>
            </ul>
          </div>

          {/* Required Skills */}
          <div className="bg-green-50/70 dark:bg-green-900/20 border border-green-200/50 dark:border-green-700/30 rounded-xl p-6 mb-6">
            <h2 className="text-xl font-bold text-green-700 dark:text-green-400 mb-3">
              Required Skills
            </h2>
            <div className="flex flex-wrap gap-2">
              {company.required_skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-300 px-3 py-1 rounded-full text-sm font-medium border border-green-200/50 dark:border-green-700/30"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Job Description */}
          <div className="bg-pink-50/70 dark:bg-pink-900/20 border border-pink-200/50 dark:border-pink-700/30 rounded-xl p-6 mb-6">
            <h2 className="text-xl font-bold text-pink-700 dark:text-pink-400 mb-3 flex items-center gap-2">
              <BookOpen className="text-pink-600 dark:text-pink-500 w-5 h-5" />{" "}
              Job Description
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              {jobDesc.overview}
            </p>
            <ul className="list-disc ml-6 text-gray-700 dark:text-gray-300 space-y-2">
              {jobDesc.duties_and_responsibilities.map((duty, idx) => (
                <li key={idx}>{duty}</li>
              ))}
            </ul>
          </div>

          {/* Company Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative bg-gray-100/50 dark:bg-white/5 border border-gray-300/40 dark:border-gray-700/30 rounded-xl p-6 md:p-8 shadow-sm mb-6"
          >
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
              About {company.company_name}
            </h2>
            <span className="absolute top-4 left-4 text-primary-400 dark:text-primary-300 text-4xl font-serif">
              "
            </span>
            <span className="absolute bottom-4 right-4 text-primary-400 dark:text-primary-300 text-4xl font-serif">
              "
            </span>

            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed relative z-10 mb-3">
              {company.company_overview.description}
            </p>
            <p className="text-gray-600 dark:text-gray-400 relative z-10">
              <b>Headquarters:</b> {company.company_overview.headquarters}
            </p>
          </motion.div>

          {/* CTA */}
          <a
            href={company.company_overview.website}
            target="_blank"
            rel="noreferrer"
            className="inline-block px-8 py-3 bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white font-semibold rounded-lg shadow transition"
          >
            Visit Website
          </a>
        </div>
      </motion.div>
    </div>
  );
}
