import styles from "./Filter.module.css";
import bg from "../assets/filterformbg2.jpeg";
import { useNavigate } from "react-router-dom";

function FilterForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const navigate = useNavigate();
    navigate("/companieslist");
  };

  return (
    <div>
      <div
        className={styles.filterform}
        style={{ backgroundImage: `url(${bg})` }}
      >
        <form action="">
          <label htmlFor="name">Name</label>
          <br />
          <input type="text" />
          <br />
          <label htmlFor="year">Year</label>
          <br />
          <select name="" id="">
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
          <br />
          <label htmlFor="branch">Branch</label>
          <br />
          <select name="branch" id="branch">
            <option value="select">--select--</option>
            <option value="CSE">CSE</option>
            <option value="CSM">CSM</option>
            <option value="IT">IT</option>
            <option value="ECE">ECE</option>
            <option value="EEE">EEE</option>
            <option value="MECH">MECH</option>
            <option value="CIVIL">CIVIL</option>
          </select>
          <br />
          <label htmlFor="cgpa">Cgpa</label>
          <br />
          <input type="decimal" />
          <br />
          <label htmlFor="backlogs">BackLogs</label>
          <br />
          <input type="number" />
          <br />
          {/* is possible internshipdetails */}
          <label htmlFor="interest">Sector of Interest</label>
          <br />
          <select name="interest" id="interest">
            <option value="select">--select--</option>
            <option value="fsd">Full Stack Development</option>
            <option value="ml">Machine learning</option>
            <option value="ds">Data Science</option>
            <option value="cyber">Cybersecurity</option>
            {/* can add more interest based on data of companies.. */}
          </select>
          <br />
          <input type="submit" name="" id="" />
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
export default FilterForm;
