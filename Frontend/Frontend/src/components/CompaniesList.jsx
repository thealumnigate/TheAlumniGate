import styles from "./CompaniesList.module.css";

function CompaniesList() {
  return (
    <div>
      <div className={styles.searchContainer}>
        <input
          type="text"
          htmlFor="search"
          className={styles.searchInput}
          placeholder="enter company name"
        />
        <button className={styles.searchBtn}>Search</button>
      </div>
      <div className={styles.filter}>
        <p>Filter by</p>
        <select name="filter" id="filter">
          <option value="">--select--</option>
          <option value=""></option>
          <option value=""></option>
        </select>
      </div>
      <div>
        <div className={styles.companiesCards}>
        <div className={styles.card}>
          {/* Company Logo */}
          {/* <img 
        src={job.logo} 
        alt={`${job.company} logo`} 
        className={styles.logo} 
      /> */}

          {/* Job Info */}
          <h2 className={styles.title}>Frontend developer</h2>
          <div className={styles.details}>
            <h4 className={styles.company}>google</h4>
            <p className={styles.salary}> 20LPA</p>
            <p className={styles.deadline}>20/10/2025</p>
            <p className={styles.skills}>Java</p>
            <p className={styles.companyoverview}>see more</p>
          </div>

          {/* Apply Button */}
          <a href="">
            <button className={styles.applybtn}>Apply Now</button>
          </a>
        </div>
        <div className={styles.card}>
          {/* Company Logo */}
          {/* <img 
        src={job.logo} 
        alt={`${job.company} logo`} 
        className={styles.logo} 
      /> */}

          {/* Job Info */}
          <h2 className={styles.title}>Frontend developer</h2>
          <div className={styles.details}>
            <h4 className={styles.company}>google</h4>
            <p className={styles.salary}> 20LPA</p>
            <p className={styles.deadline}>20/10/2025</p>
            <p className={styles.skills}>Java</p>
            <p className={styles.companyoverview}>see more</p>
          </div>

          {/* Apply Button */}
          <a href="">
            <button className={styles.applybtn}>Apply Now</button>
          </a>
        </div>
        <div className={styles.card}>
          {/* Company Logo */}
          {/* <img 
        src={job.logo} 
        alt={`${job.company} logo`} 
        className={styles.logo} 
      /> */}

          {/* Job Info */}
          <h2 className={styles.title}>Frontend developer</h2>
          <div className={styles.details}>
            <h4 className={styles.company}>google</h4>
            <p className={styles.salary}> 20LPA</p>
            <p className={styles.deadline}>20/10/2025</p>
            <p className={styles.skills}>Java</p>
            <p className={styles.companyoverview}>see more</p>
          </div>

          {/* Apply Button */}
          <a href="">
            <button className={styles.applybtn}>Apply Now</button>
          </a>
        </div>
        </div>
      </div>
    </div>
  );
}

export default CompaniesList;
