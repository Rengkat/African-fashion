"use client";
import SanityImage from "@/app/(public)/products/image";
import appwriteServices from "@/lib/appwrite";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { BsHeart } from "react-icons/bs";
import { useSelector } from "react-redux";
interface Product {
  _id: string;
  name: string;
  slug: { current: string; _type: string };
  image: { _type: string; asset: { _ref: string } };
  maxPrice: number;
  minPrice: number;
  stylist: string;
}
interface Props {
  product: Product;
}
const Display = ({ product }: Props) => {
  const { user, wishlist } = useSelector((store: any) => store.shop);
  const [message, setMessage] = useState();
  const [isHover, setIsHover] = useState(false);
  const handleAddWishlist = async () => {
    try {
      const existProduct = await appwriteServices.isProductInCart(product?._id);
      if (existProduct) {
      }
      await appwriteServices.createWishlist({
        userId: user.$id,
        productName: product?.name,
        maxPrice: product?.maxPrice,
        minPrice: product?.minPrice,
        imageURL: product?.image?.asset._ref,
        stylist: product?.stylist,
        productId: product?._id,
      });
    } catch (error) {}
  };
  return (
    <div
      onMouseOver={() => setIsHover(true)}
      onMouseOut={() => setIsHover(false)}
      className="h-[65vh] mt-2 lg:mt-5 relative shadow-lg overflow-hidden">
      <div className="h-[55vh] bg-white">
        <Link href={`/products/${product?._id}}`}>
          <div className="w-[75%] h-full mx-auto overflow-hidden">
            <SanityImage product={product} />
          </div>
        </Link>
      </div>
      <aside className="h-[10vh] p-[8px]">
        <div className="flex justify-between items-center">
          <p className="font-normal capitalize">{product?.name}</p>
          <BsHeart onClick={handleAddWishlist} fontSize={25} className=" cursor-pointer" />
        </div>
        <p>
          ₦{product?.minPrice} - ₦{product?.maxPrice}
        </p>
      </aside>
      <Link href={`/products/${product?._id}}`}>
        <p
          className={` transition-all ease-linear duration-300 w-[40%] lg:w-[50%] flex justify-center py-2 absolute bg-[#ebe9e9] rounded-[2rem] text-[18px] shadow-lg ${
            isHover ? "bottom-24" : "-bottom-20"
          } left-1/2 transform -translate-x-1/2 -translate-y-1/2 hover:bg-black hover:text-white cursor-pointer`}>
          Quick View
        </p>
      </Link>
    </div>
  );
};

export default Display;
