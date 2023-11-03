import React from "react";
import SubHero from "./SubHero";
import Image from "next/image";
import Slider from "./Slider";
import { HeroSkeleton } from "./Skeleton";

const Hero = () => {
  return (
    <div className=" xl:h-[90vh] flex flex-col gap-2 sm:grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-y-5 sm:gap-4 mt-4">
      <Slider />

      <div className="bg-green-300 h-[40vh] xl:h-[45vh] relative overflow-hidden">
        <SubHero
          heading="Men's Native"
          subHeading="African wears"
          link="/products/men-native-wears"
        />
        <Image
          src="/men-native.png"
          width={500}
          height={500}
          alt="Image"
          className="absolute  bottom-0 right-0 md:-right-5 w-[40%] md:w-[35%] lg:w-[30%] xl:w-[45%] h-full object-cover "
        />
      </div>
      <div className="bg-blue-300 h-[40vh] xl:h-[45vh] relative overflow-hidden">
        <SubHero
          heading="Men's Cooperate"
          subHeading="Made in Nigeria"
          link="/products/men-cooperate-wears"
        />
        <Image
          src="/men-cooperate.png"
          width={500}
          height={500}
          alt="Image"
          className="absolute bottom-0 mt-3 -right-10 md:-right-2 lg:-right-20 w-[50%] md:w-[50%] lg:w-[40%] xl:w-[70%] h-[90%] xl:h-full object-cover "
        />
      </div>
      <div className="bg-yellow-300 h-[40vh] xl:h-[45vh] relative overflow-hidden">
        <SubHero
          heading="Women's Native"
          subHeading="African wears"
          link="/products/ladies-native-wears"
        />
        <Image
          src="/women-native2.png"
          width={500}
          height={500}
          alt="Image"
          className="absolute mt-2 bottom-0 -right-20 w-[70%] md:w-[65%] lg:w-[50%] xl:w-[90%] h-full object-cover "
        />
      </div>
      <div className="bg-purple-300 h-[40vh] xl:h-[45vh] relative overflow-hidden">
        <SubHero
          heading="Women's Cooperate"
          subHeading="Made around you"
          link="/products/ladies-cooperate-wears"
        />
        <Image
          src="/women-cooperate.png"
          width={500}
          height={500}
          alt="Image"
          className="absolute mt-2 top-0 -right-5 w-[40%] md:w-[30%] lg:w-[20%] xl:w-[40%] h-full object-cover "
        />
      </div>
    </div>
  );
};

export default Hero;
