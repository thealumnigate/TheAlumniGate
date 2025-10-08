import { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import axios from "axios";
import {jwtDecode} from "jwt-decode";

export default function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);

  // Helper to decode JWT token
  const decodeToken = (token) => {
    try {
      return jwtDecode(token); // will return { id, email, isRegisteredBefore }
    } catch (err) {
      console.error("Invalid token:", err);
      return null;
    }
  };

  // Fetch full student data from backend
  const fetchStudentData = async (token) => {
    try {
      const res = await axios.get("http://localhost:8080/api/me", {
        headers: { Authorization: `Bearer ${token}` },
      });
      return res.data.student;
    } catch (err) {
      console.error("Error fetching student data:", err);
      return null;
    }
  };

  useEffect(() => {
    const initAuth = async () => {
      const token = localStorage.getItem("token");
      const storedStudent = localStorage.getItem("student");
      if (token) {
        const decoded = decodeToken(token);
        if (decoded) {
          const fullStudent = await fetchStudentData(token);
          if (fullStudent) {
            setIsLoggedIn(true);
            setStudent(fullStudent);
            localStorage.setItem("student", JSON.stringify(fullStudent));
          }
          else if (storedStudent) {
            // fallback if backend fetch fails
            setIsLoggedIn(true);
            setStudent(JSON.parse(storedStudent));
          }
        }
      }
      setLoading(false);
    };
    initAuth();
  }, []);

  const login = async (token) => {
    localStorage.setItem("token", token);
    const decoded = decodeToken(token);
    if (decoded) {
      const fullStudent = await fetchStudentData(token);
      if (fullStudent) {
        setIsLoggedIn(true);
        setStudent(fullStudent);
        localStorage.setItem("student", JSON.stringify(fullStudent));
      }
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("student");
    setIsLoggedIn(false);
    setStudent(null);
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
        loading
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}