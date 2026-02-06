// components/StudentDetails.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { Pencil, Check, X } from "lucide-react";
import apiClient from "../services/apiClient";

export default function StudentDetails() {
  const [rollInput, setRollInput] = useState("");
  const [foundStudent, setFoundStudent] = useState(null);
  const [editingField, setEditingField] = useState(null);
  const [tempValue, setTempValue] = useState("");

  const handleFindStudent = async () => {
    if (!rollInput.trim()) return alert("Please enter a Roll Number");

    try {
      const res = await apiClient.get(`/admin/student/${rollInput}`);
      if (res.data.success) {
        setFoundStudent(res.data.student);
        setEditingField(null);
      } else {
        alert("No student found with that Roll Number");
        setFoundStudent(null);
      }
    } catch (err) {
      console.error("Error fetching student:", err);
      alert("Error fetching student details");
    }
  };

  const handleEditClick = (field, currentValue) => {
    setEditingField(field);
    setTempValue(currentValue);
  };

  const handleCancelEdit = () => {
    setEditingField(null);
    setTempValue("");
  };

  const handleSaveEdit = async (field) => {
    try {
      await apiClient.put(`/admin/student/${foundStudent.rollno}`, {
        [field]: tempValue,
      });

      setFoundStudent({ ...foundStudent, [field]: tempValue });
      setEditingField(null);
      alert("✅ Field updated successfully!");
    } catch (err) {
      console.error(err);
      alert("Failed to update field!");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white/80 dark:bg-white/5 p-6 rounded-xl shadow-md dark:shadow-none max-w-3xl mx-auto space-y-4 border border-gray-300/40 dark:border-gray-700/30 backdrop-blur-sm"
    >
      <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">
        Student Details
      </h2>

      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Enter Roll Number"
          value={rollInput}
          onChange={(e) => setRollInput(e.target.value)}
          className="border border-gray-300/40 dark:border-gray-700/30 p-3 rounded-lg flex-grow focus:ring-2 focus:ring-blue-500 bg-white/80 dark:bg-white/5 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 backdrop-blur-sm transition-all"
        />
        <button
          onClick={handleFindStudent}
          className="text-white px-4 rounded transition-colors duration-200"
          style={{ backgroundColor: '#0ea5e9' }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#0284c7'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#0ea5e9'}
        >
          Search
        </button>
      </div>

      {foundStudent && (
        <div className="space-y-4 mt-6">
          {Object.entries(foundStudent).map(([key, value]) => (
            <div
              key={key}
              className="flex justify-between items-center border-b border-gray-300/40 dark:border-gray-700/30 pb-2"
            >
              <div className="w-3/4">
                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                  {key.toUpperCase()}
                </p>
                {editingField === key ? (
                  <input
                    type="text"
                    value={tempValue}
                    onChange={(e) => setTempValue(e.target.value)}
                    className="border border-gray-300/40 dark:border-gray-700/30 p-2 rounded w-full mt-1 focus:ring-2 focus:ring-blue-500 bg-white/80 dark:bg-white/5 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 backdrop-blur-sm transition-all"
                  />
                ) : (
                  <p className="text-gray-800 dark:text-gray-200 font-semibold">{value}</p>
                )}
              </div>

              <div>
                {editingField === key ? (
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleSaveEdit(key)}
                      className="text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300"
                    >
                      <Check className="w-5 h-5" />
                    </button>
                    <button
                      onClick={handleCancelEdit}
                      className="text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => handleEditClick(key, value)}
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                  >
                    <Pencil className="w-5 h-5" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
}
