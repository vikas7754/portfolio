import Link from "next/link";
import styles from "./about.module.scss";
import MotionDiv from "@/components/MotionDiv";
import { FC } from "react";

interface Props {
  ref: any;
}

const AboutSection: FC<Props> = ({ ref }) => {
  return (
    <section className={styles.wrapper} id="about" ref={ref}>
      <div className={styles.container}>
        <MotionDiv motion="left" className={styles.left}>
          <img src="/about.gif" alt="Vikas about section" />
        </MotionDiv>
        <div className={styles.right}>
          <MotionDiv>
            <h2>👋 Hello</h2>
          </MotionDiv>
          <MotionDiv motion="top" index={1}>
            <p>
              I'm Vikas, a skilled web developer with expertise in the MERN
              Stack (MongoDB, Express.js, React.js, Node.js), Next.js, and React
              Native. I'm proficient in both front-end and back-end development,
              I enjoy working on projects that require a holistic approach to
              web development. My expertise includes HTML, CSS, JavaScript,
              React, Next js, Node.js, and MongoDB. In my free time, I enjoy
              tinkering with new technologies and exploring ways to improve my
              coding skills.
            </p>
          </MotionDiv>
          <MotionDiv motion="left" index={2} className={styles.buttons}>
            <Link
              href="https://res.cloudinary.com/freecodez/image/upload/v1734633143/Resume_Vikas_mbg5gt.pdf"
              className="btn-primary"
              target="_blank"
            >
              My Resume
            </Link>
            <Link
              href="https://www.linkedin.com/in/vikas7754/"
              className="btn-secondary"
              target="_blank"
            >
              <span>LinkedIn</span>
            </Link>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
