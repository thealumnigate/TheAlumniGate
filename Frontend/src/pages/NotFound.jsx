import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-transparent dark:bg-dark-900/60 text-center p-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        className="bg-white/80 dark:bg-dark-800/70 border border-gray-200/30 dark:border-gray-700/30 shadow-2xl rounded-2xl p-12 backdrop-blur-sm max-w-2xl"
      >
        {/* Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
          className="inline-flex items-center justify-center w-24 h-24 rounded-full mb-6"
          style={{ backgroundColor: '#0ea5e9' }}
        >
          <AlertCircle className="w-12 h-12 text-white" />
        </motion.div>

        {/* 404 Text */}
        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-8xl font-extrabold mb-4 bg-gradient-to-r from-primary-600 to-primary-500 dark:from-primary-500 dark:to-primary-400 bg-clip-text text-transparent"
        >
          404
        </motion.h1>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4"
        >
          Page Not Found
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-gray-600 dark:text-gray-400 mb-8 text-lg"
        >
          Oops! The page you're looking for doesn't exist or has been moved.
        </motion.p>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-8 py-3 text-white rounded-lg font-semibold shadow-lg transition-all duration-300"
            style={{ backgroundColor: '#0ea5e9' }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#0284c7'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#0ea5e9'}
          >
            <Home className="w-5 h-5" />
            Go Back Home
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
