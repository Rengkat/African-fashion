"use client";
import { IoLogoWechat } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import appwriteServices from "@/lib/appwrite";
import { onChangeUserChat } from "@/redux/features/shopSlice";

const ChatBtn = ({ stylist }: any) => {
  const { user } = useSelector((store: any) => store.shop);
  const dispatch = useDispatch();
  const router = useRouter();

  const combinedId = user?.$id > stylist?.$id ? user?.$id + stylist?.$id : stylist?.$id + user?.$id;
  const activeChatData = {
    userName: stylist?.company || `${stylist.firstName} ${stylist?.surname}`,
    combinedId: combinedId,
    userId: stylist?.$id,
  };

  const handleClick = async () => {
    // fetch user chat to check if it already exist
    const userCharts = await appwriteServices.getSingleUserChats(stylist?.$id);
    // fetch active chat to check if it exist
    // Set the combinedId in localStorage
    localStorage.setItem("combinedId", combinedId);
    dispatch(onChangeUserChat(activeChatData));
    const getActiveChat = await appwriteServices.getActiveChat(combinedId);
    if (!getActiveChat) {
      await appwriteServices.createActiveChat({
        userName: stylist?.company || `${stylist.firstName} ${stylist?.surname}`,
        combinedId: combinedId,
        userId: stylist?.$id,
        currentUserId: user?.$id,
      });
    } else {
      await appwriteServices.updateActiveChat({
        combinedId,
        userName: stylist?.company || `${stylist.firstName} ${stylist?.surname}`,
        userId: stylist?.$id,
        id: getActiveChat?.$id,
      });
    }
    try {
      if (!userCharts) {
        await appwriteServices.createUserChats({
          senderId: user?.$id,
          senderName: user?.company || `${user?.firstName} ${user?.surname} `,
          receiverId: stylist?.$id,
          receiverName: stylist?.company || `${stylist.firstName} ${stylist?.surname}`,
        });
        router.push("/chats");
      } else {
        router.push("/chats");
      }
    } catch (error) {}
  };
  return (
    <button
      onClick={handleClick}
      className="flex items-center justify-center gap-3 text-center w-full rounded-md bg-blue-500 shadow font-semibold text-white py-2 px-4">
      <IoLogoWechat fontSize={25} /> <span>Chat Stylist</span>
    </button>
  );
};

export default ChatBtn;
