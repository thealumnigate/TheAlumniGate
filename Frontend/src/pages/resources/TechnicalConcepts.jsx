import React from "react";
import Technicalconcepcard from "./Technicalconcepcard";

function TechnicalConcepts() {
  const allTechnicalConcepts = {
    "General Technical Concepts": {
      "Programming Fundamentals": {
        important_topics: {
          "Variables & Data Types":
            "https://www.geeksforgeeks.org/programming-fundamentals/",
          "Control Structures":
            "https://www.geeksforgeeks.org/control-structures/",
          "Functions & Modules": "https://www.geeksforgeeks.org/functions/",
          "Object-Oriented Programming":
            "https://www.geeksforgeeks.org/object-oriented-programming/",
          "Error Handling": "https://www.geeksforgeeks.org/error-handling/",
        },
      },
      "System Design Basics": {
        important_topics: {
          Scalability:
            "https://www.geeksforgeeks.org/system-design/what-is-scalability/",
          "Load Balancing":
            "https://www.geeksforgeeks.org/system-design/load-balancer/",
          Caching:
            "https://www.geeksforgeeks.org/system-design/what-is-caching/",
          "Database Design":
            "https://www.geeksforgeeks.org/system-design/database-design/",
          "API Design":
            "https://www.geeksforgeeks.org/system-design/api-design/",
        },
      },
      "Software Engineering": {
        important_topics: {
          "Software Development Life Cycle":
            "https://www.geeksforgeeks.org/software-development-life-cycle/",
          "Version Control": "https://www.geeksforgeeks.org/version-control/",
          Testing: "https://www.geeksforgeeks.org/software-testing/",
          "Code Quality": "https://www.geeksforgeeks.org/code-quality/",
          Documentation:
            "https://www.geeksforgeeks.org/software-documentation/",
        },
      },
    },
  };

  const subjects = allTechnicalConcepts["General Technical Concepts"];

  return (
    <div>
      <h1>Technical Concepts</h1>
      <p
        style={{
          textAlign: "center",
          marginBottom: "2rem",
          color: "#6b7280",
          fontSize: "1.1rem",
        }}
      >
        Core technical concepts that are essential for technical interviews
        across all domains.
      </p>
      <Technicalconcepcard subjects={subjects}></Technicalconcepcard>
    </div>
  );
}

export default TechnicalConcepts;
