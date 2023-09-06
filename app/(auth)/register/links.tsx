"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ReactNode } from "react";
interface Props {
  href: string;
  children: ReactNode;
}
const NavLink = ({ href, children }: Props) => {
  const route = usePathname();
  const active = href === `${route}`;
  return (
    <Link
      className={`w-1/2 flex justify-center py-2 px-2 border-[1px] border-slate-300 rounded-md shadow ${
        active ? "bg-blue-400 text-white" : ""
      }`}
      href={href}>
      {children}
    </Link>
  );
};

export default NavLink;
