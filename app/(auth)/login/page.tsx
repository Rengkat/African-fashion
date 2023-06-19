import Image from "next/image";
import React, { ReactElement } from "react";

const Login = () => {
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
        <h1 className="text-center font-normal text-2xl lg:text-3xl my-3">Login</h1>
        <form>
          <label className="block py-[2px]" htmlFor="firstName">
            Email Address or Phone Number
          </label>
          <input
            type="text"
            className="w-full p-2 mb-3 mt-[5px] outline-none border-[1px] border-slate-300"
            placeholder="Enter first name"
          />

          <label className="block py-[2px]" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            className="w-full p-2 mb-3 mt-[5px] outline-none border-[1px] border-slate-300"
            placeholder="Enter password"
          />
          <button className="bg-blue-400 py-[3px] px-4 rounded-md w-full shadow text-xl font-light text-white my-5">
            Create Account
          </button>
          <p className="text-center py-2">Don't have an Account??</p>
          <button className="border-[2px] transition-all duration-100 border-red-400 hover:bg-red-400 py-[4px] px-4 rounded w-full shadow font-semibold text-red-400 hover:text-white mb-3">
            Create an Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

Login.getLayout = function getLayout(page: ReactElement) {
  return <>{page}</>;
};
