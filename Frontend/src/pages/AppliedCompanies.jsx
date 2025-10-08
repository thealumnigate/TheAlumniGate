import { useState, useEffect } from "react";
import axios from "axios";
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

        const res = await axios.get("http://localhost:8080/api/applied-companies", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

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
    return <p className="p-10 text-center text-gray-600">Loading your applications...</p>;
  }

  if (applications.length === 0) {
    return <p className="p-10 text-center text-gray-600">You haven't applied to any companies yet.</p>;
  }

  return (
    <div className="p-6 md:p-12 min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-yellow-50">
      <h1 className="text-2xl font-bold text-purple-700 mb-6 text-center">
        Your Applied Companies
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {applications.map((app) => (
          <div key={app.applicationId} className="p-4 border rounded-lg bg-white shadow">
            <p><b>Company:</b> {app.companyId.company_name}</p>
            <p><b>Job Role:</b> {app.companyId.job_role}</p>
            <p><b>Application ID:</b> <span className="text-purple-600">{app.applicationId}</span></p>
            <p><b>Applied At:</b> {new Date(app.appliedAt).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}