"use client";
import Image from "next/image";
import Link from "next/link";
import React, { FormEvent, ReactElement, useEffect } from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { getAuthStatus } from "@/redux/features/shopSlice";
import appwriteServices, { db } from "@/lib/appwrite";

const Login = () => {
  const [err, setErr] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginSuccessful, setLoginSuccessful] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    if (loginSuccessful) {
      router.push("/account"); // Redirect when loginSuccessful is true
    }
  }, [loginSuccessful]);

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const session = await appwriteServices.loginUser({ email, password });
      if (session) {
        dispatch(getAuthStatus(true));
        setLoginSuccessful(true); // Set loginSuccessful to true upon successful login
      }
    } catch (error: any) {
      setErr(error.message);
    }
  };

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
        <form onSubmit={handleLogin}>
          <label className="block py-[2px]" htmlFor="firstName">
            Email Address
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            name="email"
            type="text"
            className="w-full p-2 mb-3 mt-[5px] outline-none border-[1px] border-slate-300"
            placeholder="Enter first name"
          />

          <label className="block py-[2px]" htmlFor="password">
            Password
          </label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            name="password"
            type="password"
            className="w-full p-2 mb-3 mt-[5px] outline-none border-[1px] border-slate-300"
            placeholder="Enter password"
          />

          <button
            type="submit"
            className="bg-blue-400 py-[3px] px-4 rounded-md w-full shadow text-xl font-light text-white my-5">
            Login
          </button>
          <p className="text-center py-2">Don't have an Account?</p>
          <Link href={"/register"}>
            <button className="border-[2px] transition-all duration-100 border-red-400 hover:bg-red-400 py-[4px] px-4 rounded w-full shadow font-semibold text-red-400 hover:text-white mb-3">
              Create Account
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
