// components/AdminPrivateRoute.jsx
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AdminAuthContext } from "../context/AdminAuthContext";

export default function AdminPrivateRoute({ children }) {
  const { isAdminLoggedIn, loading } = useContext(AdminAuthContext);

  // ✅ Better loading UI
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          <p className="mt-4 text-gray-600 font-medium">Loading...</p>
        </div>
      </div>
    );
  }

  return isAdminLoggedIn ? children : <Navigate to="/admin/login" replace />;
}
