import ChartFiled from "@/components/ChartFiled";
import ChatList from "@/components/ChatList";
import React from "react";

const chats = () => {
  return (
    <div className=" mt-[1rem] mb-20">
      <div className="w-[80%] mx-auto h-[80vh] bg-[#fff] rounded-lg shadow-lg flex ">
        <aside className="w-[30%] border-r-[1px] border-[#eaeaea]">
          <ChatList />
        </aside>
        <aside className="w-[70%]">
          <ChartFiled />
        </aside>
      </div>
    </div>
  );
};

export default chats;
