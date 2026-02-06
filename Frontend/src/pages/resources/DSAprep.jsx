import React from "react";
import { motion } from "framer-motion";
import styles from "./DSAprep.module.css";

const DSASection = () => {
  // Syllabus data with optional PDF link for each section
  const syllabus = {
    Pattern: {
      topics: ["Star Patterns", "Number Patterns", "Pyramid Patterns", "Inverted Patterns"],
      link:"https://polyester-lake-5e9.notion.site/27c874a5bd1b812fb5ffe0f544bad8a4?v=27c874a5bd1b81fa82d2000cfe72d51e",
    },

    Basic: {
      topics: ["Arrays", "Strings", "Linked Lists", "Stacks", "Queues"],
      link: "https://polyester-lake-5e9.notion.site/Basic-DSA-27b874a5bd1b80bba361ed38ae0ed9e8",
    },
    
    "Recursion/Backtracking": {
      topics: [
        "Basic Recursion",
        "Recursion with Arrays",
        "Backtracking Problems",
        "N-Queens Problem",
        "Maze Solving",
      ],
      link: "https://phrygian-engine-071.notion.site/27bd82b7fcc080318e22d1a0c896fea5?v=27bd82b7fcc08008a5a0000c07e43230",
    },
    Medium: {
      topics: ["Binary Trees", "Binary Search Trees", "Hashing", "Heap / Priority Queue", "Sorting Algorithms"],
     link:"https://polyester-lake-5e9.notion.site/MEDIUM-DSA-27c874a5bd1b8142a4f5f1ea0d0d171b?pvs=73",
       },
    Graphs: {
      topics: ["Graph Representation", "BFS / DFS", "Shortest Path Algorithms", "Minimum Spanning Tree", "Topological Sorting"],
      link:"https://polyester-lake-5e9.notion.site/27c874a5bd1b8140853beec84976e728?v=27c874a5bd1b81289b84000cff62c1ee",
    },
    "Dynamic Programming": {
      topics: [
        "Fibonacci / Recurrence Relations",
        "Knapsack Problems",
        "Longest Common Subsequence",
        "Matrix Chain Multiplication",
        "DP on Grids / Paths",
      ],
      link:"https://polyester-lake-5e9.notion.site/27c874a5bd1b81a6b8f6c58addccebc6?v=27c874a5bd1b81afa794000c9722889c",
    },
    Advanced: {
      topics: ["Advanced Graph Algorithms", "Segment Trees / Fenwick Trees", "Trie", "Disjoint Set / Union-Find", "Greedy Algorithms"],
      link:"https://polyester-lake-5e9.notion.site/27c874a5bd1b80418597c8f55418ce3b?v=27c874a5bd1b80b3a9bc000c6d9c3141"
    },
  };

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
              Data Structures & Algorithms
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Master DSA concepts and practice problems with comprehensive study materials
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          {Object.entries(syllabus).map(([section, data], index) => (
            <motion.div
              key={section}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className={styles.dsacard}
            >
              <h2>{section}</h2>
              <div className={styles.dsaSection}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                  {data.topics.map((topic, topicIndex) => (
                    <div key={topicIndex} className={styles.dsatopic}>{topic}</div>
                  ))}
                </div>
                {/* custom Notion template link that can be duplicated and edited*/}
                {data.link && (
                  <div className={styles.notionlink}>
                    <a 
                      href={data.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      Duplicate Notion Template
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default DSASection;
