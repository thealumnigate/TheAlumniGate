import styles from "./ApplicationForm.module.css";

function ApplicationForm() {
  return (
    <div>
      <h2 className={styles.formheading}>Application Form</h2>
      <div className={styles.applyformConatiner}>
        <form action="" className={styles.applyform}>
          <section>
            <h3>Personal Details</h3>
            <label for="fullName">Full Name</label>
            <input type="text" id="fullName" name="fullName" required />

            <label for="email">Email</label>
            <input type="email" id="email" name="email" required />

            <label for="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              pattern="[0-9]{10}"
              placeholder="10-digit number"
              required
            />

            <label>Gender</label>
            <div className={styles.radioGroup}>
              <label>
                <input type="radio" name="gender" value="Male" required /> Male
              </label>
              <label>
                <input type="radio" name="gender" value="Female" /> Female
              </label>
              <label>
                <input type="radio" name="gender" value="Other" /> Other
              </label>
            </div>
          </section>

          {/* <!-- Education Details --> */}
          <section>
            <h3>Education Details</h3>
            <label for="university">University / College</label>
            <input type="text" id="university" name="university" required />
            <label for="branch">Branch</label>
            <select id="branch" name="branch" required>
              <option value="select">--select--</option>
              <option value="CSE">CSE</option>
              <option value="CSM">CSM</option>
              <option value="IT">IT</option>
              <option value="ECE">ECE</option>
              <option value="EEE">EEE</option>
              <option value="MECH">MECH</option>
              <option value="CIVIL">CIVIL</option>
            </select>

            <label for="cgpa">CGPA</label>
            <input
              type="number"
              id="cgpa"
              name="cgpa"
              step="0.01"
              min="0"
              max="10"
              required
            />

            <label for="university">Intermediate/Diploma</label>
            <input type="text" id="inter" name="inter" required />

            <label for="cgpa">Percentage</label>
            <input
              type="number"
              id="percentage"
              name="percentage"
              step="1"
              min="0"
              max="100"
              required
            />

            <label for="university">School</label>
            <input type="text" id="schl" name="schl" required />

            <label for="gpa">GPA</label>
            <input
              type="number"
              id="gpa"
              name="gpa"
              step="0.01"
              min="0"
              max="10"
              required
            />
          </section>

          {/* <!-- Professional Details --> */}
          <section>
            <h3>Professional Details</h3>
            <label for="skills">Skills (comma separated)</label>
            <input
              type="text"
              id="skills"
              name="skills"
              placeholder="Java, React, AWS"
            />

            <label for="certifications">Certifications</label>
            <input
              type="text"
              id="certifications"
              name="certifications"
              placeholder="AWS, PMP, etc."
            />
          </section>

          {/* coding platform links */}
          <section>
            <h3>Coding platform Links</h3>
            <label for="leetcode">leetcode</label>
            <input
              type="url"
              id="leetcode"
              name="leetcode"
              placeholder="https://leetcode.com/in/yourprofile"
            />

            <label for="github">Hackerrank</label>
            <input
              type="url"
              id="hackerrank"
              name="hackerrank"
              placeholder="https://hackerrank.com/yourusername"
            />
          </section>
          {/* 
      <!-- Social Links --> */}
          <section>
            <h3>Social Links</h3>
            <label for="linkedin">LinkedIn</label>
            <input
              type="url"
              id="linkedin"
              name="linkedin"
              placeholder="https://linkedin.com/in/yourprofile"
            />

            <label for="github">GitHub</label>
            <input
              type="url"
              id="github"
              name="github"
              placeholder="https://github.com/yourusername"
            />
          </section>
          {/* resume and cv */}

          <section>
            <h3>Documents</h3>
            <label htmlFor="certifications">Upload Certifications</label>
            <input type="file" id="certifications" required />
            <label htmlFor="resume">Upload Resume</label>
            <input type="file" id="resume" required />
            <label htmlFor="CV">CV(if possible)</label>
            <input type="file" id="cv" />
          </section>

          <button type="submit">Submit Application</button>
        </form>
      </div>
    </div>
  );
}

export default ApplicationForm;
