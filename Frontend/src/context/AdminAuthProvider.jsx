import { useState, useEffect } from "react";
import { AdminAuthContext } from "./AdminAuthContext";
import apiClient from "../services/apiClient";
import { jwtDecode } from "jwt-decode";
import { toast } from "react-toastify";

export default function AdminAuthProvider({ children }) {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(true);
  let logoutTimer = null; // ⏱ to store auto logout timer

  // ✅ Check if token expired
  const isTokenExpired = (token) => {
    try {
      const decoded = jwtDecode(token);
      return decoded.exp * 1000 < Date.now(); // Compare milliseconds
    } catch (err) {
      return true;
    }
  };

  // ✅ Decode token
  const decodeToken = (token) => {
    try {
      return jwtDecode(token);
    } catch (err) {
      console.error("Invalid admin token:", err);
      return null;
    }
  };

  // ✅ Fetch admin data
  const fetchAdminData = async (token) => {
    try {
      const res = await apiClient.get("/admin/me");
      return res.data.admin;
    } catch (err) {
      // 401 is expected when not logged in - don't log it
      if (err.response?.status !== 401) {
        console.error("Error fetching admin data:", err);
      }
      return null;
    }
  };

  // ✅ Setup auto logout timer
  const setupAutoLogout = (expTime) => {
    const timeRemaining = expTime * 1000 - Date.now();
    if (timeRemaining > 0) {
      logoutTimer = setTimeout(() => {
        toast.info("Admin session expired. Please login again.");
        logoutAdmin();
      }, timeRemaining);
    }
  };

  // ✅ Logout
  const logoutAdmin = () => {
    clearTimeout(logoutTimer);
    localStorage.removeItem("adminToken");
    localStorage.removeItem("admin");
    setIsAdminLoggedIn(false);
    setAdmin(null);
  };

  // ✅ On load
  useEffect(() => {
    let isMounted = true;

    const initAuth = async () => {
      const token = localStorage.getItem("adminToken");
      if (token && !isTokenExpired(token)) {
        const decoded = decodeToken(token);
        if (decoded && isMounted) {
          setupAutoLogout(decoded.exp); // ⏱ auto logout after expiry
          const fullAdmin = await fetchAdminData(token);
          if (fullAdmin && isMounted) {
            setIsAdminLoggedIn(true);
            setAdmin(fullAdmin);
            localStorage.setItem("admin", JSON.stringify(fullAdmin));
          }
        }
      } else {
        logoutAdmin();
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
  const loginAdmin = async (token) => {
    localStorage.setItem("adminToken", token);
    const decoded = decodeToken(token);
    if (decoded) {
      setupAutoLogout(decoded.exp);
      const fullAdmin = await fetchAdminData(token);
      if (fullAdmin) {
        setIsAdminLoggedIn(true);
        setAdmin(fullAdmin);
        localStorage.setItem("admin", JSON.stringify(fullAdmin));
      }
    }
  };

  return (
    <AdminAuthContext.Provider
      value={{
        isAdminLoggedIn,
        admin,
        loginAdmin,
        logoutAdmin,
        loading,
      }}
    >
      {children}
    </AdminAuthContext.Provider>
  );
}