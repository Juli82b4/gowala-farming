import React from "react";
import styles from "./sponsorsection.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SponsorsSection = () => {
  const sponsors = [
    { imgSrc: "src/assets/sponsors/01.png" },
    { imgSrc: "src/assets/sponsors/02.png" },
    { imgSrc: "src/assets/sponsors/03.png" },
    { imgSrc: "src/assets/sponsors/04.png" },
  ];

  return (
    <div className={styles.sponsorsSection}>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={2}
        navigation={true}
        pagination={{ clickable: true }}
        loop={true}
      >
        {sponsors.map((sponsor, index) => (
          <SwiperSlide key={index}>
            <div>
              <img src={sponsor.imgSrc} alt={`Sponsor ${index + 1}`} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SponsorsSection;
