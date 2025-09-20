import styles from './Home.module.css';
import hero from '../assets/herobluetheme.jpg';
import { Link } from 'react-router-dom';

const companies = [
  {
    company_name: "Google",
    job_role: "Software Engineer",
    salary: "25 - 35 LPA",
    eligibility_branches: "CSE, IT, ECE",
  },
  {
    company_name: "Microsoft",
    job_role: "Software Developer",
    salary: "20 - 30 LPA",
    eligibility_branches: "CSE, IT",
  },
  {
    company_name: "Amazon",
    job_role: "Backend Developer",
    salary: "22 - 32 LPA",
    eligibility_branches: "CSE, IT, ECE",
  },
];

function Home() {
  return (
    <div>
      <main>
        <div className={styles.hero} style={{ backgroundImage: `url(${hero})` }}>
          <div className={styles.motto}>Opportunities don't happen. You create them</div>
        </div>
      </main>

      <section>
        <h2 className={styles.sectionHeading}>Current Jobs</h2>

        <div className={styles.cardsContainer}>
          {companies.map((company, index) => (
            <div key={index} className={styles.card}>
              <h3>{company.company_name}</h3>
              <p><strong>Role:</strong> {company.job_role}</p>
              <p><strong>Salary:</strong> {company.salary}</p>
              <p><strong>Eligible Branches:</strong> {company.eligibility_branches}</p>
              <Link to="/auth"><button className={styles.applyBtn}>SignIn to Apply</button></Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
