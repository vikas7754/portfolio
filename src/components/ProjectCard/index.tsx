import ProjectType from "@/types/project";
import React, { FC } from "react";
import styles from "./projectCard.module.scss";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faLink,
} from "@fortawesome/free-solid-svg-icons";

interface ProjectCardProps {
  project: ProjectType;
}

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className={styles.container}>
      <div>
        <Swiper
          modules={[Pagination]}
          spaceBetween={10}
          slidesPerView={1}
          pagination={{
            clickable: true,
            bulletClass: styles.bullet,
            bulletActiveClass: styles.bulletActive,
          }}
        >
          {project.images.map((image, i) => (
            <SwiperSlide key={i}>
              <Image
                className={styles.image}
                src={image}
                alt={project.title}
                width={500}
                height={200}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className={styles.content}>
        <h3>
          <a href={project.url} target="_blank">
            <strong className="gradient">{project.title}</strong>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} color="#5c5cff" />
          </a>
        </h3>
        <p>{project.description}</p>
        <div className={styles.skills}>
          {project.skills.map((skill, i) => (
            <span key={i}>{skill}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
