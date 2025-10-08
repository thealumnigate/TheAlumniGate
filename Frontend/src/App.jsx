import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import PublicRoute from "./components/PublicRoute";
import PrivateRoute from "./components/PrivateRoute";
import RegistrationRoute from "./components/RegistrationRoute";
import PostRegistrationRoute from "./components/PostRegistrationRoute";

import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Registration from "./pages/Registration";
import Companies from "./pages/Companies";
import CompanyDetails from "./pages/CompanyDetails";
import Confirmation from "./pages/Confirmation";
import CompaniesForYou from "./pages/CompaniesForYou";
import ApplyPage from "./pages/ApplyPage";
import AppliedCompanies from "./pages/AppliedCompanies";
import Profile from "./pages/profile";                  
import UpdatePreferences from "./pages/update-preferences"; 

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/companies/:code" element={<CompanyDetails />} />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Auth />
            </PublicRoute>
          }
        />

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
              <ApplyPage />
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
      </Routes>
    </Router>
  );
}

export default App;