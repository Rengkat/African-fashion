"use client";
import AccountMobileNav from "@/components/AccountMobileNav";
import React from "react";
import { useEffect } from "react";
import { CiUser, CiDeliveryTruck } from "react-icons/ci";
import { BsBoxSeam, BsHeart } from "react-icons/bs";
import { ImMenu } from "react-icons/im";
import AccNavLink from "./nav-link";
import { useDispatch, useSelector } from "react-redux";
import { openMobileProfile } from "@/redux/features/shopSlice";
import appwriteServices, { db } from "@/lib/appwrite";
import { useRouter } from "next/navigation";
import lottieLoad from "../../../../public/lottieLoad.json";

import { databaseId, userCollectionId } from "@/lib/config";
import Lottie from "lottie-react";
// import appwriteServices, { databaseId, db, userCollectionId } from "@/lib/appwrite";
interface Props {
  children: React.ReactNode;
}
export default function AccountLayout({ children }: Props) {
  const { isMobileProfileOpen, authStatus, user } = useSelector((store: any) => store.shop);
  const router = useRouter();
  const dispatch = useDispatch();

  const handleLogout = () => {
    appwriteServices.logOut();
    window.location.reload();
  };
  if (user?.company) {
    router.replace("/stylist-account");
    <>
      <div className="w-full h-screen flex justify-center items-center">
        <Lottie className="w-[10rem] h-[10rem]" animationData={lottieLoad} loop={true} />
      </div>
    </>;
  }
  return (
    <>
      <ImMenu
        onClick={() => dispatch(openMobileProfile())}
        fontSize={30}
        className="mx-5 my-2 lg:hidden cursor-pointer md:hidden"
      />

      <div className="w-full lg:w-[90%] xl:w-[80%] mx-auto flex my-5 gap-5 relative">
        <nav className="hidden md:block list-none w-[30%] h-[60vh] bg-[#fff] border-r-[1px] border-[#eaeaea] shadow-md rounded-lg">
          <AccNavLink href={"/account"}>
            <CiUser fontSize={20} />
            <span>My Account</span>
          </AccNavLink>

          <AccNavLink href={"/account/orders"}>
            <BsBoxSeam fontSize={20} />
            <span>Orders</span>
          </AccNavLink>
          <AccNavLink href={"/account/wishlist"}>
            <BsHeart fontSize={20} />
            <span>Wishlist</span>
          </AccNavLink>

          <AccNavLink href={"/account/address"}>
            <CiDeliveryTruck fontSize={25} />
            <span>Delivery Address</span>
          </AccNavLink>
          <li className=" font-semibold p-5">
            <button
              onClick={handleLogout}
              className="bg-blue-400 my-5 text-white p-3 w-full shadow rounded">
              LOGOUT
            </button>
          </li>
        </nav>
        {/* MOBILE NAV */}
        <div
          className={`absolute z-10 top-0 transition-all duration-150 ${
            isMobileProfileOpen ? "left-0" : "-left-[100vw]"
          }`}>
          <AccountMobileNav />
        </div>
        <main className="w-full lg:w-[80%] xl:w-[70%] bg-[#fff] border-r-[1px] border-[#eaeaea] shadow-md rounded-lg">
          {children}
        </main>
      </div>
    </>
  );
}
