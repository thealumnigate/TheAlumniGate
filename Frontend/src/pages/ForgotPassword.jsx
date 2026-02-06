import { useState } from "react";
import apiClient from "../services/apiClient";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Loader2, Mail, ArrowLeft } from "lucide-react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Clear previous error
    setError("");

    // Basic email validation
    if (!email.trim()) {
      setError("Email is required");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    setIsLoading(true);

    try {
      const res = await apiClient.post("/auth/forgot-password", { email });

      setIsLoading(false);

      // ✅ SweetAlert success modal
      Swal.fire({
        title: "Reset Link Sent!",
        text: "Check your email to reset your password.",
        icon: "success",
        confirmButtonText: "OK",
        confirmButtonColor: "#0ea5e9",
      }).then(() => {
        navigate("/login");
      });
    } catch (err) {
      setIsLoading(false);
      setError(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-transparent p-6 text-gray-900 dark:text-gray-200 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        className="bg-white/80 dark:bg-dark-800/30 border border-gray-300/40 dark:border-gray-700/30 shadow-lg dark:shadow-none rounded-2xl w-full max-w-md p-8 backdrop-blur-sm"
      >
        {/* Header */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-6 text-center"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 mb-3 p-2">
            <img
              src="/ag logo bw.png"
              alt="TheAlumniGate Logo"
              className="w-full h-full object-contain dark:brightness-100 dark:invert-0"
            />
          </div>
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 mb-2">
            Reset Password
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm">

          </p>
        </motion.div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 dark:text-gray-400" />
              <input
                type="email"
                placeholder="Enter your registered email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError(""); // Clear error on input
                }}
                disabled={isLoading}
                className={`w-full pl-11 pr-4 py-3 border ${error
                    ? "border-red-500"
                    : "border-gray-300/40 dark:border-gray-700/30"
                  } bg-white/80 dark:bg-gray-800/80 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none transition disabled:opacity-50 disabled:cursor-not-allowed`}
              />
            </div>
            <AnimatePresence>
              {error && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-red-400 text-xs mt-1 ml-1"
                >
                  {error}
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: isLoading ? 1 : 1.02 }}
            whileTap={{ scale: isLoading ? 1 : 0.98 }}
            type="submit"
            disabled={isLoading}
            className={`relative bg-gradient-to-r from-primary-600 to-primary-500 dark:from-primary-500 dark:to-primary-400 text-white py-3 rounded-lg font-semibold shadow-lg transition-all flex items-center justify-center gap-2 ${isLoading
                ? "opacity-70 cursor-not-allowed"
                : "hover:shadow-primary-500/50 dark:hover:shadow-primary-400/50"
              }`}
          >
            {isLoading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Sending...</span>
              </>
            ) : (
              <span>Send Reset Link</span>
            )}
          </motion.button>

          {/* Back to Login Link */}
          <div className="text-center mt-2">
            <button
              type="button"
              onClick={() => navigate("/login")}
              className="text-sm text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 hover:underline transition-colors inline-flex items-center gap-1"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Login
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
