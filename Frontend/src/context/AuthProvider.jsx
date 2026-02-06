import { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import { authService } from "../services/authService";
import { jwtDecode } from "jwt-decode";
import { toast } from "react-toastify";

export default function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  let logoutTimer = null; // ⏱ to track automatic logout

  // ✅ Decode JWT token
  const decodeToken = (token) => {
    try {
      return jwtDecode(token); // e.g. { id, rollno, exp }
    } catch (err) {
      console.error("Invalid token:", err);
      return null;
    }
  };

  // ✅ Check if token expired
  const isTokenExpired = (token) => {
    try {
      const decoded = jwtDecode(token);
      return decoded.exp * 1000 < Date.now(); // Convert seconds → ms
    } catch (err) {
      return true;
    }
  };

  // ✅ Fetch full student data from backend
  const fetchStudentData = async (token) => {
    try {
      const response = await authService.getCurrentUser();
      return response.student;
    } catch (err) {
      console.error("Error fetching student data:", err);
      return null;
    }
  };

  // ✅ Setup auto logout timer
  const setupAutoLogout = (expTime) => {
    const timeRemaining = expTime * 1000 - Date.now();
    if (timeRemaining > 0) {
      logoutTimer = setTimeout(() => {
        toast.info("Session expired. Please log in again.");
        logout();
      }, timeRemaining);
    }
  };

  // ✅ Logout
  const logout = () => {
    clearTimeout(logoutTimer);
    authService.logout();
    setIsLoggedIn(false);
    setStudent(null);
  };

  // ✅ On page load
  useEffect(() => {
    let isMounted = true;

    const initAuth = async () => {
      const token = localStorage.getItem("token");
      const storedStudent = localStorage.getItem("student");

      if (token && !isTokenExpired(token)) {
        const decoded = decodeToken(token);
        if (decoded && isMounted) {
          setupAutoLogout(decoded.exp);
          const fullStudent = await fetchStudentData(token);
          if (fullStudent && isMounted) {
            setIsLoggedIn(true);
            setStudent(fullStudent);
            localStorage.setItem("student", JSON.stringify(fullStudent));
          } else if (storedStudent) {
            setIsLoggedIn(true);
            setStudent(JSON.parse(storedStudent));
          }
        }
      } else {
        logout();
      }

      if (isMounted) setLoading(false);
    };

    initAuth();
    return () => {
      isMounted = false;
      clearTimeout(logoutTimer);
    };
  }, []);

  // ✅ Login
  const login = async (token, student) => {
    authService.storeUser(token, student);
    const decoded = decodeToken(token);
    if (decoded) setupAutoLogout(decoded.exp);
    setIsLoggedIn(true);
    setStudent(student);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        student,
        setStudent,
        login,
        logout,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}