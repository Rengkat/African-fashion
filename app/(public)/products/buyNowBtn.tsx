"use client";
import appwriteServices from "@/lib/appwrite";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

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
export default function BuyNowButton({ product }: Props) {
  const router = useRouter();

  const { user, authStatus } = useSelector((store: any) => store.shop);

  const handleAddToCart = async () => {
    if (!authStatus) {
      router.replace("/login");
    }
    // check if product already in the checkout. If in cart, throw a message
    const productInCart = await appwriteServices.isProductInCart(product._id);

    if (productInCart && productInCart?.userId === user?.$id) {
      const updatedQuantity = productInCart.quantity + 1;

      await appwriteServices.updateProductQty({
        productId: product?._id,
        quantity: updatedQuantity,
      });
    }
    // await appwriteServices.
    router.push("/account/checkout");
  };

  return (
    <>
      <button onClick={handleAddToCart} className="w-full bg-[#000] text-white py-2 px-3 my-2">
        BUY NOW
      </button>
    </>
  );
}
