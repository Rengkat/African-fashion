"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { GrClose } from "react-icons/gr";
import { BsSearch, BsCart4 } from "react-icons/bs";
import { IoLogoWechat } from "react-icons/io5";
import { HiMenu } from "react-icons/hi";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { openMobileMenu } from "../redux/features/shopSlice";

const MobileNav = () => {
  const dispatch = useDispatch();
  const { isMobileMenuOpen, authStatus, user, cartProducts } = useSelector(
    (store: any) => store.shop
  );

  return (
    <div
      onClick={() => dispatch(openMobileMenu())}
      className={`${
        isMobileMenuOpen ? "opacity-0 -z-40" : "opacity-100 z-40"
      } fixed inset-0 bg-[#000000b8] backdrop-blur-[1px]`}>
      <div
        className={`${
          isMobileMenuOpen ? "mr-[-100vw]" : "mr-[100vw]"
        } bg-white z-[40] w-[60%] sm:w-[50%] md:[40%] h-[100vh] relative`}>
        <div className=" absolute top-6 right-5 border-[1px] border-slate-400 w-10 h-10 rounded-full flex items-center justify-center">
          <GrClose fontSize={30} className="p-1" />
        </div>
        <div className="pl-[1rem] pt-[5rem]">
          <div className="flex justify-between items-center pl-0 pr-10">
            <header className="">
              <Link href={"/"}></Link>
              <Image src="/logo.svg" width={100} height={100} alt="logo" className="" />
            </header>
            <div className="flex items-center gap-3 md:gap-5">
              <Link href={"/account"}>
                <Image
                  src="/account 2.svg"
                  width={50}
                  height={50}
                  alt="account"
                  className="h-[2rem] w-[4rem] sm:w-[2rem]"
                />
              </Link>
              <Link href={"/chats"} className="relative">
                <IoLogoWechat className="text-blue-400 text-3xl" />
              </Link>
              <Link href={"/cart"} className="relative">
                <BsCart4 className="text-blue-400 text-3xl" />
                {authStatus && (
                  <p className="absolute -z-10 w-3 h-3 p-2 md:p-3 bg-blue-300 text-red-500 text-xs md:text-[16px] font-semibold rounded-full -top-1 md:-top-3 right-1 md:right-0 flex justify-center items-center">
                    {cartProducts?.length}
                  </p>
                )}
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-[#474545] mx-5 ">
          <div className="flex justify-end items-center">
            <div className="bg-black flex gap-3 items-center text-white text-xl py-2 px-3 m-3 rounded">
              <h1 className="font-bold">MENU</h1>
              <HiMenu fontSize={30} />
            </div>
          </div>

          <div className="text-white font-semibold px-5 sm:px-8 pb-5">
            <Link className="block p-3 hover:bg-slate-500 rounded-md" href={"/"}>
              HOME
            </Link>
            <Link className="block p-3 hover:bg-slate-500 rounded-md" href={"/products"}>
              SHOP
            </Link>
            <Link className="block p-3 hover:bg-slate-500 rounded-md" href={"/stylists"}>
              STYLIST
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
