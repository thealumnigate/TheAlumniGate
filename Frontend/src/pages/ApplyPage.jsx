import { useParams, Link, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useToast } from "../hooks/useToast";
import ToastContainer from "../components/ToastContainer";
import { Loader2, CheckCircle2 } from "lucide-react";
import apiClient from "../services/apiClient";

export default function ApplyPage() {
  const { code } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const toast = useToast();
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [company, setCompany] = useState(null);
  const [student, setStudent] = useState(null);
  const [AppliedCompanies, setAppliedCompanies] = useState([]);

  useEffect(() => {
    // Fetch selected company
    apiClient
      .get("/companies")
      .then((res) => {
        const found = res.data.find((c) => c.application_code === code);
        setCompany(found);
        if (!found) {
          toast.error("Company not found!");
        }
      })
      .catch((err) => {
        console.error("Error fetching companies:", err);
        toast.error("Failed to load company details");
      })
      .finally(() => setLoading(false));

    // Fetch student data from localStorage
    const storedStudent = JSON.parse(localStorage.getItem("student"));
    setStudent(storedStudent);
  }, [code]); // Removed toast from dependencies to prevent infinite loop

  const handleConfirm = async () => {
    setSubmitting(true);

    try {
      const res = await apiClient.post("/apply", {
        companyId: company._id,
      });

      if (res.data.success) {
        const applied =
          JSON.parse(localStorage.getItem("appliedCompanies")) || [];
        if (!applied.includes(code)) {
          applied.push(code);
          localStorage.setItem("appliedCompanies", JSON.stringify(applied));
        }
        setAppliedCompanies(applied);

        toast.success("Application submitted successfully!");

        setTimeout(() => {
          navigate("/confirmation", {
            state: {
              company,
              applicationId: res.data.applicationId,
            },
          });
        }, 500);
      }
    } catch (error) {
      console.error("Error applying:", error);
      const errorMessage =
        error.response?.data?.message ||
        "Failed to submit application. Please try again.";
      toast.error(errorMessage);
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-transparent">
        <Loader2 className="w-12 h-12 text-primary-500 dark:text-primary-400 animate-spin" />
      </div>
    );
  }

  if (!company) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-transparent p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white/80 dark:bg-dark-800/30 border border-red-500/40 dark:border-red-500/30 rounded-2xl p-10 text-center max-w-md shadow-lg dark:shadow-none"
        >
          <h2 className="text-xl font-bold text-red-600 dark:text-red-400 mb-4">
            Company not found!
          </h2>
          <button
            onClick={() => navigate("/companies-for-you")}
            className="bg-primary-600 dark:bg-primary-500 text-white px-6 py-2 rounded-lg hover:bg-primary-700 dark:hover:bg-primary-600 transition shadow-sm"
          >
            Back to Companies
          </button>
        </motion.div>
      </div>
    );
  }

  if (!student) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-transparent">
        <Loader2 className="w-12 h-12 text-primary-500 dark:text-primary-400 animate-spin" />
      </div>
    );
  }

  return (
    <div className="p-6 md:p-12 min-h-screen flex items-center justify-center bg-transparent text-gray-900 dark:text-gray-100 max-w-7xl mx-auto">
      <ToastContainer toasts={toast.toasts} removeToast={toast.removeToast} />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        className="bg-white/80 dark:bg-dark-800/30 border border-gray-300/40 dark:border-gray-700/30 shadow-lg dark:shadow-none rounded-2xl max-w-2xl w-full p-8 backdrop-blur-sm"
      >
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 text-center">
          Confirm Your Application
        </h1>

        {/* Student Info */}
        <div className="mb-6 border border-gray-300/40 dark:border-gray-700/30 rounded-xl p-4 bg-gray-100/50 dark:bg-white/5">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
            Your Details
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-700 dark:text-gray-300 text-sm">
            <p>
              <b>Name:</b> {student.name}
            </p>
            <p>
              <b>Email:</b> {student.email}
            </p>
            <p>
              <b>Branch:</b> {student.branch}
            </p>
            <p>
              <b>Year:</b> {student.year}
            </p>
            <p>
              <b>CGPA:</b> {student.cgpa}
            </p>
            <p>
              <b>Backlogs:</b> {student.backlogs}
            </p>
            <p>
              <b>No. of Internships:</b> {student.no_of_internships || 0}
            </p>
          </div>

          {student.resume?.url ? (
            <a
              href={student.resume.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block bg-primary-600 dark:bg-primary-500 text-white text-sm px-4 py-2 rounded-lg hover:bg-primary-700 dark:hover:bg-primary-600 transition shadow-sm"
            >
              Preview Resume
            </a>
          ) : (
            <p className="text-gray-600 dark:text-gray-400 text-sm mt-2 italic">
              No resume uploaded.
            </p>
          )}

          <p className="text-gray-600 dark:text-gray-400 text-xs mt-3 italic">
            <b>
              If any detail is incorrect, click below to update your details.
            </b>
          </p>

          <button
            onClick={() =>
              navigate("/update-preferences", {
                state: { from: location.pathname },
              })
            }
            className="mt-3 bg-primary-600 dark:bg-primary-500 text-white px-4 py-2 rounded-lg hover:bg-primary-700 dark:hover:bg-primary-600 transition text-sm shadow-sm"
          >
            Update Details
          </button>
        </div>

        {/* Application Confirmation */}
        <div className="text-center">
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Are you sure you want to apply for{" "}
            <span className="font-semibold text-primary-600 dark:text-primary-400">
              {company.job_role}
            </span>{" "}
            at{" "}
            <span className="font-semibold text-primary-600 dark:text-primary-400">
              {company.company_name}
            </span>
            ?
          </p>

          <div className="flex justify-center gap-4">
            <motion.button
              whileHover={{ scale: submitting ? 1 : 1.05 }}
              whileTap={{ scale: submitting ? 1 : 0.95 }}
              onClick={handleConfirm}
              disabled={submitting}
              className={`bg-primary-600 dark:bg-primary-500 text-white px-6 py-3 rounded-lg transition flex items-center gap-2 shadow-sm ${submitting
                  ? "opacity-70 cursor-not-allowed"
                  : "hover:bg-primary-700 dark:hover:bg-primary-600"
                }`}
            >
              {submitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Applying...</span>
                </>
              ) : (
                <>
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Yes, Apply</span>
                </>
              )}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate(-1)}
              disabled={submitting}
              className="bg-gray-200/50 dark:bg-white/10 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-lg hover:bg-gray-300/50 dark:hover:bg-white/20 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Cancel
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
