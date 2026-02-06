import { Link } from "react-router-dom";
import styles from "./Productcomp.module.css";
import HRandTR from "./HRandTR";
import { IoMdLink } from "react-icons/io";
import { IoIosLink } from "react-icons/io";
import { FiExternalLink } from "react-icons/fi";

function Productcomp() {
  const pbcsAptitude = {
    "Product Based Companies - Aptitude": {
      important_topics: {
        "Number System": "https://www.indiabix.com/aptitude/numbers/",
        Percentages: "https://www.indiabix.com/aptitude/percentage/",
        "Ratio & Proportion":
          "https://www.indiabix.com/aptitude/ratio-and-proportion/",
        "Profit & Loss": "https://www.indiabix.com/aptitude/profit-and-loss/",
        "Time, Speed & Distance":
          "https://www.indiabix.com/aptitude/time-and-distance/",
      },
    },
  };

  const pbcsLogical = {
    "Product Based Companies - Logical Reasoning": {
      important_topics: {
        "Coding-Decoding":
          "https://www.indiabix.com/logical-reasoning/logical-deduction/",
        "Logical Games":
          "https://www.indiabix.com/logical-reasoning/logical-games/",
        "Data Interpretation":
          "https://www.indiabix.com/data-interpretation/questions-and-answers/",
        Analogies: "https://www.indiabix.com/logical-reasoning/analogies/",
        "Theme Detection":
          "https://www.indiabix.com/logical-reasoning/theme-detection/",
      },
    },
  };

  const pbcsVerbal = {
    "Product Based Companies - Verbal Ability": {
      important_topics: {
        "Reading Comprehension":
          "https://www.indiabix.com/verbal-ability/comprehension/",
        "Sentence Correction":
          "https://www.indiabix.com/verbal-ability/spotting-errors/",
        "Synonyms & Antonyms":
          "https://www.indiabix.com/verbal-ability/synonyms/",
        "Para Jumbles":
          "https://www.indiabix.com/verbal-ability/ordering-of-sentences/",
        "Idioms & Phrases":
          "https://www.indiabix.com/verbal-ability/idioms-and-phrases/",
      },
    },
  };

  const branches = ["CSE&ALLIED", "ECE", "EEE", "MECH", "CIVIL"];

  const pbcsSystemDesignCore = {
    "Product Based Companies - System/Application Design": {
      CSE: {
        important_topics: {
          "High Level System Design":
            "https://www.geeksforgeeks.org/system-design/what-is-high-level-design-learn-system-design/",
          "Low Level System Design":
            "https://www.geeksforgeeks.org/system-design/what-is-low-level-design-or-lld-learn-system-design/",
        },
      },
      "ECE / EEE": {
        important_topics: {
          "Embeded System Design":
            "https://www.eceinc.com/ece-expertise/embedded-system-design-and-development/",
          "Electronic System and Development":
            "https://www.eceinc.com/capabilities/electronic-system-design-development/",
        },
      },
      Mechanical: {
        important_topics: {
          "Mech Design": "https://www.youtube.com/c/MechDesign/featured",
          "Auto Cad Design":
            "https://sourcecad.com/autocad-practice-drawings-with-pdf-ebook/",
        },
      },
      Civil: {
        important_topics: {
          "Bridge and Concrete Design":
            "https://www.britannica.com/technology/bridge-engineering/Concrete",
          "Soil & Foundation Design":
            "https://www.scribd.com/document/868725235/Soil-Foundation-and-Design",
          "Surveying & Mapping":
            "https://www.nv5.com/chw-professional-consultants/what-is-surveying-and-mapping/",
        },
      },
    },
  };

  return (
    <div>
      {/* Round 1 focused on aptitude and codind skills */}
      <section>
        <h2 className="text-gray-800 dark:text-gray-100">Round 1 (Aptitude+Coding)</h2>
        <div className={styles.aptitude}>
          <div className={styles.placeholderImage}>📊</div>
          <div className={styles.apttopic}>
            <h3 className="text-gray-800 dark:text-gray-100">Important Topics for Aptitude</h3>
            <ul>
              {Object.entries(
                pbcsAptitude["Product Based Companies - Aptitude"]
                  .important_topics
              ).map(([topic, link]) => (
                <li key={topic}>
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    {topic}
                    <IoIosLink size={10} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.logical}>
          <div className={styles.logtopic}>
            <h3 className="text-gray-800 dark:text-gray-100">Important Topics for Logical Resoning</h3>
            <ul>
              {Object.entries(
                pbcsLogical["Product Based Companies - Logical Reasoning"]
                  .important_topics
              ).map(([topic, link]) => (
                <li key={topic}>
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    {topic} <IoMdLink size={10} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.placeholderImage}>🧠</div>
        </div>

        <div className={styles.verbal}>
          <div className={styles.placeholderImage}>📚</div>
          <div className={styles.vertopic}>
            <h3 className="text-gray-800 dark:text-gray-100">Important Topics for Verbal Ability</h3>
            <ul>
              {Object.entries(
                pbcsVerbal["Product Based Companies - Verbal Ability"]
                  .important_topics
              ).map(([topic, link]) => (
                <li key={topic}>
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    {topic} <IoIosLink size={10} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <h3 className="text-gray-800 dark:text-gray-100">Coding Test</h3>
        <div className={styles.dsaround}>
          <Link to="/resources/dsa-prep">
            <div className={styles.dsa}>Data Structures and Algorithms</div>
          </Link>
          <div className={styles.placeholderImage}>💻</div>
        </div>
      </section>

      {/* Round 2 technical knowledge for mostly core roles */}
      <section>
        <h2 className="text-gray-800 dark:text-gray-100">Round 2 Technical (For Core Roles)</h2>
        <div className={styles.pbcround2}>
          <div className={styles.placeholderImage}>⚙️</div>
          <div className={styles.branchcards}>
            {branches.map((item) => (
              <Link
                to={`/resources/${item.toLowerCase().replace("&", "-")}-prep`}
              >
                <div key={item}>{item}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Round 3 System design */}
      <section>
        <h2 className="text-gray-800 dark:text-gray-100">Round 3 System/Application Design Rounds (Core + CSE)</h2>
        {Object.keys(pbcsSystemDesignCore).map((section) => (
          <div key={section}>
            {/* Branches (CSE, ECE/EEE, Mech, Civil) */}
            {Object.keys(pbcsSystemDesignCore[section]).map((branch) => (
              <div key={branch}>
                <h3 className="text-gray-800 dark:text-gray-100">{branch}</h3>
                <ul>
                  {Object.entries(
                    pbcsSystemDesignCore[section][branch].important_topics
                  ).map(([topic, link]) => (
                    <li key={topic}>
                      <a href={link} target="_blank" rel="noopener noreferrer">
                        {topic} <FiExternalLink size={10} />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}
      </section>

      {/* Round 4 TR and HR */}

      <section>
        <h2 className="text-gray-800 dark:text-gray-100">Round 4 (HR and TR)</h2>
        <HRandTR></HRandTR>
      </section>
    </div>
  );
}
export default Productcomp;
