import MeasurementImage from "./measurementImgage";

interface Product {
  userId: string;
  image?: ImageRef; // Match the type with Cart
  name: string;
  minPrice: number;
  maxPrice: number;
  stylist: string;
  productId: string;
  quantity: number;
}
interface ImageRef {
  _type: string;
  asset: { _ref: string | undefined; _type: string };
}
interface All extends Product {
  productName: string;
}
type Props = {
  product: All;
};
const ShowCase = ({ product }: Props) => {
  return (
    <>
      <div className="w-[95%] md:w-[90%]  lg:w-[65%] mx-auto">
        <div className=" w-full flex bg-[#fff] border-r-[1px] border-[#eaeaea] p-3 rounded-md my-3 shadow-md">
          <div className="w-[20%] lg:w-[20%] h-[15vh] md:h-[20vh] lg:h-[30vh]">
            <MeasurementImage product={product} />
          </div>
          <aside className="w-[80%] flex flex-col justify-between">
            {/* top */}
            <div className="flex justify-between">
              <div className="">
                <h3 className="text-xs lg:text-xl font-normal lg:font-light">{product?.name}</h3>
                <p className="text-blue-400 text-xs lg:text-sm my-3 uppercase">
                  {product?.stylist}
                </p>
              </div>

              <div className="w-[20%] text-center text-xs lg:text-normal ml-2">
                <h3 className="font-semibold mb-3">Price Range</h3>
                <p>
                  ₦{product?.minPrice} - ₦{product?.maxPrice}
                </p>
              </div>
              <div className="w-[20%] text-center ml-2">
                <h3 className="font-semibold mb-3 text-xs lg:text-normal">Product Price</h3>
                <p className=" text-xs lg:text-normal">
                  ₦{(product?.minPrice + product?.maxPrice) / 2}
                </p>
              </div>
              <div className="w-[20%] text-center ml-2">
                <h3 className="font-semibold mb-3 text-xs lg:text-normal">Payable Amount (60%)</h3>
                <p className=" text-xs lg:text-normal">
                  ₦{(((product?.minPrice + product?.maxPrice) / 2) * 60) / 100}
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
};

export default ShowCase;
