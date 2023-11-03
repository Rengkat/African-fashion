"use client";
import React, { useEffect } from "react";
import Checkout from "@/components/Checkout";
import Measurements from "@/components/Measurment";
import MeasurmentImages from "@/components/MeasurmentImages";
import { useRouter } from "next/navigation";
import Lottie from "lottie-react";
import lottieLoad from "../../../public/lottieLoad.json";
import { useSelector } from "react-redux";
import ShowCase from "./showCase";

interface Product {
  _id: string;
  name: string;
  slug: { current: string; _type: string };
  image: { _type: string; asset: { _ref: string } };
  maxPrice: number;
  minPrice: number;
}

interface Props {
  product: Product;
}

const Measurement = () => {
  const router = useRouter();
  const { checkoutDetails } = useSelector((store: any) => store.shop);

  useEffect(() => {
    if (!checkoutDetails || Object.keys(checkoutDetails).length === 0) {
      router.replace("/products");
    }
  }, [checkoutDetails, router]);

  if (!checkoutDetails || Object.keys(checkoutDetails).length === 0) {
    return (
      <>
        <div className="w-full h-screen flex justify-center items-center">
          <Lottie className="w-[10rem] h-[10rem]" animationData={lottieLoad} loop={true} />
        </div>
      </>
    );
  }

  return (
    <>
      <div className="flex flex-col lg:flex-row w-[95%] lg:w-[80%] mx-auto gap-5 mt-[5rem]">
        <ShowCase product={checkoutDetails} />
        <Checkout product={checkoutDetails} />
      </div>
      <div className="w-[95%] md:w-[90%]  lg:w-[80%] mx-auto my-10">
        <p className="text-xl lg:text-2xl my-4 p-2 text-center">
          <span className="text-red-700">Note!</span> Use the charts below. To submit your body
          measurement. All measurements are in the UK.
        </p>
        <div className="flex flex-col-reverse lg:flex-row gap-6">
          <aside className="w-full lg:w-1/2 border-2">
            <MeasurmentImages />
          </aside>
          <aside className="w-full lg:w-1/2  bg-blue-200 p-5">
            <Measurements />
          </aside>
        </div>
      </div>
    </>
  );
};

export default Measurement;
