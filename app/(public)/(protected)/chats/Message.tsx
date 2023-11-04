import { useRef, useEffect } from "react";
import React from "react";
interface Conversation {
  combinedId: string;
  message: string;
  userId: string;
  userName: string;
  $id: string;
}
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
  conversation: Conversation;
  user: UserChats;
}
const Message = ({ conversation, user }: Props) => {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [conversation, user]);
  return (
    <div>
      <div
        ref={ref}
        className={`flex ${
          conversation?.userId === user?.$id ? "justify-end ml-[5rem]" : "justify-start mr-[5rem]"
        } `}>
        <p
          className={`${
            conversation?.userId === user?.$id ? "bg-blue-200" : "bg-gray-200 "
          } inline-block py-[5px] px-[8px] rounded-xl my-1 mx-3 `}>
          {conversation.message}
        </p>
      </div>
    </div>
  );
};

export default Message;
