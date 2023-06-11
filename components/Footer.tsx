import { instagramImage } from "@/public/constants";
import { FiInstagram } from "react-icons/fi";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div>
      {/* instagram */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        {instagramImage.map((img) => {
          return (
            <>
              <div className="relative">
                <Image
                  className=" w-[100%] h-[30vh] lg:h-[50vh] object-cover"
                  src={img.img}
                  width={500}
                  height={500}
                  alt={img.name}
                />
                <div className="hidden absolute inset-0 bg-[#ffffffb2]">
                  <div className="flex items-center justify-center h-[50vh] flex-col">
                    <FiInstagram fontSize={30} className="" />
                    <p className="font-semibold text-[18px]">{img.name}</p>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <div className=" pb-[8rem] bg-[#2b2a2a]">
        <div className="leading-5 lg:leading-10 grid grid-cols-2 lg:grid-cols-4 gap-5 w-[80%] mx-auto text-white pt-[2rem] lg:pt-[4rem]">
          <div>
            <h1 className="font-bold text-xl lg:text-2xl uppercase py-3">
              Categories
            </h1>
            <ul className="">
              <li>Men Native Wears</li>
              <li>Men Cooperate Wears</li>
              <li>Women Native Wears</li>
              <li>Women Cooperate Wears</li>
            </ul>
          </div>
          <div>
            <h1 className="font-bold text-xl lg:text-2xl uppercase py-3">
              Help
            </h1>
            <ul>
              <li>Track Order</li>
              <li>Returns</li>
              <li>Shipping</li>
            </ul>
          </div>
          <div>
            <h1 className="font-bold text-xl lg:text-2xl uppercase py-3">
              Get in touch
            </h1>
            <p>
              Any questions? Let us know in store at 8th floor, 379 Yakubu
              Gowon, Jos, Plateau State Nigeria or call us on (+234) 096 716
              6879
            </p>
          </div>
          <div>
            <h1 className="font-bold text-xl lg:text-2xl uppercase py-3">
              newsletter
            </h1>
            <input
              placeholder="xyz@gmail.com"
              type="text"
              className="block bg-[#2b2a2a] p-2 outline-none border-b-2 border-slate-300 w-full"
            />
            <button className="w-full bg-blue-400 p-2 text-white font-bold rounded-[2rem] shadow-md text-xl mt-3">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
