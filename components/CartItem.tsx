"use client";
import React from "react";
import CartImage from "./CartImage";
import appwriteServices from "@/lib/appwrite";
import { useSelector } from "react-redux";

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
interface Props {
  product: Cart;
}
const CartItem = ({ product }: Props) => {
  const { user } = useSelector((store: any) => store.shop);

  const handleRemove = async () => {
    try {
      await appwriteServices.removeProduct(product?.$id);
      window.location.reload();
    } catch (error) {}
    // console.log("first");
  };
  const hanleMoveToWishlist = async () => {
    await appwriteServices.removeProduct(product?.$id);
    await appwriteServices.createWishlist({
      userId: user?.$id,
      productName: product?.productName,
      maxPrice: product?.maxPrice,
      minPrice: product?.minPrice,
      imageURL: product?.imageURL,
      stylist: product?.stylist,
      productId: product?.productId,
      uniqueId: product?.$id,
    });
  };

  return (
    <>
      <div className=" w-full flex bg-[#fff] border-r-[1px] border-[#eaeaea] p-3 rounded-md my-3 shadow-md">
        <div className="w-[20%] lg:w-[20%] h-[15vh] md:h-[25vh] lg:h-[35vh]">
          <CartImage product={product} />
        </div>
        <aside className="w-[80%] flex flex-col justify-between">
          {/* top */}
          <div className="flex">
            <div className="w-[40%]">
              <h3 className="text-xs lg:text-xl font-normal lg:font-light">
                {product?.productName}
              </h3>
              <p className="text-blue-400 text-xs lg:text-sm my-3 hidden lg:block uppercase">
                {product?.stylist}
              </p>
            </div>

            <div className="w-[20%] text-center text-xs lg:text-normal ml-2">
              <h3 className="font-semibold mb-3">Each</h3>
              <p>
                ₦{product?.minPrice} - ₦{product?.maxPrice}
              </p>
            </div>
            <div className="w-[20%] text-center ml-2">
              <h3 className="font-semibold mb-3 text-xs lg:text-normal">20% Each</h3>
              <p className=" text-xs lg:text-normal">₦{product?.minPrice}</p>
            </div>
          </div>
          {/* down */}
          <div className="flex gap-4 text-sm lg:text-normal">
            <button onClick={handleRemove}>Remove</button>
            <button onClick={hanleMoveToWishlist}>Move to Wishlist</button>
          </div>
        </aside>
      </div>
    </>
  );
};

export default CartItem;
