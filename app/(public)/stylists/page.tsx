import React from "react";
import Stylist from "../../../components/Stylist";
import appwriteServices from "@/lib/appwrite";

interface StylistProps {
  company: string;
  phone: string;
  services: string;
  email: string;
  $id: string;
}
const Stylists = async () => {
  const data = await appwriteServices.getStylists();
  const stylists = data?.documents;

  return (
    <div className="w-[95%] md:w-[95%] xl:w-[80%] mt-5 mx-auto">
      <h1 className="text-xl lg:text-4xl font-light">STYLISTS</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-10">
        {stylists?.map((stylist: any) => {
          return (
            <>
              <Stylist stylist={stylist} />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Stylists;
