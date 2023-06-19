import Image from "next/image";
import React from "react";

const CartItem = () => {
  return (
    <>
      <div className=" w-full flex bg-[#fff] border-r-[1px] border-[#eaeaea] p-3 rounded-md my-3 shadow-md">
        <div className="w-[20%] lg:w-[20%] h-[15vh] md:h-[25vh] lg:h-[30vh]">
          <Image
            src={"/men-native.png"}
            width={500}
            height={500}
            alt="Image"
            className="w-[100%] md:w-[60%] lg:w-[80%] xl:w-[80%] h-full object-cover"
          />
        </div>
        <aside className="w-[80%] flex flex-col justify-between">
          {/* top */}
          <div className="flex">
            <div className="w-[40%]">
              <h3 className="text-xs lg:text-xl font-normal lg:font-light">
                Lorem ipsum dolor sit amet consectetur
              </h3>
              <p className="text-blue-400 text-xs lg:text-sm my-3 hidden lg:block">
                CHINEX FASHION
              </p>
            </div>
            <div className="w-[20%]">
              <h3 className="font-semibold text-center text-xs lg:text-normal ml-2">
                Quantity
              </h3>
              <div className="flex gap-2 items-center justify-center my-1 lg:my-3">
                <button className="py-[2px] px-[4px] lg:py-2 lg:px-3 rounded-md text-semibold shadow">
                  +
                </button>
                <p className=" text-xs lg:text-normal">5</p>
                <button className="py-[2px] px-[5px] lg:py-2 lg:px-3 py-2 px-3 rounded-md text-semibold shadow">
                  -
                </button>
              </div>
            </div>
            <div className="w-[20%] text-center text-xs lg:text-normal ml-2">
              <h3 className="font-semibold mb-3">Each</h3>
              <p>N10,000</p>
            </div>
            <div className="w-[20%] text-center ml-2">
              <h3 className="font-semibold mb-3 text-xs lg:text-normal">
                20% Each
              </h3>
              <p className=" text-xs lg:text-normal">N3000</p>
            </div>
          </div>
          {/* down */}
          <div className="flex gap-4 text-sm lg:text-normal">
            <button>Edit</button>
            <button>Remove</button>
            <button>Move to Wishlist</button>
          </div>
        </aside>
      </div>
    </>
  );
};

export default CartItem;
