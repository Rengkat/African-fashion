import Image from "next/image";
import Hero from "../components/Hero";
import Display from "../components/Display";
import { customerSport } from "@/public/constants";
const men = [2, 4, 6, 71, 3, 77, 8, 9];
export default function Home() {
  return (
    <>
      {/* hero */}
      <Hero />
      <main className="my-[2rem] lg:my-[5rem]">
        <div className=" w-[95%] md:w-[95%] xl:w-[80%] mx-auto">
          <h1 className="text-3xl lg:text-[3rem] font-light">Women Wears</h1>
          <div className="w-32 h-[2px] lg:h-[5px] bg-blue-300 lg:mt-2"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 mx-2 lg:mx-0 md:grid-cols-3 lg:grid-cols-4 gap-5 my-5 lg:my-8">
            {men.map((product) => {
              return (
                <>
                  <Display key={product} />
                </>
              );
            })}
          </div>
        </div>
        {/* ads */}
        <div className="h-[70vh] ads ">
          <div className="flex justify-evenly">
            <div className="h-[70vh] w-[25%] hidden lg:block">
              <Image
                src={"/girl.png"}
                width={500}
                height={500}
                alt="lady"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-[70vh] w-1/2 flex justify-center items-center text-center">
              <div>
                <p className=" uppercase text-blue-500 text-2xl font-light">
                  Make the right choice{" "}
                </p>
                <h1 className="font-bold text-3xl py-2">
                  Get the right African wears
                </h1>
                <button className="font-semibold border-b-2 border-blue-500 py-2 text-xl my-5">
                  Shop now
                </button>
              </div>
            </div>
            <div className=" h-[70vh] w-[25%] hidden lg:block">
              <Image
                src={"/girl.png"}
                width={500}
                height={500}
                alt="lady"
                className="w-full h-full object-cover "
              />
            </div>
          </div>
        </div>
        {/* men */}
        <div className="w-[95%] md:w-[95%] xl:w-[80%] mt-5 mx-auto">
          <h1 className="text-3xl lg:text-[3rem] font-light">Men Wears</h1>
          <div className="w-32 h-[2px] lg:h-[5px] bg-blue-300 lg:mt-2"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-5 lg:my-8">
            {men?.slice(0, 4)?.map((product) => {
              return (
                <>
                  <Display key={product} />
                </>
              );
            })}
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 w-[95%] md:w-[90%] lg:w-[80%] mx-auto my-[5rem] gap-5">
          {customerSport.map((section) => {
            return (
              <>
                <aside
                  key={section.id}
                  className="text-center lg:text-left lg:flex gap-2 items-center ">
                  <Image
                    src={section.img}
                    width={500}
                    height={500}
                    alt="lady"
                    className="w-[2rem] h-[2rem] lg:w-[5rem] lg:h-[5rem] mx-auto lg:mx-none "
                  />
                  <div>
                    <h1 className="font-semibold text-[18px] capitalize">
                      {section?.heading}
                    </h1>
                    <p>{section.subHeading}</p>
                  </div>
                </aside>
              </>
            );
          })}
        </div>
      </main>
    </>
  );
}
