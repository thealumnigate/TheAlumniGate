import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { User, GraduationCap, Briefcase, FileText, Edit, Loader2, Download } from "lucide-react";

export default function Profile() {
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      const stored = JSON.parse(localStorage.getItem("student"));
      setStudent(stored);
      setLoading(false);
    }, 300);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-transparent">
        <Loader2 className="w-12 h-12 text-primary-500 dark:text-primary-400 animate-spin" />
      </div>
    );
  }

  if (!student) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-transparent p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white/80 dark:bg-dark-800/30 border border-red-500/40 dark:border-red-500/30 rounded-2xl p-10 text-center max-w-md shadow-lg dark:shadow-none"
        >
          <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <User className="w-8 h-8 text-red-500 dark:text-red-400" />
          </div>
          <h2 className="text-xl font-bold text-red-600 dark:text-red-400 mb-2">No Profile Found</h2>
          <p className="text-gray-700 dark:text-gray-400 mb-6">Please complete your registration first.</p>
          <button
            onClick={() => navigate("/registration")}
            className="bg-primary-600 dark:bg-primary-500 text-white px-6 py-2 rounded-lg hover:bg-primary-700 dark:hover:bg-primary-600 transition shadow-sm"
          >
            Go to Registration
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="p-6 md:p-12 min-h-screen bg-transparent pt-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
          className="bg-white/80 dark:bg-dark-800/30 border border-gray-300/40 dark:border-gray-700/30 shadow-lg dark:shadow-none rounded-2xl p-8 w-full backdrop-blur-sm"
        >
          {/* Header */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 mb-2 text-center"
          >
            {student.name}
          </motion.h1>

          <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
            {student.branch} • {student.year}
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* General Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gray-100/50 dark:bg-white/5 border border-gray-300/40 dark:border-gray-700/30 rounded-xl p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#0ea5e9' }}>
                  <User className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                  General Info
                </h2>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center pb-2 border-b border-gray-200/50 dark:border-gray-700/30">
                  <span className="text-gray-600 dark:text-gray-400">Roll Number</span>
                  <p className="text-gray-800 dark:text-gray-200 font-medium">{student.rollno}</p>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-gray-200/50 dark:border-gray-700/30">
                  <span className="text-gray-600 dark:text-gray-400">Email</span>
                  <p className="text-gray-800 dark:text-gray-200 font-medium text-right break-all max-w-[200px]">{student.email}</p>
                </div>
              </div>
            </motion.div>

            {/* Academic Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-gray-100/50 dark:bg-white/5 border border-gray-300/40 dark:border-gray-700/30 rounded-xl p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-green-500">
                  <GraduationCap className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                  Academic Info
                </h2>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center pb-2 border-b border-gray-200/50 dark:border-gray-700/30">
                  <span className="text-gray-600 dark:text-gray-400">Branch</span>
                  <p className="text-gray-800 dark:text-gray-200 font-medium">{student.branch}</p>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-gray-200/50 dark:border-gray-700/30">
                  <span className="text-gray-600 dark:text-gray-400">Year</span>
                  <p className="text-gray-800 dark:text-gray-200 font-medium">{student.year}</p>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-gray-200/50 dark:border-gray-700/30">
                  <span className="text-gray-600 dark:text-gray-400">Semester</span>
                  <p className="text-gray-800 dark:text-gray-200 font-medium">{student.semester}</p>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-gray-200/50 dark:border-gray-700/30">
                  <span className="text-gray-600 dark:text-gray-400">CGPA</span>
                  <p className="text-gray-800 dark:text-gray-200 font-medium">{student.cgpa}</p>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-400">Backlogs</span>
                  <p className="text-gray-800 dark:text-gray-200 font-medium">{student.backlogs}</p>
                </div>
              </div>
            </motion.div>

            {/* Preferences */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-gray-100/50 dark:bg-white/5 border border-gray-300/40 dark:border-gray-700/30 rounded-xl p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#0ea5e9' }}>
                  <Briefcase className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                  Preferences
                </h2>
              </div>
              <div className="space-y-4 text-sm">
                <div className="flex justify-between items-center pb-2 border-b border-gray-200/50 dark:border-gray-700/30">
                  <span className="text-gray-600 dark:text-gray-400">Internships</span>
                  <p className="text-gray-800 dark:text-gray-200 font-medium">{student.no_of_internships}</p>
                </div>
                
                <div>
                  <span className="text-gray-600 dark:text-gray-400 block mb-2">Sector of Interest</span>
                  <div className="flex flex-wrap gap-2">
                    {student.sector_of_interest.map((sector, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.7 + idx * 0.1 }}
                        className="px-3 py-1 text-white rounded-full text-xs font-medium shadow-sm"
                        style={{ backgroundColor: '#0ea5e9' }}
                      >
                        {sector}
                      </motion.span>
                    ))}
                  </div>
                </div>
                
                {student.resume?.url && (
                  <div className="pt-2">
                    <span className="text-gray-600 dark:text-gray-400 block mb-2"></span>
                    <a
                      href={student.resume.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all text-xs font-medium shadow-sm inline-flex items-center gap-2 w-full justify-center"
                      style={{ backgroundColor: '#0ea5e9' }}
                      onMouseEnter={(e) => e.target.style.backgroundColor = '#0284c7'}
                      onMouseLeave={(e) => e.target.style.backgroundColor = '#0ea5e9'}
                      download={student.resume.file_name || "Resume.pdf"}
                    >
                      <Download className="w-4 h-4" />
                      Download Resume
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          </div>

          {/* Edit Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-8 text-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/update-preferences")}
              className="text-white px-8 py-3 rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all font-medium inline-flex items-center gap-2"
              style={{ backgroundColor: '#0ea5e9' }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#0284c7'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#0ea5e9'}
            >
              <Edit className="w-5 h-5" />
              Update Preferences
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
