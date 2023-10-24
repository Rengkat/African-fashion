"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BsSearch, BsBoxSeam, BsHeart } from "react-icons/bs";
import NavLink from "./NavLinks";
import Menu from "./menu";
import Profile from "./profile";
import { useSelector } from "react-redux";

const NavBar = () => {
  const { authStatus, cartProducts, user } = useSelector((store: any) => store.shop);

  return (
    <>
      <nav className="flex w-full px-[1rem] md:px-[3rem] py-2 justify-between items-center shadow-lg">
        <header className="w-[5rem]">
          <NavLink href={"/"}>
            <Image src="/logo.svg" width={500} height={500} alt="logo" />
          </NavLink>
        </header>
        <div className=" hidden  xl:flex gap-5 text-2xl justify-center font-light w-[30%]">
          <NavLink href={"/"}>HOME</NavLink>
          <NavLink href={"/products"}>SHOP</NavLink>
          <NavLink href={"/stylists"}>STYLISTS</NavLink>
        </div>
        <div className="hidden xl:flex items-center gap-7 pr-8 w-[60%] justify-end">
          <div className="border-[1px] border-slate-500 flex justify-between items-center w-[80%] rounded-lg ">
            <input
              type="text"
              className="w-[80%] bg-transparent p-[3px] md:p-[6px] md:m-1 placeholder:text-xl border-none outline-none"
              placeholder="Search a product"
            />
            <BsSearch
              fontSize={30}
              className=" w-[calc(100%-80%)] border-l-[1px] border-slate-500 text-slate-500"
            />
          </div>
          <div>
            <Profile />
          </div>

          <Link href={"/chats"}>
            <div className="relative">
              <Image
                src="/chatting.svg"
                width={50}
                height={50}
                alt="account"
                className="w-[3.5rem] h-[3rem]"
              />
            </div>
          </Link>

          <Link href={"/cart"}>
            <div className="relative">
              <Image
                src="/cart.svg"
                width={52}
                height={52}
                alt="account"
                className="w-[4rem] h-[3rem] "
              />
              {authStatus && (
                <>
                  {cartProducts?.length >= 1 && (
                    <p className="absolute w-5 h-5 p-3 bg-blue-300 text-red-500 font-semibold rounded-full -z-10 top-0 right-1 flex justify-center items-center">
                      {cartProducts?.length}
                    </p>
                  )}
                </>
              )}
            </div>
          </Link>
        </div>

        <div className=" xl:hidden border-[1px] border-slate-500 flex justify-between items-center w-[60%] mr-2 rounded-lg ">
          <input
            type="text"
            className="w-[80%] p-1 m-2 placeholder:text-xl border-none outline-none"
            placeholder="Search a product"
          />
          <BsSearch fontSize={30} className=" w-[calc(100%-80%)] text-slate-500" />
        </div>
        <div>
          <Menu />
        </div>
      </nav>
    </>
  );
};

export default NavBar;
