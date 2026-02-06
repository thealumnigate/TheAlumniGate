import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { motion, AnimatePresence } from "framer-motion";
import { useToast } from "../hooks/useToast";
import ToastContainer from "../components/ToastContainer";
import { Loader2, Upload, CheckCircle } from "lucide-react";
import apiClient from "../services/apiClient";

export default function Registration() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const toast = useToast();
  const storedStudent = JSON.parse(localStorage.getItem("student")) || {};

  const [form, setForm] = useState({
    year: storedStudent.year || "",
    semester: storedStudent.semester || "",
    branch: storedStudent.branch || "",
    cgpa: storedStudent.cgpa || "",
    backlogs: storedStudent.backlogs ?? "",
    internship: "",
    sector_of_interest: [],
    resume: { url: "", file_name: "" },
  });

  const [companies, setCompanies] = useState([]);
  const [errors, setErrors] = useState({});
  const [uploading, setUploading] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    apiClient
      .get("/companies")
      .then((res) => setCompanies(res.data))
      .catch((err) => console.error("Error fetching companies:", err));
  }, []);

  const jobRoles = [...new Set(companies.map((c) => c.job_role))];

  // ✅ Upload resume to Cloudinary
  const handleResumeUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.type !== "application/pdf") {
      toast.error("Only PDF files are allowed");
      setErrors({ ...errors, resume: "Only PDF files are allowed" });
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      toast.error("File size must be less than 5MB");
      setErrors({ ...errors, resume: "File size must be less than 5MB" });
      return;
    }

    setUploading(true);
    setErrors({ ...errors, resume: "" });

    setTimeout(() => {
      setForm((prev) => ({
        ...prev,
        resume: {
          ...prev.resume,
          file: file,
          file_name: file.name,
        },
      }));
      setUploading(false);
      toast.success("Resume uploaded successfully");
    }, 500);
  };

  const validateForm = () => {
    const newErrors = {};

    if (form.internship === "" || parseInt(form.internship) < 0) {
      newErrors.internship = "Number of internships must be 0 or more";
    }

    if (!form.sector_of_interest || form.sector_of_interest.length === 0) {
      newErrors.sector_of_interest =
        "Please select at least one sector of interest";
    }

    if (!form.resume || !form.resume.file) {
      newErrors.resume = "Please upload your resume in PDF format";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please fix all validation errors");
      return;
    }

    setSubmitting(true);

    const formData = new FormData();
    formData.append("internship", form.internship);
    formData.append(
      "sector_of_interest",
      JSON.stringify(form.sector_of_interest)
    );
    if (form.resume.file) {
      formData.append("resume", form.resume.file);
    }

    try {
      const response = await apiClient.post("/register", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.data.success) {
        const { token, student: updatedStudent } = response.data;

        // Update AuthContext and localStorage via login method
        login(token, updatedStudent);

        toast.success("Registration completed successfully!");

        setTimeout(() => {
          navigate("/companies-for-you");
        }, 100);
      }
    } catch (err) {
      console.error(err);
      const errorMessage =
        err.response?.data?.message ||
        "Error submitting registration. Please try again.";
      toast.error(errorMessage);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-transparent text-gray-900 dark:text-gray-100 p-6 max-w-7xl mx-auto">
      <ToastContainer toasts={toast.toasts} removeToast={toast.removeToast} />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        className="w-full max-w-3xl rounded-2xl p-8 border border-gray-300/40 dark:border-gray-700/30 bg-white/80 dark:bg-dark-800/30 backdrop-blur-sm shadow-lg dark:shadow-none"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-white dark:bg-white rounded-full flex items-center justify-center p-3 shadow-sm">
              <img
                src="/ag logo bw.png"
                alt="TheAlumniGate Logo"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <h2 className="text-3xl font-extrabold text-center text-gray-900 dark:text-gray-100 mb-2">
            Student Registration
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-center mb-8 text-sm">
            Fill in your details to get personalized company suggestions
          </p>
        </motion.div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {/* Read-only fields */}
          {["year", "semester", "branch", "cgpa", "backlogs"].map((field) => (
            <div key={field}>
              <label className="block font-medium text-gray-800 dark:text-gray-200 capitalize">
                {field}
              </label>
              <input
                name={field}
                value={form[field]}
                readOnly
                className="border border-gray-300/40 dark:border-gray-700/30 rounded-lg p-3 w-full bg-gray-100/50 dark:bg-white/5 cursor-not-allowed text-gray-700 dark:text-gray-300"
              />
            </div>
          ))}

          {/* Editable fields */}
          <div>
            <label className="block font-medium text-gray-800 dark:text-gray-200 mb-2">
              Number of Internships
            </label>
            <input
              type="number"
              name="internship"
              placeholder="e.g. 2"
              value={form.internship}
              onWheel={(e) => e.target.blur()}
              onChange={(e) => {
                setForm((prev) => ({ ...prev, internship: e.target.value }));
                if (errors.internship) {
                  setErrors({ ...errors, internship: "" });
                }
              }}
              min="0"
              disabled={submitting}
              className={`border ${errors.internship
                  ? "border-red-500"
                  : "border-gray-300/40 dark:border-gray-700/30"
                } rounded-lg p-3 w-full bg-white/80 dark:bg-white/5 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition disabled:opacity-50 disabled:cursor-not-allowed`}
            />
            <AnimatePresence>
              {errors.internship && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-red-400 text-xs mt-1 ml-1"
                >
                  {errors.internship}
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          {/* SOI */}
          <div>
            <label className="block font-medium text-gray-800 dark:text-gray-200 mb-2">
              Select Your Sectors of Interest
            </label>
            <div className="flex flex-wrap gap-3 mt-2">
              {jobRoles.map((role, idx) => (
                <motion.label
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center space-x-2 border px-3 py-2 rounded-lg cursor-pointer transition ${form.sector_of_interest.includes(role)
                      ? "border-primary-500 bg-primary-500/20 text-primary-700 dark:text-primary-300"
                      : "border-gray-300/40 dark:border-gray-700/30 hover:bg-gray-100/50 dark:hover:bg-white/10 text-gray-700 dark:text-gray-300"
                    }`}
                >
                  <input
                    type="checkbox"
                    value={role}
                    disabled={submitting}
                    checked={form.sector_of_interest.includes(role)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setForm((prev) => ({
                          ...prev,
                          sector_of_interest: [
                            ...prev.sector_of_interest,
                            role,
                          ],
                        }));
                      } else {
                        setForm((prev) => ({
                          ...prev,
                          sector_of_interest: prev.sector_of_interest.filter(
                            (s) => s !== role
                          ),
                        }));
                      }
                      if (errors.sector_of_interest) {
                        setErrors({ ...errors, sector_of_interest: "" });
                      }
                    }}
                    className="cursor-pointer"
                  />
                  <span className="text-sm">{role}</span>
                </motion.label>
              ))}
            </div>
            <AnimatePresence>
              {errors.sector_of_interest && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-red-400 text-xs mt-2 ml-1"
                >
                  {errors.sector_of_interest}
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          {/* Upload Resume */}
          <div>
            <label className="block font-medium text-gray-800 dark:text-gray-200 mb-2">
              Upload Resume (PDF only, max 5MB)
            </label>
            <div
              className={`relative border-2 border-dashed ${errors.resume
                  ? "border-red-500"
                  : "border-gray-300/40 dark:border-gray-700/30"
                } rounded-lg p-6 bg-gray-100/50 dark:bg-white/5 hover:bg-gray-200/50 dark:hover:bg-white/10 transition`}
            >
              <input
                type="file"
                accept="application/pdf"
                onChange={handleResumeUpload}
                disabled={uploading || submitting}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer disabled:cursor-not-allowed"
              />
              <div className="text-center">
                {uploading ? (
                  <Loader2 className="w-10 h-10 text-primary-500 dark:text-primary-400 animate-spin mx-auto mb-2" />
                ) : form.resume.file_name ? (
                  <CheckCircle className="w-10 h-10 text-green-500 dark:text-green-400 mx-auto mb-2" />
                ) : (
                  <Upload className="w-10 h-10 text-gray-500 dark:text-gray-400 mx-auto mb-2" />
                )}
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  {uploading
                    ? "Uploading..."
                    : form.resume.file_name
                      ? form.resume.file_name
                      : "Click or drag to upload"}
                </p>
              </div>
            </div>
            <AnimatePresence>
              {errors.resume && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-red-400 text-xs mt-1 ml-1"
                >
                  {errors.resume}
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          <motion.button
            whileHover={{ scale: uploading || submitting ? 1 : 1.02 }}
            whileTap={{ scale: uploading || submitting ? 1 : 0.98 }}
            type="submit"
            disabled={uploading || submitting}
            className={`mt-2 bg-gradient-to-r from-primary-600 to-primary-500 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-all flex items-center justify-center gap-2 ${uploading || submitting
                ? "opacity-70 cursor-not-allowed"
                : "hover:shadow-primary-500/50"
              }`}
          >
            {submitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Submitting...</span>
              </>
            ) : (
              <span>Complete Registration</span>
            )}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}
