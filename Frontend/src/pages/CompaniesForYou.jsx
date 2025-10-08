import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link , useNavigate} from "react-router-dom";
import axios from "axios";

export default function CompaniesForYou() {
  const [student, setStudent] = useState(null);
  const navigate = useNavigate();
  const [companies, setCompanies] = useState([]);
  const [suggested, setSuggested] = useState([]);
  const [appliedCompanies, setAppliedCompanies] = useState(
    JSON.parse(localStorage.getItem("appliedCompanies")) || []
  );

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("student"));
    setStudent(stored);

    // Fetch companies from backend
    axios.get("http://localhost:8080/api/companies")
      .then(res => {
        setCompanies(res.data);

        if (stored) {
          const filtered = res.data.filter((c) => {
            const eligibleBranch = c.eligibility.branches.includes(stored.branch);
            const cgpaOk = parseFloat(stored.cgpa) >= c.eligibility.min_gpa;
            const backlogOk = parseInt(stored.backlogs) <= c.eligibility.max_backlogs;
            const internOk = parseInt(stored.no_of_internships) >= c.eligibility.min_internships;
            const sectorOk = stored.sector
              ? c.job_role.toLowerCase().includes(stored.sector.toLowerCase())
              : true;

            // Deadline check
            const today = new Date();
            const deadline = new Date(c.deadline);
            const deadlineOk = deadline >= today;

            return eligibleBranch && cgpaOk && backlogOk && internOk && sectorOk && deadlineOk;
          });

          setSuggested(filtered);
        }
        
      })
      .catch(err => console.error("Error fetching companies:", err));
  }, []);

  if (!student) {
    return (
      <div className="p-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-bold text-red-600"
        >
          ⚠️ Please complete registration first!
        </motion.h2>
        <Link
          to="/registration"
          className="mt-6 inline-block bg-purple-500 text-white px-6 py-3 rounded-xl shadow hover:bg-purple-600 transition"
        >
          Go to Registration
        </Link>
      </div>
    );
  }

  const handleApply = (company) => {
    const applied = JSON.parse(localStorage.getItem("appliedCompanies")) || [];
    if (!applied.some((c) => c.application_code === company.application_code)) {
      applied.push({ ...company, appliedDate: new Date() });
      localStorage.setItem("appliedCompanies", JSON.stringify(applied));
      alert("Application submitted!");
    } else {
      alert("⚠️ Already applied to this company.");
    }
  };

  return (
    <div className="p-6 md:p-12 bg-gradient-to-br from-purple-100 via-pink-50 to-yellow-50 min-h-screen">
      {/* Student Info Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white shadow-xl rounded-2xl p-6 mb-10 border-l-4 border-purple-400"
      >
        <h1 className="text-3xl font-extrabold text-purple-800 mb-2">
          Companies Suggested For You
        </h1>
        <p className="text-gray-600">
          Based on your profile: <br />
          <span className="font-semibold text-purple-600">
            {student.branch}
          </span>{" "}
          | CGPA:{" "}
          <span className="font-semibold text-purple-600">{student.cgpa}</span>{" "}
          | Backlogs:{" "}
          <span className="font-semibold text-purple-600">
            {student.backlogs}
          </span>{" "}
          | Internships:{" "}
          <span className="font-semibold text-purple-600">
            {student.no_of_internships}
          </span>
        </p>
      </motion.div>

      {suggested.length === 0 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-gray-500 bg-white p-10 rounded-2xl shadow-md"
        >
          <p className="text-xl">
            😕 No companies match your profile right now.
          </p>
          <p className="mt-2 text-sm">Please check back later.</p>
        </motion.div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {suggested.map((company, idx) => {
            const logoUrl = company.company_overview?.website
              ? `https://logo.clearbit.com/${company.company_overview.website.replace(
                  /^https?:\/\//,
                  ""
                )}`
              : null;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border hover:shadow-2xl transition"
              >
                {/* Header with Logo */}
                <div className="flex items-center gap-4 p-5 border-b">
                  {logoUrl ? (
                    <img
                      src={logoUrl}
                      alt={company.company_name}
                      className="w-12 h-12 object-contain rounded-full border"
                      onError={(e) => (e.target.style.display = "none")}
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-700 font-bold">
                      {company.company_name[0]}
                    </div>
                  )}
                  <h2 className="text-lg font-bold text-gray-800">
                    {company.company_name}
                  </h2>
                </div>

                {/* Info */}
                <div className="p-5 space-y-2">
                  <p className="text-gray-600">
                    <span className="font-medium">Role:</span>{" "}
                    {company.job_role}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-medium">Salary:</span>{" "}
                    <span className="text-purple-600 font-semibold">
                      {company.salary.min} - {company.salary.max}{" "}
                      {company.salary.unit}
                    </span>
                  </p>
                  <span className="inline-block bg-yellow-100 text-yellow-700 text-xs font-semibold px-3 py-1 rounded-full">
                    Deadline: {new Date(company.deadline).toLocaleDateString()}
                  </span>
                </div>

                {/* CTA */}
                <div className="p-5 border-t flex items-center justify-between">
                  {/* Know More Link */}
                  <Link
                    to={`/companies/${company.application_code}`}
                    className="text-purple-600 font-medium hover:text-purple-800 flex items-center gap-1"
                  >
                    Know More 
                    <span>↗</span>
                  </Link>

                  {/* Apply Button */}
                  {appliedCompanies.includes(company.application_code) ? (
                    <button
                      onClick={() => navigate("/applied-companies")}
                      className="bg-gray-400 text-white px-4 py-2 rounded-lg cursor-pointer"
                    >
                      Applied
                    </button>
                  ) : (
                    <button
                      onClick={() => navigate(`/apply/${company.application_code}`)}
                      className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition"
                    >
                      Apply Now
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
