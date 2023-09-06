import Link from "next/link";
import { GrDeliver } from "react-icons/gr";
import { CiUser, CiDeliveryTruck } from "react-icons/ci";
import { BsBoxSeam, BsHeart } from "react-icons/bs";
import { ImMenu } from "react-icons/im";
const AccountMobileNav = () => {
  return (
    <nav className="md:hidden list-none w-full h-[55vh] bg-[#fff] border-r-[1px] border-[#eaeaea] shadow-md rounded-lg">
      <li className="flex items-center gap-3 p-5 font-semibold hover:bg-[#ddd9d9] hover:rounded-t-md">
        <CiUser fontSize={20} />
        <Link href={"/account"}>My Account</Link>
      </li>
      <li className="flex items-center gap-3 p-5 font-semibold hover:bg-[#ddd9d9]">
        <BsBoxSeam fontSize={20} />
        <Link href={"/account/orders"}>Orders</Link>
      </li>
      <li className="flex items-center gap-3 p-5 font-semibold hover:bg-[#ddd9d9]">
        <BsHeart fontSize={20} />
        <Link href={"/account/wishlist"}>Wishlist</Link>
      </li>
      <li className="flex items-center gap-3 p-5 font-semibold hover:bg-[#ddd9d9]">
        <GrDeliver fontSize={20} />
        <Link href={"/account/address"}>Delivery Address</Link>
      </li>
      <li className=" font-semibold p-5">
        <button className="bg-blue-400 my-3 text-white p-3 w-full shadow rounded">LOGOUT</button>
      </li>
    </nav>
  );
};

export default AccountMobileNav;
