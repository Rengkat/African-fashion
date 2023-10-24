"use client";
import Img from "next/image";
import { useNextSanityImage } from "next-sanity-image";
import { sanityClient } from "@/lib/config";
interface Cart {
  userId: string;
  image?: ImageRef;
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
interface ImageRef {
  _type: string;
  asset: { _ref: string | undefined; _type: string };
}

function MeasurementImage({ product }: Props) {
  const imgRef: ImageRef = {
    _type: "image",
    asset: {
      _ref: product?.image?.asset?._ref,
      _type: "reference",
    },
  };

  const imageProp = useNextSanityImage(sanityClient, imgRef);
  return (
    <div>
      <Img
        {...imageProp}
        className="w-[90%] md:w-[50%] h-full"
        sizes="(max-width: 800px) 100vw, 800px"
        // placeholder="blur"
        blurDataURL={product?.image?.asset?._ref}
        alt="image"
      />
    </div>
  );
}

export default MeasurementImage;
