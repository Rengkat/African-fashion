import { SanityClient } from "@sanity/client";
import appwriteConfig, { sanityClient, endpoint } from "./config";
import appwriteServices from "./appwrite";
// fetch all products

export const getProducts = async () => {
  const query = `*[_type == "product"]{
 _id,
  name,
  image,
  maxPrice,
  minPrice,
  stylist
}`;
  const res = await sanityClient.fetch(query);
  return res;
};
// single function for fetching all categories
export const getCategoryProducts = async (category: string) => {
  const query = `*[_type == 'product' && category == '${category}'] {
 _id,
  name,
  image,
  maxPrice,
  minPrice,
  stylist
}`;

  const data = await sanityClient.fetch(query);
  return data;
};
// fetch single product
export const getProduct = async (_id: string) => {
  const query = `*[_type == 'product' && _id == '${_id}']{
    _id,
    name,
    slug,
    image,
    maxPrice,
    minPrice,
    category,
    productDetails,
    stylist
  }`;
  const data = await sanityClient.fetch(query);
  return data[0]; // Return the first item from the array (if found)
};
