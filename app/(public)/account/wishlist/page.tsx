import WishListItems from "@/components/WishListItems";
import React from "react";
const me = [2, 4, 6, 7, 0, 6, 4];
const Wishlist = () => {
  return (
    <div>
      <div>
        <h3 className="p-5 border-b-[2px] border-[#eaeaea] text-xl font-bold ">Wishlist</h3>
        <div className="p-5">
          {me.map((product) => {
            return (
              <>
                <WishListItems />
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
