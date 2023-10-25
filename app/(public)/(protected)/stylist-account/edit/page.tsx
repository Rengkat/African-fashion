"use client";
import appwriteServices from "@/lib/appwrite";
import Link from "next/link";
import React, { useState } from "react";
import { IoChevronBackCircleSharp } from "react-icons/io5";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
type UserDetails = {
  website: string;
  companyDescription: string;
  companyAddress: string;
  state: string;
  city: string;
  branches: string;
  facebook: string;
  twitter: string;
  instagram: string;
  pintrest: string;
  services: string;
  stylistId?: string;
};
const Edit = () => {
  const { user } = useSelector((store: any) => store.shop);
  const router = useRouter();
  const [userDetail, setUserDetail] = useState<UserDetails>({
    website: "",
    companyDescription: "",
    companyAddress: "",
    state: "",
    city: "",
    branches: "",
    facebook: "",
    twitter: "",
    instagram: "",
    pintrest: "",
    services: "",
  });
  const handleChange = (e: any) => {
    setUserDetail({ ...userDetail, [e.target.name]: e.target.value });
  };
  const handleSubmit = async () => {
    if (
      userDetail.companyAddress === "" ||
      userDetail.companyDescription === "" ||
      userDetail.state === "" ||
      userDetail.city === "" ||
      userDetail.branches === ""
    ) {
      console.log("ENTER DETAILS");
    } else {
      await appwriteServices.updateStylist({
        website: userDetail.website,
        companyDescription: userDetail.companyDescription,
        companyAddress: userDetail.companyAddress,
        state: userDetail.state,
        city: userDetail.city,
        branches: userDetail.branches,
        facebook: userDetail.facebook,
        twitter: userDetail.twitter,
        instagram: userDetail.instagram,
        pintrest: userDetail.pintrest,
        services: userDetail.services,
        stylistId: user?.$id,
      });

      router.push("/stylist-account");
    }
    setUserDetail({
      website: "",
      companyDescription: "",
      companyAddress: "",
      state: "",
      city: "",
      branches: "",
      facebook: "",
      twitter: "",
      instagram: "",
      pintrest: "",
      services: "",
    });
  };

  //     services: '',

  return (
    <div>
      <div className="flex items-center p-5 border-b-[2px] border-[#eaeaea] gap-5">
        <Link href={"/stylist-account/branches"}>
          <IoChevronBackCircleSharp fontSize={30} />
        </Link>
        <h3 className=" text-xl font-bold ">Company Information</h3>
      </div>
      <div className="p-5 flex gap-5">
        <div className="w-1/2">
          <label className="block mt-2 mb-[2px]" htmlFor="company desc.">
            Company Description
          </label>
          <input
            className="edit-input "
            onChange={handleChange}
            value={userDetail.companyDescription}
            type="text"
            name="companyDescription"
            id="companyDescription"
            placeholder="e.g We are specialized in Yoruba wears"
          />
          <label className="block mt-2 mb-[2px]" htmlFor="surname">
            Company Head Office Address
          </label>
          <input
            onChange={handleChange}
            value={userDetail.companyAddress}
            className="edit-input"
            type="text"
            name="companyAddress"
            id="companyAddress"
            placeholder="No. 2 Alexander Road, Jos"
          />
          <label className="block mt-2 mb-[2px]" htmlFor="phone">
            Official Website
          </label>
          <input
            onChange={handleChange}
            value={userDetail.website}
            className="edit-input"
            type="text"
            name="website"
            id=" website"
            placeholder="www.fashion.com"
          />
          {/* ///////////////////// */}
          <label className="block mt-2 mb-[2px]" htmlFor="company desc.">
            Facebook
          </label>
          <input
            className="edit-input "
            onChange={handleChange}
            value={userDetail.facebook}
            type="text"
            name="facebook"
            id="facebook"
            placeholder="e.g www.facebook.com/fashion"
          />
          <label className="block mt-2 mb-[2px]" htmlFor="surname">
            Twitter
          </label>
          <input
            onChange={handleChange}
            value={userDetail.twitter}
            className="edit-input"
            type="text"
            name="twitter"
            id="twitter"
            placeholder="www.twitter.com/fashion123"
          />
          <label className="block mt-2 mb-[2px]" htmlFor="phone">
            Instagram
          </label>
          <input
            onChange={handleChange}
            value={userDetail.instagram}
            className="edit-input"
            type="text"
            name="instagram"
            id="instagram"
            placeholder="www.instagram.com/fashion23"
          />
        </div>
        <div className="w-1/2">
          <label className="block mt-2 mb-[2px]" htmlFor="state">
            Services
          </label>
          <input
            onChange={handleChange}
            value={userDetail.services}
            className="edit-input"
            type="text"
            name="services"
            id="services"
            placeholder="Designing and creating African wears"
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
            placeholder="Jos"
          />
          <label className="block mt-2 mb-[2px]" htmlFor="address">
            State
          </label>
          <input
            onChange={handleChange}
            value={userDetail.state}
            className="edit-input"
            type="text"
            name="state"
            id="state"
            placeholder="Plateau State"
          />
          {/* =========== */}
          <label className="block mt-2 mb-[2px]" htmlFor="state">
            Office Branches
          </label>
          <input
            onChange={handleChange}
            value={userDetail.branches}
            className="edit-input"
            type="text"
            name="branches"
            id="branches"
            placeholder="No. 2 Alexander Road"
          />
          <label className="block mt-2 mb-[2px]" htmlFor="city">
            Pinterest
          </label>
          <input
            onChange={handleChange}
            value={userDetail.pintrest}
            className="edit-input"
            type="text"
            name="pintrest"
            id="pintrest"
            placeholder="Fashion House"
          />
        </div>
      </div>
      <div onClick={handleSubmit} className=" flex justify-end mb-5">
        <button className="py-2 px-6 rounded shadow bg-blue-400 text-semibold text-white mx-5">
          SAVE
        </button>
      </div>
    </div>
  );
};

export default Edit;
