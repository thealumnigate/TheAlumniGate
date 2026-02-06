// App.jsx
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import LightRays from "./components/LightRays";
import MovingCircles from "./components/MovingCircles";
import { useTheme } from "./context/ThemeContext";
import "./App.css";

// Student Components
import Navbar from "./components/Navbar";
import PublicRoute from "./components/PublicRoute";
import PrivateRoute from "./components/PrivateRoute";
import RegistrationRoute from "./components/RegistrationRoute";
import PostRegistrationRoute from "./components/PostRegistrationRoute";
import EligibleRoute from "./components/EligibleRoute.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";

// Student Pages
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Registration from "./pages/Registration";
import Companies from "./pages/Companies";
import CompanyDetails from "./pages/CompanyDetails";
import Confirmation from "./pages/Confirmation";
import CompaniesForYou from "./pages/CompaniesForYou";
import ApplyPage from "./pages/ApplyPage";
import AppliedCompanies from "./pages/AppliedCompanies";
import Profile from "./pages/Profile";
import UpdatePreferences from "./pages/update-preferences";
import ForgotPassword from "./pages/ForgotPassword"; // ✅ Added
import ResetPassword from "./pages/ResetPassword"; // ✅ Added
import NotFound from "./pages/NotFound.jsx";

// Resource Pages
import Resources from "./pages/Resources";
import Placementprep from "./pages/resources/Placementprep";
import DSAprep from "./pages/resources/DSAprep";
import CSEprep from "./pages/resources/CSEprep";
import ECEprep from "./pages/resources/ECEprep";
import EEEprep from "./pages/resources/EEEprep";
import MECHprep from "./pages/resources/MECHprep";
import CIVILprep from "./pages/resources/CIVILprep";
import HRandTR from "./pages/resources/HRandTR";
import Communication from "./pages/resources/Commuincation";
import Productcomp from "./pages/resources/Productcomp";
import Servicecomp from "./pages/resources/Servicecomp";
import Pseudocode from "./pages/resources/Pseudocode";
import TechnicalConcepts from "./pages/resources/TechnicalConcepts";

// Admin Components
import AdminHome from "./AdminPages/AdminHome"; // ✅ Added
import AdminLogin from "./AdminPages/AdminLogin"; // ✅ Added
import AdminNavbar from "./AdminPages/AdminNavbar"; // ✅ Added
import AdminPrivateRoute from "./AdminRoutes/AdminPrivateRoute";  // ✅ Added
import AdminPublicRoute from "./AdminRoutes/AdminPublicRoute"; // ✅ Added

// Context Providers
import AdminAuthProvider from "./context/AdminAuthProvider"; // ✅ Added

function AppContent() {
  const location = useLocation();
  const { isDark } = useTheme();
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <div className="app-shell">
      <div className="app-bg">
        <LightRays
          key={`dark-rays-${isDark}`}
          raysOrigin="top-center"
          raysColor="#0ea5e9"
          raysSpeed={1.2}
          lightSpread={1}
          rayLength={2}
          followMouse={true}
          mouseInfluence={0.2}
          noiseAmount={0.2}
          distortion={0}
          className="custom-rays dark-rays"
        />
        <LightRays
          key={`light-rays-${isDark}`}
          raysOrigin="top-center"
          raysColor="#1e40af"
          raysSpeed={1.2}
          lightSpread={1}
          rayLength={2}
          followMouse={true}
          mouseInfluence={0.2}
          noiseAmount={0.2}
          distortion={0}
          className="custom-rays light-rays"
        />
        <MovingCircles
          key={`moving-circles-${isDark}`}
          circleCount={2}
          minSize={400}
          maxSize={800}
          speed={0.05}
          color="#0ea5e9"
          mouseInfluence={1.2}
          followMouse={true}
        />
      </div>

      <div className="app-content">
        {/* Conditionally render navbars */}
        {isAdminRoute ? <AdminNavbar /> : <Navbar />}

        <Routes>
          {/* --- Student/Public Routes --- */}
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="/companies/:code" element={<CompanyDetails />} />
          <Route path="/resources" element={<Resources />} />

          {/* Resource Pages */}
          <Route path="/resources/placement-prep" element={<Placementprep />} />
          <Route path="/resources/dsa-prep" element={<DSAprep />} />
          <Route path="/resources/cse-prep" element={<CSEprep />} />
          <Route path="/resources/ece-prep" element={<ECEprep />} />
          <Route path="/resources/eee-prep" element={<EEEprep />} />
          <Route path="/resources/mech-prep" element={<MECHprep />} />
          <Route path="/resources/civil-prep" element={<CIVILprep />} />
          <Route path="/resources/hr-tr" element={<HRandTR />} />
          <Route path="/resources/communication" element={<Communication />} />
          <Route path="/resources/product-companies" element={<Productcomp />} />
          <Route path="/resources/service-companies" element={<Servicecomp />} />
          <Route path="/resources/pseudocode" element={<Pseudocode />} />
          <Route path="/resources/technical-concepts" element={<TechnicalConcepts />} />

          {/* Auth Routes */}
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Auth />
              </PublicRoute>
            }
          />
          <Route path="/forgot-password" element={<ForgotPassword />} /> {/* ✅ Added */}
          <Route path="/reset-password/:token" element={<ResetPassword />} /> {/* ✅ Added */}

          {/* Registration - only if logged in and not registered */}
          <Route
            path="/registration"
            element={
              <RegistrationRoute>
                <Registration />
              </RegistrationRoute>
            }
          />

          {/* Post-registration pages */}
          <Route
            path="/companies-for-you"
            element={
              <PostRegistrationRoute>
                <CompaniesForYou />
              </PostRegistrationRoute>
            }
          />
          <Route
            path="/apply/:code"
            element={
              <PostRegistrationRoute>
                <EligibleRoute>
                  <ApplyPage />
                </EligibleRoute>
              </PostRegistrationRoute>
            }
          />
          <Route
            path="/applied-companies"
            element={
              <PostRegistrationRoute>
                <AppliedCompanies />
              </PostRegistrationRoute>
            }
          />

          {/* Profile & Update Preferences */}
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
          <Route
            path="/update-preferences"
            element={
              <PostRegistrationRoute>
                <UpdatePreferences />
              </PostRegistrationRoute>
            }
          />

          {/* Confirmation - private */}
          <Route
            path="/confirmation"
            element={
              <PrivateRoute>
                <Confirmation />
              </PrivateRoute>
            }
          />

          {/* --- Admin Routes --- */}
          <Route
            path="/admin/login"
            element={
              <AdminPublicRoute>
                <AdminLogin />
              </AdminPublicRoute>
            }
          />

          <Route
            path="/admin"
            element={
              <AdminPrivateRoute>
                <AdminHome />
              </AdminPrivateRoute>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <AdminAuthProvider>
          <AppContent />
        </AdminAuthProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App;
