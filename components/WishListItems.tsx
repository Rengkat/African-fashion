import RemoveBtn from "@/app/(public)/(protected)/account/wishlist/removeBtn";
import WishlistImage from "@/app/(public)/(protected)/account/wishlist/wishlistImage";
import Image from "next/image";
import React from "react";
import { FaTrash } from "react-icons/fa";
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
interface All extends Wishlist {
  $id: string;
}
interface Props {
  product: All;
}
const WishListItems = ({ product }: Props) => {
  return (
    <div className="border-[1px] border-[#eaeaea] shadow my-3 rounded-lg">
      <div className="p-2 lg:p-5 flex items-center gap-5">
        <div className="w-[15%]">
          <WishlistImage product={product} />
        </div>
        <div className="w-[85%]">
          <h3 className="text-[12px] lg:text-[15px]">{product?.productName}</h3>
          <div className="mt-2">
            <p className="font-semibold">
              ₦{product?.minPrice} - ₦{product?.maxPrice}
            </p>
            <RemoveBtn product={product} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishListItems;
