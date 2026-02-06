import { useState, useEffect } from "react";
import apiClient from "../services/apiClient";
import { useNavigate } from "react-router-dom";

export default function AppliedCompanies() {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        // Get JWT token from localStorage
        const token = localStorage.getItem("token");
        if (!token) {
          navigate("/login");
          return;
        }

        const res = await apiClient.get("/applied-companies");

        if (res.data.success) {
          setApplications(res.data.applications);
        }
      } catch (err) {
        console.error("Error fetching applied companies:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchApplications();
  }, [navigate]);

  if (loading) {
    return (
      <p className="p-10 text-center text-gray-800 dark:text-gray-300">
        Loading your applications...
      </p>
    );
  }

  if (applications.length === 0) {
    return (
      <p className="p-10 text-center text-gray-800 dark:text-gray-300">
        You haven't applied to any companies yet.
      </p>
    );
  }

  return (
    <div className="p-6 md:p-12 min-h-screen bg-transparent text-gray-900 dark:text-gray-100 max-w-full mx-auto">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 text-center">
        Your Applied Companies
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {applications.map((app) => (
          <div
            key={app.applicationId}
            className="p-4 border border-gray-300/40 dark:border-gray-700/30 rounded-lg bg-white/80 dark:bg-dark-800/30 shadow-lg dark:shadow-none space-y-2"
          >
            <div>
              <h3 className="font-bold text-gray-900 dark:text-gray-100 text-lg truncate">
                {app.companyId.company_name}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm truncate">
                {app.companyId.job_role}
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-xs text-gray-600 dark:text-gray-400">
                <span className="font-medium">Application ID:</span>
                <span className="text-primary-600 dark:text-primary-400 ml-1 font-mono">
                  {app.applicationId}
                </span>
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                <span className="font-medium">Applied:</span>{" "}
                {new Date(app.appliedAt).toLocaleDateString()}
              </p>
              <p><b>Status:</b><i>{app.status}</i></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
