import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { AdminAuthContext } from "../context/AdminAuthContext";
import DarkModeToggle from "../components/DarkModeToggle";

export default function AdminNavbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { isAdminLoggedIn, logoutAdmin } = useContext(AdminAuthContext); // ✅ Fixed: logoutAdmin
  const [isDashboard, setIsDashboard] = useState(false);

  useEffect(() => {
    setIsDashboard(location.pathname === "/admin");
  }, [location]);

  const handleLogout = () => {
    logoutAdmin(); // ✅ Fixed: use logoutAdmin
    navigate("/admin/login");
  };

  return (
    <motion.nav
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-2 z-50 mx-4 bg-white/90 dark:bg-dark-900/30 backdrop-blur-md border border-gray-300/50 dark:border-gray-700/30 shadow-xl flex justify-between items-center px-6 py-3 rounded-full"
    >
      {/* Logo */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        animate={{
          y: [0, -5, 0],
          transition: { repeat: Infinity, duration: 2 },
        }}
        className="cursor-pointer flex items-center gap-4"
        onClick={() => navigate("/admin")}
      >
        <div className="w-12 h-12 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg" style={{ backgroundColor: '#0ea5e9' }}>
          A
        </div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          AdminPanel
        </h1>
      </motion.div>

      {/* Navigation Items */}
      <div className="flex gap-4 items-center">
        <DarkModeToggle />

        {isAdminLoggedIn ? (
          <>
            {!isDashboard && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-white px-4 py-2 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
                style={{ backgroundColor: '#0ea5e9' }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#0284c7'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#0ea5e9'}
                onClick={() => navigate("/admin")}
              >
                Dashboard
              </motion.button>
            )}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Logout
            </motion.button>
          </>
        ) : (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/admin/login")}
            className="text-white px-4 py-2 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
            style={{ backgroundColor: '#0ea5e9' }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#0284c7'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#0ea5e9'}
          >
            Login
          </motion.button>
        )}
      </div>
    </motion.nav>
  );
}
