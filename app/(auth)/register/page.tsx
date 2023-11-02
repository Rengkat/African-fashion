"use client";
import { useState } from "react";
import Link from "next/link";
import appwriteServices from "@/lib/appwrite";
import { getAuthStatus } from "@/redux/features/shopSlice";
import { useDispatch, useSelector } from "react-redux";
// import { useRouter } from "next/navigation";
const Register = () => {
  const dispatch = useDispatch();
  // const router = useRouter();

  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const user = await appwriteServices.createUserAccount({
        email,
        password,
        phone,
        firstName,
        surname,
      });

      if (user) {
        dispatch(getAuthStatus(false));
        // router.push("/login");
      }
    } catch (error: any) {
      setErr(error.message);
    }
    setFirstName("");
    setSurname("");
    setPhone("");
    setEmail("");
    setPassword("");
  };
  return (
    <div className="mt-[5px] mb-[1rem]">
      <div className=" max-w-[25rem] mx-auto shadow-lg border-2 px-10 py-5 ]">
        <h1 className="text-center font-normal text-2xl lg:text-3xl my-3">Create an account</h1>
        <form onSubmit={handleSubmit}>
          <label className="block py-[2px]" htmlFor="firstName">
            First Name:
          </label>
          <input
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
            name="firstName"
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
            name="surname"
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
            name="email"
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
            name="phone"
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
            name="password"
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

export default Register;
