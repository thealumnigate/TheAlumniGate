import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, DollarSign, Users, Calendar } from "lucide-react";
import axios from "axios";

export default function CompanyDetails() {
  const { code } = useParams();
  const [company, setCompany] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    axios.get("http://localhost:8080/api/companies")
      .then((res) => {
        const found = res.data.find(c => c.application_code === code);
        if (found) {
          setCompany(found);
        } else {
          setError("Company not found!");
        }
      })
      .catch(err => {
        console.error("Error fetching companies:", err);
        setError("Error fetching company details.");
      });
  }, [code]);

  if (error) {
    return (
      <div className="p-6 text-center text-red-600 font-bold text-xl">
        {error}
      </div>
    );
  }

  if (!company) {
    return (
      <div className="p-6 text-center text-gray-600 text-lg">
        Loading company details...
      </div>
    );
  }

  const logoUrl = company.company_overview?.website
    ? `https://logo.clearbit.com/${company.company_overview.website.replace(/^https?:\/\//, "")}`
    : null;

  const initials = company.company_name
    .split(" ")
    .map((w) => w[0])
    .join("");

  const info = [
    {
      label: "Role",
      value: company.job_role,
      icon: <Briefcase className="w-6 h-6 text-purple-600" />,
    },
    {
      label: "Salary",
      value: `${company.salary.min} - ${company.salary.max} ${company.salary.unit}`,
      icon: <DollarSign className="w-6 h-6 text-green-600" />,
    },
    {
      label: "Eligibility",
      value: company.eligibility.branches.join(", "),
      icon: <Users className="w-6 h-6 text-blue-600" />,
    },
    {
      label: "Deadline",
      value: new Date(company.deadline).toDateString(),
      icon: <Calendar className="w-6 h-6 text-pink-600" />,
    },
  ];

  return (
    <div className="p-6 md:p-12 min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-yellow-50 flex justify-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden relative"
      >
        {/* Gradient accent bar */}
        <div className="absolute left-0 top-0 h-full w-2 bg-gradient-to-b from-purple-400 to-pink-400 rounded-l-2xl"></div>

        {/* Header with logo */}
        <div className="flex items-center p-6 md:p-10 gap-6 relative z-10 border-b border-gray-100">
          <div className="w-24 h-24 rounded-full shadow-xl bg-white flex items-center justify-center overflow-hidden">
            {logoUrl ? (
              <img
                src={logoUrl}
                alt={company.company_name}
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "";
                  e.target.parentNode.textContent = initials;
                }}
              />
            ) : (
              <span className="text-purple-700 font-bold text-2xl">
                {initials}
              </span>
            )}
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-purple-700">
            {company.company_name}
          </h1>
        </div>

        {/* Info Section */}
        <div className="p-6 md:p-10 relative z-10">
          {/* Info boxes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {info.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 shadow-sm hover:shadow-md border border-gray-100"
              >
                {item.icon}
                <div>
                  <p className="text-sm text-gray-500 font-medium">
                    {item.label}
                  </p>
                  <p className="text-lg font-semibold text-gray-800">
                    {item.value}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-100 rounded-xl p-6 md:p-8 shadow-sm"
          >
            <span className="absolute top-4 left-4 text-purple-300 text-4xl font-serif">
              “
            </span>
            <span className="absolute bottom-4 right-4 text-purple-300 text-4xl font-serif">
              ”
            </span>

            <p className="text-gray-700 text-lg leading-relaxed relative z-10">
              {company.company_overview.description}
            </p>
          </motion.div>

          {/* CTA */}
          <a
            href={company.company_overview.website}
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-2 px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg shadow hover:opacity-90 transition"
          >
            Visit Website
          </a>
        </div>
      </motion.div>
    </div>
  );
}
