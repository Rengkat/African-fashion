"use client";
import appwriteServices, { db } from "@/lib/appwrite";
import { databaseId, userCollectionId } from "@/lib/config";
import { Query } from "appwrite";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useSelector } from "react-redux";

const Account = () => {
  const { user } = useSelector((store: any) => store.shop);
  const [loading, setLoading] = useState(false);
  const handleSubscribe = async () => {
    setLoading(true);
    try {
      await appwriteServices.updateSubscription({
        userId: user?.$id,
        subscribedToNewsLetter: true,
      });
      setLoading(false);
    } catch (error) {}
  };
  return (
    <div className="p-5 w-full">
      <h1 className="font-bold text-2xl mb-5">Account Overview</h1>
      <div className="flex justify-between flex-col lg:flex-row gap-5">
        <aside className="border-[2px] border-[#eaeaea] w-[100%] rounded shadow-sm">
          <h3 className="border-b-[2px] border-[#eaeaea] p-5">ACCOUNT DETAILS</h3>
          <div className="p-5">
            <label className="font-semibold text-[19px]">Name:</label>
            <p>
              {user?.surname} {user?.firstName}
            </p>
            <label className="font-semibold text-[19px] mt-2" htmlFor="email">
              Email:
            </label>
            <p>{user?.email}</p>
          </div>
        </aside>
        <aside className="border-[2px] border-[#eaeaea] w-[100%] rounded shadow-sm ">
          <h3 className="p-5 border-b-[2px] border-[#eaeaea]">ADDRESS BOOK</h3>
          <div className="p-5">
            <label className="font-semibold text-[19px] mb-2">Your default shipping address:</label>
            <>
              {user?.deliveryAddress ? (
                user.deliveryAddress
              ) : (
                <>
                  <Link
                    className="rounded p-2 bg-blue-400 text-white border-slate-300"
                    href={"account/address"}>
                    Add Delivery address
                  </Link>
                </>
              )}
            </>
            <label className="font-semibold text-[19px] mt-2">Phone</label>
            <p>{user?.phone}</p>
          </div>
        </aside>
      </div>
      <div className="flex justify-between gap-1 lg:gap-5 mt-5">
        <aside className="border-[2px] border-[#eaeaea] w-[100%] rounded shadow-sm">
          <h3 className="p-5 border-b-[2px] border-[#eaeaea]">STORE CREDIT</h3>
          <div className="p-5 flex items-center gap-5">
            <Image src={"/wallet.png"} width={500} height={500} alt="icon" className="w-10 h-10" />
            <p>{user?.walletAmount}.00</p>
          </div>
        </aside>
        <aside className="border-[2px] border-[#eaeaea] w-[100%] rounded shadow-sm">
          <h3 className="p-2 lg:p-5 border-b-[2px] border-[#eaeaea] text-[14px] lg:text-[17px]">
            NEWSLETTER PREFERENCES
          </h3>
          <div className="p-2 lg:p-5">
            <div>
              {user?.subscribedToNewsLetter ? (
                "You are currently subscribed to any of our newsletters."
              ) : (
                <>
                  <p>You are not currently subscribed to any of our newsletters.</p>
                  <button
                    disabled={loading ? true : false}
                    onClick={handleSubscribe}
                    className="bg-blue-400 p-2 text-white rounded-md my-2">
                    {loading ? "Subscribing" : "subscribe to Newsletter"}
                  </button>
                </>
              )}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Account;
