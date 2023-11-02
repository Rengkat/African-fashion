"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BsSearch, BsBoxSeam, BsHeart } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { openProfile } from "@/redux/features/shopSlice";
import appwriteServices from "@/lib/appwrite";
import { useRouter } from "next/navigation";

const Profile = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { isProfileOpen, authStatus, user } = useSelector((store: any) => store.shop);
  // const router = useRouter();
  const [userDetail, setUserUserDetail] = useState<any>(null);
  const hanleLogOut = () => {
    appwriteServices.logOut();
    router.refresh();
  };
  useEffect(() => {
    const getUserDetail = async () => {
      const data = await appwriteServices.getCurrentUser();

      setUserUserDetail(data);
    };
    getUserDetail();
  }, [authStatus]);
  return (
    <div
      onClick={() => dispatch(openProfile())}
      className="relative flex items-center gap-2 w-[10rem] cursor-pointer ">
      <Image
        src="/account 2.svg"
        width={50}
        height={50}
        alt="account"
        className="w-[2.5rem] h-[2.5rem]"
      />
      <div>
        <p className="font-semibold text-[16px] xl:text-[20px]">{authStatus && userDetail?.name}</p>
      </div>

      <MdKeyboardArrowDown fontSize={20} />
      <div
        className={`${
          isProfileOpen ? "block" : "hidden"
        } border-[.02rem] rounded-md border-slate-200 absolute list-none w-[110%] top-[100%] p-2 bg-white`}>
        {!authStatus ? (
          <Link href={"/login"}>
            <button className="w-full bg-blue-400 text-white font-semibold rounded shadow py-2 px-3">
              Login
            </button>
          </Link>
        ) : (
          ""
        )}

        <div className="my-5">
          {authStatus && (
            <>
              <Link href={"account"}>
                <div className="flex gap-2 items-center py-2 hover:bg-slate-200 px-2 rounded-md">
                  <CiUser fontSize={20} /> <span> My Account</span>
                </div>
              </Link>
              <div>
                {!user?.company && (
                  <>
                    <Link href={"account/orders"}>
                      <div className="flex gap-2 items-center py-2 hover:bg-slate-200 px-2 rounded-md">
                        <BsBoxSeam fontSize={20} /> <span> Orders</span>
                      </div>
                    </Link>
                    <Link href={"account/wishlist"}>
                      <div className="flex gap-2 items-center py-2 hover:bg-slate-200 px-2 rounded-md ">
                        <BsHeart fontSize={20} /> <span> Wishlist</span>
                      </div>
                    </Link>
                  </>
                )}
              </div>
            </>
          )}
        </div>

        {authStatus && (
          <button
            onClick={hanleLogOut}
            className="w-full border-[.2px] border-slate-100 hover:bg-blue-400 hover:text-white text-blue-400 font-semibold rounded shadow py-2 px-3">
            log out
          </button>
        )}
      </div>
    </div>
  );
};

export default Profile;
