import Image from "next/image";
import React from "react";

const register = () => {
  return (
    <div className="mt-[5px] mb-[1rem]">
      <Image
        src="/logo.svg"
        width={500}
        height={500}
        alt="logo"
        className=" w-24 h-24 object-cover mx-auto"
      />
      <div className=" max-w-[25rem] mx-auto shadow-lg border-2 px-10 py-5 ]">
        <h1 className="text-center font-normal text-2xl lg:text-3xl my-3">
          Create an account
        </h1>
        <form>
          <label className="block py-[2px]" htmlFor="firstName">
            First Name:
          </label>
          <input
            type="text"
            className="w-full p-2 mb-3 mt-[5px] outline-none border-[1px] border-slate-300"
            placeholder="Enter first name"
          />
          <label className="block py-[2px]" htmlFor="surname">
            Surname:
          </label>
          <input
            type="text"
            className="w-full p-2 mb-3 mt-[5px] outline-none border-[1px] border-slate-300"
            placeholder="Enter surname"
          />
          <label className="block py-[2px]" htmlFor="email">
            Email Address:
          </label>
          <input
            type="email"
            className="w-full p-2 mb-3 mt-[5px] outline-none border-[1px] border-slate-300"
            placeholder="Enter email address"
          />
          <label className="block py-[2px]" htmlFor="phone">
            Phone Number:
          </label>
          <input
            type="email"
            className="w-full p-2 mb-3 mt-[5px] outline-none border-[1px] border-slate-300"
            placeholder="Enter phone number"
          />
          <label className="block py-[2px]" htmlFor="password">
            Password:
          </label>
          <input
            type="password"
            className="w-full p-2 mb-3 mt-[5px] outline-none border-[1px] border-slate-300"
            placeholder="Enter password"
          />
          <button className="bg-blue-400 py-[3px] px-4 rounded-md w-full shadow text-xl font-light text-white my-5">
            Create Account
          </button>
          <p className="text-center py-2">Already have an Account?</p>
          <button className="border-[2px] transition-all duration-100 border-red-600 hover:bg-red-600 py-[2px] px-4 rounded w-full shadow text-xl font-light text-red-600 hover:text-white mb-3">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default register;
