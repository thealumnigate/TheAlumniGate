// components/EvaluateResults.jsx
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import apiClient from "../services/apiClient";

export default function EvaluateResults() {
  const [companies, setCompanies] = useState([]);
  const [applications, setApplications] = useState([]);
  const [selectedCompanyId, setSelectedCompanyId] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);

  // Fetch all companies on component mount
  useEffect(() => {
    fetchCompanies();
  }, []);

  const fetchCompanies = async () => {
    try {
      const res = await apiClient.get("/admin/companies");
      if (res.data.success) {
        // Sort companies alphabetically by company name (case-insensitive)
        const sortedCompanies = res.data.companies.sort((a, b) =>
          a.company_name.toLowerCase().localeCompare(b.company_name.toLowerCase())
        );
        //console.log("Sorted companies:", sortedCompanies.map(c => c.company_name));
        setCompanies(sortedCompanies);
      }
    } catch (err) {
      console.error("Error fetching companies:", err);
    }
  };

  // Fetch applications when a company is selected
  useEffect(() => {
    if (selectedCompanyId) {
      fetchApplications(selectedCompanyId);
    } else {
      setApplications([]);
    }
  }, [selectedCompanyId]);

  const fetchApplications = async (companyId) => {
    setLoading(true);
    try {
      const res = await apiClient.get(`/admin/applications/${companyId}`);
      if (res.data.success) {
        setApplications(res.data.applications);
      }
    } catch (err) {
      console.error("Error fetching applications:", err);
      alert("Failed to fetch applications");
    } finally {
      setLoading(false);
    }
  };

  // Handle status change
  const handleStatusChange = async (applicationId, newStatus) => {
    try {
      const res = await apiClient.put(
        `/admin/application/${applicationId}/status`,
        { status: newStatus }
      );

      if (res.data.success) {
        // Update the local state immediately after successful update
        setApplications((prevApplications) =>
          prevApplications.map((app) =>
            app._id === applicationId ? { ...app, status: newStatus } : app
          )
        );
        alert(`✅ Status updated to: ${newStatus}`);
      }
    } catch (err) {
      console.error("Error updating status:", err);
      alert(`Failed to update status: ${err.response?.data?.message || err.message}`);
    }
  };

  // Filter applications based on search query
  const filteredApplications = applications.filter((app) => {
    if (!searchQuery.trim()) return true;
    const query = searchQuery.toLowerCase();
    return (
      app.studentId?.name?.toLowerCase().includes(query) ||
      app.studentId?.rollno?.toLowerCase().includes(query)
    );
  });

  // Get selected company details
  const selectedCompany = companies.find((c) => c._id === selectedCompanyId);

  const statusOptions = ["Under Review", "Shortlisted", "Rejected", "Selected"];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-transparent"
    >
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100 text-center">
        Evaluate Applicants
      </h2>

      {/* Company Selection Dropdown */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Select Company
        </label>
        <select
          className="border border-gray-300/40 dark:border-gray-700/30 rounded-lg p-3 w-full focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 backdrop-blur-sm transition-all"
          onChange={(e) => setSelectedCompanyId(e.target.value)}
          value={selectedCompanyId}
        >
          <option value="" className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">-- Choose a Company --</option>
          {companies.map((c) => (
            <option key={c._id} value={c._id} className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">
              {c.company_name} - {c.job_role}
            </option>
          ))}
        </select>
      </div>

      {/* Search Bar */}
      {selectedCompanyId && (
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search by student name or roll number..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="border border-gray-300/40 dark:border-gray-700/30 rounded-lg p-3 pl-10 w-full focus:ring-2 focus:ring-blue-500 bg-white/80 dark:bg-white/5 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
            />
          </div>
        </div>
      )}

      {/* Applications List */}
      {selectedCompanyId && (
        <div>
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-lg text-gray-700 dark:text-gray-300">
              Applicants for{" "}
              <span className="text-blue-600 dark:text-blue-400">
                {selectedCompany?.company_name}
              </span>
            </h3>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Total: {filteredApplications.length}
            </span>
          </div>

          {loading ? (
            <div className="text-center py-8">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
              <p className="mt-2 text-gray-500 dark:text-gray-400">Loading applications...</p>
            </div>
          ) : filteredApplications.length > 0 ? (
            <div className="space-y-4">
              {filteredApplications.map((app) => (
                <div
                  key={app._id}
                  className="border border-gray-300/40 dark:border-gray-700/30 rounded-lg p-4 hover:shadow-md transition bg-white/80 dark:bg-white/5 backdrop-blur-sm"
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200">
                        {app.studentId?.name || "N/A"}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Roll No: {app.studentId?.rollno || "N/A"}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                        Applied on:{" "}
                        {new Date(app.appliedAt).toLocaleDateString("en-IN", {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                        })}
                      </p>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${app.status === "Selected"
                          ? "bg-green-100 text-green-700"
                          : app.status === "Shortlisted"
                            ? "bg-blue-100 text-blue-700"
                            : app.status === "Rejected"
                              ? "bg-red-100 text-red-700"
                              : "bg-yellow-100 text-yellow-700"
                        }`}
                    >
                      {app.status}
                    </span>
                  </div>

                  {/* Status Selection - Radio Buttons */}
                  <div className="mt-3 pt-3 border-t border-gray-300/40 dark:border-gray-700/30">
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Update Status:
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {statusOptions.map((status) => (
                        <label
                          key={status}
                          className="flex items-center space-x-2 cursor-pointer"
                        >
                          <input
                            type="radio"
                            name={`status-${app._id}`}
                            value={status}
                            checked={app.status === status}
                            onChange={(e) =>
                              handleStatusChange(app._id, e.target.value)
                            }
                            className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                          />
                          <span className="text-sm text-gray-700 dark:text-gray-300">
                            {status}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 bg-gray-100/50 dark:bg-white/5 rounded-lg border border-gray-300/40 dark:border-gray-700/30">
              <p className="text-gray-500 dark:text-gray-400">
                {searchQuery
                  ? "No applicants found matching your search"
                  : "No applicants yet for this company"}
              </p>
            </div>
          )}
        </div>
      )}

      {!selectedCompanyId && (
        <div className="text-center py-12 bg-gray-100/50 dark:bg-white/5 rounded-lg border border-gray-300/40 dark:border-gray-700/30">
          <p className="text-gray-500 dark:text-gray-400">
            Please select a company to view applicants
          </p>
        </div>
      )}
    </motion.div>
  );
}
