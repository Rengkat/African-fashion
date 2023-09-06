"use client";
type Product = {
  name: string;
  minPrice: number;
  maxPrice: number;
  quantity: number;
  _id: string;
  image: { asset: { _ref: string } };
  stylist: string;
};
type Props = {
  product: Product;
};
interface Cart {
  userId: string;
  image: string;
  name: string;
  minPrice: number;
  maxPrice: number;
  stylist: string;
  productId: string;
  quantity: number;
}
const WishlistBtn = ({ product }: Props) => {
  const handleAddWishlist = () => {
    console.log(product);
  };
  return (
    <button onClick={handleAddWishlist} className="w-full border-2 border-[#000] py-2 px-3 my-2">
      ADD TO WISHLIST
    </button>
  );
};

export default WishlistBtn;
