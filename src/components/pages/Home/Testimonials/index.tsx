import MotionDiv from "@/components/MotionDiv";
import styles from "./testimonials.module.scss";
import testimonials from "@/data/testimonials.json";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import TestimonialType from "@/types/testimonial";
import TestimonialCard from "@/components/TestimonialCard";
import { FC } from "react";

interface Props {
  ref: any;
}

const Testimonials: FC<Props> = ({ ref }) => {
  return (
    <section className="container" id="testimonials" ref={ref}>
      <MotionDiv motion="top" className={styles.header}>
        <h2>
          <strong className="gradient">Testimonials</strong>
        </h2>
        <div className={styles.divider}></div>
        <p>
          Here are some of the things people have to say about their experience
          with me.
        </p>
      </MotionDiv>
      <div className={styles.testimonials}>
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
          {testimonials.map((testimonial: TestimonialType, i: number) => (
            <SwiperSlide key={i}>
              <MotionDiv className={styles.testimonial}>
                <TestimonialCard testimonial={testimonial} />
              </MotionDiv>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
