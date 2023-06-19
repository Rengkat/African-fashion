import Image from "next/image";
import React from "react";

const OrdersProduct = () => {
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

          <p className="text-[#9c9c9c] text-[12px] lg:text-[15px]">
            Order:
            <span> 235HFR</span>
          </p>
          <p className="bg-green-300 text-green-600 inline-block mt-5 py-[1px] px-[3px] md:p-[3px] rounded">
            Delivered
          </p>
          <p className="font-semibold text-[12px] lg:text-[15px]">On 23rd December, 2023</p>
        </div>
      </div>
    </div>
  );
};

export default OrdersProduct;
