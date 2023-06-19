import AccountMobileNav from "@/components/AccountMobileNav";
import Link from "next/link";
import React from "react";
import { CiUser, BsBoxSeam, BsHeart, GrDeliver, ImMenu } from "react-icons/all";
interface Props {
  children: React.ReactNode;
}
export default function AccountLayout({ children }: Props) {
  return (
    <>
      <ImMenu fontSize={30} className="mx-5 my-2 lg:hidden" />

      <div className="w-full lg:w-[90%] xl:w-[80%] mx-auto flex my-5 gap-5 relative">
        <nav className="hidden lg:block list-none w-[30%] h-[60vh] bg-[#fff] border-r-[1px] border-[#eaeaea] shadow-md rounded-lg">
          <li className="flex items-center gap-3 p-5 font-semibold hover:bg-[#ddd9d9] hover:rounded-t-md">
            <CiUser fontSize={20} />
            <Link href={"/account"}>My Account</Link>
          </li>
          <li className="flex items-center gap-3 p-5 font-semibold hover:bg-[#ddd9d9]">
            <BsBoxSeam fontSize={20} />
            <Link href={"/account/orders"}>Orders</Link>
          </li>
          <li className="flex items-center gap-3 p-5 font-semibold hover:bg-[#ddd9d9]">
            <BsHeart fontSize={20} />
            <Link href={"/account/wishlist"}>Wishlist</Link>
          </li>
          <li className="flex items-center gap-3 p-5 font-semibold hover:bg-[#ddd9d9]">
            <GrDeliver fontSize={20} />
            <Link href={"/account/address"}>Delivery Address</Link>
          </li>
          <li className=" font-semibold p-5">
            <button className="bg-blue-400 my-5 text-white p-3 w-full shadow rounded">
              LOGOUT
            </button>
          </li>
        </nav>
        {/* MOBILE NAV */}
        <div className=" absolute z-10 top-0">
          <AccountMobileNav />
        </div>
        <main className="w-full lg:w-[80%] xl:w-[70%] bg-[#fff] border-r-[1px] border-[#eaeaea] shadow-md rounded-lg">
          {children}
        </main>
      </div>
    </>
  );
}
