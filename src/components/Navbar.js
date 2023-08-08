"use client";
import React, { useState } from "react";
import styles from "@/styles/Navbar.module.scss";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCertificate,
  faHome,
  faList,
  faListCheck,
  faMoon,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { ThemeConsumer } from "@/contexts/theme";
function Navbar() {
  const [nav, setNav] = useState(false);
  const toggleNav = (e) => {
    e.preventDefault();
    setNav(!nav);
  };
  const { darkMode, dispatchTheme } = ThemeConsumer();
  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <Link href="/" className={styles.logo}>
          <Image src={"/logo.png"} width={40} height={40} alt="Logo" />
          <h3>Vikas</h3>
        </Link>
        <button onClick={dispatchTheme}>
          <FontAwesomeIcon icon={!darkMode ? faMoon : faSun} />
        </button>
      </div>
      <div className={styles.menu} style={{ left: nav ? "0" : "101vw" }}>
        <ul>
          <li>
            <Link href="/">
              <i>
                <FontAwesomeIcon icon={faHome} />
              </i>{" "}
              Home
            </Link>
          </li>
          <li>
            <Link href="#skills">
              <i>
                <FontAwesomeIcon icon={faList} />
              </i>{" "}
              Skills
            </Link>
          </li>
          <li>
            <Link href="/projects">
              <i>
                <FontAwesomeIcon icon={faListCheck} />
              </i>{" "}
              Projects
            </Link>
          </li>
          <li>
            <Link href="/certificates">
              <i>
                <FontAwesomeIcon icon={faCertificate} />
              </i>{" "}
              Certificates
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.contact}>
        <Link href="https://freecodez.com/signup" target="_blank">
          Register
        </Link>
        <Link href="mailto:vikask4590@gmail.com">Contact</Link>
        <button className={styles.toggle} type="button" onClick={toggleNav}>
          <svg
            className={`ham hamRotate ham1 ${nav ? "active" : ""}`}
            viewBox="0 0 100 100"
            width="40"
          >
            <path
              className="line top"
              d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40"
            />
            <path className="line middle" d="m 30,50 h 40" />
            <path
              className="line bottom"
              d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
