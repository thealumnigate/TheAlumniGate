import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import apiClient from "../services/apiClient";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, Lock, CheckCircle } from "lucide-react";
import Swal from "sweetalert2";

export default function ResetPassword() {
  const { token } = useParams();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (field, value) => {
    if (field === "password") {
      setPassword(value);
    } else {
      setConfirmPassword(value);
    }

    // Clear error for this field when user starts typing
    if (errors[field]) {
      setErrors({ ...errors, [field]: "" });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      const res = await apiClient.post(`/auth/reset-password/${token}`, {
        password,
      });

      setIsLoading(false);

      // Success modal
      Swal.fire({
        title: "Password Reset!",
        text: "Your password has been successfully reset.",
        icon: "success",
        confirmButtonText: "Go to Login",
        confirmButtonColor: "#0ea5e9",
      }).then(() => {
        navigate("/login");
      });
    } catch (err) {
      setIsLoading(false);

      // Error modal
      Swal.fire({
        title: "Reset Failed",
        text: err.response?.data?.message || "Error resetting password. Link may have expired.",
        icon: "error",
        confirmButtonText: "Try Again",
        confirmButtonColor: "#0ea5e9",
      });
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
          className="mb-8 text-center"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 mb-4 p-3">
            <img
              src="/ag logo bw.png"
              alt="TheAlumniGate Logo"
              className="w-full h-full object-contain dark:brightness-100 dark:invert-0"
            />
          </div>
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 mb-2">
            Create New Password
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Enter your new password below
          </p>
        </motion.div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {/* New Password Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 dark:text-gray-400" />
              <input
                type="password"
                placeholder="Enter new password"
                value={password}
                onChange={(e) => handleChange("password", e.target.value)}
                disabled={isLoading}
                className={`w-full pl-11 pr-4 py-3 border ${errors.password
                    ? "border-red-500"
                    : "border-gray-300/40 dark:border-gray-700/30"
                  } bg-white/80 dark:bg-gray-800/80 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none transition disabled:opacity-50 disabled:cursor-not-allowed`}
              />
            </div>
            <AnimatePresence>
              {errors.password && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-red-400 text-xs mt-1 ml-1"
                >
                  {errors.password}
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          {/* Confirm Password Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            </label>
            <div className="relative">
              <CheckCircle className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 dark:text-gray-400" />
              <input
                type="password"
                placeholder="Confirm new password"
                value={confirmPassword}
                onChange={(e) => handleChange("confirmPassword", e.target.value)}
                disabled={isLoading}
                className={`w-full pl-11 pr-4 py-3 border ${errors.confirmPassword
                    ? "border-red-500"
                    : "border-gray-300/40 dark:border-gray-700/30"
                  } bg-white/80 dark:bg-gray-800/80 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none transition disabled:opacity-50 disabled:cursor-not-allowed`}
              />
            </div>
            <AnimatePresence>
              {errors.confirmPassword && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-red-400 text-xs mt-1 ml-1"
                >
                  {errors.confirmPassword}
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
                <span>Resetting...</span>
              </>
            ) : (
              <span>Reset Password</span>
            )}
          </motion.button>

          {/* Back to Login Link */}
          <div className="text-center mt-2">
            <button
              type="button"
              onClick={() => navigate("/login")}
              className="text-sm text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 hover:underline transition-colors"
            >
              Back to Login
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
