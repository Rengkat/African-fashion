"use client";
import Link from "next/link";
import { useSelectedLayoutSegments } from "next/navigation";
interface Props {
  href: string;
  children: React.ReactNode;
}
const NavLink = ({ href, children }: Props) => {
  const segment = useSelectedLayoutSegments();
  const active = href === `/${segment}`;
  return (
    <>
      <Link className={active ? "border-b-2 border-blue-500" : ""} href={href}>
        {children}
      </Link>
    </>
  );
};

export default NavLink;
