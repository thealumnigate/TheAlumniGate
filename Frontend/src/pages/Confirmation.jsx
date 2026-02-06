import { useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle2, Copy, ArrowLeft } from "lucide-react";
import { useState } from "react";

export default function Confirmation() {
  const location = useLocation();
  const { company, applicationId } = location.state || {};
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(applicationId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!company || !applicationId) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-transparent p-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white/80 dark:bg-dark-800/30 border border-red-500/40 dark:border-red-500/30 rounded-2xl p-10 text-center max-w-md shadow-lg dark:shadow-none"
        >
          <h2 className="text-xl font-bold text-red-600 dark:text-red-400 mb-2">Invalid Application</h2>
          <p className="text-gray-700 dark:text-gray-400 mb-6">Missing application details!</p>
          <Link
            to="/companies-for-you"
            className="inline-block bg-primary-600 dark:bg-primary-500 text-white px-6 py-2 rounded-lg hover:bg-primary-700 dark:hover:bg-primary-600 transition shadow-sm"
          >
            Back to Companies
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-transparent p-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        className="bg-white/80 dark:bg-dark-800/30 border border-gray-300/40 dark:border-gray-700/30 shadow-lg dark:shadow-none rounded-2xl max-w-lg w-full p-8 text-center backdrop-blur-sm"
      >
        {/* Success Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
          className="flex items-center justify-center mb-6"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-green-500/20 rounded-full blur-xl"></div>
            <CheckCircle2 className="w-20 h-20 text-green-400 relative" />
          </div>
        </motion.div>

        {/* Success Message */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-3"
        >
          Application Submitted!
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-gray-700 dark:text-gray-300 mb-6 text-sm"
        >
          You have successfully applied for{" "}
          <span className="font-semibold text-primary-600 dark:text-primary-400">{company.job_role}</span>{" "}
          at{" "}
          <span className="font-semibold text-primary-600 dark:text-primary-400">{company.company_name}</span>.
        </motion.p>

        {/* Application ID Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-gray-100/50 dark:bg-white/5 border border-primary-500/30 rounded-xl p-5 mb-6"
        >
          <p className="text-sm font-medium text-primary-600 dark:text-primary-400 mb-2">Your Application ID:</p>
          <div className="flex items-center justify-center gap-2 mb-3">
            <p className="text-xl font-mono text-gray-900 dark:text-gray-100 tracking-wider">{applicationId}</p>
            <button
              onClick={handleCopy}
              className="p-2 hover:bg-gray-200/50 dark:hover:bg-white/10 rounded-lg transition-colors"
              title="Copy to clipboard"
            >
              <Copy className={`w-4 h-4 ${copied ? "text-green-500 dark:text-green-400" : "text-gray-500 dark:text-gray-400"}`} />
            </button>
          </div>
          {copied && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xs text-green-500 dark:text-green-400"
            >
              ✓ Copied to clipboard!
            </motion.p>
          )}
          <p className="text-xs text-gray-600 dark:text-gray-400 italic">
            Please save this ID for future reference.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-3 justify-center"
        >
          <Link
            to="/companies-for-you"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary-600 to-primary-500 text-white px-6 py-3 rounded-lg hover:shadow-lg hover:shadow-primary-500/50 transition-all font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Companies
          </Link>
          <Link
            to="/applied-companies"
            className="inline-flex items-center justify-center gap-2 bg-gray-200/50 dark:bg-white/10 border border-gray-300/40 dark:border-gray-700/30 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-lg hover:bg-gray-300/50 dark:hover:bg-white/20 transition-all font-medium"
          >
            View All Applications
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}