import SkillCard from "@/components/SkillCard";
import styles from "./skills.module.scss";
import allSkills from "@/data/skills.json";
import SkillType from "@/types/skill";

import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import MotionDiv from "@/components/MotionDiv";

const SkillsSection = () => {
  return (
    <section className="container" id="skills">
      <div className={styles.container}>
        <MotionDiv motion="top" className={styles.header}>
          <h2>
            My <strong className="gradient">Skills</strong>
          </h2>
          <div className={styles.divider}></div>
          <p>
            Here are some of the technologies I have worked with in the past.
          </p>
        </MotionDiv>
        {allSkills.map((skillsItem: any, i: number) => (
          <div key={i} className={styles.skills}>
            <MotionDiv className={styles.header1}>
              <h3>{skillsItem.type}</h3>
            </MotionDiv>
            <Swiper
              modules={[Navigation, Pagination]}
              className={styles.swiper}
              spaceBetween={10}
              slidesPerView={5}
              navigation={{}}
              pagination={{
                clickable: true,
                bulletClass: styles.bullet,
                bulletActiveClass: styles.bulletActive,
              }}
              breakpoints={{
                320: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                640: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 10,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 10,
                },
              }}
            >
              {skillsItem.skills.map((skill: SkillType, j: number) => (
                <SwiperSlide key={i + j}>
                  <MotionDiv>
                    <SkillCard skill={skill} />
                  </MotionDiv>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
