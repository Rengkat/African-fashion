import "../globals.css";
import { Inter } from "next/font/google";
import Providers from "@/redux/Provider";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import MobileNav from "../../components/MobileNav";
import Image from "next/image";
interface Props {
  children: React.ReactNode;
}
export default function PublicLayout({ children }: Props) {
  return (
    <>
      <div className="w-full relative">
        <div className="sticky top-0 left-0 right-0 z-20 bg-[#fffffff2]">
          <NavBar />
        </div>
        {children}
        <Footer />
      </div>
      {/* <div className=""> */}
      <MobileNav />
      {/* </div> */}
      <div className="fixed bottom-2 z-[30] right-5">
        <p className="border-[1px] border-blue-400 p-1 text-sm lg:text-xl lg:p-2 rounded-lg text-blue-500 bg-white">
          May I help you?
        </p>
        <Image
          src={"/chatbot2.png"}
          height={500}
          width={500}
          alt="chatbot"
          className="w-[3rem] h-[4rem] lg:w-[5rem] lg:h-[6rem]"
        />
      </div>
    </>
  );
}
