"use client";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import Login from "@/components/Login";
import Lottie from "lottie-react";
import lottieLoad from "../../../public/lottieLoad.json";
import { useEffect } from "react"; // Import useEffect

const LoginPage = () => {
  const { authStatus } = useSelector((store: any) => store.shop);
  const router = useRouter();

  useEffect(() => {
    // Move the routing logic inside the useEffect
    if (authStatus) {
      router.replace("/");
    }
  }, [authStatus]);

  if (authStatus) {
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
