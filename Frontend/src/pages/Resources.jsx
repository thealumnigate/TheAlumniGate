import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { useToast } from "../hooks/useToast";
import ToastContainer from "../components/ToastContainer";
import {
  FaCode,
  FaLaptopCode,
  FaMicrochip,
  FaBolt,
  FaCogs,
  FaHardHat,
  FaUsers,
  FaFileAlt,
  FaComments,
  FaGraduationCap,
  FaChartLine,
  FaBrain,
  FaBookOpen,
} from "react-icons/fa";

const Resources = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();
  const toast = useToast();

  // Show welcome message whenever resources page is visited
  useEffect(() => {
    // Small delay to ensure the page is fully loaded
    setTimeout(() => {
      toast.success("You still have time to learn a lot!", {
        autoClose: 3000, // Popup stays for 3 seconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }, 300);
  }, [location.pathname]); // Run when pathname changes
  
  const resourceCategories = [
    {
      title: "Placement Preparation",
      description: "Complete guide for placement preparation",
      icon: <FaGraduationCap className="w-8 h-8" />,
      link: "/resources/placement-prep",
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Data Structures & Algorithms",
      description: "Master DSA concepts and practice problems",
      icon: <FaCode className="w-8 h-8" />,
      link: "/resources/dsa-prep",
      color: "from-green-500 to-green-600",
    },
    {
      title: "Computer Science Engineering",
      description: "Core CS subjects and technical concepts",
      icon: <FaLaptopCode className="w-8 h-8" />,
      link: "/resources/cse-prep",
      color: "from-purple-500 to-purple-600",
    },
    {
      title: "Electronics & Communication",
      description: "ECE fundamentals and advanced topics",
      icon: <FaMicrochip className="w-8 h-8" />,
      link: "/resources/ece-prep",
      color: "from-orange-500 to-orange-600",
    },
    {
      title: "Electrical & Electronics",
      description: "EEE concepts and electrical engineering",
      icon: <FaBolt className="w-8 h-8" />,
      link: "/resources/eee-prep",
      color: "from-yellow-500 to-yellow-600",
    },
    {
      title: "Mechanical Engineering",
      description: "Mechanical concepts and design principles",
      icon: <FaCogs className="w-8 h-8" />,
      link: "/resources/mech-prep",
      color: "from-red-500 to-red-600",
    },
    {
      title: "Civil Engineering",
      description: "Civil engineering fundamentals",
      icon: <FaHardHat className="w-8 h-8" />,
      link: "/resources/civil-prep",
      color: "from-gray-500 to-gray-600",
    },
    {
      title: "HR & Technical Rounds",
      description: "Interview preparation and communication",
      icon: <FaUsers className="w-8 h-8" />,
      link: "/resources/hr-tr",
      color: "from-pink-500 to-pink-600",
    },
    {
      title: "Communication Skills",
      description: "Verbal and written communication",
      icon: <FaComments className="w-8 h-8" />,
      link: "/resources/communication",
      color: "from-teal-500 to-teal-600",
    },
    {
      title: "Product Companies",
      description: "Preparation for product-based companies",
      icon: <FaChartLine className="w-8 h-8" />,
      link: "/resources/product-companies",
      color: "from-indigo-500 to-indigo-600",
    },
    {
      title: "Service Companies",
      description: "Preparation for service-based companies",
      icon: <FaUsers className="w-8 h-8" />,
      link: "/resources/service-companies",
      color: "from-cyan-500 to-cyan-600",
    },
    {
      title: "Pseudocode",
      description: "Programming logic and pseudocode practice",
      icon: <FaBrain className="w-8 h-8" />,
      link: "/resources/pseudocode",
      color: "from-emerald-500 to-emerald-600",
    },
    {
      title: "Technical Concepts",
      description: "Core technical concepts across branches",
      icon: <FaBookOpen className="w-8 h-8" />,
      link: "/resources/technical-concepts",
      color: "from-violet-500 to-violet-600",
    },
  ];

  // Enhanced search with topics and keywords
  const getSearchableContent = (resource) => {
    const title = resource.title.toLowerCase();
    const description = resource.description.toLowerCase();
    
    // Add related topics and keywords for better search
    const topics = {
      "placement preparation": ["placement", "interview", "preparation", "hiring", "recruitment", "job", "career"],
      "data structures & algorithms": ["dsa", "data structures", "algorithms", "programming", "coding", "leetcode", "competitive programming"],
      "computer science engineering": ["cse", "computer science", "software", "programming", "coding", "cs", "computer engineering"],
      "electronics & communication": ["ece", "electronics", "communication", "embedded", "signal processing", "telecommunications"],
      "electrical & electronics": ["eee", "electrical", "electronics", "power", "circuits", "electrical engineering"],
      "mechanical engineering": ["mech", "mechanical", "design", "manufacturing", "thermodynamics", "mechanical engineering"],
      "civil engineering": ["civil", "construction", "structural", "infrastructure", "civil engineering"],
      "hr & technical rounds": ["hr", "human resources", "interview", "technical", "behavioral", "soft skills"],
      "communication skills": ["communication", "verbal", "written", "presentation", "speaking", "listening"],
      "product companies": ["product", "startup", "faang", "tech", "software", "innovation", "product management"],
      "service companies": ["service", "consulting", "outsourcing", "it services", "software services"],
      "pseudocode": ["pseudocode", "algorithm", "logic", "flowchart", "programming logic"],
      "technical concepts": ["technical", "concepts", "fundamentals", "theory", "core subjects"]
    };

    // Get related keywords for this resource
    const relatedKeywords = topics[title] || [];
    
    // Combine all searchable content
    const searchableContent = [
      title,
      description,
      ...relatedKeywords,
      // Add individual words from title and description
      ...title.split(' '),
      ...description.split(' ')
    ].join(' ');

    return searchableContent;
  };

  // Filter resources based on search query
  const filteredResources = resourceCategories.filter((resource) => {
    if (!searchQuery.trim()) return true;
    
    const searchableContent = getSearchableContent(resource);
    const query = searchQuery.toLowerCase().trim();
    
    // Check if any part of the query matches the searchable content
    return searchableContent.includes(query) ||
           query.split(' ').every(word => searchableContent.includes(word));
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen bg-transparent py-8 px-4 pt-24">
      <ToastContainer toasts={toast.toasts} removeToast={toast.removeToast} />
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white/80 dark:bg-dark-800/30 border border-gray-300/40 dark:border-gray-700/30 shadow-lg dark:shadow-none rounded-2xl p-8 backdrop-blur-sm"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
              Placement Resources
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive preparation materials and resources for placement
              interviews. Choose your area of focus and start your journey to
              success.
            </p>
          </motion.div>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="max-w-2xl mx-auto mb-12"
        >
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search by topics: DSA, CSE, ECE, programming, interview, HR, etc..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300/40 dark:border-gray-700/30 rounded-lg bg-white/80 dark:bg-white/5 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all backdrop-blur-sm"
            />
          </div>
        </motion.div>

        {/* Resources Grid */}
        {filteredResources.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              {searchQuery ? `No resources found for "${searchQuery}"` : "No resources available"}
            </p>
          </motion.div>
        ) : (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredResources.map((resource, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="group"
            >
              <Link to={resource.link}>
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 h-full border border-gray-200 dark:border-gray-700">
                  {/* Icon */}
                  <div
                    className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${resource.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {resource.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {resource.description}
                  </p>

                  {/* Arrow indicator */}
                  <div className="mt-4 flex justify-end">
                    <div className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
        )}

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-12 p-6 bg-white/50 dark:bg-gray-800/50 rounded-xl backdrop-blur-sm border border-gray-200 dark:border-gray-700"
        >
          <p className="text-gray-600 dark:text-gray-300">
            <strong className="text-gray-800 dark:text-white">Tip:</strong>{" "}
            Start with Placement Preparation for an overview, then dive into
            specific areas based on your branch and target companies.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Resources;
