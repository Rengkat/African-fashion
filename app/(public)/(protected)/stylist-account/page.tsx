"use client";
import appwriteServices, { db } from "@/lib/appwrite";
import Link from "next/link";
import { useState } from "react";
import { useSelector } from "react-redux";
const StylistAccount = () => {
  const { user } = useSelector((store: any) => store.shop);
  // console.log(user);
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
            <label className="font-semibold text-[19px]">Company Name:</label>
            <p>{user?.company}</p>
            <label className="font-semibold text-[19px] mt-2" htmlFor="email">
              Company Email:
            </label>
            <p>{user?.email}</p>
          </div>
        </aside>
        <aside className="border-[2px] border-[#eaeaea] w-[100%] rounded shadow-sm ">
          <h3 className="p-5 border-b-[2px] border-[#eaeaea]">MAIN OFFICE ADDRESS </h3>
          <div className="p-5">
            <label className="font-semibold text-[19px] mb-2">Your default company address:</label>
            <>
              {user?.companyAddress ? (
                user.companyAddress
              ) : (
                <>
                  <Link
                    className="rounded p-2 bg-blue-400 text-white border-slate-300"
                    href={"stylist-account/edit"}>
                    Add company address and branches
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
          <h3 className="p-5 border-b-[2px] border-[#eaeaea]">Company Description</h3>
          <div className="p-5 flex items-center gap-5">
            {/* <Image src={"/wallet.png"} width={500} height={500} alt="icon" className="w-10 h-10" /> */}
            <p>{user?.companyDescription}</p>
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

export default StylistAccount;
