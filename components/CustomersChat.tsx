"use client";
import appwriteServices from "@/lib/appwrite";
import { onChangeUserChat } from "@/redux/features/shopSlice";
import Image from "next/image";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
interface UserChats {
  $createdAt: string;
  $id: string;
  combinedId: string;
  userId: string;
  userName: string;
  currentUserId: string;
}
interface Props {
  userChat: UserChats;
  loading: boolean;
  // setCurrentConversation: (chat: UserChats | null) => void;
}

const CustomersChat = ({ userChat, loading }: Props) => {
  const localStorageCombinedId: any = localStorage.getItem("combinedId");
  const { user } = useSelector((store: any) => store.shop);
  const combinedId =
    user?.$id > userChat?.userId ? user?.$id + userChat?.userId : userChat?.userId + user?.$id;

  const dispatch = useDispatch();
  const handleClick = async () => {
    dispatch(onChangeUserChat(userChat));
    const data = await appwriteServices.getActiveChat(localStorageCombinedId);

    if (data?.$id) {
      await appwriteServices.updateActiveChat({
        combinedId,
        userName: userChat?.userName,
        userId: userChat?.userId,
        id: data.$id,
      });
    } else {
      // Handle the case where data.$id is undefined, e.g., throw an error or handle it as needed.
    }
  };
  return (
    <div
      onClick={handleClick}
      className="hover:bg-[#efefef] rounded-md py-[10px] px-[15px] cursor-pointer">
      <div className="flex flex-col md:flex-row gap-2">
        <div className="relative  w-[45px] h-[45px]">
          <Image
            src={"/avatar.jpg"}
            height={100}
            width={100}
            alt="avatar"
            className=" w-[45px] h-[45px] rounded-full border-[1px] border-black"
          />
          <div className="absolute md:hidden bottom-[2px] right-1 lg:hidden bg-green-500 w-[10px] h-[10px] rounded-full shadow mt-1"></div>
        </div>
        <p className="text-[#999] md:hidden text-xs">{userChat.userName}</p>

        <div className=" hidden md:flex flex-col justify-between">
          <p className="md:text-sm lg:text-[16px]">{userChat.userName}</p>
          <div className="flex items-center gap-[5px]">
            <div className="bg-green-500 w-[7px] h-[7px] rounded-full shadow mt-1"></div>
            <p className="text-[#999]">online</p>
          </div>
        </div>
        <div className="hidden flex flex-col justify-between">
          <p>{userChat.userName}</p>
          <div className="flex items-center gap-[5px]">
            <div className="bg-[#e47297] w-[7px] h-[7px] rounded-full shadow mt-1"></div>
            <p className="text-[#999]">left 12 mins ago</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomersChat;
