"use client";
import React, { useEffect, useState } from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "./Card";
import { getData } from "@/actions/getData";
import Loader from "./Loader";

function Achievements() {
  const [achievements, setAchievements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    async function getAchievements() {
      try {
        const data = await getData("achievement", 10);
        setAchievements(data);
        setLoading(false);
      } catch (err) {
        setError(err.message || "Something went wrong");
        setLoading(false);
      }
    }
    getAchievements();
  }, []);
  return (
    <div>
      {loading && <Loader />}
      {error && <div>{error}</div>}
      {!loading && !error && achievements.length > 0 && (
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={1}
          spaceBetween={10}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            650: {
              slidesPerView: 2,
              spaceBetween: 5,
            },
            975: {
              slidesPerView: 3,
              spaceBetween: 5,
            },
            1300: {
              slidesPerView: 4,
              spaceBetween: 5,
            },
            1625: {
              slidesPerView: 5,
              spaceBetween: 5,
            },
          }}
          className="mySwiper"
        >
          {achievements.map((achievement, i) => (
            <SwiperSlide key={i}>
              <Card data={achievement} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
}

export default Achievements;
