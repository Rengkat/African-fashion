import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  BsSearch,
  HiMenu,
  MdKeyboardArrowDown,
  CiUser,
  BsBoxSeam,
  BsHeart,
} from "react-icons/all";
const NavBar = () => {
  return (
    <>
      <nav className="flex w-full px-[1rem] md:px-[3rem] py-2 justify-between items-center shadow-lg">
        <header className="w-[5rem]">
          <Link href={"/"}>
            <Image src="/logo.svg" width={500} height={500} alt="logo" />
          </Link>
        </header>
        <ul className=" hidden  xl:flex gap-5 text-2xl justify-center font-light w-[30%]">
          <Link href={"/"}>HOME</Link>
          <Link href={"/shop"}>SHOP</Link>
          <Link href={"/stylists"}>STYLISTS</Link>
        </ul>
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
          <div className="relative flex items-center gap-2 w-[15rem] ">
            <Image
              src="/account 2.svg"
              width={50}
              height={50}
              alt="account"
              className="w-[2.5rem] h-[2.5rem]"
            />
            <p className="font-semibold text-[16px] xl:text-[20px]">
              Alexander
            </p>
            <MdKeyboardArrowDown fontSize={20} />
            <div className="hidden border-[.02rem] rounded-md border-slate-200 absolute list-none w-[110%] top-[100%] p-2 bg-white">
              <button className="w-full bg-blue-400 text-white font-semibold rounded shadow py-2 px-3">
                Login
              </button>
              <ul className="my-5">
                <li className="flex gap-2 items-center py-2 hover:bg-slate-200 px-2 rounded-md">
                  <CiUser fontSize={20} /> <span> My Account</span>
                </li>
                <li className="flex gap-2 items-center py-2 hover:bg-slate-200 px-2 rounded-md">
                  <BsBoxSeam fontSize={20} /> <span> Orders</span>
                </li>
                <li className="flex gap-2 items-center py-2 hover:bg-slate-200 px-2 rounded-md ">
                  <BsHeart fontSize={20} /> <span> Wishlist</span>
                </li>
              </ul>

              <button className="w-full border-[.2px] border-slate-100 hover:bg-blue-400 hover:text-white text-blue-400 font-semibold rounded shadow py-2 px-3">
                log out
              </button>
            </div>
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
              <p className="absolute w-5 h-5 p-3 bg-blue-300 text-red-500 font-semibold rounded-full top-0 right-2 flex justify-center items-center">
                12
              </p>
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
              <p className="absolute w-5 h-5 p-3 bg-blue-300 text-red-500 font-semibold rounded-full -z-10 top-0 right-1 flex justify-center items-center">
                12
              </p>
            </div>
          </Link>
        </div>

        <div className=" xl:hidden border-[1px] border-slate-500 flex justify-between items-center w-[60%] mr-2 rounded-lg ">
          <input
            type="text"
            className="w-[80%] p-1 m-2 placeholder:text-xl border-none outline-none"
            placeholder="Search a product"
          />
          <BsSearch
            fontSize={30}
            className=" w-[calc(100%-80%)] text-slate-500"
          />
        </div>
        <div className="xl:hidden border-2 border-black">
          <HiMenu fontSize={30} className="p-1 w-10 h-10" />
        </div>
      </nav>
      {/* ============= MOBILE NAV ============ */}
    </>
  );
};

export default NavBar;
