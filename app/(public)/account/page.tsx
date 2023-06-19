"use client";
import Image from "next/image";

const Account = () => {
  return (
    <div className="p-5 w-full">
      <h1 className="font-bold text-2xl mb-5">Account Overview</h1>
      <div className="flex justify-between flex-col lg:flex-row gap-5">
        <aside className="border-[2px] border-[#eaeaea] w-[100%] rounded shadow-sm">
          <h3 className="border-b-[2px] border-[#eaeaea] p-5">ACCOUNT DETAILS</h3>
          <div className="p-5">
            <label className="font-semibold text-[19px]">Name:</label>
            <p>Alexander Rengkat</p>
            <label className="font-semibold text-[19px] mt-2" htmlFor="email">
              Email:
            </label>
            <p>rengkatalexander06@gmail.com</p>
          </div>
        </aside>
        <aside className="border-[2px] border-[#eaeaea] w-[100%] rounded shadow-sm ">
          <h3 className="p-5 border-b-[2px] border-[#eaeaea]">ADDRESS BOOK</h3>
          <div className="p-5">
            <label className="font-semibold text-[19px]">Your default shipping address:</label>
            <p>
              Rengkat Alexander Block 1, Room 12, Bar Beach Police Barrack, Victoria Island, Lagos
              VI (Ahmed Bello way), Lagos
            </p>
            <label className="font-semibold text-[19px] mt-2">Phone</label>
            <p> +234 8067581175</p>
          </div>
        </aside>
      </div>
      <div className="flex justify-between gap-1 lg:gap-5 mt-5">
        <aside className="border-[2px] border-[#eaeaea] w-[100%] rounded shadow-sm">
          <h3 className="p-5 border-b-[2px] border-[#eaeaea]">STORE CREDIT</h3>
          <div className="p-5 flex items-center gap-5">
            <Image src={"/wallet.png"} width={500} height={500} alt="icon" className="w-10 h-10" />
            <p>N0.00</p>
          </div>
        </aside>
        <aside className="border-[2px] border-[#eaeaea] w-[100%] rounded shadow-sm">
          <h3 className="p-2 lg:p-5 border-b-[2px] border-[#eaeaea] text-[14px] lg:text-[17px]">
            NEWSLETTER PREFERENCES
          </h3>
          <div className="p-2 lg:p-5">
            <p>You are currently not subscribed to any of our newsletters.</p>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Account;
