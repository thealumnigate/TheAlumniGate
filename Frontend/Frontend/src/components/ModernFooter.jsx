import React from "react";
import styles from "./ModernFooter.module.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

function ModernFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <h3 className={styles.logo}>Community Portal</h3>
        <div className={styles.links}>
          <a href="https://vardhaman.org/">About</a>
          <a href="#services">Services</a>
          <a href="https://vardhaman.org/contact/">Contact</a>
          <a href="https://vardhaman.org/vision-mission-corevalues/">Privacy Policy</a>
        </div>
        <div className={styles.social}>
          <a href="https://www.facebook.com/VardhamanCollegeOfEngineeringAutonomous/" target="_blank" rel="noreferrer"><FaFacebookF /></a>
          <a href="https://x.com/Vardhaman_Coll" target="_blank" rel="noreferrer"><FaTwitter /></a>
          <a href="https://www.instagram.com/vmeg.vardhaman/" target="_blank" rel="noreferrer"><FaInstagram /></a>
          <a href="https://www.linkedin.com/school/vardhaman/posts/?feedView=all" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
        </div>
        <p className={styles.copyright}>
          &copy; {new Date().getFullYear()} YourWebsiteName. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default ModernFooter;
