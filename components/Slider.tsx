"use client";
// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
const Slider = () => {
  return (
    <Swiper
      //   className="mySwiper"
      className="h-full"
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}>
      <SwiperSlide className="">Slide 1</SwiperSlide>
      <SwiperSlide className="">Slide 2</SwiperSlide>
      <SwiperSlide className="">Slide 3</SwiperSlide>
      <SwiperSlide className="">Slide 4</SwiperSlide>
    </Swiper>
  );
};

export default Slider;
