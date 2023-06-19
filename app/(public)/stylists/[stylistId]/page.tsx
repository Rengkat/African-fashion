import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdStar } from "react-icons/md";
const seller = () => {
  return (
    <div className="my-10">
      <div className="w-[95%] lg:w-[80%] mx-auto h-[60vh] md:h-[80vh]  flex ">
        <aside className="w-[70%] border-r-[1px]">
          <div className="bg-[#fff] rounded-lg shadow-lg border-[#eaeaea] w-full flex gap-5 p-[2rem]">
            <div className="w-[20%]">
              <Image
                src={"/avatar.jpg"}
                height={500}
                width={500}
                alt="avatar"
                className=" w-[10rem] h-[10rem] rounded-full border-[1px] border-slate-200 object-cover"
              />
            </div>
            <div className="w-[80%]">
              <h1 className="text-3xl font-bold my-3">Chinex Fashion</h1>
              <p className="mb-[1rem]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ut
                aspernatur doloremque minima soluta quis quam magni ab molestias, reiciendis
                eligendi enim.
              </p>
              <Link className=" text-blue-600" href={""}>
                www.chinexfashion.com
              </Link>
            </div>
          </div>
          <div className="bg-[#fff] mt-5 rounded-lg shadow-lg border-[#eaeaea] w-full p-[2rem]">
            <h1 className="font-bold">Location Info</h1>
            <div className="flex mt-3">
              <div className="w-[30%]">
                <p>Company Address</p>
                <p>State</p>
                <p>Branches</p>
                <p>Number of Products</p>
                <p>Rating</p>
              </div>
              <div className="w-[70%]">
                <p>Ahmandu Bello way Jos</p>
                <p>Plateau State</p>
                <p>Lagos, Abuja, Kano, Kaduna, Enugu</p>
                <p>28</p>
                <div className="flex gap-2 items-center text-yellow-500">
                  <MdStar />
                  <MdStar />
                  <MdStar />
                  <MdStar />
                </div>
              </div>
            </div>
          </div>
        </aside>
        <aside className="w-[30%]"></aside>
      </div>
    </div>
  );
};

export default seller;
