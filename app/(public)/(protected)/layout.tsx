"use client";
import { useEffect } from "react";
import Lottie from "lottie-react";
import lottieLoad from "../../../public/lottieLoad.json";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

interface Props {
  children: React.ReactNode;
}

export default function ProtectedRoutes({ children }: Props) {
  const { authStatus } = useSelector((store: any) => store.shop);
  const router = useRouter();

  useEffect(() => {
    if (!authStatus) {
      router.replace("/login");
    }
  }, [authStatus, router]);

  if (!authStatus) {
    return (
      <>
        <div className="w-full h-screen flex justify-center items-center">
          <Lottie className="w-[10rem] h-[10rem]" animationData={lottieLoad} loop={true} />
        </div>
      </>
    );
  }
  return <>{children}</>;
}
