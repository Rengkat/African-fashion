import React from "react";
import CustomersChat from "./CustomersChat";
import { BsSearch } from "react-icons/bs";

interface UserChats {
  $createdAt: string;
  $id: string;
  combinedId: string;
  userId: string;
  userName: string;
  currentUserId: string;
}

interface Props {
  userChats: UserChats[];
  loading: boolean;
}
const ChatList = ({ userChats, loading }: Props) => {
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
      {loading ? (
        <p className="text-center my-5">Loading...</p>
      ) : (
        <div className="mt-5 h-[50vh] md:h-[60vh] overflow-auto">
          {userChats?.map((customer: UserChats) => {
            return (
              <React.Fragment key={customer.$id}>
                <CustomersChat userChat={customer} loading={loading} />
              </React.Fragment>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ChatList;
