import styles from "./Placementprep.module.css";
import { useState } from "react";
import { motion } from "framer-motion";
import Productcomp from "./Productcomp";
import Servicecomp from "./Servicecomp";

function Placementprep() {
  const [activeTab, setActiveTab] = useState("service");
  return (
    <div className="min-h-screen bg-transparent py-8 px-4 pt-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
          className="text-center mb-8"
        >
          <div className="bg-white/80 dark:bg-dark-800/30 border border-gray-300/40 dark:border-gray-700/30 shadow-lg dark:shadow-none rounded-2xl p-8 backdrop-blur-sm">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
              Placement Preparation
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Complete guide for placement preparation with resources for both service and product based companies
            </p>
          </div>
        </motion.div>

        <div className={styles.placementprep}>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={styles.companies}
          >
            <motion.button 
              onClick={() => setActiveTab("service")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={activeTab === "service" ? styles.activeButton : styles.inactiveButton}
            >
              Service Based Companies
            </motion.button>
            <motion.button 
              onClick={() => setActiveTab("product")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={activeTab === "product" ? styles.activeButton : styles.inactiveButton}
            >
              Product Based Companies
            </motion.button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {activeTab === "service" && <Servicecomp />}
            {activeTab === "product" && <Productcomp />}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Placementprep;
