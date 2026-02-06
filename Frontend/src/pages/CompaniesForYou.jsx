import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import apiClient from "../services/apiClient";

export default function CompaniesForYou() {
  const [student, setStudent] = useState(null);
  const navigate = useNavigate();
  const [companies, setCompanies] = useState([]);
  const [appliedCompanies, setAppliedCompanies] = useState(
    JSON.parse(localStorage.getItem("appliedCompanies")) || []
  );
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("student"));
    if (!stored) return;
    setStudent(stored);

    // ✅ Fetch companies-for-you from backend API
    apiClient
      .get(`/companies-for-you/${stored._id}`)
      .then((res) => {
        setCompanies(res.data);
      })
      .catch((err) => console.error("Error fetching companies:", err));
  }, []);

  // ✅ Update UI when student returns after applying
  const markAsAppliedUI = (companyCode) => {
    setCompanies((prev) => {
      const updated = prev.map((c) =>
        c.application_code === companyCode ? { ...c, applied: true } : c
      );
      // Move applied ones to top
      const sorted = [
        ...updated.filter((c) => c.applied),
        ...updated.filter((c) => !c.applied),
      ];
      return sorted;
    });
  };

  // ✅ When student clicks apply
  const handleApply = async (company) => {
    if (!student) return;
    navigate(`/apply/${company.application_code}`);
  };

  // Filter companies based on search query
  const filteredCompanies = companies.filter((company) =>
    company.company_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    company.job_role.toLowerCase().includes(searchQuery.toLowerCase()) ||
    company.application_code.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (!student) {
    return (
      <div className="p-10 text-center text-gray-900 dark:text-gray-100">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-bold text-red-600 dark:text-red-400"
        >
          ⚠️ Please complete registration first!
        </motion.h2>
        <Link
          to="/registration"
          className="mt-6 inline-block bg-primary-600 dark:bg-primary-500 text-white px-6 py-3 rounded-xl shadow hover:bg-primary-700 dark:hover:bg-primary-600 transition"
        >
          Go to Registration
        </Link>
      </div>
    );
  }

  return (
    <div className="p-6 md:p-12 bg-transparent text-gray-900 dark:text-gray-100 min-h-screen max-w-full mx-auto">
      {/* Student Info Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/80 dark:bg-dark-800/30 border border-gray-300/40 dark:border-gray-700/30 shadow-lg dark:shadow-none rounded-2xl p-6 mb-10"
      >
        <h1 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 mb-2">
          Companies Suggested For You
        </h1>
        <p className="text-gray-700 dark:text-gray-300">
          Based on your profile: <br />
          <span className="font-semibold text-primary-600 dark:text-primary-400">
            {student.branch}
          </span>{" "}
          | CGPA:{" "}
          <span className="font-semibold text-primary-600 dark:text-primary-400">
            {student.cgpa}
          </span>{" "}
          | Backlogs:{" "}
          <span className="font-semibold text-primary-600 dark:text-primary-400">
            {student.backlogs}
          </span>{" "}
          | Internships:{" "}
          <span className="font-semibold text-primary-600 dark:text-primary-400">
            {student.no_of_internships}
          </span>
        </p>
      </motion.div>

      {/* Search Bar */}
      {companies.length > 0 && (
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
      )}

      {filteredCompanies.length === 0 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-gray-600 dark:text-gray-400 bg-white/80 dark:bg-dark-800/30 border border-gray-300/40 dark:border-gray-700/30 p-10 rounded-2xl shadow-lg dark:shadow-none"
        >
          <p className="text-xl">
            {searchQuery ? `No companies found for "${searchQuery}"` : "😕 No companies match your profile right now."}
          </p>
          <p className="mt-2 text-sm">{searchQuery ? "Try a different search term." : "Please check back later."}</p>
        </motion.div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
          {filteredCompanies.map((company, idx) => {
            const domain = company.company_overview?.website
              ? company.company_overview.website
                .replace(/^https?:\/\//, "")
                .split("/")[0]
              : null;
            const logoUrl = domain
              ? `https://logo.clearbit.com/${domain}`
              : null;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="bg-white/80 dark:bg-dark-800/30 border border-gray-300/40 dark:border-gray-700/30 rounded-2xl shadow-lg dark:shadow-none overflow-hidden hover:shadow-xl dark:hover:shadow-none transition"
              >
                {/* Header with Logo */}
                <div className="flex items-center gap-3 p-4 border-b border-gray-300/40 dark:border-gray-700/30">
                  {logoUrl ? (
                    <div className="w-10 h-10 rounded-full bg-white dark:bg-white flex items-center justify-center p-1.5 shadow-sm flex-shrink-0">
                      <img
                        src={logoUrl}
                        alt={company.company_name}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          // Fallback to Google favicon service
                          if (domain && !e.target.dataset.faviconTried) {
                            e.target.dataset.faviconTried = "1";
                            e.target.src = `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;
                          }
                        }}
                      />
                    </div>
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-gray-100/50 dark:bg-white/10 flex items-center justify-center text-primary-600 dark:text-primary-400 font-bold text-sm flex-shrink-0">
                      {company.company_name[0]}
                    </div>
                  )}
                  <div className="min-w-0 flex-1">
                    <h2 className="text-base font-bold text-gray-900 dark:text-gray-100 truncate">
                      {company.company_name}
                    </h2>
                    <p className="text-xs text-gray-600 dark:text-gray-400 truncate">
                      {company.job_role}
                    </p>
                  </div>
                </div>

                {/* Info */}
                <div className="p-4 space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-600 dark:text-gray-400">
                      Salary
                    </span>
                    <span className="text-primary-600 dark:text-primary-400 font-semibold text-sm">
                      {company.salary.min}-{company.salary.max}{" "}
                      {company.salary.unit}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-600 dark:text-gray-400">
                      Deadline
                    </span>
                    <span className="text-xs text-gray-700 dark:text-gray-300">
                      {new Date(company.deadline).toLocaleDateString()}
                    </span>
                  </div>
                </div>

                {/* CTA */}
                <div className="p-4 border-t border-gray-300/40 dark:border-gray-700/30 flex items-center justify-between gap-2">
                  {/* Know More Link */}
                  <Link
                    to={`/companies/${company.application_code}`}
                    className="text-primary-600 dark:text-primary-400 font-medium hover:text-primary-700 dark:hover:text-primary-300 flex items-center gap-1 text-xs"
                  >
                    Details
                    <span className="text-xs">↗</span>
                  </Link>

                  {/* Apply Button */}
                  {company.applied ? (
                    <button
                      onClick={() => navigate("/applied-companies")}
                      className="bg-gray-200/50 dark:bg-white/20 text-gray-700 dark:text-gray-300 px-3 py-1.5 rounded-lg cursor-pointer text-xs font-medium"
                    >
                      Applied
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        handleApply(company);
                        markAsAppliedUI(company.application_code);
                      }}
                      className="bg-primary-600 dark:bg-primary-500 text-white px-3 py-1.5 rounded-lg hover:bg-primary-700 dark:hover:bg-primary-600 transition shadow-sm text-xs font-medium"
                    >
                      Apply
                    </button>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      )}
    </div>
  );
}
