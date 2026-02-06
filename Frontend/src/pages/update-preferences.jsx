import { useState, useEffect, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { motion, AnimatePresence } from "framer-motion";
import { useToast } from "../hooks/useToast";
import ToastContainer from "../components/ToastContainer";
import { Loader2, Upload, CheckCircle } from "lucide-react";
import apiClient from "../services/apiClient";

export default function UpdatePreferences() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const location = useLocation();
  const toast = useToast();
  const storedStudent = JSON.parse(localStorage.getItem("student")) || {};

  const [form, setForm] = useState({
    internship: "",
    sector_of_interest: [],
    resume: null,
  });

  const [initialForm, setInitialForm] = useState({
    internship: "",
    sector_of_interest: [],
    resume: null,
  });

  const [errors, setErrors] = useState({});
  const [companies, setCompanies] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const storedResumeName = storedStudent.resume?.file_name || null;

  useEffect(() => {
    // Fetch all companies
    apiClient
      .get("/companies")
      .then((res) => setCompanies(res.data))
      .catch((err) => console.error("Error fetching companies:", err));

    // Prefill the form with current user data
    const stored = JSON.parse(localStorage.getItem("student")) || {};
    const prevInternship = stored.no_of_internships || 0;

    const initData = {
      internship: prevInternship.toString(),
      sector_of_interest: Array.isArray(stored.sector_of_interest)
        ? stored.sector_of_interest
        : [],
      resume: stored.resume || null,
    };

    setForm(initData);
    setInitialForm(initData); // save original values for comparison
  }, []);

  const uniqueSectors = [...new Set(companies.map((c) => c.job_role))];

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
          file: file,
          file_name: file.name,
        },
      }));
      setUploading(false);
      toast.success("Resume uploaded successfully");
    }, 500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setSubmitting(true);

    const storedStudent = JSON.parse(localStorage.getItem("student")) || {};

    // ✅ Detect field changes compared to initial data
    const isInternshipChanged = form.internship !== initialForm.internship;
    const isSectorChanged =
      JSON.stringify(form.sector_of_interest) !==
      JSON.stringify(initialForm.sector_of_interest);
    const isResumeChanged = !!form.resume?.file;

    if (!isInternshipChanged && !isSectorChanged && !isResumeChanged) {
      toast.warning("Please update at least one field before submitting");
      setSubmitting(false);
      return;
    }

    // ✅ Build formData only for changed fields
    const formData = new FormData();

    if (isInternshipChanged) {
      formData.append("internship", form.internship);
    }

    if (isSectorChanged) {
      formData.append(
        "sector_of_interest",
        JSON.stringify(form.sector_of_interest)
      );
    }

    if (isResumeChanged) {
      formData.append("resume", form.resume.file);
    }

    try {
      const response = await apiClient.put("/update-preferences", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.data.success) {
        const { student: updatedStudent } = response.data;
        login(localStorage.getItem("token"), updatedStudent);
        toast.success("Preferences updated successfully!");

        setTimeout(() => {
          navigate(location.state?.from || "/profile");
        }, 1000);
      }
    } catch (err) {
      console.error(err);
      const errorMessage =
        err.response?.data?.message ||
        "Error updating preferences. Please try again.";
      toast.error(errorMessage);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="p-6 md:p-12 min-h-screen bg-transparent flex justify-center items-center max-w-7xl mx-auto">
      <ToastContainer toasts={toast.toasts} removeToast={toast.removeToast} />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        className="bg-white/80 dark:bg-dark-800/30 border border-gray-300/40 dark:border-gray-700/30 shadow-lg dark:shadow-none rounded-2xl p-8 max-w-3xl w-full backdrop-blur-sm"
      >
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">
          Update Preferences
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Internships */}
          <div>
            <label className="block font-medium text-gray-800 dark:text-gray-200 mb-2">
              Number of Internships
            </label>
            <input
              type="number"
              name="internship"
              value={form.internship}
              onChange={handleChange}
              placeholder="e.g. 2"
              disabled={submitting}
              className="border border-gray-300/40 dark:border-gray-700/30 rounded-lg p-3 w-full bg-white/80 dark:bg-white/5 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition disabled:opacity-50 disabled:cursor-not-allowed"
              min={0}
              onWheel={(e) => e.target.blur()}
            />
            <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
              Previous internships: <b>{initialForm.internship}</b>
            </p>
          </div>

          {/* Sector of Interest */}
          <div>
            <label className="block font-medium text-gray-800 dark:text-gray-200 mb-2">
              Sector of Interest
            </label>
            <div className="flex flex-wrap gap-3 mt-2">
              {uniqueSectors.map((role, idx) => (
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
                    }}
                    className="cursor-pointer"
                  />
                  <span className="text-sm">{role}</span>
                </motion.label>
              ))}
            </div>
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
                ) : form.resume?.file_name ? (
                  <CheckCircle className="w-10 h-10 text-green-500 dark:text-green-400 mx-auto mb-2" />
                ) : (
                  <Upload className="w-10 h-10 text-gray-500 dark:text-gray-400 mx-auto mb-2" />
                )}
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  {uploading
                    ? "Uploading..."
                    : form.resume?.file_name
                      ? form.resume.file_name
                      : "Click or drag to upload"}
                </p>
              </div>
            </div>

            {storedStudent?.resume?.url && (
              <a
                href={storedStudent.resume.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 px-4 py-2 bg-primary-600 dark:bg-primary-500 text-white rounded-lg hover:bg-primary-700 dark:hover:bg-primary-600 transition text-sm shadow-sm"
                download={storedStudent.resume.file_name || "Resume.pdf"}
              >
                Preview Previous Resume
              </a>
            )}

            {!form.resume?.file_name && storedResumeName && (
              <p className="text-gray-600 dark:text-gray-400 text-xs mt-2 italic">
                Last uploaded: {storedResumeName}. Upload a new one to replace
                it.
              </p>
            )}
          </div>

          <motion.button
            whileHover={{ scale: submitting ? 1 : 1.02 }}
            whileTap={{ scale: submitting ? 1 : 0.98 }}
            type="submit"
            disabled={submitting}
            className={`w-full px-6 py-3 rounded-lg text-white font-semibold transition-all flex items-center justify-center gap-2 bg-gradient-to-r from-primary-600 to-primary-500 shadow-lg ${submitting
                ? "opacity-70 cursor-not-allowed"
                : "hover:shadow-primary-500/50"
              }`}
          >
            {submitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Updating...</span>
              </>
            ) : (
              <span>Update Preferences</span>
            )}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}
