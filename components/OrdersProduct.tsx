import OrderImage from "@/app/(public)/(protected)/account/orders/OrderImage";
import MeasurementImage from "@/app/(public)/measurement/measurementImgage";
import { OrderType } from "@/types";
import Image from "next/image";
import React from "react";
interface Order extends OrderType {
  $id: string;
  $createdAt: string;
}
interface Props {
  product: Order;
}
const OrdersProduct = ({ product }: Props) => {
  const date = new Date(product?.$createdAt);

  // Define an array of month names
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Get the day, month, and year
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  // Format the day with the appropriate ordinal suffix
  const dayWithSuffix = getDayWithOrdinalSuffix(day);

  // Construct the final formatted date string
  const formattedDate = `On ${dayWithSuffix} ${monthNames[month]}, ${year}`;

  // Function to get the day with the appropriate ordinal suffix
  function getDayWithOrdinalSuffix(day: number) {
    if (day >= 11 && day <= 13) {
      return day + "th";
    }
    switch (day % 10) {
      case 1:
        return day + "st";
      case 2:
        return day + "nd";
      case 3:
        return day + "rd";
      default:
        return day + "th";
    }
  }

  return (
    <div className="border-[1px] border-[#eaeaea] shadow my-3 rounded-lg">
      <div className="p-2 lg:p-5 flex items-center gap-5">
        <div className="w-[15%]">
          <OrderImage product={product} />
        </div>
        <div className="w-[85%]">
          <h3 className="text-[12px] lg:text-[15px]">{product?.productName}</h3>

          <p className="text-[#9c9c9c] text-[12px] lg:text-[15px]">
            Order:
            <span> #{product?.$id}</span>
          </p>
          <p
            className={`${
              product?.status === "pending"
                ? "text-yellow-600 bg-yellow-300 "
                : product?.status === "delivered"
                ? "text-green-600 bg-green-300"
                : "text-red-600 bg-red-300"
            }  inline-block mt-5 py-[1px] px-[3px] md:p-[3px] rounded capitalize`}>
            {product?.status}
          </p>
          <p className="font-semibold text-[12px] lg:text-[15px]">{formattedDate}</p>
        </div>
      </div>
    </div>
  );
};

export default OrdersProduct;
