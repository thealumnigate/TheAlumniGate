import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // at the top

export default function Profile() {
  const [student, setStudent] = useState(null);
  const navigate = useNavigate(); // inside your component

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("student"));
    setStudent(stored);
  }, []);

  if (!student) {
    return (
      <div className="p-10 text-center text-red-600 font-bold text-xl">
        No profile data found. Please complete your registration first.
      </div>
    );
  }

  const initials = student.name
    ? student.name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
    : "";

  return (
    <div className="p-6 md:p-12 min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-yellow-50 flex justify-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white shadow-2xl rounded-3xl p-8 max-w-lg w-full relative overflow-hidden"
      >
        {/* Avatar */}
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
          <div className="w-20 h-20 rounded-full bg-purple-200 flex items-center justify-center text-purple-700 text-3xl font-bold shadow-lg">
            {initials}
          </div>
        </div>

        <h1 className="text-2xl font-extrabold text-purple-700 mb-6 mt-12 text-center">
          My Profile
        </h1>

        <div className="divide-y divide-gray-200 space-y-4">
          {/* General Info */}
          <div className="pb-4">
            <h2 className="text-lg font-semibold text-gray-700 mb-2">
              General Info
            </h2>
            <p>
              <span className="font-medium text-gray-600">Name:</span>{" "}
              {student.name}
            </p>
            <p>
              <span className="font-medium text-gray-600">Roll Number:</span>{" "}
              {student.rollno}
            </p>
            <p>
              <span className="font-medium text-gray-600">Email:</span>{" "}
              {student.email}
            </p>
          </div>

          {/* Academic Info */}
          <div className="py-4">
            <h2 className="text-lg font-semibold text-gray-700 mb-2">
              Academic Info
            </h2>
            <p>
              <span className="font-medium text-gray-600">Branch:</span>{" "}
              {student.branch}
            </p>
            <p>
              <span className="font-medium text-gray-600">Year:</span>{" "}
              {student.year}
            </p>
            <p>
              <span className="font-medium text-gray-600">Semester:</span>{" "}
              {student.semester}
            </p>
            <p>
              <span className="font-medium text-gray-600">CGPA:</span>{" "}
              {student.cgpa}
            </p>
            <p>
              <span className="font-medium text-gray-600">Backlogs:</span>{" "}
              {student.backlogs}
            </p>
          </div>

          {/* Preferences */}
          <div className="pt-4">
            <h2 className="text-lg font-semibold text-gray-700 mb-2">
              Preferences
            </h2>
            <p>
              <span className="font-medium text-gray-600">Internships:</span>{" "}
              {student.no_of_internships}
            </p>
            <p>
              <span className="font-medium text-gray-600">
                Sector of Interest:
              </span>{" "}
              [{student.sector_of_interest.join(", ")}]
            </p>

            {student.resume?.url && (
              <div className="mt-2 flex items-center gap-4">
                <span className="font-medium text-gray-700">Your Resume:</span>
                <a
                  href={student.resume.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-green-600 transition text-sm"
                  download={student.resume.file_name || "Resume.pdf"}
                >
                  Download
                </a>
              </div>
            )}

          </div>
        </div>

        {/* Edit Button */}
        <div className="mt-6 text-center">
          <button
            onClick={() => navigate("/update-preferences")}
            className="bg-purple-500 text-white px-6 py-2 rounded-lg hover:bg-purple-600 shadow-md transition"
          >
            Update Preferences
          </button>
        </div>
      </motion.div>
    </div>
  );
}
