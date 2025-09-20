import React, { useState } from "react";
import styles from "./AuthPage.module.css";
import { useNavigate } from "react-router-dom";

function AuthPage() {
  const [isSignup, setIsSignup] = useState(true);
  const [formData, setFormData] = useState({
    rollno: "",
    password: "",
    name: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignup) {
      console.log("Signup submitted:", formData);
      // backend call for signup
    } else {
      console.log("Login submitted:", formData);
      // backend call for login
    }
    navigate("/filterform", { state: { rollno: formData.rollno } });
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>
        {isSignup ? "Create Account" : "Login"}
      </h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        {isSignup && (
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        )}
        <input
          type="text"
          name="rollno"
          placeholder="Roll Number (e.g. 23881A05XX)"
          value={formData.rollno}
          onChange={handleChange}
          required
        />
        <input
        type="password"
         name="password"
         placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        />
        <button type="submit" className={styles.submitBtn}>
          {isSignup ? "Sign Up" : "Login"}
        </button>
      </form>
      <p className={styles.switchText}>
        {isSignup ? "Already have an account?" : "Don’t have an account?"}{" "}
        <span
          className={styles.switchLink}
          onClick={() => setIsSignup(!isSignup)}
        >
          {isSignup ? "Login" : "Sign up"}
        </span>
      </p>
    </div>
  );
}

export default AuthPage;
