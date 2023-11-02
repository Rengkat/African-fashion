"use client";
import Lottie from "lottie-react";
import lottieLoad from "../../../public/lottieLoad.json";
// import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

interface Props {
  children: React.ReactNode;
}
export default function ProtectedRoutes({ children }: Props) {
  const { authStatus } = useSelector((store: any) => store.shop);
  // const router = useRouter();
  if (!authStatus) {
    // router.replace("/login");
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
