import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdEdit } from "react-icons/md";
const Address = () => {
  return (
    <div>
      <div>
        <h3 className="p-5 border-b-[2px] border-[#eaeaea] text-xl font-bold ">Delivery Address</h3>
      </div>
      <div className="p-2 lg:p-5 w-full md:w-1/2 border-[2px] border-[#eaeaea] my-2 mx-3 rounded shadow-sm relative">
        <label className="font-semibold text-[19px]">Your default shipping address:</label>
        <p>
          Rengkat Alexander Block 1, Room 12, Bar Beach Police Barrack, Victoria Island, Lagos VI
          (Ahmed Bello way), Lagos
        </p>
        <label className="font-semibold text-[19px] mt-2">Phone</label>
        <p> +234 8067581175</p>
        <div className="w-[3rem] h-[3rem] rounded-full bg-blue-300 flex justify-center items-center text-blue-500 absolute bottom-5 right-5">
          <Link href={"/account/edit-address"}>
            <MdEdit fontSize={30} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Address;
