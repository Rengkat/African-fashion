"use client";
import { useState, useEffect } from "react";
import ChartFiled from "@/components/ChartFiled";
import ChatList from "@/components/ChatList";
import { useSelector } from "react-redux";
import appwriteServices from "@/lib/appwrite";
interface UserChats {
  $createdAt: string;
  $id: string;
  combinedId: string;
  userId: string;
  userName: string;
  currentUserId: string;
}
const chats = () => {
  const { user } = useSelector((store: any) => store.shop);
  const [userChats, setUserChats] = useState<UserChats[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const getChats = async () => {
      const data: any = await appwriteServices.getUserChats(user?.$id);

      setUserChats(data);
      setLoading(false);
    };

    getChats();
  }, [user?.$id]);

  return (
    <div className="mt-[1rem] mb-20">
      <div className="w-[95%] lg:w-[80%] mx-auto h-[60vh] md:h-[80vh] bg-[#fff] rounded-lg shadow-lg flex overflow-hidden ">
        <aside className="w-[30%] border-r-[1px] border-[#eaeaea]">
          <ChatList userChats={userChats} loading={loading} />
        </aside>
        <aside className="w-[70%]">
          <ChartFiled />
        </aside>
      </div>
    </div>
  );
};

export default chats;
