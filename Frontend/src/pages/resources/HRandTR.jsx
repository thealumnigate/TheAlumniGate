import React from "react";
import styles from "./HRandTR.module.css";
import { FiExternalLink } from "react-icons/fi";

function HRandTR() {
  const hrTopics = {
    "HR Round": {
      "Personal Questions": {
        important_topics: {
          "Resource 1": "https://www.indiabix.com/hr-interview/questions-and-answers/",
          "Resource 2": "https://www.interviewbit.com/hr-interview-questions/#traditional-hr-questions",
          "Resource 3": "https://www.simplilearn.com/personal-interview-questions-article",
        }
      },
      "Behavioral & Soft Skills": {
        important_topics: {
          "Brain Teasers": "https://www.interviewbit.com/hr-interview-questions/#brainteasers-hr-questions",
          "Opinion Based": "https://www.interviewbit.com/hr-interview-questions/#opinion-based-hr-questions",
          "Salary Related": "https://www.interviewbit.com/hr-interview-questions/#salary-hr-questions",
        }
      }
    },
    "Technical Round (TR)": {
      "Projects & Internship Discussion": {
        important_topics: {
          "Resource 1": "https://www.interviewbit.com/technical-interview-questions/",
          "Resource 2": "https://prepinsta.com/interview-preparation/technical-interview-questions/",
          "Resource 3": "https://www.knowledgehut.com/interview-questions/technical-interview-questions",
        }
      }
    }
  };

  return (
    <div className={styles.hrandtr}>
      {Object.entries(hrTopics).map(([round, sections]) => (
        <div key={round} className={styles.categoryCard}>
          <h3>{round}</h3>
          {Object.entries(sections).map(([section, details]) => (
            <div key={section}>
              <h4>{section}</h4>
              <ul>
                {Object.entries(details.important_topics).map(([topic, link]) => (
                  <li key={topic}>
                    <a href={link} target="_blank" rel="noopener noreferrer">
                      {topic} <FiExternalLink size={12} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}
      <div className={styles.categoryCard}>
        <h3>Additional Resources</h3>
        <ul>
          <li><strong>Technical questions:</strong> Can refer to the branch wise technical questions</li>
        </ul>
      </div>
    </div>
  );
}

export default HRandTR;
