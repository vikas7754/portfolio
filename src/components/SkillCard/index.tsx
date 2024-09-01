import SkillType from "@/types/skill";
import Image from "next/image";
import React, { FC } from "react";
import styles from "./skill.module.scss";

interface SkillCardProps {
  skill: SkillType;
}

const SkillCard: FC<SkillCardProps> = ({ skill }) => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image src={skill.image} alt={skill.title} width={500} height={300} />
      </div>
      <div className={styles.title}>
        <h3>{skill.title}</h3>
      </div>
    </div>
  );
};

export default SkillCard;
