import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Loader2, AlertCircle, Search } from "lucide-react";
import apiClient from "../services/apiClient";

export default function CompaniesTimeline() {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    apiClient
      .get("/companies")
      .then((res) => {
        setCompanies(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching companies:", err);
        setError("Failed to load companies. Please try again later.");
        setLoading(false);
      });
  }, []);

  // Filter companies based on search query
  const filteredCompanies = companies.filter((company) =>
    company.company_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    company.job_role.toLowerCase().includes(searchQuery.toLowerCase()) ||
    company.application_code.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-transparent">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-primary-500 dark:text-primary-400 animate-spin mx-auto mb-4" />
          <p className="text-gray-800 dark:text-gray-300 text-lg">
            Loading companies...
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-transparent p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white/80 dark:bg-dark-800/30 border border-red-500/40 dark:border-red-500/30 rounded-2xl p-10 text-center max-w-md shadow-lg dark:shadow-none"
        >
          <AlertCircle className="w-16 h-16 text-red-500 dark:text-red-400 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-red-600 dark:text-red-400 mb-2">
            Error
          </h2>
          <p className="text-gray-700 dark:text-gray-400">{error}</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="p-6 md:p-12 min-h-screen bg-transparent text-gray-900 dark:text-gray-100 max-w-full mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-extrabold text-gray-900 dark:text-gray-100 mb-8 text-center"
      >
        Companies
      </motion.h1>

      {/* Search Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="max-w-2xl mx-auto mb-8"
      >
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search companies by name, role, or application code..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300/40 dark:border-gray-700/30 rounded-lg bg-white/80 dark:bg-white/5 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all backdrop-blur-sm"
          />
        </div>
      </motion.div>

      {/* Grid Layout for better space utilization */}
      {filteredCompanies.length === 0 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            {searchQuery ? `No companies found for "${searchQuery}"` : "No companies available"}
          </p>
        </motion.div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredCompanies.map((company, idx) => {
            const domain = company.company_overview?.website
              ? company.company_overview.website
                .replace(/^https?:\/\//, "")
                .split("/")[0]
              : null;
            const logoUrl = domain ? `https://logo.clearbit.com/${domain}` : null;

            const initials = company.company_name
              .split(" ")
              .map((w) => w[0])
              .join("");

            return (
              <motion.div
                key={company.application_code}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white/80 dark:bg-dark-800/30 border border-gray-300/40 dark:border-gray-700/30 rounded-xl shadow-lg dark:shadow-none overflow-hidden transition-all duration-300 group"
              >
                {/* Header with Logo */}
                <div className="flex items-center gap-4 p-6 border-b border-gray-300/40 dark:border-gray-700/30">
                  <motion.div
                    className="w-12 h-12 rounded-full shadow-lg bg-white dark:bg-white flex items-center justify-center overflow-hidden p-2 border-2 border-primary-300 dark:border-primary-200"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {logoUrl ? (
                      <img
                        src={logoUrl}
                        alt={company.company_name}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          if (domain && !e.target.dataset.faviconTried) {
                            e.target.dataset.faviconTried = "1";
                            e.target.src = `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;
                          }
                        }}
                      />
                    ) : (
                      <img
                        src={
                          domain
                            ? `https://www.google.com/s2/favicons?domain=${domain}&sz=128`
                            : ""
                        }
                        alt={company.company_name}
                        className="w-full h-full object-contain"
                      />
                    )}
                  </motion.div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                      {company.company_name}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {company.job_role}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Salary
                    </span>
                    <span className="text-primary-600 dark:text-primary-400 font-semibold">
                      {company.salary.min} - {company.salary.max}{" "}
                      {company.salary.unit}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Deadline
                    </span>
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      {new Date(company.deadline).toLocaleDateString()}
                    </span>
                  </div>

                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    href={`/companies/${company.application_code}`}
                    className="block w-full mt-4 px-4 py-2 bg-primary-600 dark:bg-primary-500 text-white rounded-lg shadow-sm hover:bg-primary-700 dark:hover:bg-primary-600 transition-colors text-center font-medium"
                  >
                    View Details
                  </motion.a>
                </div>
              </motion.div>
            );
          })}
        </div>
      )}
    </div>
  );
}
