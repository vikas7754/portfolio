"use client";
import Link from "next/link";
import styles from "./navbar.module.scss";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";
import MotionDiv from "../MotionDiv";

const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/#about",
  },
  {
    name: "Skills",
    href: "/#skills",
  },
  {
    name: "Projects",
    href: "/#projects",
  },
  {
    name: "Contact",
    href: "/#contact",
  },
];

const Navbar = () => {
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(false);

  const toggleMenu = (e: any) => {
    e.preventDefault();
    setOpen(!open);
  };

  return (
    <nav className={styles.container}>
      <MotionDiv>
        <div className={styles.logo}>
          <Link href="/">
            <div className={styles.text} data-text="Awesome">
              <span className={styles.actualText}>&nbsp;vikas&nbsp;</span>
              <span aria-hidden="true" className={styles.hoverText}>
                &nbsp;vikas&nbsp;
              </span>
            </div>
          </Link>
        </div>
        <button className={styles.toggleButton} onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} />
        </button>
        <ul className={`${styles.menu} ${open ? styles.open : ""}`}>
          <button className={styles.close}>
            <FontAwesomeIcon icon={faTimes} onClick={toggleMenu} />
          </button>
          {links.map((link, i) => (
            <li key={i} className={styles.navItem}>
              <Link
                href={link.href}
                className={`${styles.navLink} ${
                  active === i ? styles.active : ""
                }`}
                onClick={() => setActive(i)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </MotionDiv>
    </nav>
  );
};

export default Navbar;
