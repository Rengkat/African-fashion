"use client";
import appwriteServices from "@/lib/appwrite";
import { useSelector } from "react-redux";
// import { useRouter } from "next/navigation";
import Message from "@/components/Message";

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
export default function AddCartButton({ product }: Props) {
  // const router = useRouter();

  const { user, authStatus } = useSelector((store: any) => store.shop);

  const handleAddToCart = async () => {
    if (!authStatus) {
      // router.replace("/login");
    } else {
      // check if product already in the cart. If in cart, increase quantity
      const productInCart = await appwriteServices.isProductInCart({
        productId: product._id,
        userId: user?.$id,
      });

      if (productInCart) {
        return (
          <>
            <Message text="Sorry, item is already in the cart" redirectRoute="/products" />
          </>
        );
      } else {
        await appwriteServices.addToCart({
          userId: user?.$id,
          imageURL: product?.image.asset._ref,
          productName: product?.name,
          minPrice: product?.minPrice,
          maxPrice: product?.maxPrice,
          stylist: product?.stylist,
          productId: product?._id,
          quantity: 1,
        });
      }
      // if (typeof window !== "undefined") {
      //   window.location.reload();
      // }
      // router.push("/cart");
    }
  };

  return (
    <>
      <button onClick={handleAddToCart} className="w-full bg-[#000] text-white py-2 px-3 my-2">
        ADD TO BAG
      </button>
    </>
  );
}
