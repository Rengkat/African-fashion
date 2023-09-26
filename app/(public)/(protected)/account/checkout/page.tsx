"use client";
import CartItem from "@/components/CartItem";
import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import appwriteServices from "@/lib/appwrite";
import Link from "next/link";
interface Cart {
  userId: string;
  imageURL: string;
  productName: string;
  minPrice: number;
  maxPrice: number;
  stylist: string;
  productId: string;
  quantity: number;
}
const cartProducts = [2, 4, , 6, 7, 8, 5, 4, 3, 3, 2];
const checkout = () => {
  // const totalPrice = cartProducts.reduce((total: any, pro: any): number => {
  //   const sixtyPercentPrice = Math.abs(((pro.minPrice + pro.maxPrice) / 2) * 0.6);
  //   const pricePerProduct = sixtyPercentPrice * pro.quantity;
  //   return total + pricePerProduct;
  // }, 0);
  // const shipping = 2100;
  return (
    <div className="w-full p-3 lg:p-0 lg:w-[95%] xl:w-[80%] my-0 lg:my-[1rem] mx-auto ">
      <h1 className="text-center text-[18px] lg:text-4xl font-semibold md:font-light my-[1rem] lg:my-[2rem]">
        My Cart
      </h1>
      {cartProducts.length >= 1 ? (
        <>
          <div className="flex flex-col lg:flex-row justify-between">
            <aside className="w-full lg:w-[70%] xl:w-[60%]">
              {cartProducts?.map((product) => {
                return <>{/* <CartItem /> */}</>;
              })}
            </aside>

            <aside className="w-full md:w-1/2 md:mx-auto lg:w-[28%] xl:w-[40%] flex justify-end mt-3">
              <div className="bg-[#fff] border-r-[1px] border-[#eaeaea] w-full lg:w-full xl:w-[80%] h-[40vh] px-5 py-5 rounded shadow-md">
                <h1 className="text-center font-light text-xl my-2 uppercase">Price Summary</h1>
                <p className="text-center text-red-500 p-2 bg-red-200 rounded-md">
                  Note! Advance payment of only 60%
                </p>
                <div>
                  <aside className="flex justify-between py-2">
                    <p>Quantity</p>
                    <p>60% Payable</p>
                  </aside>
                  <aside className="flex justify-between pb-2">
                    <p>""</p>
                    <p>₦""</p>
                  </aside>
                  <aside className="flex justify-between pb-2">
                    <p>Shipping</p>
                    <p>₦""</p>
                  </aside>
                  <aside className="flex justify-between border-t-[1px] mt-2 border-slate-300">
                    <p className="font-bold">Total</p>
                    <p className="font-bold">₦""</p>
                  </aside>
                </div>
              </div>
            </aside>
          </div>
        </>
      ) : (
        <>
          <div className="w-full h-[80vh] flex justify-center items-center">
            <p className=" text-2xl font-bold p-2">
              No item in your cart
              <Link className=" text-white bg-blue-400 rounded p-2 ml-2 shadow" href={"/products"}>
                Let's go shopping
              </Link>
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default checkout;
