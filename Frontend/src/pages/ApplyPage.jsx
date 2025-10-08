import { useParams, Link, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";

export default function ApplyPage() {
  const { code } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [confirmed, setConfirmed] = useState(false);
  const [company, setCompany] = useState(null);
  const [student, setStudent] = useState(null);
  const [AppliedCompanies , setAppliedCompanies] = useState([]);

  useEffect(() => {
    // Fetch selected company
    axios.get("http://localhost:8080/api/companies")
      .then((res) => {
        const found = res.data.find((c) => c.application_code === code);
        setCompany(found);
      })
      .catch((err) => console.error("Error fetching companies:", err));

    // Fetch student data from localStorage
    const storedStudent = JSON.parse(localStorage.getItem("student"));
    setStudent(storedStudent);
  }, [code]);

  const handleConfirm = async () => {
    try {
      const token = localStorage.getItem("token"); // or sessionStorage if you used that
  
      const res = await axios.post(
        "http://localhost:8080/api/apply",
        {
          companyId: company._id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
  
      if (res.data.success) {
        const applied = JSON.parse(localStorage.getItem("appliedCompanies")) || [];
        if (!applied.includes(code)) {
          applied.push(code);
          localStorage.setItem("appliedCompanies", JSON.stringify(applied));
        }
        setAppliedCompanies(applied);

        navigate("/confirmation", {
          state: {
            company,
            applicationId: res.data.applicationId,
          },
        });
      }
    } catch (error) {
      console.error("Error applying:", error);
      alert("Something went wrong while submitting your application!");
    }
  };

  if (!company) {
    return (
      <div className="p-10 text-center text-red-600 font-bold text-xl">
        Company not found!
      </div>
    );
  }

  if (!student) {
    return (
      <div className="p-10 text-center text-gray-600 font-medium text-lg">
        Loading student data...
      </div>
    );
  }

  return (
    <div className="p-6 md:p-12 min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 via-pink-50 to-yellow-50">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white shadow-2xl rounded-2xl max-w-2xl w-full p-8"
      >
        {!confirmed ? (
          <>
            <h1 className="text-2xl font-bold text-purple-700 mb-4 text-center">
              Confirm Your Application
            </h1>

            {/* Student Info */}
            <div className="mb-6 border border-gray-200 rounded-xl p-4 bg-purple-50">
              <h2 className="text-lg font-semibold text-purple-700 mb-2">
                Your Details
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-700 text-sm">
                <p><b>Name:</b> {student.name}</p>
                <p><b>Email:</b> {student.email}</p>
                <p><b>Branch:</b> {student.branch}</p>
                <p><b>Year:</b> {student.year}</p>
                <p><b>CGPA:</b> {student.cgpa}</p>
                <p><b>Backlogs:</b> {student.backlogs}</p>
                <p><b>No. of Internships:</b> {student.no_of_internships || 0}</p>
              </div>

              {student.resume?.url ? (
                <a
                  href={student.resume.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block bg-pink-500 text-white text-sm px-4 py-2 rounded-lg hover:bg-pink-600 transition"
                >
                  Preview Resume
                </a>
              ) : (
                <p className="text-gray-500 text-sm mt-2 italic">
                  No resume uploaded.
                </p>
              )}

              <p className="text-gray-600 text-xs mt-3 italic">
                <b>If any detail is incorrect, click below to update your details.</b>
              </p>

              <button
                onClick={() =>
                  navigate("/update-preferences", { state: { from: location.pathname } })
                }
                className="mt-3 bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition text-sm"
              >
                Update Details
              </button>
            </div>

            {/* Application Confirmation */}
            <div className="text-center">
              <p className="text-gray-600 mb-6">
                Are you sure you want to apply for{" "}
                <span className="font-semibold text-purple-600">{company.job_role}</span>{" "}
                at{" "}
                <span className="font-semibold text-purple-600">{company.company_name}</span>?
              </p>

              <div className="flex justify-center gap-4">
                <button
                  onClick={handleConfirm}
                  className="bg-purple-500 text-white px-6 py-2 rounded-lg hover:bg-purple-600 transition"
                >
                  Yes, Apply
                </button>
                <button
                  onClick={() => navigate(-1)}
                  className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-300 transition"
                >
                  Cancel
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 12 }}
              className="text-green-500 text-6xl mb-4 text-center"
            >
              
            </motion.div>
            <h2 className="text-2xl font-bold text-green-600 mb-2 text-center">
              Application Submitted!
            </h2>
            <p className="text-gray-600 mb-6 text-center">
              Your application for{" "}
              <span className="font-semibold text-purple-600">{company.job_role}</span>{" "}
              at <span className="font-semibold text-purple-600">{company.company_name}</span>{" "}
              has been submitted successfully.
            </p>

            <div className="text-center">
              <Link
                to="/companies-for-you"
                className="bg-purple-500 text-white px-6 py-2 rounded-lg hover:bg-purple-600 transition"
              >
                Back to Companies
              </Link>
            </div>
          </>
        )}
      </motion.div>
    </div>
  );
}