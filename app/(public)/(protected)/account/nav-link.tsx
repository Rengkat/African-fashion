"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
interface Props {
  href: string;
  children: React.ReactNode;
}
const AccNavLink = ({ href, children }: Props) => {
  const route = usePathname();
  const active = href === `${route}`;
  return (
    <Link
      className={`p-5 font-semibold hover:bg-[#ddd9d9] hover:rounded-t-md flex items-center gap-3  ${
        active ? "bg-[#398feba9] text-white" : ""
      }`}
      href={href}>
      {children}
    </Link>
  );
};

export default AccNavLink;
