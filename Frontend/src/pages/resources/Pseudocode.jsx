import React from "react";
import styles from "./Pseudocode.module.css";

function Pseudocode() {
  const pseudocodeTopics = {
    "Basic Programming Logic": {
      topics: [
        "Variables and Data Types",
        "Input and Output Operations",
        "Arithmetic Operations",
        "Conditional Statements (if-else)",
        "Loops (for, while, do-while)",
        "Arrays and Lists",
        "Functions and Procedures",
      ],
      link: "https://www.geeksforgeeks.org/pseudocode/",
    },
    "Algorithm Design": {
      topics: [
        "Problem Analysis",
        "Algorithm Steps",
        "Flowchart Design",
        "Time and Space Complexity",
        "Algorithm Efficiency",
        "Recursive Algorithms",
        "Iterative Algorithms",
      ],
      link: "https://www.geeksforgeeks.org/algorithm-design/",
    },
    "Data Structure Operations": {
      topics: [
        "Array Operations (Insert, Delete, Search)",
        "Linked List Operations",
        "Stack Operations (Push, Pop, Peek)",
        "Queue Operations (Enqueue, Dequeue)",
        "Tree Traversal",
        "Graph Traversal",
        "Hash Table Operations",
      ],
      link: "https://www.geeksforgeeks.org/data-structures/",
    },
    "Common Algorithms": {
      topics: [
        "Sorting Algorithms (Bubble, Selection, Insertion)",
        "Searching Algorithms (Linear, Binary)",
        "String Manipulation",
        "Mathematical Algorithms",
        "Pattern Matching",
        "Dynamic Programming",
        "Greedy Algorithms",
      ],
      link: "https://www.geeksforgeeks.org/fundamentals-of-algorithms/",
    },
  };

  return (
    <div className={styles.pseudocode}>
      <h1>Pseudocode & Programming Logic</h1>
      <p className={styles.description}>
        Master the fundamentals of programming logic and algorithm design
        through pseudocode. These concepts are essential for technical
        interviews and coding assessments.
      </p>

      {Object.entries(pseudocodeTopics).map(([section, data]) => (
        <div key={section} className={styles.sectionCard}>
          <h2>{section}</h2>
          <div className={styles.topicsList}>
            {data.topics.map((topic, index) => (
              <div key={index} className={styles.topicItem}>
                {topic}
              </div>
            ))}
          </div>
          {data.link && (
            <div className={styles.resourceLink}>
              <a href={data.link} target="_blank" rel="noopener noreferrer">
                Learn More <span>→</span>
              </a>
            </div>
          )}
        </div>
      ))}

      <div className={styles.tipsSection}>
        <h2>Tips for Pseudocode Writing</h2>
        <ul>
          <li>Start with understanding the problem clearly</li>
          <li>Break down the problem into smaller steps</li>
          <li>Use clear, simple language</li>
          <li>Include input, processing, and output steps</li>
          <li>Test your logic with sample inputs</li>
          <li>Practice converting pseudocode to actual code</li>
        </ul>
      </div>
    </div>
  );
}

export default Pseudocode;
