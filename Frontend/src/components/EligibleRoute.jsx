import { Navigate, useParams } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { toast } from "react-toastify";
import apiClient from "../services/apiClient";

export default function EligibleRoute({ children }) {
  const { code } = useParams();
  const [isEligible, setIsEligible] = useState(null);
  const [redirect, setRedirect] = useState(false);
  const [loading, setLoading] = useState(true);
  const hasRun = useRef(false);

  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true;

    const checkEligibility = async () => {
      try {
        const res = await apiClient.get(`/eligibility/${code}`);

        if (res.data.success) {
          setIsEligible(true);
        } else {
          setIsEligible(false);
          toast.error(res.data.message || "Not eligible for this company.");
          setTimeout(() => setRedirect(true), 1200);
        }
      } catch (err) {
        console.error("Eligibility check failed:", err);
        toast.error("You are not eligible for the requested company.");
        setIsEligible(false);
        setTimeout(() => setRedirect(true), 1200);
      } finally {
        setLoading(false);
      }
    };

    checkEligibility();
  }, [code]);

  if (loading) return <p className="text-center mt-10">Checking eligibility...</p>;

  if (redirect) return <Navigate to="/companies-for-you" replace />;

  if (!isEligible) return null;

  return children;
}