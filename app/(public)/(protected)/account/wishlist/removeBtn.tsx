"use client";

import appwriteServices from "@/lib/appwrite";
import { useSelector } from "react-redux";

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
interface Props {
  product: Wishlist;
}
function RemoveBtn({ product }: Props) {
  const { user, authStatus } = useSelector((store: any) => store.shop);

  console.log(product);
  const handleRemove = async () => {
    try {
      if (product?.userId === user?.$id) {
        await appwriteServices.removeWishlist(product.productId);
      }
    } catch (error) {}
  };
  return (
    <button
      onClick={handleRemove}
      className="bg-blue-300 text-blue-600 mt-5 p-[3px] lg:p-2 rounded-md shadow">
      Remove
    </button>
  );
}

export default RemoveBtn;
