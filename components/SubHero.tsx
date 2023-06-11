import Link from "next/link";

interface Props {
  heading: string;
  subHeading: string;
  link: string;
}

export default function SubHero({ heading, subHeading, link }: Props) {
  return (
    <div className="flex items-center pl-5 h-full">
      <div>
        <h3 className="font-bold text-2xl py-2">{heading}</h3>
        <p className="font-light p-[1px]">{subHeading}</p>
        <Link href={link}>
          <button className="border-b-2 border-red-600 py-[2px] uppercase font-semibold">
            Shop now
          </button>
        </Link>
      </div>
    </div>
  );
}
