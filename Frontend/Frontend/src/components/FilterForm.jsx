import styles from "./Filter.module.css";
import bg from "../assets/filterformbg2.jpeg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function FilterForm() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [year, setYear] = useState("3");
  const [branch, setBranch] = useState("select");
  const [cgpa, setCgpa] = useState("");
  const [backlogs, setBacklogs] = useState("");
  const [interest, setInterest] = useState("select");

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/companieslist", {
      state: { name, year, branch, cgpa, backlogs, interest },
    });
  };

  return (
    <div
      className={styles.filterform}
      style={{ backgroundImage: `url(${bg})` }}
    >
      <form className={styles.fform} onSubmit={handleSubmit}>
        <label>Name</label><br></br>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
  <br></br>
        <label>Year</label><br></br>
        <select value={year} onChange={(e) => setYear(e.target.value)} required>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
<br></br>
        <label>Branch</label><br></br>
        <select value={branch} onChange={(e) => setBranch(e.target.value)} required>
          <option value="select">--select--</option>
          <option value="CSE">CSE</option>
          <option value="CSM">CSM</option>
          <option value="IT">IT</option>
          <option value="ECE">ECE</option>
          <option value="EEE">EEE</option>
          <option value="MECH">MECH</option>
          <option value="CIVIL">CIVIL</option>
        </select>
<br></br>
        <label>Cgpa</label><br></br>
        <input
          type="number"
          step="0.1"
          value={cgpa}
          onChange={(e) => setCgpa(e.target.value) }
           required
        />
<br></br>
        <label>Backlogs</label><br></br>
        <input
          type="number"
          value={backlogs}
          onChange={(e) => setBacklogs(e.target.value)}
           required
        />
<br></br>
        <label>Sector of Interest</label><br></br>
        <select value={interest} onChange={(e) => setInterest(e.target.value)}  required>
          <option value="select">--select--</option>
          <option value="fsd">Full Stack Development</option>
          <option value="ml">Machine learning</option>
          <option value="ds">Data Science</option>
          <option value="cyber">Cybersecurity</option>
        </select>
<br></br>
        <button type="submit" className={styles.submit}>Submit</button>
      </form>
    </div>
  );
}

export default FilterForm;
