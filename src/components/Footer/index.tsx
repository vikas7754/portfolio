import React from "react";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div>
        <p>All rights reserved. &copy; {new Date().getFullYear()} </p>
      </div>
    </footer>
  );
};

export default Footer;
