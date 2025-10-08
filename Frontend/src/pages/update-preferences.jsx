import { useState, useEffect, useContext } from "react";
import { useNavigate  , useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { motion } from "framer-motion";
import axios from "axios";

export default function UpdatePreferences() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const location = useLocation();
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

  const [error, setError] = useState("");
  const [companies, setCompanies] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const storedResumeName = storedStudent.resume?.file_name || null;

  useEffect(() => {
    // Fetch all companies
    axios.get("http://localhost:8080/api/companies")
      .then(res => setCompanies(res.data))
      .catch(err => console.error("Error fetching companies:", err));

    // Prefill the form with current user data
    const stored = JSON.parse(localStorage.getItem("student")) || {};
    const prevInternship = stored.no_of_internships || 0;

    const initData = {
      internship: prevInternship.toString(),
      sector_of_interest: Array.isArray(stored.sector_of_interest) ? stored.sector_of_interest : [],
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
      alert("Only PDF files are allowed.");
      return;
    }

    setUploading(true); // show uploading
    setTimeout(() => {
      setForm((prev) => ({
        ...prev,
        resume: {
          file: file,
          file_name: file.name,
        },
      }));
      setUploading(false); // hide uploading after "upload"
    }, 500); // simulate a short delay

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
    setError("");
    setSubmitting(true); // disable button while submitting

    const storedStudent = JSON.parse(localStorage.getItem("student")) || {};

    // ✅ Detect field changes compared to initial data
    const isInternshipChanged = form.internship !== initialForm.internship;
    const isSectorChanged =
      JSON.stringify(form.sector_of_interest) !== JSON.stringify(initialForm.sector_of_interest);
    const isResumeChanged = !!form.resume?.file;

    if (!isInternshipChanged && !isSectorChanged && !isResumeChanged) {
      setError("Please update at least one field before submitting.");
      return;
    }

    // ✅ Build formData only for changed fields
    const formData = new FormData();

    if (isInternshipChanged) {
      formData.append("internship", form.internship);
    }

    if (isSectorChanged) {
      formData.append("sector_of_interest", JSON.stringify(form.sector_of_interest));
    }

    if (isResumeChanged) {
      formData.append("resume", form.resume.file);
    }

    try {
      const response = await axios.put(
        "http://localhost:8080/api/update-preferences",
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.data.success) {
        const { student: updatedStudent } = response.data;
        login(localStorage.getItem("token"), updatedStudent);
        alert("Preferences updated successfully!");
        navigate(location.state?.from || "/profile");
      }
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Error updating preferences.");
    } finally {
      setSubmitting(false); // enable button again
    }
  };

  return (
    <div className="p-6 md:p-12 min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-yellow-50 flex justify-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white shadow-2xl rounded-2xl p-8 max-w-3xl w-full"
      >
        <h1 className="text-2xl font-bold text-purple-700 mb-6 text-center">
          Update Preferences
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {error && <p className="text-red-600 font-medium">{error}</p>}

          {/* Internships */}
          <div>
            <label className="block font-medium text-gray-700">
              Number of Internships
            </label>
            <input
              type="number"
              name="internship"
              value={form.internship}
              onChange={handleChange}
              placeholder="e.g. 2"
              className="border p-2 rounded w-full"
              min={0}
              onWheel={(e) => e.target.blur()}
            />
            <p className="text-gray-500 text-sm mt-1">
              Previous internships: <b>{initialForm.internship}</b>
            </p>
          </div>

          {/* Sector of Interest */}
          <div>
            <label className="block font-medium text-gray-700">
              Sector of Interest
            </label>
            <div className="flex flex-wrap gap-3 mt-2">
              {uniqueSectors.map((role, idx) => (
                <label
                  key={idx}
                  className={`flex items-center space-x-2 border px-3 py-1 rounded-lg cursor-pointer hover:bg-purple-50 ${
                    form.sector_of_interest.includes(role)
                      ? "bg-purple-100 border-purple-400"
                      : ""
                  }`}
                >
                  <input
                    type="checkbox"
                    value={role}
                    checked={form.sector_of_interest.includes(role)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setForm((prev) => ({
                          ...prev,
                          sector_of_interest: [...prev.sector_of_interest, role],
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
                  />
                  <span>{role}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Upload Resume */}
          <div>
            <label className="block font-medium text-gray-700">
              Upload Resume (PDF only)
            </label>
            <input
              type="file"
              accept="application/pdf"
              onChange={handleResumeUpload}
              className="w-full p-2 border border-gray-300 rounded-lg 
                        file:mr-4 file:py-2 file:px-4 
                        file:rounded-full file:border-0 
                        file:text-sm file:font-semibold 
                        file:bg-purple-50 file:text-purple-700 
                        hover:file:bg-purple-100 cursor-pointer mb-2"
            />

            {uploading && (
              <p className="text-blue-600 mt-2 font-medium">
                Uploading resume...
              </p>
            )}

            {storedStudent?.resume?.url && (
              <a
                href={storedStudent.resume.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition text-sm"
                download={storedStudent.resume.file_name || "Resume.pdf"}
              >
                Preview Your Previous Resume
              </a>
            )}

            {!form.resume?.file_name && storedResumeName && (
              <p className="text-gray-600 text-sm mt-2 italic">
                Last uploaded resume: {storedResumeName}.  
                <br />If you want to keep it, do nothing.  
                To replace, upload a new one.
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={submitting} // ✅ disable while submitting
            className={`w-full px-4 py-2 rounded text-white transition ${
              submitting ? "bg-gray-400 cursor-not-allowed" : "bg-purple-500 hover:bg-purple-600"
            }`}
          >
            {submitting ? "Updating..." : "Update Preferences"}
          </button>

        </form>
      </motion.div>
    </div>
  );
}