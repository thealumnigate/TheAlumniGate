import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

// Protects pages accessible only after registration
export default function PostRegistrationRoute({ children }) {
  const { isLoggedIn, student , loading} = useContext(AuthContext);

  if (loading) {
    return <div className="p-10 text-center">⏳ Checking authentication...</div>;
  }
  
  if (!isLoggedIn) return <Navigate to="/login" replace />;
  
  if (!student?.isRegisteredBefore) return <Navigate to="/registration" replace />; // must register first

  return children;
}