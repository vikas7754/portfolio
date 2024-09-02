import TestimonialType from "@/types/testimonial";
import { FC } from "react";
import styles from "./TestimonialCard.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

interface TestimonialCardProps {
  testimonial: TestimonialType;
}

const TestimonialCard: FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <FontAwesomeIcon icon={faQuoteLeft} />
        <p>{testimonial.message}</p>
      </div>
      <hr />
      <div>
        <h3>{testimonial.name}</h3>
        <h6>{testimonial.title}</h6>
      </div>
    </div>
  );
};

export default TestimonialCard;
