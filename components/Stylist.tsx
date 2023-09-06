import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Stylist {
  company: string;
  phone: string;
  services: string;
  email: string;
  $id: string;
}

interface Props {
  stylist: Stylist;
}
const Stylist = ({ stylist }: Props) => {
  return (
    <Link href={`/stylists/${stylist?.$id}`}>
      <div className="w-[100%] h-[20vh] lg:h-[35vh] relative p-2 shadow-lg hover:scale-[1.1] transition-transform duration-200">
        <Image
          src={"/insta3.jpg"}
          width={500}
          height={100}
          alt="Image"
          className="h-full object-cover rounded-md"
        />
        <div className="absolute inset-0 bg-[#00000060] text-white flex justify-center items-center">
          <div>
            <Image
              src={"/stitching-machine.svg"}
              width={100}
              height={100}
              alt="icon"
              className=" object-cover ml-8 "
            />
            <h3 className="font-bold text-xl lg:text-2xl">{stylist?.company}</h3>
            <p>{stylist?.services}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Stylist;
