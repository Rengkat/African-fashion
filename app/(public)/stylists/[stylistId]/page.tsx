import Image from "next/image";
import Link from "next/link";
import { BsInstagram, BsTelephoneFill, BsPinterest } from "react-icons/bs";
import { FaTwitter, FaFacebookSquare } from "react-icons/fa";
import { MdStar } from "react-icons/md";
import { IoLogoWechat } from "react-icons/io5";
import appwriteServices from "@/lib/appwrite";
import ChatBtn from "./chatBtn";
interface Props {
  params: { stylistId: string };
  searchParams: { [key: string]: string | string[] | undefined };
}
interface Stylist {
  company: string;
  phone: string;
  website: string;
  companyDescription: string;
  companyAddress: string;
  state: string;
  twitter: string;
  pintrest: string;
  email: string;
  facebook: string;
  instagram: string;
  firstName: string;
  surname: string;
  $id: string;
  $createdAt: string;
}
const seller = async ({ params, searchParams }: Props) => {
  const id = params.stylistId;
  const stylist: any = await appwriteServices.getSingleStylist(id);
  // console.log(searchParams);
  console.log(stylist);
  return (
    <div className="my-10">
      <div className="w-[95%] lg:w-[80%] mx-auto lg:h-[60vh] md:h-[80vh]  flex flex-col lg:flex-row ">
        <aside className="w-full lg:w-[70%]">
          <div className="bg-[#fff] rounded-lg shadow-lg border-[#eaeaea] w-full flex flex-col lg:flex-row gap-5 p-[1rem] lg:p-[2rem]">
            <div className="w-full lg:w-[20%]">
              <Image
                src={"/avatar.jpg"}
                height={500}
                width={500}
                alt="avatar"
                className="w-[5rem] lg:w-[10rem] mx-auto h-[5rem] lg:h-[10rem] rounded-full border-[1px] border-slate-200 object-cover"
              />
            </div>
            <div className="w-full lg:w-[80%]">
              <h1 className="text-3xl font-bold my-3 capitalize">{stylist?.company}</h1>
              <p className="mb-[1rem]">
                {stylist.companyDescription ? (
                  stylist?.companyDescription
                ) : (
                  <>No company Description</>
                )}
              </p>
              <Link className=" text-blue-600" href={stylist?.website}>
                {stylist.website ? stylist?.website : <>No official website yet</>}
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
                <p>{stylist?.companyAddress ? stylist?.companyAddress : <>Yet to address</>}</p>
                <p>{stylist?.state ? stylist?.state : <>Stylist is yet to add state</>}</p>
                <p>{stylist?.state ? stylist?.state : <>No branch added</>}</p>
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
        <aside className="w-full mb-[5rem] lg:mb-[0rem] lg:w-[30%]">
          <div className="bg-[#fff] my-5 lg:my-0 lg:mx-5 rounded-lg shadow-lg border-[#eaeaea] p-[2rem]">
            <ChatBtn stylist={stylist} />
            <button className="flex items-center justify-center gap-3 text-center w-full rounded-md bg-blue-500 shadow font-semibold text-white py-2 px-4 my-3">
              <BsTelephoneFill /> <span>{stylist?.phone}</span>
            </button>
            <div className="flex justify-between my-3">
              <Link href={stylist?.twitter}>
                <FaTwitter fontSize={25} className="text-blue-400" />
              </Link>
              <Link href={stylist.facebook}>
                <FaFacebookSquare fontSize={25} className="text-blue-800" />
              </Link>
              <Link href={stylist.instagram}>
                <BsInstagram fontSize={25} className="text-pink-600" />
              </Link>
              <Link href={stylist.pintrest}>
                <BsPinterest fontSize={25} className="text-red-600" />
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default seller;
