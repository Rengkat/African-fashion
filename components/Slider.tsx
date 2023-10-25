"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import { Autoplay, Pagination, Navigation } from "swiper";
import Link from "next/link";
const Slider = () => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  });
  return (
    <>
      {isClient && (
        <Swiper
          //   className="mySwiper"
          className=" h-full"
          spaceBetween={40}
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
          <SwiperSlide className="slider-1">
            <div className="h-full w-full flex justify-end mt-[5rem] md:mt-[10rem] ml-[2rem] md:ml-0">
              <div className="w-[60%]">
                <h3 className="font-bold">Hot Men Collection</h3>
                <h1 className=" font-normal text-3xl md:text-6xl mb-3 text-white">
                  African Native Wears
                </h1>
                <Link href={"/products/men-native-wears"}>
                  <button className="bg-blue-400 py-2 md:py-3 px-3 md:px-5 rounded-lg shadow text-base md:text-xl font-bold text-white mt-5">
                    SHOP NOW
                  </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slider-2">
            <div className="w-full h-full flex pl-[1rem]  md:pl-[4rem] mt-[3rem] md:mt-[7rem]">
              <div className="w-[50%] md:w-[70%]">
                <h3 className="font-bold">Hot Women Collection</h3>
                <h1 className="font-light text-3xl md:text-6xl mb-3">African Native Wears</h1>
                <Link href={"products/ladies-native-wears"}>
                  <button className="bg-blue-400 py-2 md:py-3 px-3 md:px-5 rounded-lg shadow text-base md:text-xl font-bold text-white mt-5">
                    SHOP NOW
                  </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slider-3">
            <div className="h-full w-full flex justify-end mt-[8rem] md:mt-[10rem] text-white md:text-black">
              <div className="w-[60%]  md:w-[50%] text-left md:text-base">
                <h3 className="font-light">Hot Collection</h3>
                <h1 className="font-bold text-3xl md:text-5xl">Men Cooperate Wears</h1>
                <Link href={"/products/men-cooperate-wears"}>
                  <button className="bg-blue-400 py-2 md:py-3 px-3 md:px-5 rounded-lg shadow text-base md:text-xl font-bold text-white mt-5">
                    SHOP NOW
                  </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="w-full h-full slider-4">
            <div className="mt-[9rem] pl-[2rem]">
              <div className="w-[60%] ">
                <h3>New Arrival</h3>
                <h1 className="font-normal text-3xl md:text-5xl">Women Cooperate Wears</h1>
                <Link href={"/products/ladies-cooperate-wears"}>
                  <button className="bg-blue-400 py-2 md:py-3 px-3 md:px-5 rounded-lg shadow text-base md:text-xl font-bold text-white mt-5">
                    SHOP NOW
                  </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      )}
    </>
  );
};

export default Slider;
