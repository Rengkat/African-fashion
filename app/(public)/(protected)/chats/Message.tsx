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
  return (
    <div
      className={`flex ${conversation?.userId === user?.$id ? "justify-end" : "justify-start"} `}>
      <p
        className={`${
          conversation?.userId === user?.$id ? "bg-blue-200" : "bg-gray-200 "
        } inline-block py-[5px] px-[8px] rounded-xl my-1 mx-3`}>
        {conversation.message}
      </p>
    </div>
  );
};

export default Message;
