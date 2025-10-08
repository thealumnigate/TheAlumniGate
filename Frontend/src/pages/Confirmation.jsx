import { useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Confirmation() {
  const location = useLocation();
  const { company, applicationId } = location.state || {};

  if (!company || !applicationId) {
    return (
      <div className="p-10 text-center text-red-600 font-bold text-xl">
        Invalid or missing application details!
      </div>
    );
  }

  

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 via-pink-50 to-yellow-50">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white shadow-2xl rounded-2xl max-w-lg w-full p-8 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 12 }}
          className="text-green-500 text-6xl mb-4"
        >  
        </motion.div>

        <h2 className="text-2xl font-bold text-green-600 mb-2">
          Application Submitted!
        </h2>

        <p className="text-gray-600 mb-4">
          You have successfully applied for{" "}
          <span className="font-semibold text-purple-600">{company.job_role}</span>{" "}
          at{" "}
          <span className="font-semibold text-purple-600">{company.company_name}</span>.
        </p>

        <div className="bg-gray-100 border border-purple-300 p-4 rounded-xl mb-6">
          <p className="font-semibold text-purple-700">Your Application ID:</p>
          <p className="text-lg font-mono text-gray-800 mt-1">{applicationId}</p>
          <p className="text-xs text-gray-500 mt-2 italic">
            Please store this ID for future reference.
          </p>
        </div>

        <Link
          to="/companies-for-you"
          className="bg-purple-500 text-white px-6 py-2 rounded-lg hover:bg-purple-600 transition"
        >
          Back to Companies
        </Link>
      </motion.div>
    </div>
  );
}