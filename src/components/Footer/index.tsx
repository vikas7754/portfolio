import React from "react";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <hr />
      <div>
        <p>
          Made with <span className={styles.heart}>&hearts;</span> by Vikas.
        </p>
        <p>All rights reserved. &copy; {new Date().getFullYear()} </p>
      </div>
    </footer>
  );
};

export default Footer;
