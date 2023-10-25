import "../globals.css";
// import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
// import MobileNav from "../../components/MobileNav";
import dynamic from "next/dynamic";
interface Props {
  children: React.ReactNode;
}
const NavBarComp = dynamic(() => import("../../components/NavBar"), { ssr: false });
const MobileNav = dynamic(() => import("../../components/MobileNav"), { ssr: false });

export default function PublicLayout({ children }: Props) {
  return (
    <>
      <div className="w-full relative">
        <div className="sticky top-0 left-0 right-0 z-20 bg-[#fffffff2]">
          <NavBarComp />
        </div>
        {children}
        <Footer />
      </div>
      {/* <div className=""> */}
      <MobileNav />
    </>
  );
}
