"use client";
import appwriteServices from "@/lib/appwrite";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
const register = () => {
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (firstName === "" || surname === "" || email === "" || phone === "" || password === "") {
      console.log("Enter fields");
      return;
    }

    try {
      const user = await appwriteServices.createUserAccount({
        email,
        password,
        firstName,
        surname,
        company,
        phone,
      });
      if (user) {
        router.push("/login");
      }
    } catch (error) {
      console.error("Error during request:", error);
    }
    setFirstName("");
    setSurname("");
    setPassword("");
    setEmail("");
    setCompany("");
    setPhone("");
  };

  return (
    <div className="mt-[5px] mb-[1rem]">
      <div className=" max-w-[25rem] mx-auto shadow-lg border-2 px-10 py-5 ]">
        <h1 className="text-center font-normal text-2xl lg:text-3xl my-3">
          Create stylist account
        </h1>
        <form onSubmit={handleSubmit}>
          <label className="block py-[2px]" htmlFor="firstName">
            First Name:
          </label>
          <input
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
            type="text"
            className="w-full p-2 mb-3 mt-[5px] outline-none border-[1px] border-slate-300"
            placeholder="Enter first name"
          />
          <label className="block py-[2px]" htmlFor="surname">
            Surname:
          </label>
          <input
            onChange={(e) => setSurname(e.target.value)}
            value={surname}
            type="text"
            className="w-full p-2 mb-3 mt-[5px] outline-none border-[1px] border-slate-300"
            placeholder="Enter surname"
          />
          <label className="block py-[2px]" htmlFor="surname">
            Company's Name:
          </label>
          <input
            onChange={(e) => setCompany(e.target.value)}
            value={company}
            type="text"
            className="w-full p-2 mb-3 mt-[5px] outline-none border-[1px] border-slate-300"
            placeholder="Enter surname"
          />
          <label className="block py-[2px]" htmlFor="email">
            Email Address:
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            className="w-full p-2 mb-3 mt-[5px] outline-none border-[1px] border-slate-300"
            placeholder="Enter email address"
          />
          <label className="block py-[2px]" htmlFor="phone">
            Phone Number:
          </label>
          <input
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
            type="text"
            className="w-full p-2 mb-3 mt-[5px] outline-none border-[1px] border-slate-300"
            placeholder="Enter phone number"
          />
          <label className="block py-[2px]" htmlFor="password">
            Password:
          </label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            className="w-full p-2 mb-3 mt-[5px] outline-none border-[1px] border-slate-300"
            placeholder="Enter password"
          />
          <button
            type="submit"
            className="bg-blue-400 py-[3px] px-4 rounded-md w-full shadow text-xl font-light text-white my-5">
            Create Account
          </button>
          <p className="text-center py-2">Already have an Account?</p>
          <Link href={"/login"}>
            <button className="border-[2px] transition-all duration-100 border-red-600 hover:bg-red-600 py-[2px] px-4 rounded w-full shadow text-xl font-light text-red-600 hover:text-white mb-3">
              Login
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default register;
