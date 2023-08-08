import React from "react";
import styles from "@/styles/Card.module.scss";
function Card({ data }) {
  return (
    <div className={styles.container}>
      {data.type == "project" ? (
        <div className={styles.card}>
          <div className={styles.img}>
            <img src={data.image} alt={data.title} />
            <div className={styles.links}>
              {data.preview && <a href={data.preview}>Demo</a>}
              <a href={data.link}>Source Code</a>
            </div>
          </div>
          <div className={styles.title}>
            <h3>{data.title}</h3>
          </div>
        </div>
      ) : (
        <a href={data.link} target="_blank" className={styles.card}>
          <div className={styles.img}>
            <img src={data.image} alt={data.title} />
          </div>
          <div className={styles.title}>
            <h3>{data.title}</h3>
          </div>
        </a>
      )}
    </div>
  );
}

export default Card;
