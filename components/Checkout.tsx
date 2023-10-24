interface Product {
  _id: string;
  name: string;
  slug: { current: string; _type: string };
  image: { _type: string; asset: { _ref: string } };
  maxPrice: number;
  minPrice: number;
}
interface Props {
  product: Product;
}
const Checkout = ({ product }: Props) => {
  return (
    <>
      <aside className="w-full lg:w-[35%] flex justify-end my-3">
        <div className="bg-[#fff] border-r-[1px] border-[#eaeaea] w-full h-[40vh] px-5 py-5 rounded shadow-md">
          <h1 className="text-center font-light text-xl my-2 uppercase">Price Summary</h1>
          <p className="text-center text-red-500 p-2 bg-red-200 rounded-md">
            Note! Advance payment of only 60%
          </p>
          <div>
            <aside className="flex justify-between py-2 items-center">
              <p>Product Info.</p>
              <p>{product?.name.slice(0, 30)}.</p>
            </aside>
            <aside className="flex justify-between pb-2 items-center">
              <p>Payable Amount</p>
              <p> ₦{(((product?.minPrice + product?.maxPrice) / 2) * 60) / 100}</p>
            </aside>
            <aside className="flex justify-between pb-2 items-center">
              <p>Shipping</p>
              <p>₦1500</p>
            </aside>
            <aside className="flex justify-between border-t-[1px] mt-2 border-slate-300">
              <p className="font-bold">Total</p>
              <p className="font-bold">
                ₦{(((product?.minPrice + product?.maxPrice) / 2) * 60) / 100 + 1500}
              </p>
            </aside>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Checkout;
