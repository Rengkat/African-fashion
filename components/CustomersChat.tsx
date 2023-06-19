import Image from "next/image";
import React from "react";

const CustomersChat = () => {
  return (
    <div className="hover:bg-[#efefef] rounded-md py-[10px] px-[15px] cursor-pointer">
      <div className="flex flex-col md:flex-row gap-2">
        <div className="relative  w-[45px] h-[45px]">
          <Image
            src={"/avatar.jpg"}
            height={100}
            width={100}
            alt="avatar"
            className=" w-[45px] h-[45px] rounded-full border-[1px] border-black"
          />
          <div className="absolute md:hidden bottom-[2px] right-1 lg:hidden bg-green-500 w-[10px] h-[10px] rounded-full shadow mt-1"></div>
        </div>
        <p className="text-[#999] md:hidden text-xs">Alexander</p>

        <div className=" hidden md:flex flex-col justify-between">
          <p className="md:text-sm lg:text-[16px]">Alexander Rengkat</p>
          <div className="flex items-center gap-[5px]">
            <div className="bg-green-500 w-[7px] h-[7px] rounded-full shadow mt-1"></div>
            <p className="text-[#999]">online</p>
          </div>
        </div>
        <div className="hidden flex flex-col justify-between">
          <p>Alexander Rengkat</p>
          <div className="flex items-center gap-[5px]">
            <div className="bg-[#e47297] w-[7px] h-[7px] rounded-full shadow mt-1"></div>
            <p className="text-[#999]">left 12 mins ago</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomersChat;
