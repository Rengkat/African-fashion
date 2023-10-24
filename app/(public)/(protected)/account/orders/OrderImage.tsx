"use client";
import { createClient } from "@sanity/client";
import Img from "next/image";
import { useNextSanityImage } from "next-sanity-image";
import { sanityClient } from "../../../../../lib/config";
interface Cart {
  userId: string;
  image?: string;
  productName: string;
  minPrice: number;
  maxPrice: number;
  stylist: string;
  productId: string;
  quantity: number;
}
interface MainProps extends Cart {
  imageURL: string;
}
interface Props {
  product: MainProps;
}
interface ImageRef {
  _type: string;
  asset: { _ref: string | undefined; _type: string };
}

function OrderImage({ product }: Props) {
  const imgRef: ImageRef = {
    _type: "image",
    asset: {
      _ref: product?.imageURL,
      _type: "reference",
    },
  };
  // console.log(imgRef);
  const imageProp = useNextSanityImage(sanityClient, imgRef);
  return (
    <div>
      <Img
        {...imageProp}
        className="w-[80%] md:w-[60%] h-[50%]"
        sizes="(max-width: 800px) 100vw, 800px"
        // placeholder="blur"
        blurDataURL={product?.image}
        alt="image"
      />
    </div>
  );
}

export default OrderImage;
