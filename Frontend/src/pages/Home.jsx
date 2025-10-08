import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const companies = [
  {
    name: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  },
  {
    name: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  },
  {
    name: "Amazon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  },
  {
    name: "Tesla",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",
  },
  {
    name: "Apple",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  },
  {
    name: "Netflix",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
  },
  {
    name: "Meta",
    logo: "https://commons.wikimedia.org/wiki/Special:FilePath/Meta_Platforms_logo.svg",
  },
  {
    name: "Adobe",
    logo: "https://commons.wikimedia.org/wiki/Special:FilePath/Adobe_Corporate_logo.svg",
  },
  {
    name: "IBM",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
  },
  {
    name: "Oracle",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg",
  },
];

const internships = [
  { title: "Frontend Developer", company: "Google" },
  { title: "Backend Developer", company: "Microsoft" },
  { title: "Data Analyst", company: "Amazon" },
  { title: "AI Research Intern", company: "Tesla" },
];

const nextCompany = {
  name: "Facebook",
  logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
  date: "28th Oct 2025",
  role: "Software Engineer Intern",
};
function getDaysLeft(dateStr) {
  // dateStr ko "28 Oct 2025" ya "2025-10-28" format me expect karenge
  const today = new Date();
  today.setHours(0, 0, 0, 0); // only date, ignore time

  const parts = dateStr.split(" "); // ["28", "Oct", "2025"]
  const day = parseInt(parts[0], 10);
  const month = new Date(`${parts[1]} 1, 2000`).getMonth(); // month index
  const year = parseInt(parts[2], 10);

  const target = new Date(year, month, day);
  target.setHours(0, 0, 0, 0);

  const diffTime = target - today;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays > 0 ? diffDays : 0;
}

export default function Home() {
  const { isLoggedIn, student } = useContext(AuthContext);

  // if (isLoggedIn) {
  //   return (
  //     <div className="flex items-center justify-center min-h-screen">
  //       <h2 className="text-xl font-semibold">Please log in to continue.</h2>
  //     </div>
  //   );
  // }

  return (
    <div className="bg-gradient-to-b from-purple-50 via-pink-50 to-yellow-50 min-h-screen">

      {isLoggedIn && (
        <div className="p-6 text-center">
          <h1 className="text-3xl font-bold">Welcome, {student?.name}</h1>
          <p className="mt-2 text-lg">Roll No: {student?.rollno}</p>
        </div>
      )}

      {/* Hero Section with Hero Image + Upcoming Company */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative px-6 md:px-20 pt-12 text-center overflow-hidden"
      >
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/image.png" // <-- apni hero image path
            alt="Campus Background"
            className="w-full h-full object-cover object-center opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-purple-500/20 via-pink-50/30 to-yellow-50/40"></div>
        </div>

        {/* Page Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-lg">
          TheAlumniGate
        </h1>
        <p className="text-lg md:text-xl text-gray-100 mb-8 drop-shadow-md">
          {isLoggedIn
            ? "Welcome back 🎉 Explore and register for upcoming placements and internships."
            : "Login or Sign Up to access placement opportunities, internships, and company info."}
        </p>

        {/* Next Upcoming Company Spotlight Card */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          whileHover={{
            scale: 1.03,
            boxShadow: "0 15px 35px rgba(139,92,246,0.4)",
          }}
          className="relative z-10 mx-auto flex flex-col md:flex-row items-center bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl p-6 md:p-10 gap-6 w-full max-w-4xl hover:rotate-1 transition-transform duration-300"
        >
          {/* Animated Glow Circle Behind Logo */}
          <div className="absolute -z-10 w-36 h-36 md:w-44 md:h-44 rounded-full bg-purple-300 opacity-40 blur-2xl animate-pulse -top-10 -left-10"></div>
          <div className="absolute -z-10 w-36 h-36 md:w-44 md:h-44 rounded-full bg-yellow-200 opacity-40 blur-2xl animate-pulse -bottom-10 -right-10"></div>

        {/* Card Heading Label */}
        <div className="absolute -top-5 inset-x-0 flex justify-center">
          <span className="inline-block px-3 sm:px-4 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs sm:text-sm font-semibold rounded-full shadow-md tracking-wide">
            🔥 Upcoming Placement
          </span>
        </div>


          {/* Company Logo */}
          <motion.img
            src={nextCompany.logo}
            alt={nextCompany.name}
            className="w-28 h-28 md:w-36 md:h-36 object-contain rounded-full border-4 border-white shadow-xl"
            animate={{ scale: [1, 1.05, 1], rotate: [0, 5, -5, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          />

          {/* Company Info */}
          <div className="text-center md:text-left flex-1">
            <h3 className="text-2xl md:text-3xl font-bold text-purple-800">
              {nextCompany.name}
            </h3>
            <p className="text-gray-700 text-lg mt-2">
              Role: <strong>{nextCompany.role}</strong>
            </p>
            <p className="text-gray-600 mt-1">
              Date: <strong>{nextCompany.date}</strong>
            </p>

            {/* Countdown Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mt-4 inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full shadow-md font-semibold"
            >
              ⏳ {getDaysLeft(nextCompany.date)} days to go
            </motion.div>

            {/* CTA Button only when 0 days left */}
            {getDaysLeft(nextCompany.date) === 0 && (
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="/registration"
                className="mt-4 inline-block px-6 py-2 bg-purple-500 text-white rounded-lg shadow-md hover:bg-purple-600 transition-colors duration-300"
              >
                Register Now
              </motion.a>
            )}
          </div>
        </motion.div>
      </motion.div>

      {/* Highlights Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 md:px-20 mt-12">
        <motion.div
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 10px 20px rgba(139,92,246,0.3)",
          }}
          className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center"
        >
          <h2 className="text-xl font-semibold mb-2">Top Companies</h2>
          <p className="text-gray-600">
            Explore all top recruiters visiting our campus this year.
          </p>
        </motion.div>

        <motion.div
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 10px 20px rgba(139,92,246,0.3)",
          }}
          className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center"
        >
          <h2 className="text-xl font-semibold mb-2">Internships</h2>
          <p className="text-gray-600">
            Discover amazing internships to boost your skills and CV.
          </p>
        </motion.div>

        <motion.div
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 10px 20px rgba(139,92,246,0.3)",
          }}
          className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center"
        >
          <h2 className="text-xl font-semibold mb-2">Placement Stats</h2>
          <div className="w-full mt-2">
            <div className="bg-gray-200 rounded-full h-4 w-full">
              <motion.div
                className="bg-purple-500 h-4 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "85%" }}
                transition={{ duration: 1.5 }}
              />
            </div>
            <p className="text-gray-600 text-sm mt-1">
              85% of students placed last year
            </p>
          </div>
        </motion.div>
      </div>

      {/* Internship Highlights Carousel */}
      <div className="mt-16 px-6 md:px-20">
        <h2 className="text-2xl font-bold text-purple-700 mb-6 text-center">
          Upcoming Internships
        </h2>
        <div className="flex gap-6 overflow-x-auto py-4">
          {internships.map((i, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 20px rgba(139,92,246,0.3)",
              }}
              className="flex-shrink-0 w-64 bg-white rounded-xl shadow-md p-6"
            >
              <h3 className="font-semibold text-lg mb-2">{i.title}</h3>
              <p className="text-gray-600">Company: {i.company}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Company Logos Carousel */}
      <div className="mt-16 px-6 md:px-20">
        <h2 className="text-2xl font-bold text-purple-700 mb-6 text-center">
          Our Recruiters
        </h2>
        <div className="flex flex-wrap gap-8 justify-center overflow-x-auto py-4">
          {companies.map((c, i) => (
            <motion.div
              key={i}
              whileHover={{
                scale: 1.15,
                rotate: 5,
                boxShadow: "0px 8px 20px rgba(139, 92, 246, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex-shrink-0 w-32 h-20 bg-white rounded-lg flex items-center justify-center shadow-md p-2"
            >
              <img
                src={c.logo}
                alt={c.name}
                className="max-h-12 object-contain grayscale hover:grayscale-0 transition duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-purple-100 py-8 px-6 md:px-20 text-center">
        <p className="text-gray-700 mb-4">© 2025 TheAlumniGate</p>
        <div className="flex justify-center gap-4 text-purple-700">
          <FaFacebookF className="w-5 h-5 hover:text-blue-600 transition-colors duration-300 cursor-pointer" />
          <FaTwitter className="w-5 h-5 hover:text-blue-400 transition-colors duration-300 cursor-pointer" />
          <FaLinkedinIn className="w-5 h-5 hover:text-blue-700 transition-colors duration-300 cursor-pointer" />
        </div>
      </footer>
    </div>
  );
}
