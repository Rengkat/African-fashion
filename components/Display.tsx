import Image from "next/image";
import React from "react";
import { BsHeart } from "react-icons/all";
const Display = () => {
  return (
    <div className="h-[65vh] mt-2 lg:mt-5 relative shadow-lg overflow-hidden">
      <div className="h-[55vh] bg-[#ebe9e9]">
        <Image
          src={"/girl.png"}
          width={500}
          height={500}
          alt="lady"
          className="w-full h-full object-cover "
        />
      </div>
      <aside className="h-[10vh] p-[8px]">
        <div className="flex justify-between items-center">
          <p className="font-normal">Herschel supply</p>
          <BsHeart fontSize={25} />
        </div>
        <p>$250 - $600</p>
      </aside>

      <p className="w-[40%] lg:w-[50%] flex justify-center py-2 absolute bg-[#ebe9e9] rounded-[2rem] text-[18px] shadow-lg bottom-24 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hover:bg-black hover:text-white cursor-pointer">
        Quick View
      </p>
    </div>
  );
};

export default Display;
