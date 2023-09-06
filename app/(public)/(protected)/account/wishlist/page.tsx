"use client";
import WishListItems from "@/components/WishListItems";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
const me = [2, 4, 6, 7, 0, 6, 4];
interface Wishlist {
  userId: string;
  imageURL: string;
  productName: string;
  minPrice: number;
  maxPrice: number;
  stylist: string;
  productId: string;
  quantity: number;
}
const Wishlist = () => {
  const { user, wishlist } = useSelector((store: any) => store.shop);

  return (
    <div>
      <div>
        <h3 className="p-5 border-b-[2px] border-[#eaeaea] text-xl font-bold ">Wishlist</h3>
        {wishlist.length >= 1 ? (
          <div className="p-5">
            {wishlist.map((product: Wishlist) => {
              return (
                <>
                  <WishListItems product={product} key={product.productId} />
                </>
              );
            })}
          </div>
        ) : (
          <div className="w-full flex justify-center mt-[5rem]">
            <Link className="bg-blue-400 p-2 text-white rounded shadow" href={"/products"}>
              {" "}
              Let's go shopping{" "}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
