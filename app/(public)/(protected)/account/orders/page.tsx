import OrdersProduct from "@/components/OrdersProduct";
import Image from "next/image";
import React from "react";
const me = [1, 2, 5, 6];
const Orders = () => {
  return (
    <div>
      <h3 className="p-5 border-b-[2px] border-[#eaeaea] text-xl font-bold ">
        Orders
      </h3>
      <div className="p-5">
        {me.map((product) => {
          return (
            <>
              <OrdersProduct />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Orders;
