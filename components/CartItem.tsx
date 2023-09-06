"use client";
import Image from "next/image";
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
}
interface Props {
  product: Cart;
}
const CartItem = ({ product }: Props) => {
  const { user, authStatus, cartProducts } = useSelector((store: any) => store.shop);

  const handleRemove = async () => {
    try {
      if (product?.userId === user?.$id) {
        await appwriteServices.removeProduct({ productId: product.productId });
      }
    } catch (error) {}
    // console.log("first");
  };
  const hanleMoveToWishlist = async () => {
    if (product?.userId === user?.$id) {
      await appwriteServices.removeProduct({ productId: product.productId });
      await appwriteServices.createWishlist({
        userId: user?.$id,
        productName: product?.productName,
        maxPrice: product?.maxPrice,
        minPrice: product?.minPrice,
        imageURL: product?.imageURL,
        stylist: product?.stylist,
        productId: product?.productId,
      });
    }
  };
  const handleIncrease = async () => {
    // check if product already in the cart. If in cart, increase quantity
    const productInCart = await appwriteServices.isProductInCart(product.productId);
    console.log(productInCart);
    if (productInCart && productInCart?.userId === user?.$id) {
      const updatedQuantity = productInCart.quantity + 1;

      await appwriteServices.updateProductQty({
        productId: product?.productId,
        quantity: updatedQuantity,
      });
    }
  };
  const handleDecrease = async () => {
    // check if product qty is less than 1 then remove
    const productInCart: any = await appwriteServices.isProductInCart(product.productId);
    if (productInCart?.userId === user?.$id) {
      if (productInCart?.quantity <= 1) {
        await appwriteServices.removeProduct({ productId: product.productId });
      }
      const updatedQuantity = productInCart?.quantity - 1;

      await appwriteServices.updateProductQty({
        productId: product?.productId,
        quantity: updatedQuantity,
      });
    }
  };
  return (
    <>
      <div className=" w-full flex bg-[#fff] border-r-[1px] border-[#eaeaea] p-3 rounded-md my-3 shadow-md">
        <div className="w-[20%] lg:w-[20%] h-[15vh] md:h-[25vh] lg:h-[30vh]">
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
            <div className="w-[20%]">
              <h3 className="font-semibold text-center text-xs lg:text-normal ml-2">Quantity</h3>
              <div className="flex gap-2 items-center justify-center my-1 lg:my-3">
                <button
                  onClick={handleIncrease}
                  className="py-[2px] px-[4px] lg:py-2 lg:px-3 rounded-md text-semibold shadow">
                  +
                </button>
                <p className=" text-xs lg:text-normal">{product?.quantity}</p>
                <button
                  onClick={handleDecrease}
                  className="py-[2px] px-[5px] lg:py-2 lg:px-3  rounded-md text-semibold shadow">
                  -
                </button>
              </div>
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
