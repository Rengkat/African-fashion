import React from "react";
import CustomersChat from "./CustomersChat";
import { BsSearch } from "react-icons/bs";
const friends = [1, 3, 4, 5, 7, 8, 9, 6, 4, 3, 2, 45, 6, 7, 8];
const ChatList = () => {
  return (
    <div className="p-2 lg:p-5 ">
      <div className="hidden flex w-full items-center border-[1px] rounded-md bg-[#c1bfbf] border-[#999]">
        <div className="w-[3rem] flex justify-center items-center">
          <BsSearch fontSize={20} />
        </div>
        <input
          type="text"
          placeholder="Search..."
          className="border-none outline-none py-2 px-4 w-full rounded-r-md"
        />
      </div>
      <div className="mt-5 h-[50vh] md:h-[60vh] overflow-auto">
        {friends.map((customer) => {
          return (
            <>
              <CustomersChat />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default ChatList;
