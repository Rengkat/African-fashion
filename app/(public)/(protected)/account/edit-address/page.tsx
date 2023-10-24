"use client";
import appwriteServices from "@/lib/appwrite";
import Link from "next/link";
import React, { useState } from "react";
import { IoChevronBackCircleSharp } from "react-icons/io5";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
type UserDetails = {
  firstName: string;
  surname: string;
  phone: string;
  state: string;
  city: string;
  deliveryAddress: string;
};
const Edit = () => {
  const { user } = useSelector((store: any) => store.shop);
  const router = useRouter();
  const [userDetail, setUserDetail] = useState<UserDetails>({
    firstName: "",
    surname: "",
    phone: "",
    state: "",
    city: "",
    deliveryAddress: "",
  });
  const handleChange = (e: any) => {
    setUserDetail({ ...userDetail, [e.target.name]: e.target.value });
  };
  const handleSubmit = async () => {
    if (
      userDetail.firstName === "" ||
      userDetail.surname === "" ||
      userDetail.phone === "" ||
      userDetail.state === "" ||
      userDetail.city === "" ||
      userDetail.deliveryAddress === ""
    ) {
      console.log("ENTER DETAILS");
    } else {
      await appwriteServices.updateUserCollection({
        phone: userDetail.phone,
        firstName: userDetail.firstName,
        surname: userDetail.surname,
        state: userDetail.state,
        city: userDetail.city,
        deliveryAddress: userDetail.deliveryAddress,
        userId: user?.$id,
      });
      window.location.reload();
      router.push("/account");
    }
  };
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
          <input
            className="edit-input "
            onChange={handleChange}
            value={userDetail.firstName}
            type="text"
            name="firstName"
            id="firstName"
          />
          <label className="block mt-2 mb-[2px]" htmlFor="surname">
            Surname
          </label>
          <input
            onChange={handleChange}
            value={userDetail.surname}
            className="edit-input"
            type="text"
            name="surname"
            id="surname"
          />
          <label className="block mt-2 mb-[2px]" htmlFor="phone">
            Phone
          </label>
          <input
            onChange={handleChange}
            value={userDetail.phone}
            className="edit-input"
            type="text"
            name="phone"
            id="phone"
          />
        </div>
        <div className="w-1/2">
          <label className="block mt-2 mb-[2px]" htmlFor="state">
            State
          </label>
          <input
            onChange={handleChange}
            value={userDetail.state}
            className="edit-input"
            type="text"
            name="state"
            id="state"
          />
          <label className="block mt-2 mb-[2px]" htmlFor="city">
            City
          </label>
          <input
            onChange={handleChange}
            value={userDetail.city}
            className="edit-input"
            type="text"
            name="city"
            id="city"
          />
          <label className="block mt-2 mb-[2px]" htmlFor="address">
            Delivery Address
          </label>
          <input
            onChange={handleChange}
            value={userDetail.deliveryAddress}
            className="edit-input"
            type="text"
            name="deliveryAddress"
            id="delivery"
          />
        </div>
      </div>
      <div onClick={handleSubmit} className=" flex justify-end mb-5 lg:mb-0">
        <button className="py-2 px-6 rounded shadow bg-blue-400 text-semibold text-white mx-5">
          SAVE
        </button>
      </div>
    </div>
  );
};

export default Edit;
