"use client";
import { getData } from "@/actions/getData";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Layout from "@/components/Layout";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import styles from "@/styles/Home.module.scss";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faArrowRight, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <div className={styles.home}>
        <div className={styles.container}>
          <div>
            <div className={styles.left}>
              <div>
                <h1>
                  <span>Hi, My</span>
                  <span>name is Vikas</span>
                </h1>
                <p>I love creating beautiful and dynamic websites.</p>
                <div className={styles.resume}>
                  <a href="/resume.pdf" download={true}>
                    My Resume
                  </a>
                  <a href="mailto:vikask4590@gmail.com">Hire Me</a>
                </div>
                <div className={styles.socialLinks}>
                  <a
                    href="https://www.linkedin.com/in/vikas7754/"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                  <a href="https://github.com/vikas7754" target="_blank">
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                  <a href="https://freecodez.com" target="_blank">
                    <FontAwesomeIcon icon={faGlobe} />
                  </a>
                  <a
                    href="https://www.instagram.com/divine_vikas"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.right}>
              <img src="/main.gif" alt="vikask.in" />
            </div>
          </div>
        </div>
        <div className={styles.achievements}>
          <div className={styles.achievementsTitle}>
            <h2>My Achievements & Certifications</h2>
          </div>
          <div className={styles.allAchievements}>
            <div>
              <Achievements />
            </div>
          </div>
          <div className={styles.viewAll}>
            <Link href="/certificates">
              All Achievements
              <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>
        </div>
        <div id="skills" className={styles.skills}>
          <div>
            <h2>
              <span></span> My Awesome Skills <span></span>
            </h2>
            <div className={styles.allSkills}>
              <Skills />
              <Skills second />
            </div>
          </div>
        </div>
        <div className={styles.projects}>
          <div className={styles.projectsTitle}>
            <h2>
              <span></span> My Projects <span></span>
            </h2>
          </div>
          <div className={styles.allProjects}>
            <Projects />
          </div>
          <div className={styles.viewAll}>
            <Link href="/projects">
              All Projects
              <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>
        </div>
        <div id="contact" className={styles.contact}>
          <div className={styles.contactTitle}>
            <h2>
              <span></span> Contact Me <span></span>
            </h2>
          </div>
          <Contact />
        </div>
      </div>
    </Layout>
  );
}
