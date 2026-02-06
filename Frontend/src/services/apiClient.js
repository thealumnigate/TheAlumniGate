// Centralized Axios Client for all API calls
// All components should import this client instead of axios directly

import axios from "axios";
import { API_BASE_URL } from "../config/api";

const apiClient = axios.create({
  baseURL: `${API_BASE_URL}/api`,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor to add auth token
apiClient.interceptors.request.use(
  (config) => {
    const adminToken = localStorage.getItem("adminToken");
    const token = localStorage.getItem("token");

    // Use adminToken ONLY for admin routes, student token for everything else
    const isAdminRoute = config.url?.startsWith("/admin");

    if (isAdminRoute && adminToken) {
      config.headers.Authorization = `Bearer ${adminToken}`;
    } else if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    } else if (adminToken) {
      // Fallback to adminToken if no student token (for admin-only sessions)
      config.headers.Authorization = `Bearer ${adminToken}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Token expired or invalid - let calling code handle this
      // Don't auto-redirect here as admin and student have different flows
    }
    return Promise.reject(error);
  }
);

export default apiClient;
