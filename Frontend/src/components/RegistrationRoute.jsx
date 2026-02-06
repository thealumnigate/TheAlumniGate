import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

// Protects Registration page
export default function RegistrationRoute({ children }) {
  const { isLoggedIn, student , loading} = useContext(AuthContext);

  if (loading) {
    return <div className="p-10 text-center">⏳ Checking authentication...</div>;
  }
  
  if (!isLoggedIn) return <Navigate to="/login" replace />;

  if (student?.isRegisteredBefore) return <Navigate to="/companies-for-you" replace />; // cannot access after registration

  return children;
}