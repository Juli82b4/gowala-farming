import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./HeroSlider.css";

const HeroSlider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      navigation={true}
      pagination={{ clickable: true }}
      loop={true}
    >
      <SwiperSlide>
        <div className="hero-slide">
          <img src="src/assets/headerslider/01.jpg" alt="Slide 1" />
          <div className="text-container">
            <h1>Gowala Farms</h1>
            <h2>The Complex Milk</h2>
            <button className="center-button">Read More</button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="hero-slide">
          <img src="src/assets/headerslider/02.jpg" alt="Slide 2" />
          <div className="text-container">
            <h1>Gowala Farms</h1>
            <h2>The Complex Milk</h2>
            <button className="center-button">Read More</button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="hero-slide">
          <img src="src/assets/headerslider/03.jpg" alt="Slide 3" />
          <div className="text-container">
            <h1>Gowala Farms</h1>
            <h2>The Complex Milk</h2>
            <button className="center-button">Read More</button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="hero-slide">
          <img src="src/assets/headerslider/04.jpg" alt="Slide 4" />
          <div className="text-container">
            <h1>Gowala Farms</h1>
            <h2>The Complex Milk</h2>
            <button className="center-button">Read More</button>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroSlider;
