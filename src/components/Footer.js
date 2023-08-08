import styles from "@/styles/Footer.module.scss";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faFile,
  faGlobe,
  faList,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div>
          <h3>About Me</h3>
          <p>
            I am a passionate and dedicated web developer with expertise in
            creating dynamic and user-friendly websites. I have honed my skills
            in front-end and back-end development, as well as proficiency in
            various programming languages such as HTML, CSS, JavaScript,
            ReactJs, NextJs, NodeJs, ExpressJs, PHP, MongoDB and MySQL.
          </p>
        </div>
        <div>
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a
                href="https://freecodez.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGlobe} />
                My Website
              </a>
            </li>
            <li>
              <a href="/resume.pdf" download={true}>
                <FontAwesomeIcon icon={faFile} />
                My Resume
              </a>
            </li>
            <li>
              <a href="/projects">
                <FontAwesomeIcon icon={faList} />
                My Projects
              </a>
            </li>
            <li>
              <a href="/add">
                <FontAwesomeIcon icon={faPlus} />
                Add Data
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Follow Me</h3>
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/vikas7754/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} />
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/vikas7754"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} />
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/divine_vikas/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} />
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/@freecodez"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faYoutube} />
                YouTube
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <p>❤️ Copyright &copy; 2023 ❤️</p>
    </div>
  );
}

export default Footer;
