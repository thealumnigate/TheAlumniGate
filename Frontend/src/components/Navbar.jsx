import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { motion, AnimatePresence } from "framer-motion";
import { FaUserCircle } from "react-icons/fa";

export default function Navbar() {
  const navigate = useNavigate();
  const { isLoggedIn, logout, student } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/login");
    setIsProfileOpen(false);
    setIsMenuOpen(false);
  };

  const navItemStyle =
    "px-4 py-2 rounded-md font-medium text-gray-700 transition-all duration-300 relative";
  const btnStyle =
    "px-4 py-2 rounded-md font-medium transition-all duration-300 shadow-md";

  return (
    <motion.nav
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full sticky top-0 z-50 bg-gradient-to-r from-purple-100 via-pink-50 to-yellow-50 shadow-xl flex justify-between items-center px-6 py-3"
    >
      {/* Logo */}
      <motion.div
        whileHover={{ scale: 1.2, color: "#8B5CF6" }}
        animate={{
          y: [0, -5, 0],
          transition: { repeat: Infinity, duration: 2 },
        }}
        className="font-extrabold text-2xl cursor-pointer text-purple-800"
      >
        TheAlumniGate
      </motion.div>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-4 items-center">
        <Link className={navItemStyle} to="/">
          Home
        </Link>
        <Link className={navItemStyle} to="/companies">
          Companies
        </Link>

        {isLoggedIn && !student?.isRegisteredBefore && (
          <Link className={navItemStyle} to="/registration">
            Registration
          </Link>
        )}

        {isLoggedIn && student?.isRegisteredBefore && (
          <>
            <Link className={navItemStyle} to="/companies-for-you">
              Companies For You
            </Link>
            <Link className={navItemStyle} to="/applied-companies">
              Applied Companies
            </Link>
          </>
        )}
      </div>

      {/* Profile / Login / Logout */}
      <div className="hidden md:flex items-center gap-2 relative">
        {!isLoggedIn ? (
          <Link
            className={btnStyle + " bg-purple-800 text-white hover:bg-purple-700"}
            to="/login"
          >
            Login
          </Link>
        ) : (
          <>
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="relative focus:outline-none"
            >
              <FaUserCircle className="text-3xl text-purple-700 hover:text-purple-800 transition" />
            </button>

            <AnimatePresence>
              {isProfileOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 top-full mt-2 w-48 bg-white shadow-lg rounded-lg border overflow-hidden z-50"
                >
                  <Link
                    to="/profile"
                    onClick={() => setIsProfileOpen(false)}
                    className="block px-4 py-2 hover:bg-purple-100 text-gray-700"
                  >
                    My Profile
                  </Link>

                  {/* Show Update Preferences only if student registered */}
                  {student?.isRegisteredBefore && (
                    <Link
                      to="/update-preferences"
                      onClick={() => setIsProfileOpen(false)}
                      className="block px-4 py-2 hover:bg-purple-100 text-gray-700"
                    >
                      Update Preferences
                    </Link>
                  )}

                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 hover:bg-red-100 text-red-500"
                  >
                    Logout
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </>
        )}
      </div>

      {/* Hamburger Menu (Mobile) */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <motion.div
            whileTap={{ scale: 0.9 }}
            className="flex flex-col justify-between w-6 h-5 cursor-pointer"
          >
            <span
              className={`block h-0.5 w-full bg-gray-700 rounded transform transition duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block h-0.5 w-full bg-gray-700 rounded transition duration-300 ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`block h-0.5 w-full bg-gray-700 rounded transform transition duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </motion.div>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full bg-gradient-to-b from-purple-100 via-pink-50 to-yellow-50 shadow-md flex flex-col gap-2 p-4 md:hidden"
          >
            <Link className={navItemStyle} to="/" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link className={navItemStyle} to="/companies" onClick={() => setIsMenuOpen(false)}>
              Companies
            </Link>

            {isLoggedIn && !student?.isRegisteredBefore && (
              <Link className={navItemStyle} to="/registration" onClick={() => setIsMenuOpen(false)}>
                Registration
              </Link>
            )}

            {isLoggedIn && student?.isRegisteredBefore && (
              <>
                <Link className={navItemStyle} to="/companies-for-you" onClick={() => setIsMenuOpen(false)}>
                  Companies For You
                </Link>
                <Link className={navItemStyle} to="/applied-companies" onClick={() => setIsMenuOpen(false)}>
                  Applied Companies
                </Link>
                <Link className={navItemStyle} to="/update-preferences" onClick={() => setIsMenuOpen(false)}>
                  Update Preferences
                </Link>
              </>
            )}

            {isLoggedIn && (
              <>
                <Link className={navItemStyle} to="/profile" onClick={() => setIsMenuOpen(false)}>
                  My Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className={btnStyle + " bg-red-400 hover:bg-red-500 text-white mt-2"}
                >
                  Logout
                </button>
              </>
            )}

            {!isLoggedIn && (
              <Link
                className={btnStyle + " bg-blue-500 text-white hover:bg-blue-600 mt-2"}
                to="/login"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}