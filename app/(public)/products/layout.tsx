import Link from "next/link";
interface Props {
  children: React.ReactNode;
}
export default function AccountLayout({ children }: Props) {
  return (
    <>
      <div className="mt-10 mb-5">
        <nav className="w-full flex flex-col lg:flex-row list-none text-[15px] font-light bg-slate-200 lg:px-[8rem]">
          <Link
            href={"/products"}
            className="my-[2px] lg:my-0 hover:bg-slate-300 cursor-pointer py-3 uppercase px-4">
            All Categories
          </Link>
          <Link
            href={"/products/men-native-wears"}
            className="my-[2px] lg:my-0 hover:bg-slate-300 cursor-pointer py-3 uppercase px-4">
            Men Native Wears
          </Link>
          <Link
            href={"/products/men-cooperate-wears"}
            className="my-[2px] lg:my-0 hover:bg-slate-300 cursor-pointer py-3 uppercase px-4">
            Men Cooperate Wears
          </Link>
          <Link
            href={"/products/ladies-native-wears"}
            className="my-[2px] lg:my-0 hover:bg-slate-300 cursor-pointer py-3 uppercase px-4">
            Ladies Native Wears
          </Link>
          <Link
            href={"/products/ladies-cooperate-wears"}
            className="my-[2px] lg:my-0 hover:bg-slate-300 cursor-pointer py-3 uppercase px-4">
            Ladies Cooperate Wears
          </Link>
        </nav>
        <main className="">{children}</main>
      </div>
    </>
  );
}
