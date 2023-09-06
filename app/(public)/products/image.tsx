"use client";
import { createClient } from "@sanity/client";
import Img from "next/image";
import { useNextSanityImage } from "next-sanity-image";
import { sanityClient } from "@/lib/config";
interface Product {
  _id: string;
  name: string;
  slug: { current: string; _type: string };
  image: { _type: string; asset: { _ref: string } };
  maxPrice: number;
  minPrice: number;
}
interface Props {
  product: Product;
}
const SanityImage = ({ product }: Props) => {
  const imageProp = useNextSanityImage(sanityClient, product?.image);
  //   console.log(product);
  return (
    <Img
      {...imageProp}
      className=" w-full h-full max-h-[55vh] mx-auto object-cover"
      // sizes="(max-width: 800px) 100vw, 800px"
      // placeholder="blur"
      blurDataURL={product?.image?.asset?._ref}
      alt="image"
    />
  );
};

export default SanityImage;
