import { useState, useEffect , useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";

export default function Registration() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
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
  const [uploading, setUploading] = useState(false);
  const [submitting, setSubmitting] = useState(false); // New state for animation
  

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/companies")
      .then((res) => setCompanies(res.data))
      .catch((err) => console.error("Error fetching companies:", err));
  }, []);

  const jobRoles = [...new Set(companies.map((c) => c.job_role))];

  // ✅ Upload resume to Cloudinary
  const handleResumeUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
  
    if (file.type !== "application/pdf") {
      alert("Only PDF files are allowed.");
      return;
    }
  
    setForm((prev) => ({
      ...prev,
      resume: {
        ...prev.resume,
        file: file, // ✅ this ensures it matches what you're using in handleSubmit
        file_name: file.name,
      },
    }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    // Validations
  if (form.internship === "" || parseInt(form.internship) < 0) {
    alert("Number of internships must be 0 or more.");
    setSubmitting(false);
    return;
  }

  if (!form.sector_of_interest || form.sector_of_interest.length === 0) {
    alert("Please select at least one sector of interest.");
    setSubmitting(false);
    return;
  }

  if (!form.resume || !form.resume.file) {
    alert("Please upload your resume in PDF format.");
    setSubmitting(false);
    return;
  }
  
    const formData = new FormData();
    formData.append("internship", form.internship);
    formData.append("sector_of_interest", JSON.stringify(form.sector_of_interest));
    if (form.resume.file) {
      formData.append("resume", form.resume.file);
    }
  
    try {
      const response = await axios.post("http://localhost:8080/api/register", formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "multipart/form-data",
        },
      });
  
      if (response.data.success) {
        const { token, student: updatedStudent } = response.data;
  
        // Update AuthContext and localStorage via login method
        login(token, updatedStudent);
  
        alert("Registration Successful!");
        navigate("/"); // redirect to home
      }

    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Error submitting registration.");
    }
    finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-yellow-50">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-lvh">
        <h2 className="text-2xl font-extrabold text-center text-purple-800">
          Student Registration
        </h2>
        <p className="text-gray-500 text-center mb-6 text-sm">
          Fill in your details to get personalized company suggestions
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {/* Read-only fields */}
          {["year", "semester", "branch", "cgpa", "backlogs"].map((field) => (
            <div key={field}>
              <label className="block font-medium text-gray-700 capitalize">
                {field}
              </label>
              <input
                name={field}
                value={form[field]}
                readOnly
                className="border border-gray-300 rounded-lg p-3 w-full bg-gray-100 cursor-not-allowed text-gray-600"
              />
            </div>
          ))}

          {/* Editable fields */}
          <div>
            <label className="block font-medium text-gray-700">
              Number of Internships
            </label>
            <input
              name="internship"
              placeholder="e.g. 2"
              value={form.internship}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, internship: e.target.value }))
              }
              className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-purple-400 focus:border-purple-400 outline-none transition"
            />
          </div>

          {/* SOI */}
          <div>
            <label className="block font-medium text-gray-700">
              Select Your Sectors of Interest
            </label>
            <div className="flex flex-wrap gap-3 mt-2">
              {jobRoles.map((role, idx) => (
                <label
                  key={idx}
                  className="flex items-center space-x-2 border px-3 py-1 rounded-lg cursor-pointer hover:bg-purple-50"
                >
                  <input
                    type="checkbox"
                    value={role}
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
              className="w-full p-2 border border-gray-300 rounded-lg file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100"
            />
            {uploading && <p className="text-blue-600 mt-2">Uploading...</p>}
            {form.resume.url && (
              <p className="text-green-600 mt-2">
                Resume Uploaded: {form.resume.file_name}
              </p>
            )}
          </div>
          
          <button
            type="submit"
            disabled={uploading || submitting}
            className={`mt-2 bg-purple-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition transform hover:scale-[1.02] flex items-center justify-center ${
              uploading || submitting ? "opacity-50 cursor-not-allowed" : "hover:bg-purple-700"
            }`}
          >
            {submitting ? (
              <svg
                className="animate-spin h-5 w-5 mr-2 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8H4z"
                ></path>
              </svg>
            ) : null}
            {submitting ? "Submitting..." : "Submit"}
          </button>
          
        </form>
      </div>
    </div>
  );
}
