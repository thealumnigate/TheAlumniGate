import api from "./apiClient.js";

export const authService = {
  // Login user
  login: async (credentials) => {
    const response = await api.post("/auth/login", credentials);
    return response.data;
  },

  // Get current user
  getCurrentUser: async () => {
    const response = await api.get("/me");
    return response.data;
  },

  // Logout user (client-side only)
  logout: () => {
    localStorage.removeItem("token");
    localStorage.removeItem("student");
    localStorage.removeItem("appliedCompanies");
  },

  // Check if user is authenticated
  isAuthenticated: () => {
    return !!localStorage.getItem("token");
  },

  // Get stored user data
  getStoredUser: () => {
    const student = localStorage.getItem("student");
    return student ? JSON.parse(student) : null;
  },

  // Store user data
  storeUser: (token, student) => {
    localStorage.setItem("token", token);
    localStorage.setItem("student", JSON.stringify(student));
  },
};
