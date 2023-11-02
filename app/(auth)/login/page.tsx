"use client";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Login from "@/components/Login";
import Lottie from "lottie-react";
import lottieLoad from "../../../public/lottieLoad.json";
const LoginPage = () => {
  const { authStatus } = useSelector((store: any) => store.shop);
  const router = useRouter();
  if (!authStatus) {
    router.replace("/");
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
      <Login />
    </>
  );
};

export default LoginPage;
