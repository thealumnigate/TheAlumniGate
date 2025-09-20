import React from "react";
import styles from "./footer.module.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

function ModernFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <h3 className={styles.logo}>YourWebsiteName</h3>
        <div className={styles.links}>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
          <a href="#privacy">Privacy Policy</a>
        </div>
        <div className={styles.social}>
          <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebookF /></a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
        </div>
        <p className={styles.copyright}>
          &copy; {new Date().getFullYear()} YourWebsiteName. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default ModernFooter;
