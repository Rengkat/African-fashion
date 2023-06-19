import Image from "next/image";
import React from "react";
import { FaTrash } from "react-icons/fa";
const WishListItems = () => {
  return (
    <div className="border-[1px] border-[#eaeaea] shadow my-3 rounded-lg">
      <div className="p-2 lg:p-5 flex items-center gap-5">
        <div className="w-[15%]">
          <Image
            src={"/men-native.png"}
            width={500}
            height={500}
            alt="icon"
            className="w-[80%] md:w-[50%] h-full"
          />
        </div>
        <div className="w-[85%]">
          <h3 className="text-[12px] lg:text-[15px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, animi.
          </h3>
          <div className="mt-2">
            <p className="font-semibold">N23,000</p>
            <button className="bg-blue-300 text-blue-600 mt-5 p-[3px] lg:p-2 rounded-md shadow">
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishListItems;
