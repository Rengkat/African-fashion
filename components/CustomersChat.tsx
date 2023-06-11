import Image from "next/image";
import React from "react";

const CustomersChat = () => {
  return (
    <div className="hover:bg-[#efefef] rounded-md py-[10px] px-[15px] cursor-pointer">
      <div className="flex gap-2">
        <Image
          src={"/avatar.jpg"}
          height={100}
          width={100}
          alt="avatar"
          className="w-[45px] h-[45px] rounded-full"
        />
        <div className=" hidden flex flex-col justify-between">
          <p>Alexander Rengkat</p>
          <div className="flex items-center gap-[5px]">
            <div className="bg-green-500 w-[7px] h-[7px] rounded-full shadow mt-1"></div>
            <p className="text-[#999]">online</p>
          </div>
        </div>
        <div className="flex flex-col justify-between">
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
