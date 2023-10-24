"use client";
import OrdersProduct from "@/components/OrdersProduct";
import appwriteServices from "@/lib/appwrite";
import { OrderType } from "@/types";
import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
interface Order extends OrderType {
  $id: string;
  $createdAt: string;
}
const Orders = () => {
  const { user } = useSelector((store: any) => store.shop);
  const [orders, setOrders] = useState<OrderType[] | any>([]);
  useEffect(() => {
    const getOrders = async () => {
      const data = await appwriteServices.getOrders({ userId: user?.$id });

      setOrders(data);
    };
    getOrders();
  }, []);
  return (
    <div>
      <h3 className="p-5 border-b-[2px] border-[#eaeaea] text-xl font-bold ">Orders</h3>
      <div className="p-5">
        {orders?.map((product: Order) => {
          return (
            <>
              <OrdersProduct product={product} />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Orders;
