import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import { motion } from "framer-motion";



export default function Auth() {
  const { login } = useContext(AuthContext);
  const [form, setForm] = useState({ rollno: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/api/login", {
        rollno: form.rollno,
        password: form.password,
      });
      login(res.data.token, res.data.student);
      navigate("/");
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 via-pink-50 to-yellow-50 p-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white shadow-2xl rounded-2xl w-full max-w-md p-8"
      >
        <h2 className="text-3xl font-extrabold text-purple-700 text-center mb-6">
          Welcome Back
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="rollno"
            placeholder="Roll Number"
            value={form.rollno}
            onChange={handleChange}
            required
            className="p-3 border rounded-lg focus:ring-2 focus:ring-purple-400 outline-none"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
            className="p-3 border rounded-lg focus:ring-2 focus:ring-purple-400 outline-none"
          />

          <motion.button
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition"
          >
            Login
          </motion.button>

          {error && (
            <p className="text-red-600 text-sm text-center bg-red-50 py-2 rounded-lg">
              {error}
            </p>
          )}
        </form>
      </motion.div>
    </div>
  );
}
