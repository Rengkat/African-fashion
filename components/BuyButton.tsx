"use client";
import appwriteServices from "@/lib/appwrite";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { getCheckoutDetails } from "@/redux/features/shopSlice";

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
export default function BuyButton({ product }: Props) {
  const router = useRouter();
  const dispatch = useDispatch();

  const { user, authStatus } = useSelector((store: any) => store.shop);

  const handleAddToCart = () => {
    if (!authStatus) {
      router.replace("/login");
    }
    dispatch(getCheckoutDetails(product));
    router.push("/measurement");
  };

  return (
    <>
      <button onClick={handleAddToCart} className="w-full bg-[#000] text-white py-2 px-3 my-2">
        ORDER NOW!
      </button>
    </>
  );
}
