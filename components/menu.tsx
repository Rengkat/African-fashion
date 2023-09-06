"use client";

import { HiMenu } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { openMobileMenu } from "@/redux/features/shopSlice";
const Menu = () => {
  const dispatch = useDispatch();

  return (
    <div
      onClick={() => dispatch(openMobileMenu())}
      className="xl:hidden border-2 border-black h-10">
      <HiMenu fontSize={30} className="p-1 w-10 h-10" />
    </div>
  );
};

export default Menu;
