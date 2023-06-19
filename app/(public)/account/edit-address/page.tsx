import Link from "next/link";
import React from "react";
import { IoChevronBackCircleSharp } from "react-icons/io5";
const Edit = () => {
  return (
    <div>
      <div className="flex items-center p-5 border-b-[2px] border-[#eaeaea] gap-5">
        <Link href={"/account/address"}>
          <IoChevronBackCircleSharp fontSize={30} />
        </Link>
        <h3 className=" text-xl font-bold ">Delivery Address</h3>
      </div>
      <div className="p-5 flex gap-5">
        <div className="w-1/2">
          <label className="block mt-2 mb-[2px]" htmlFor="firstName">
            First name
          </label>
          <input className="edit-input " type="text" name="firstName" id="firstName" />
          <label className="block mt-2 mb-[2px]" htmlFor="firstName">
            Surname
          </label>
          <input className="edit-input" type="text" name="surname" id="surname" />
          <label className="block mt-2 mb-[2px]" htmlFor="firstName">
            Phone
          </label>
          <input className="edit-input" type="text" name="phone" id="phone" />
        </div>
        <div className="w-1/2">
          <label className="block mt-2 mb-[2px]" htmlFor="firstName">
            State
          </label>
          <input className="edit-input" type="text" name="state" id="state" />
          <label className="block mt-2 mb-[2px]" htmlFor="firstName">
            City
          </label>
          <input className="edit-input" type="text" name="city" id="city" />
          <label className="block mt-2 mb-[2px]" htmlFor="firstName">
            Delivery Address
          </label>
          <input className="edit-input" type="text" name="delivery" id="delivery" />
        </div>
      </div>
      <div className=" flex justify-end mb-5 lg:mb-0">
        <button className="py-2 px-6 rounded shadow bg-blue-400 text-semibold text-white mx-5">
          SAVE
        </button>
      </div>
    </div>
  );
};

export default Edit;
