import Measurements from "@/components/Measurment";
import MeasurmentImages from "@/components/MeasurmentImages";
import { getProduct } from "@/lib/data";
import Link from "next/link";
import SanityImage from "./image";
import AddCartButton from "../../addCartButton";
import WishlistBtn from "@/components/WishlistBtn";
interface Props {
  params: { _id: string };
}
const product = async ({ params }: Props) => {
  const id = params._id.slice(0, -3);
  const product = await getProduct(id);

  return (
    <div className="w-full md:w-[90%] lg:w-[80%] my-10 mx-auto ">
      <div className="flex flex-col lg:flex-row border-2">
        <div className="w-full lg:w-[50%]">
          <SanityImage product={product} />
        </div>
        <div className="bg-blue-200 w-full lg:w-[50%] p-5">
          <h1 className="text-xl lg:text-3xl font-light">{product?.name}</h1>
          <p className="font-semibold py-3">
            ₦{product?.minPrice} - ₦{product?.maxPrice}
          </p>
          <Link href={""} className=" uppercase">
            {product?.stylist}
          </Link>
          <p className=" py-3">Slug: {product?.slug?.current}</p>
          <p className="text-xl font-light py-3">{product?.productDetails}</p>
          <AddCartButton product={product} />
          <WishlistBtn product={product} />
          <div className="font-light">
            <div className="py-5">
              <p>Interested in this style? Submit your measurement in the form below</p>
              <div className="flex items-center my-3">
                <div className="h-[1px] bg-slate-400 w-[48%] " />
                <p>OR</p>
                <div className="h-[1px] bg-slate-400 w-[48%]" />
              </div>

              <p>
                Same style with different material? Submit the sampled material in the form below
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="my-10">
        <p className="text-xl lg:text-2xl my-4 p-2">
          <span className="text-red-700">Note!</span> Use the charts below. To submit your body
          measurement. All measurement are in UK
        </p>
        <div className="flex flex-col-reverse lg:flex-row gap-6">
          <aside className="w-full lg:w-1/2 border-2">
            <MeasurmentImages />
          </aside>
          <aside className="w-full lg:w-1/2  bg-blue-200 p-5">
            <Measurements product={product} />
            <p className="my-3 font-semibold"> Prefer different material for same style?</p>
            <div className="my-4 relative w-full py-2 px-3 border-2 border-black h-[7vh]">
              <input type="file" name="file" id="" className=" absolute inset-0 z-[2] opacity-0" />
              <button className="bg-[#000] w-full absolute inset-0 text-white">
                Upload image of material sample
              </button>
            </div>
            <button className=" uppercase w-full bg-black text-white py-4 px-3 font-semibold my-2">
              Submit
            </button>
            <p>
              Prefer to connect with the stylist: <Link href={""}>CHINEX FASHION</Link>{" "}
            </p>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default product;
