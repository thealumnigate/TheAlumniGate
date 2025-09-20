import styles from "./ApplicationForm.module.css";
import { useForm } from "react-hook-form";

function ApplicationForm() {
  //for form validation using react-hook-form by register("field",rules)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //onsubmit calls when their is no error typo in the application form...
  const onSubmit = (data) => {
    console.log("form data:", data);
    alert("form submitted successfully");
    // functionality for successfull submission and redirects to unique id generation...
  };

  return (
    <div>
      <h2 className={styles.formheading}>Application Form</h2>
      <div className={styles.applyformConatiner}>
        <form
          action=""
          className={styles.applyform}
          onSubmit={handleSubmit(onSubmit)}
        >
          <section>
            <h3>Personal Details</h3>
            <label for="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              required
              {...register("fullname", {
                required: "Username is required",
                minLength: {
                  value: 3,
                  message: "Name should contain at least 3 characters",
                },
              })}
            />
            {errors.fullname && (
              <p style={{ color: "red" }}>{errors.fullname.message}</p>
            )}
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Invalid email format",
                },
              })}
            />
            {errors.email && (
              <p style={{ color: "red" }}>{errors.email.message}</p>
            )}

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
            <input
              type="text"
              id="university"
              name="university"
              required
              {...register("university", {
                required: "university is required",
                minLength: {
                  value: 8,
                  message:
                    "univeristy name should contain at least 8 characters,no shortcuts are allowed",
                },
              })}
            />
            {errors.university && (
              <p style={{ color: "red" }}>{errors.university.message}</p>
            )}
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
              {...register("cgpa", {
                min: { value: 7.5, message: "To be eligible cgpa must be 7.5" },
                max: { value: 10, message: "cgpa cannot exceed 10" },
              })}
            />
            {errors.cgpa && (
              <p style={{ color: "red" }}>{errors.cgpa.message}</p>
            )}
            <label for="inter">Intermediate/Diploma</label>
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

            <label for="schl">School</label>
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
               {...register("leetcode", {
                pattern: {
                  value:
                    /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$/,
                  message: "Enter a valid URL",
                },
              })}
            />

             {errors.leetcode && <p style={{ color: "red" }}>{errors.leetcode.message}</p>}

            <label for="hackerrank">Hackerrank</label>
            <input
              type="url"
              id="hackerrank"
              name="hackerrank"
              placeholder="https://hackerrank.com/yourusername"
              {...register("hackerrank", {
                pattern: {
                  value:
                    /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$/,
                  message: "Enter a valid URL",
                },
              })}
            />
            {errors.hackerrank && <p style={{ color: "red" }}>{errors.hackerrank.message}</p>}
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
              {...register("linkedin", {
                pattern: {
                  value:
                    /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$/,
                  message: "Enter a valid URL",
                },
              })}
            />
             {errors.linkedin && <p style={{ color: "red" }}>{errors.linkedin.message}</p>}
             
            <label for="github">GitHub</label>
            <input
              type="url"
              id="github"
              name="github"
              placeholder="https://github.com/yourusername"
              {...register("github", {
                pattern: {
                  value:
                    /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$/,
                  message: "Enter a valid URL",
                },
              })}
            />
             {errors.github && <p style={{ color: "red" }}>{errors.github.message}</p>}
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
