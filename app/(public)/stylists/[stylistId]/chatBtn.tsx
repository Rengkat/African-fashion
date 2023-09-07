"use client";
import { IoLogoWechat } from "react-icons/io5";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useSelector } from "react-redux";

const ChatBtn = ({ stylist }: any) => {
  const { user } = useSelector((store: any) => store.shop);
  const router = useRouter();
  const handleClick = async () => {
    const combinedId =
      user?.$id > stylist?.$id ? user?.$id + stylist?.$id : stylist?.$id + user?.$id;
    // router.push("/chats");
  };
  return (
    // <Link href={"/chats"}>
    <button
      onClick={handleClick}
      className="flex items-center justify-center gap-3 text-center w-full rounded-md bg-blue-500 shadow font-semibold text-white py-2 px-4">
      <IoLogoWechat fontSize={25} /> <span>Chat Stylist</span>
    </button>
    // </Link>
  );
};

export default ChatBtn;
