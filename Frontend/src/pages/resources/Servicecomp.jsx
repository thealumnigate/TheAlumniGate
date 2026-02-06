import styles from "./Servicecomp.module.css";
import { Link } from "react-router-dom";
import Communication from "./Commuincation";
import HRandTR from "./HRandTR";

function Servicecomp() {
  const sectA = [
    "Puzzle Test",
    "Logical deductions,Logical connectives and Logical venn diagrams",
    "Data Sufficiency",
    "Decision Making",
    "Calendar,clocks",
    "Coding & decoding",
    "Letter Concept & Number concept",
    "Direction Test,Time Sequence Test",
    "Non-verbal Resoning",
    "Statements & Conclusions",
    "Statements & arguments",
    "statements & assumptions",
  ];
  const sectB = [
    "Permutations & Combinations",
    "Time,Distance & Speed",
    "Number System",
    "Time & Work",
    "Ratio & Proportion",
    "Simple Interest & Compound Interest",
    "Profit & Loss",
    "Percentages",
    "Statistics",
    "Data Interpretation",
    "Geometry(2D fig/3d fig)",
  ];
  const sectC = [
    "Reading Comprehension",
    "Vocabulary",
    "Synonyms and Antonyms",
    "Analogies",
    "Sentence Completion",
    "Idioms and Phrases",
    "One-word Substitution",
    "Error Spotting",
    "Para Jumbles / Sentence Rearrangement",
    "Fill in the Blanks",
    "Grammar and Usage",
    "Active and Passive Voice",
    "Direct and Indirect Speech",
    "Subject-Verb Agreement",
    "Tenses",
    "Articles and Prepositions",
    "Punctuation",
    "Word Formation / Derivatives",
    "Critical Reasoning / Verbal Logic",
  ];

  const branches = ["CSE&ALLIED", "ECE", "EEE", "MECH", "CIVIL", "Pseudocode"];

  const communicationRounds = {
    "Communication Round": {
      "Speaking & Listening": {
        important_topics: {
          "Self-Introduction":
            "https://www.geeksforgeeks.org/how-to-introduce-yourself-in-interview/",
          "Fluency & Pronunciation":
            "https://www.bbc.co.uk/learningenglish/english/features/pronunciation",
          "Answering HR Questions":
            "https://www.geeksforgeeks.org/top-50-hr-interview-questions/",
          "Listening Comprehension": "https://www.examenglish.com/listening/",
          "Situation-Based Questions":
            "https://www.indiabix.com/hr-interview/questions/",
        },
      },
      "Group Discussion (GD)": {
        important_topics: {
          "Current Affairs":
            "https://www.mbacrystal.com/blog/group-discussion-topics/",
          "Technology & Innovation":
            "https://www.geeksforgeeks.org/group-discussion-topics/",
          "Problem Solving & Case Studies":
            "https://www.indiabix.com/group-discussion-questions/",
          "Leadership & Teamwork":
            "https://www.careerizma.com/blog/group-discussion-tips/",
          "Effective Communication":
            "https://www.skillsyouneed.com/ips/communication-skills.html",
        },
      },
    },
  };

  return (
    <div>
      <section className={styles.round1}>
        <h2 className="text-gray-800 dark:text-gray-100">Round1 - Written Test(Multiple choice-based)</h2>
        <h3 className="text-gray-800 dark:text-gray-100">Section-A(Logical Ability)</h3>
        <div className={styles.sectA}>
          <div className={styles.placeholderImage}>🧠</div>
          <ul>
            {sectA.map((item) => (
              <li key={item}>{item}</li>
            ))}
            <li>
              {" "}
              <a href="https://www.indiabix.com/logical-reasoning/questions-and-answers/" target="_blank" rel="noopener noreferrer">
                -Practice Questions
              </a>
            </li>
          </ul>
        </div>
        <h3 className="text-gray-800 dark:text-gray-100">Section-B(Quantitative Ability)</h3>
        <div className={styles.sectB}>
          <ul>
            {sectB.map((item) => (
              <li key={item}>{item}</li>
            ))}
            <li>
              <a href="https://www.indiabix.com/aptitude/questions-and-answers/" target="_blank" rel="noopener noreferrer">
                - Practice Questions
              </a>
            </li>
          </ul>
          <div className={styles.placeholderImage}>📊</div>
        </div>
        <h3 className="text-gray-800 dark:text-gray-100">Section-C(Verbal Ability)</h3>
        <div className={styles.sectC}>
          <div className={styles.placeholderImage}>📚</div>
          <ul>
            {sectC.map((item) => (
              <li key={item}>{item}</li>
            ))}
            <li>
              <a href="https://www.indiabix.com/verbal-ability/questions-and-answers/" target="_blank" rel="noopener noreferrer">
                Practice Ques
              </a>
            </li>
          </ul>
        </div>
        <h3 className="text-gray-800 dark:text-gray-100">Section-D(Technical Test)</h3>
        <div className={styles.sectD}>
          <div className={styles.branchcards}>
            {branches.map((item) => (
              <Link
                key={item}
                to={item === "Pseudocode" ? `/resources/pseudocode` : `/resources/${item.toLowerCase().replace("&", "-")}-prep`}
              >
                <div>{item}</div>
              </Link>
            ))}
          </div>
          <div className={styles.placeholderImage}>⚙️</div>
        </div>
      </section>
      <section>
        <h2 className="text-gray-800 dark:text-gray-100">Round2 - Coding Test</h2>
        <div className={styles.dsa}>
          Data Structures and Algorithms
          <Link to="/resources/dsa-prep">
            <button>Know more</button>
          </Link>
        </div>
      </section>
      <section>
        <h2 className="text-gray-800 dark:text-gray-100">Round 3 - Communication Round</h2>
        <div className={styles.commround}>
          <div className={styles.communicationContent}>
            {Object.entries(communicationRounds["Communication Round"]).map(([section, details]) => (
              <div key={section} className={styles.commSection}>
                <h3 className="text-gray-800 dark:text-gray-100">{section}</h3>
                <ul>
                  {Object.entries(details.important_topics).map(([topic, link]) => (
                    <li key={topic}>
                      <a href={link} target="_blank" rel="noopener noreferrer">
                        {topic}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className={styles.placeholderImage}>💬</div>
        </div>
      </section>
      <section>
        <h2 className="text-gray-800 dark:text-gray-100">Round 4</h2>
        <div className={styles.hrandtr}>
          <div className={styles.placeholderImage}>🎯</div>
          <HRandTR></HRandTR>
        </div>
      </section>
    </div>
  );
}
export default Servicecomp;
