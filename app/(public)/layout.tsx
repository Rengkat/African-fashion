import "../globals.css";
import Footer from "../../components/Footer";
import dynamic from "next/dynamic";
import NavBar from "@/components/NavBar";
interface Props {
  children: React.ReactNode;
}
const MobileNav = dynamic(() => import("../../components/MobileNav"), { ssr: false });
export const metadata = {
  title: "Classic Fashion - Home",
  description: "Buy your African Native and cooperate wears online and connect with stylist",
};
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
    </>
  );
}
