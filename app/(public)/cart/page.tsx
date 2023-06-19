import CartItem from "@/components/CartItem";
import Image from "next/image";
import React from "react";
// border-r-[1px] border-[#eaeaea]
//  bg - [#fff];
const me = [2, 3, 5, 7, 5, 3];
const cart = () => {
  return (
    <div className="w-full p-3 lg:p-0 lg:w-[95%] xl:w-[80%] my-0 lg:my-[1rem] mx-auto ">
      <h1 className="text-center text-[18px] lg:text-4xl font-semibold md:font-light my-[1rem] lg:my-[2rem]">
        My Cart
      </h1>
      <div className="flex flex-col lg:flex-row justify-between">
        <aside className="w-full lg:w-[70%] xl:w-[60%]">
          {me.map((item) => {
            return (
              <>
                <CartItem />
              </>
            );
          })}
        </aside>
        <aside className="w-full md:w-1/2 md:mx-auto lg:w-[28%] xl:w-[40%] flex justify-end mt-3">
          <div className="bg-[#fff] border-r-[1px] border-[#eaeaea] w-full lg:w-full xl:w-[80%] h-[40vh] px-5 py-5 rounded shadow-md">
            <h1 className="text-center font-light text-xl my-2 uppercase">
              Price Summary
            </h1>
            <p className="text-center text-red-500 p-2 bg-red-200 rounded-md">
              Note! Advance payment of only 30%
            </p>
            <div>
              <aside className="flex justify-between py-2">
                <p>Quantity</p>
                <p>30% Payable</p>
              </aside>
              <aside className="flex justify-between pb-2">
                <p>5</p>
                <p>N23,000</p>
              </aside>
              <aside className="flex justify-between pb-2">
                <p>Shipping</p>
                <p>N3,000</p>
              </aside>
              <aside className="flex justify-between border-t-[1px] mt-2 border-slate-300">
                <p className="font-bold">Total</p>
                <p className="font-bold">N73,000</p>
              </aside>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default cart;
