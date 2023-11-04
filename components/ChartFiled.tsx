"use client";
import Image from "next/image";
import { BsSendFill } from "react-icons/bs";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import appwriteServices, { appwriteClient } from "@/lib/appwrite";
import { Fragment } from "react";
import Message from "@/app/(public)/(protected)/chats/Message";
import { chatsCollectionId, databaseId } from "@/lib/config";
interface UserChats {
  $createdAt: string;
  $id: string;
  combinedId: string;
  receiverId: string;
  receiverName: string;
  senderId: string;
  senderName: string;
}

interface Props {
  currenConversation: UserChats;
}
interface Conversation {
  combinedId: string;
  message: string;
  userId: string;
  userName: string;
  $id: string;
}
const ChartFiled = () => {
  const localStorageCombinedId: any =
    typeof window !== "undefined" && localStorage.getItem("combinedId");

  const [message, setMessage] = useState<any>("");
  const [conversations, setConversations] = useState<any>([]);
  const [activeUser, setActiveUser] = useState<any>(null);
  const [recentMessage, setRecentMessage] = useState("");
  const { user, userChartWith } = useSelector((store: any) => store.shop);

  const combinedId =
    user?.$id > userChartWith?.userId
      ? user?.$id + userChartWith?.userId
      : userChartWith?.userId + user?.$id;

  const handleSubmit = async () => {
    if (message !== "") {
      await appwriteServices.createChats({
        combinedId,
        message,
        userId: user?.$id,
        userName: user?.company || `${user?.firstName} ${user?.surname}`,
      });
    } else {
      return;
    }
    setMessage("");
  };
  useEffect(() => {
    const getActiveChat = async () => {
      const data = await appwriteServices.getActiveChat(localStorageCombinedId);
      setActiveUser(data);
    };
    getActiveChat();
  }, [combinedId]);
  // conversation

  const getConversation = async () => {
    const data = await appwriteServices.getChats(combinedId);
    setConversations(data);
  };

  useEffect(() => {
    getConversation();
    // const unsubscribe = appwriteClient.subscribe(
    //   `databases.${databaseId}.collections.${chatsCollectionId}.documents`,
    //   (response) => {
    //     if (response.events.includes("databases.*.collections.*.documents.*.create")) {
    //       // console.log(response);
    //       setRecentMessage(response?.payload?.message);
    //     }
    //   }
    // );
    // return () => {
    //   unsubscribe();
    // };
  }, [message, userChartWith]);
  return (
    <div className="relative h-full">
      <div className="flex items-end gap-2 border-b-[1px] border-[#eaeaea] p-5">
        {userChartWith && (
          <>
            <Image
              src={"/avatar.jpg"}
              height={100}
              width={100}
              alt="avatar"
              className="w-[45px] h-[45px] rounded-full"
            />
          </>
        )}
        <div className="flex flex-col justify-between">
          <p className="text-[12px] font-semibold">
            {userChartWith?.userName || activeUser?.userName || "tab on user to start conversation"}
          </p>
          <div className="flex items-center gap-[5px]">
            {userChartWith && (
              <>
                {/* <div className="bg-green-500 w-[7px] h-[7px] rounded-full shadow mt-1"></div> */}
                {/* <p className="text-[#999]">online</p> */}
              </>
            )}
          </div>
        </div>
      </div>

      <div className="h-[40vh] md:h-[60vh] overflow-y-scroll">
        <div className="">
          {conversations?.map((message: Conversation) => {
            return (
              <Fragment key={message?.$id}>
                <Message conversation={message} user={user} />
              </Fragment>
            );
          })}
        </div>
      </div>
      <div className="w-[90%] mx-auto flex border-[1px] bg-[#c1bfbf] border-[#999] rounded-r-md">
        <aside
          className="w-[5rem] flex items-center justify-center cursor-pointer"
          onClick={handleSubmit}>
          <BsSendFill fontSize={20} />
        </aside>
        <input
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          placeholder="Enter message here..."
          type="text"
          className="w-full border-none outline-none p-2 rounded-r-md"
        />
      </div>
    </div>
  );
};

export default ChartFiled;
