import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

// Protects routes that require login
export default function ProtectedRoute({ children }) {
  const { isLoggedIn , loading} = useContext(AuthContext);

  if (loading) {
    return <div className="p-10 text-center">⏳ Checking authentication...</div>;
  }
  
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return children;
}