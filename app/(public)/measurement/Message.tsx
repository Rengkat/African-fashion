import Link from "next/link";

const Message = () => {
  return (
    <div className="w-full h-full absolute inset-0 bg-[#000000b1] z-10 flex justify-center">
      <div className="mt-[10rem]">
        <h1 className="text-white text-2xl">Sorry! Something went wrong</h1>
        <div className="flex justify-center">
          <Link href={"/products"}>
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
