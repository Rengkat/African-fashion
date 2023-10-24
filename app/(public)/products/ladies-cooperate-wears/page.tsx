import Display from "@/components/Display";

import { getCategoryProducts } from "../../../../lib/data";

interface Product {
  _id: string;
  name: string;
  slug: { current: string; _type: string };
  image: { _type: string; asset: { _ref: string } };
  maxPrice: number;
  minPrice: number;
}
interface All extends Product {
  stylist: string;
}
const LadiesCooperate = async () => {
  const products = await getCategoryProducts("ladies-cooperate-wears");

  return (
    <div className="w-[95%] md:w-[95%] xl:w-[80%] mt-5 mx-auto">
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-5 lg:my-8">
          {products.map((product: All) => {
            return (
              <>
                <Display key={product?.slug?.current} product={product} />
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LadiesCooperate;
