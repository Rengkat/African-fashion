"use client";
import React from "react";
import NavLink from "./links";
import { useSelector } from "react-redux";
// import { useRouter } from "next/navigation";
import Lottie from "lottie-react";
import lottieLoad from "../../../public/lottieLoad.json";
interface Props {
  children: React.ReactNode;
}
export default function RegisterLayout({ children }: Props) {
  // const router = useRouter();
  const { authStatus } = useSelector((store: any) => store.shop);
  if (authStatus) {
    // router.replace("/");
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
      <div className="flex justify-center mt-[2rem] max-w-[25rem] mx-auto">
        <NavLink href={"/register"}>Sign up as customer</NavLink>
        <NavLink href={"/register/stylist"}>Sign up as stylist</NavLink>
      </div>
      <main>{children}</main>
    </>
  );
}
