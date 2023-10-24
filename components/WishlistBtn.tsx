"use client";

import appwriteServices from "@/lib/appwrite";
import { useSelector } from "react-redux";

type Product = {
  name: string;
  minPrice: number;
  maxPrice: number;
  quantity: number;
  _id: string;
  image: { asset: { _ref: string } };
  stylist: string;
};
type Props = {
  product: Product;
};
interface Cart {
  userId: string;
  image: string;
  name: string;
  minPrice: number;
  maxPrice: number;
  stylist: string;
  productId: string;
  quantity: number;
}
const WishlistBtn = ({ product }: Props) => {
  const { user, authStatus } = useSelector((store: any) => store.shop);

  const handleAddWishlist = async () => {
    try {
      const existProduct = await appwriteServices.isProductInCart({
        productId: product?._id,
        userId: user?.$id,
      });
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
        uniqueId: "",
      });
    } catch (error) {}
  };
  return (
    <button onClick={handleAddWishlist} className="w-full border-2 border-[#000] py-2 px-3 my-2">
      ADD TO WISHLIST
    </button>
  );
};

export default WishlistBtn;
