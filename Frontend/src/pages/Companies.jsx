import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

export default function CompaniesTimeline() {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/companies")
      .then((res) => {
        setCompanies(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching companies:", err);
        setError("Failed to load companies.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="p-10 text-center text-gray-600 text-xl">Loading companies...</div>
    );
  }

  if (error) {
    return (
      <div className="p-10 text-center text-red-600 font-semibold">{error}</div>
    );
  }

  return (
    <div className="p-6 md:p-12 min-h-screen bg-gradient-to-r from-purple-100 via-pink-50 to-yellow-50">
      <h1 className="text-4xl font-extrabold text-purple-800 mb-12 text-center">
        Companies
      </h1>

      <div className="relative border-l-2 border-purple-300 ml-6">
        {companies.map((company, idx) => {
          const logoUrl = company.company_overview?.website
            ? `https://logo.clearbit.com/${company.company_overview.website.replace(/^https?:\/\//, '')}`
            : null;

          const initials = company.company_name
            .split(' ')
            .map(w => w[0])
            .join('');

          return (
            <motion.div
              key={company.application_code}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="mb-12 relative pl-10 group"
            >
              {/* Node circle */}
              <div className="absolute left-0 top-2 w-6 h-6 bg-purple-600 rounded-full border-2 border-white shadow-md"></div>

              {/* Floating logo */}
              <motion.div
                className="absolute -left-16 top-0 w-16 h-16 rounded-full shadow-xl bg-white flex items-center justify-center overflow-hidden"
                whileHover={{ scale: 1.2 }}
              >
                {logoUrl ? (
                  <img
                    src={logoUrl}
                    alt={company.company_name}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "";
                      e.target.parentNode.textContent = initials;
                    }}
                  />
                ) : (
                  <span className="text-purple-700 font-bold">{initials}</span>
                )}
              </motion.div>

              {/* Info Panel */}
              <motion.div
                className="bg-white bg-opacity-90 rounded-xl shadow-xl p-6 md:p-8 transition-transform duration-300 group-hover:scale-105 relative overflow-hidden"
              >
                {/* Gradient accent bar */}
                <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-purple-400 to-pink-400 rounded-l-xl"></div>

                <h2 className="text-2xl font-bold text-purple-700 mb-2 relative z-10">
                  {company.company_name}
                </h2>
                <p className="text-gray-600 font-medium relative z-10">{company.job_role}</p>
                <p className="text-purple-600 font-semibold mt-1 relative z-10">
                  {company.salary.min} - {company.salary.max} {company.salary.unit}
                </p>
                <p className="text-sm text-gray-400 mt-1 relative z-10">
                  Deadline: {new Date(company.deadline).toLocaleDateString()}
                </p>

                <motion.a
                  whileHover={{ scale: 1.05 }}
                  href={`/companies/${company.application_code}`}
                  className="inline-block mt-3 px-4 py-2 bg-purple-500 text-white rounded-lg shadow hover:bg-purple-600 transition-colors relative z-10"
                >
                  View Details
                </motion.a>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
