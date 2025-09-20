import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./CompaniesList.module.css";
import {useNavigate} from "react-router-dom";
import {Link} from "react-router-dom";

const companies = [
  {
    company_name: "Google",
    job_role: "Software Engineer",
    salary: "25 - 35 LPA",
    application_code: "goog",
    eligibility_branches: "CSE, IT, CSD, CSM, ECE",
    eligibility: { min_cgpa: 8.5, max_backlogs: 0, internships: 1 },
    interest: "fsd",
    deadline: "2025-09-30",
    openings: "15",
    required_skills: "Data Structures, Algorithms, C++, Python, System Design",
    website: "https://careers.google.com/",
    overview:
      "Google is a multinational company specializing in internet-related services and products, including online advertising, search engine, cloud computing, software, and hardware.",
  },
  {
    company_name: "Microsoft",
    job_role: "Software Development Engineer",
    salary: "22 - 30 LPA",
    application_code: "msft",
    eligibility_branches: "CSE, IT, CSD, CSM, ECE, EEE",
    eligibility: { min_cgpa: 8.0, max_backlogs: 0, internships: 1 },
    interest: "ml",
    deadline: "2025-10-01",
    openings: "25",
    required_skills: "Java, C#, .NET, Cloud Computing, Algorithms",
    website: "https://careers.microsoft.com/",
    overview:
      "Microsoft develops, licenses, and supports a wide range of software products, services, and devices. Its flagship products include the Windows operating system, Office suite, and Azure cloud platform.",
  },
  {
    company_name: "Amazon",
    job_role: "SDE-1",
    salary: "20 - 28 LPA",
    application_code: "amzn",
    eligibility_branches: "CSE, IT, CSD, CSM, ECE, EEE, Mechanical",
    eligibility: { min_cgpa: 7.5, max_backlogs: 0, internships: 1 },
    interest: "ds",
    deadline: "2025-10-07",
    openings: "40",
    required_skills: "Problem Solving, Data Structures, Java, Python, AWS",
    website: "https://www.amazon.jobs/",
    overview:
      "Amazon is a global e-commerce and cloud computing company. Its services include online retail, AWS cloud services, and AI innovations like Alexa.",
  },
];

function CompaniesList() {
  const location = useLocation();
  const filters = location.state || {};
  //const navigate=useNavigate();

  const [expandedIndex, setExpandedIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const toggleReadMore = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  // Filter logic
  const filteredCompanies = companies.filter((company) => {
    const matchesBranch =
      filters.branch && filters.branch !== "select"
        ? company.eligibility_branches.includes(filters.branch)
        : true;

    const matchesCgpa = filters.cgpa
      ? company.eligibility.min_cgpa <= parseFloat(filters.cgpa)
      : true;

    const matchesBacklogs = filters.backlogs
      ? company.eligibility.max_backlogs >= parseInt(filters.backlogs)
      : true;

    const matchesInterest =
      filters.interest && filters.interest !== "select"
        ? company.interest === filters.interest
        : true;

     const matchesSearch = searchQuery
      ? company.company_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        company.job_role.toLowerCase().includes(searchQuery.toLowerCase()) ||
        company.required_skills.toLowerCase().includes(searchQuery.toLowerCase())
      : true;

    return (matchesBranch && matchesCgpa && matchesBacklogs && matchesInterest && matchesSearch);
  });

  // function handleonclick(application_code){
  //       navigate("/applicationform");
  // }


  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Matched Companies</h1>

      <div className={styles.searchBox}>
  <input
    type="text"
    placeholder="Search by company, role, or skills..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    onKeyDown={(e) => {
      if (e.key === "Enter") {
        setSearchQuery(searchTerm); // Trigger search on Enter
      }
    }}
    className={styles.searchInput}
  />
  <button
    onClick={() => setSearchQuery(searchTerm)}
    className={styles.searchBtn}>
    Search
  </button>
</div>

      <div className={styles.cardsContainer}>
        {filteredCompanies.length > 0 ? (
          filteredCompanies.map((company, index) => (
            <div key={index} className={styles.card}>
              <h2 className={styles.companyName}>{company.company_name}</h2>
              <h4 className={styles.jobRole}>{company.job_role}</h4>
              <p>
                <b>Salary:</b> {company.salary}
              </p>
              <p>
                <b>Application Code: </b>
                {company.application_code}
              </p>
              <p>
                <b>Eligibility:</b> {company.eligibility_branches} | Min CGPA:{" "}
                {company.eligibility.min_cgpa}, Backlogs Allowed:{" "}
                {company.eligibility.max_backlogs}, Internships:{" "}
                {company.eligibility.internships}
              </p>
              <p>
                <b>Deadline:</b> {company.deadline}
              </p>
              <p>
                <b>Openings: </b>
                {company.openings}
              </p>
              <p>
                <b>Skills:</b> {company.required_skills}
              </p>
              <p>
                <b>Overview:</b>{" "}
                {expandedIndex === index
                  ? company.overview
                  : `${company.overview.substring(0, 100)}...`}
                <button
                  onClick={() => toggleReadMore(index)}
                  className={styles.readMoreBtn}
                >
                  {expandedIndex === index ? "Read Less" : "Read More"}
                </button>
              </p>

              <a
                href={company.website}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.careerLink}
              >
                Visit Careers Page
              </a>
              <Link to="/applicationform"><button className={styles.applybtn}>
                Apply
              </button></Link>
            </div>
          ))
        ) : (
          <p className={styles.noResults}>No companies matched your filters.</p>
        )}
      </div>
    </div>
  );
}

export default CompaniesList;
