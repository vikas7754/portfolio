import MotionDiv from "@/components/MotionDiv";
import styles from "./hero.module.scss";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.left}>
          <MotionDiv>
            <h1>Hi, I'm Vikas</h1>
          </MotionDiv>
          <MotionDiv index={1}>
            <p>
              I'm a software engineer who loves to build things for the web.
            </p>
          </MotionDiv>
          <MotionDiv index={2} className={styles.buttons}>
            <Link
              href="https://www.upwork.com/freelancers/~01421ed698793d5b8a"
              className="btn-primary"
              target="_blank"
            >
              Hire Me On Upwork
            </Link>
            <Link href="/" className="btn-secondary">
              <span>Contact</span>
            </Link>
          </MotionDiv>
        </div>
        <MotionDiv motion="right" className={styles.right}>
          <img src="pic.gif" alt="Vikas" />
        </MotionDiv>
      </div>
    </section>
  );
};

export default HeroSection;