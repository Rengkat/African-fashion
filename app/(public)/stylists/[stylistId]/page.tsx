import Image from "next/image";
import Link from "next/link";
import {
  MdStar,
  IoLogoWechat,
  FaTwitter,
  FaFacebookSquare,
  BsInstagram,
  BsTelephoneFill,
  BsPinterest,
} from "react-icons/all";

const seller = () => {
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
        <aside className="w-full lg:w-[30%]">
          <div className="bg-[#fff] my-5 lg:my-0 lg:mx-5 rounded-lg shadow-lg border-[#eaeaea] p-[2rem]">
            <button className="flex items-center justify-center gap-3 text-center w-full rounded-md bg-blue-500 shadow font-semibold text-white py-2 px-4">
              <IoLogoWechat fontSize={25} /> <span>Chat Stylist</span>
            </button>
            <button className="flex items-center justify-center gap-3 text-center w-full rounded-md bg-blue-500 shadow font-semibold text-white py-2 px-4 my-3">
              <BsTelephoneFill /> <span>+2348056874434</span>
            </button>
            <div className="flex justify-between my-3">
              <FaTwitter fontSize={25} className="text-blue-400" />
              <FaFacebookSquare fontSize={25} className="text-blue-800" />
              <BsInstagram fontSize={25} className="text-pink-600" />
              <BsPinterest fontSize={25} className="text-red-600" />
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default seller;
