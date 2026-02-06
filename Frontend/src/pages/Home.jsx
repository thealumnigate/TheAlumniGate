import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import TrueFocus from "../components/TrueFocus";

const companies = [
  {
    name: "Google",
    logo: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
  },
  {
    name: "Microsoft",
    logo: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31",
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
    logo: "https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png",
  },
  {
    name: "Netflix",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
  },
  {
    name: "Meta",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
  },
  {
    name: "Adobe",
    logo: "https://www.adobe.com/content/dam/cc/icons/Adobe_Corporate_Horizontal_Red_HEX.svg",
  },
  {
    name: "IBM",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
  },
  {
    name: "MassMutual",
    logo: "/massmutual.png",
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
  logo: "https://upload.wikimedia.org/wikipedia/commons/b/b9/2023_Facebook_icon.svg",
  date: "28th Oct 2025",
  role: "Software Engineer Intern",
};

const featuredOpportunities = [
  {
    name: "Google",
    code: "GOOG",
    logo: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
    role: "Software Engineer",
    description: "Join Google's engineering team and work on cutting-edge technology projects that impact billions of users worldwide.",
  },
  {
    name: "Microsoft",
    code: "MSFT",
    logo: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31",
    role: "Product Manager",
    description: "Shape the future of technology as a Product Manager at Microsoft, driving innovation across cloud and productivity solutions.",
  },
  {
    name: "Amazon",
    code: "AMZN",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    role: "Data Scientist",
    description: "Analyze massive datasets and build machine learning models that power Amazon's global operations and customer experience.",
  },
  {
    name: "MassMutual",
    code: "MASSMUTUAL",
    logo: "/massmutual.png",
    role: "Software Development Engineer",
    description: "Build innovative financial solutions and work on digital transformation projects at one of America's leading mutual life insurance companies.",
  },
  {
    name: "Tesla",
    code: "TSTEEL",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",
    role: "Autopilot Engineer",
    description: "Contribute to the future of autonomous driving technology and help accelerate the world's transition to sustainable transport.",
  },
  {
    name: "Apple",
    code: "INTEL",
    logo: "https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png",
    role: "iOS Developer",
    description: "Create beautiful and intuitive iOS applications that delight users and push the boundaries of mobile technology.",
  },
];
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

  return (
    <div className="bg-transparent min-h-screen text-gray-900 dark:text-gray-200">

      {isLoggedIn && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="px-6 pt-16 text-center"
        >
          <p className="text-sm text-gray-600 dark:text-gray-400">Welcome, {student?.name}</p>
        </motion.div>
      )}

      {/* Hero Section with TrueFocus Component */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative px-6 md:px-20 pt-12 text-center overflow-hidden"
      >
        {/* TrueFocus Component */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <TrueFocus 
            sentence="Alumni Gate"
            manualMode={false}
            blurAmount={5}
            borderColor="#0ea5e9"
            animationDuration={2}
            pauseBetweenAnimations={1}
          />
        </motion.div>
      </motion.div>

      {/* Highlights row (transparent) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 md:px-12 lg:px-20 mt-12 max-w-7xl mx-auto">
        <div className="p-6 rounded-xl text-center bg-white/80 dark:bg-dark-800/30 backdrop-blur-sm border border-gray-300/40 dark:border-gray-700/30 shadow-lg dark:shadow-none">
          <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Top Companies</h2>
          <p className="text-gray-600 dark:text-gray-400">Explore all top recruiters visiting our campus this year.</p>
        </div>
        <div className="p-6 rounded-xl text-center bg-white/80 dark:bg-dark-800/30 backdrop-blur-sm border border-gray-300/40 dark:border-gray-700/30 shadow-lg dark:shadow-none">
          <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Internships</h2>
          <p className="text-gray-600 dark:text-gray-400">Discover amazing internships to boost your skills and CV.</p>
        </div>
        <div className="p-6 rounded-xl text-center bg-white/80 dark:bg-dark-800/30 backdrop-blur-sm border border-gray-300/40 dark:border-gray-700/30 shadow-lg dark:shadow-none">
          <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Placement Stats</h2>
          <div className="w-full mt-2">
            <div className="bg-gray-200/60 dark:bg-gray-700/30 rounded-full h-1 w-full">
              <motion.div className="bg-primary-500 dark:bg-primary-400 h-1 rounded-full" initial={{ width: 0 }} animate={{ width: "85%" }} transition={{ duration: 1.5 }} />
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">85% of students placed last year</p>
          </div>
        </div>
      </div>

      {/* Upcoming Internships - auto scrolling row with edge fades */}
      <div className="mt-16 px-3 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 text-center">Upcoming Internships</h2>
        <div className="relative overflow-hidden py-2">
          {/* edge fades */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-32 md:w-40 bg-gradient-to-r from-white via-white/50 to-transparent dark:from-black dark:via-black/50 dark:to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-32 md:w-40 bg-gradient-to-l from-white via-white/50 to-transparent dark:from-black dark:via-black/50 dark:to-transparent z-10" />
          <motion.div
            className="flex gap-8"
            animate={{ x: [0, -1200] }}
            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          >
            {[...internships, ...internships, ...internships].map((i, idx) => (
              <div key={idx} className="flex-shrink-0 w-80 md:w-96 rounded-2xl p-6 border border-gray-300/40 dark:border-gray-700/30 bg-white/80 dark:bg-dark-800/30 backdrop-blur-lg shadow-lg dark:shadow-none">
                <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-gray-100">{i.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">Company: {i.company}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Our Recruiters - auto scrolling logos with edge fades */}
      <div className="mt-16 px-3 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 text-center">Our Recruiters</h2>
        <div className="relative overflow-hidden py-4">
          {/* edge fades */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-32 md:w-40 bg-gradient-to-r from-white via-white/50 to-transparent dark:from-black dark:via-black/50 dark:to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-32 md:w-40 bg-gradient-to-l from-white via-white/50 to-transparent dark:from-black dark:via-black/50 dark:to-transparent z-10" />
          <motion.div
            className="flex gap-12 items-center"
            animate={{ x: [-2400, 0] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear", repeatType: "loop" }}
          >
            {[...companies, ...companies, ...companies, ...companies].map((c, i) => (
              <div key={i} className="flex-shrink-0 w-40 md:w-48 h-24 rounded-xl flex items-center justify-center p-3 border border-gray-300/50 dark:border-white/20 bg-white/90 dark:bg-white backdrop-blur-md shadow-md dark:shadow-none">
                <img
                  src={c.logo}
                  alt={c.name}
                  className="max-h-16 max-w-full object-contain opacity-90 hover:opacity-100 transition duration-300"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.style.display = "none";
                    e.target.parentNode.innerHTML = `<div class="text-gray-600 dark:text-gray-400 text-sm font-semibold">${c.name}</div>`;
                  }}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Featured Cards Carousel (hero-style) */}
      <div className="mt-20 px-3 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 text-center">Featured Opportunities</h2>
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-8"
            animate={{ x: [0, -1400] }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          >
            {[...featuredOpportunities, ...featuredOpportunities].map((c, i) => (
              <motion.div
                key={`${c.name || i}-${i}`}
                whileHover={{ scale: 1.04 }}
                className="flex-shrink-0 w-[380px] md:w-[420px] rounded-3xl p-6 border border-gray-300/40 dark:border-white/15 bg-white/80 dark:bg-transparent backdrop-blur-lg relative shadow-lg dark:shadow-none"
              >
                <div className="absolute -z-10 w-24 h-24 rounded-full bg-blue-500/20 blur-2xl -top-6 -left-6" />
                <div className="absolute -z-10 w-24 h-24 rounded-full bg-cyan-400/10 blur-2xl -bottom-6 -right-6" />
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-white dark:bg-white border border-gray-300/50 dark:border-white/10 p-2 flex items-center justify-center shadow-sm">
                    <img src={c.logo} alt={c.name} className="max-w-full max-h-full object-contain" />
                  </div>
                  <div className="text-left">
                    <p className="text-gray-900 dark:text-white font-bold text-lg">{c.name || "Company"}</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{c.role || "Featured Role"}</p>
                  </div>
                </div>
                <div className="mt-4 text-left">
                  <p className="text-gray-700 dark:text-gray-300 text-sm line-clamp-3">{c.description}</p>
                </div>
                <div className="mt-5 flex gap-3">
                  <a href={`/companies/${c.code}`} className="px-4 py-2 rounded-xl bg-primary-600 dark:bg-white/80 text-white dark:text-gray-900 text-sm font-semibold hover:bg-primary-700 dark:hover:bg-white shadow-sm">View</a>
                  <a href={`/apply/${c.code}`} className="px-4 py-2 rounded-xl border border-gray-400 dark:border-white/20 text-gray-700 dark:text-white/80 hover:text-gray-900 dark:hover:text-white hover:border-gray-500 dark:hover:border-white/40 text-sm shadow-sm">Apply</a>
                </div>
              </motion.div>
            ))}
          </motion.div>
          {/* edge fades */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-32 md:w-40 bg-gradient-to-r from-white via-white/50 to-transparent dark:from-black dark:via-black/50 dark:to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-32 md:w-40 bg-gradient-to-l from-white via-white/50 to-transparent dark:from-black dark:via-black/50 dark:to-transparent" />
        </div>
      </div>

      {/* ATS Score Checker CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="mt-20 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto"
      >
        <div className="bg-white/80 dark:bg-dark-800/30 border border-gray-300/40 dark:border-gray-700/30 shadow-lg dark:shadow-none rounded-2xl p-8 text-center backdrop-blur-sm">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Ready to Apply?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Make sure your resume is optimized for Applicant Tracking Systems (ATS) to increase your chances of getting noticed by recruiters.
          </p>
          <motion.a
            href="https://enhancv.com/resources/resume-checker/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ backgroundColor: '#0ea5e9' }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#0284c7'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#0ea5e9'}
            className="inline-flex items-center gap-2 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Check Your ATS Score
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </motion.a>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
            Powered by Enhancv's AI Resume Checker - Free and Fast
          </p>
        </div>
      </motion.div>

      {/* Footer */}
      <footer className="border-t border-gray-300/40 dark:border-gray-700/30 py-8 px-6 md:px-12 lg:px-20 text-center max-w-7xl mx-auto">
        <div className="flex justify-center mb-4">
          <img src="/ag logo bw.png" alt="TheAlumniGate Logo" className="h-10 w-auto object-contain brightness-0 invert-0 dark:brightness-100 dark:invert-0 opacity-60" />
        </div>
        <p className="text-gray-400 dark:text-gray-500 mb-4">© 2025 TheAlumniGate</p>
        <div className="flex justify-center gap-4 text-gray-600 dark:text-gray-400">
          <FaFacebookF className="w-5 h-5 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-300 cursor-pointer" />
          <FaTwitter className="w-5 h-5 hover:text-primary-400 dark:hover:text-primary-300 transition-colors duration-300 cursor-pointer" />
          <FaLinkedinIn className="w-5 h-5 hover:text-primary-600 dark:hover:text-primary-500 transition-colors duration-300 cursor-pointer" />
        </div>
      </footer>
    </div>
  );
}
