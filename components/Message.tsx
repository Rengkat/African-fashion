import Link from "next/link";

const Message = ({ text, redirectRoute }: { text: string; redirectRoute: string }) => {
  return (
    <div className="w-full h-full absolute inset-0 bg-[#000000bf] z-10 flex justify-center">
      <div className="mt-[10rem]">
        <h1 className="text-white text-2xl">{text}</h1>
        <div className="flex justify-center">
          <Link href={redirectRoute}>
            <button className="py-2 px-5 bg-blue-400 rounded shadow my-5 text-white">
              Back to shop
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Message;
