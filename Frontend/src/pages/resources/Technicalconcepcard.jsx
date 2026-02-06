import styles from "./Technicalconcepcard.module.css";
import { FiExternalLink } from "react-icons/fi";

function Techincalconcepcard({subjects}){
    return (
        <div>
            {Object.entries(subjects).map(([subject, details]) => (
        <div key={subject} className={styles.concepcard}>
          <h2>{subject}</h2>
          <ul>
            {Object.entries(details.important_topics).map(([topic, link]) => (
              <li key={topic}>
                <a href={link} target="_blank" rel="noopener noreferrer">
                  {topic} <FiExternalLink size={10}/>
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
        </div>
    )
}

export default Techincalconcepcard;