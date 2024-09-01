"use client";
import MotionDiv from "@/components/MotionDiv";
import styles from "./social.module.scss";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SocialBars() {
  return (
    <MotionDiv motion="right" className={styles.container}>
      <a href="https://www.linkedin.com/in/vikas7754/" target="_blank">
        <div>
          <div>
            <i>
              <FontAwesomeIcon icon={faLinkedin} />
            </i>
            <span>Linkedin</span>
          </div>
          <strong>500+</strong>
        </div>
        <div>Connect</div>
      </a>
      <a href="https://github.com/vikas7754" target="_blank">
        <div>
          <div>
            <i>
              <FontAwesomeIcon icon={faGithub} />
            </i>
            <span>Github</span>
          </div>
          <strong>5</strong>
        </div>
        <div>Follow</div>
      </a>
      <a href="https://www.youtube.com/@freecodez" target="_blank">
        <div>
          <div>
            <i>
              <FontAwesomeIcon icon={faYoutube} />
            </i>
            <span>Youtube</span>
          </div>
          <strong>100</strong>
        </div>
        <div>Subscribe</div>
      </a>
      <a href="https://www.instagram.com/freecodez.dev" target="_blank">
        <div>
          <div>
            <i>
              <FontAwesomeIcon icon={faInstagram} />
            </i>
            <span>Instagram</span>
          </div>
          <strong>800</strong>
        </div>
        <div>Follow</div>
      </a>
    </MotionDiv>
  );
}

export default SocialBars;
