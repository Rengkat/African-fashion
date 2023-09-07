"use client";
import Image from "next/image";
import { BsSendFill } from "react-icons/bs";
import { useState } from "react";

const ChartFiled = () => {
  const [message, setMessage] = useState("");
  const handleSubmit = () => {};
  return (
    <div className="relative h-full">
      <div className="flex items-end gap-2 border-b-[1px] border-[#eaeaea] p-5">
        <Image
          src={"/avatar.jpg"}
          height={100}
          width={100}
          alt="avatar"
          className="w-[45px] h-[45px] rounded-full"
        />
        <div className="flex flex-col justify-between">
          <p className="text-[17px] font-semibold">Alexander Rengkat</p>
          <div className="flex items-center gap-[5px]">
            <div className="bg-green-500 w-[7px] h-[7px] rounded-full shadow mt-1"></div>
            <p className="text-[#999]">online</p>
          </div>
        </div>
      </div>
      <div className="w-[90%] absolute bottom-5 left-0 right-0 mx-auto flex border-[1px] bg-[#c1bfbf] border-[#999] rounded-r-md">
        <aside
          className="w-[5rem] flex items-center justify-center cursor-pointer"
          onClick={handleSubmit}>
          <BsSendFill fontSize={20} />
        </aside>
        <input
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          placeholder="Enter message here..."
          type="text"
          className="w-full border-none outline-none p-2 rounded-r-md"
        />
      </div>
    </div>
  );
};

export default ChartFiled;
