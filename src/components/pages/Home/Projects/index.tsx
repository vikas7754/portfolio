import MotionDiv from "@/components/MotionDiv";
import styles from "./projects.module.scss";
import projects from "@/data/projects.json";
import ProjectType from "@/types/project";
import ProjectCard from "@/components/ProjectCard";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ProjectsSection = () => {
  return (
    <section className="container" id="projects">
      <MotionDiv motion="top" className={styles.header}>
        <h2>
          My <strong className="gradient">Projects</strong>
        </h2>
      </MotionDiv>
      <div className={styles.projects}>
        <Swiper
          modules={[Navigation, Pagination]}
          className={styles.swiper}
          spaceBetween={10}
          slidesPerView={1}
          navigation
          pagination={{
            clickable: true,
            bulletClass: styles.bullet,
            bulletActiveClass: styles.bulletActive,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }}
        >
          {projects.map((project: ProjectType, i: number) => (
            <SwiperSlide key={i}>
              <MotionDiv className={styles.project}>
                <ProjectCard project={project} />
              </MotionDiv>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ProjectsSection;
