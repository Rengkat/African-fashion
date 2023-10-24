"use client";
import CartItem from "@/components/CartItem";
import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
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
  $id: string;
}
// const
const cart = () => {
  const { user, cartProducts } = useSelector((store: any) => store.shop);

  return (
    <div className="w-full p-3 lg:p-0 lg:w-[95%] xl:w-[80%] my-0 lg:my-[1rem] mx-auto ">
      <h1 className="text-center text-[18px] lg:text-4xl font-semibold md:font-light my-[1rem] lg:my-[2rem]">
        My Cart
      </h1>
      {cartProducts.length >= 1 ? (
        <>
          <div className="flex flex-col lg:flex-row justify-between">
            <aside className="w-full lg:w-[100%]">
              {cartProducts?.map((product: Cart) => {
                return (
                  <>
                    <CartItem product={product} key={product.productId} />
                  </>
                );
              })}
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

export default cart;
