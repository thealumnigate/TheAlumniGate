import { Link, useNavigate } from "react-router-dom";
import { useContext, useState, useEffect, useRef } from "react";
import { AuthContext } from "../context/AuthContext";
import { motion, AnimatePresence } from "framer-motion";
import { FaUserCircle } from "react-icons/fa";
import DarkModeToggle from "./DarkModeToggle";

export default function Navbar() {
  const navigate = useNavigate();
  const { isLoggedIn, logout, student } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const profileRef = useRef(null);
  const menuRef = useRef(null);

  const handleLogout = () => {
    logout();
    navigate("/login");
    setIsProfileOpen(false);
    setIsMenuOpen(false);
  };

  // Handle click outside to close profile dropdown and mobile menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        // Small delay to prevent immediate closing when clicking the profile button
        setTimeout(() => {
          setIsProfileOpen(false);
        }, 100);
      }

      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isProfileOpen || isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isProfileOpen, isMenuOpen]);

  const navItemStyle =
    "px-4 py-2 rounded-md font-medium text-gray-800 hover:text-gray-900 transition-all duration-300 relative dark:text-gray-300 dark:hover:text-white";
  const btnStyle =
    "px-4 py-2 rounded-md font-medium transition-all duration-300 shadow-md";

  return (
    <motion.nav
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-2 z-50 mx-4 bg-white/90 dark:bg-dark-900/30 backdrop-blur-md border border-gray-300/50 dark:border-gray-700/30 shadow-xl flex justify-between items-center px-6 py-3 rounded-full"
    >
      {/* Logos */}
      <Link to="/">
        <motion.div
          whileHover={{ scale: 1.1 }}
          animate={{
            y: [0, -5, 0],
            transition: { repeat: Infinity, duration: 2 },
          }}
          className="cursor-pointer flex items-center gap-4"
        >
          <img
            src="/ag logo bw.png"
            alt="TheAlumniGate Logo"
            className="h-12 w-auto object-contain dark:brightness-100 dark:invert-0"
          />
          <img
            src="/vce.png"
            alt="VCE Logo"
            className="h-12 w-auto object-contain dark:brightness-100 dark:invert-0"
          />
        </motion.div>
      </Link>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-4 items-center">
        <Link className={navItemStyle} to="/">
          Home
        </Link>
        <Link className={navItemStyle} to="/companies">
          Companies
        </Link>
        <Link className={navItemStyle} to="/resources">
          Resources
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

      {/* Profile / Login / Logout / Dark Mode Toggle */}
      <div
        ref={profileRef}
        className="hidden md:flex items-center gap-4 relative"
      >
        <DarkModeToggle />

        {!isLoggedIn ? (
          <Link
            className={
              btnStyle +
              " bg-primary-600 text-white hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600"
            }
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
              <FaUserCircle className="text-3xl text-gray-700 hover:text-gray-900 transition dark:text-gray-300 dark:hover:text-white" />
            </button>

            <AnimatePresence>
              {isProfileOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 top-full mt-2 w-48 bg-white/95 dark:bg-dark-800/95 text-gray-800 dark:text-gray-200 shadow-xl rounded-lg border border-gray-300/50 dark:border-gray-700/30 overflow-hidden z-[60] backdrop-blur-sm"
                >
                  <Link
                    to="/profile"
                    onClick={() => setIsProfileOpen(false)}
                    className="block px-4 py-2 hover:bg-gray-100/80 dark:hover:bg-gray-700/30"
                  >
                    My Profile
                  </Link>

                  {/* Show Update Preferences only if student registered */}
                  {student?.isRegisteredBefore && (
                    <Link
                      to="/update-preferences"
                      onClick={() => setIsProfileOpen(false)}
                      className="block px-4 py-2 hover:bg-gray-100/80 dark:hover:bg-gray-700/30"
                    >
                      Update Preferences
                    </Link>
                  )}

                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100/80 dark:hover:bg-gray-700/30 text-red-600 dark:text-red-300"
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
      <div ref={menuRef} className="md:hidden flex items-center gap-2">
        <DarkModeToggle />
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <motion.div
            whileTap={{ scale: 0.9 }}
            className="flex flex-col justify-between w-6 h-5 cursor-pointer"
          >
            <span
              className={`block h-0.5 w-full bg-gray-700 dark:bg-gray-300 rounded transform transition duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
            ></span>
            <span
              className={`block h-0.5 w-full bg-gray-700 dark:bg-gray-300 rounded transition duration-300 ${isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
            ></span>
            <span
              className={`block h-0.5 w-full bg-gray-700 dark:bg-gray-300 rounded transform transition duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""
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
            className="absolute top-full left-0 w-full bg-white/95 dark:bg-dark-800/95 text-gray-800 dark:text-gray-200 shadow-xl flex flex-col gap-2 p-4 md:hidden z-[70] rounded-b-2xl border-t border-gray-300/50 dark:border-gray-700/30"
          >
            <Link
              className={navItemStyle}
              to="/"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              className={navItemStyle}
              to="/companies"
              onClick={() => setIsMenuOpen(false)}
            >
              Companies
            </Link>
            <Link
              className={navItemStyle}
              to="/resources"
              onClick={() => setIsMenuOpen(false)}
            >
              Resources
            </Link>

            {isLoggedIn && !student?.isRegisteredBefore && (
              <Link
                className={navItemStyle}
                to="/registration"
                onClick={() => setIsMenuOpen(false)}
              >
                Registration
              </Link>
            )}

            {isLoggedIn && student?.isRegisteredBefore && (
              <>
                <Link
                  className={navItemStyle}
                  to="/companies-for-you"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Companies For You
                </Link>
                <Link
                  className={navItemStyle}
                  to="/applied-companies"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Applied Companies
                </Link>
                <Link
                  className={navItemStyle}
                  to="/update-preferences"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Update Preferences
                </Link>
              </>
            )}

            {isLoggedIn && (
              <>
                <Link
                  className={navItemStyle}
                  to="/profile"
                  onClick={() => setIsMenuOpen(false)}
                >
                  My Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className={
                    btnStyle + " bg-red-400 hover:bg-red-500 text-white mt-2"
                  }
                >
                  Logout
                </button>
              </>
            )}

            {!isLoggedIn && (
              <Link
                className={
                  btnStyle +
                  " bg-primary-600 text-white hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 mt-2"
                }
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