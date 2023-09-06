"use client";
import Lottie from "lottie-react";
import lottieLoad from "../../../public/lottieLoad.json";
import React from "react";

const loading = () => {
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center">
        <Lottie className="w-[10rem] h-[10rem]" animationData={lottieLoad} loop={true} />
      </div>
    </>
  );
};

export default loading;
