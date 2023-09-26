import { createClient } from "next-sanity";
const sanityToken = process.env.NEXT_PUBLIC_SANITY_API_TOKEN;
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = "2021-10-21";
const useCdn = false;

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn,
});
export const appwriteApiKey = process.env.NEXT_PUBLIC_APPWRITE_API_KEY;
export const databaseId = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!;
export const userCollectionId = process.env.NEXT_PUBLIC_APPWRITE_USER_COLLECTION_ID!;
export const stylistCollectionId = process.env.NEXT_PUBLIC_APPWRITE_STYLIST_COLLECTION_ID!;
export const cartCollectionId = process.env.NEXT_PUBLIC_APPWRITE_CART_COLLECTION_ID!;
export const orderCollectionId = process.env.NEXT_PUBLIC_APPWRITE_ORDER_COLLECTION_ID!;
export const wishlistCollectionId = process.env.NEXT_PUBLIC_APPWRITE_WISHLIST_COLLECTION_ID!;
export const userChatCollectionId = process.env.NEXT_PUBLIC_APPWRITE_USER_CHAT_COLLECTION_ID!;
export const chatsCollectionId = process.env.NEXT_PUBLIC_APPWRITE_CHATS_COLLECTION_ID!;
export const activeChatId = process.env.NEXT_PUBLIC_APPWRITE_ACTIVE_USER_CHAT_ID!;
export const endpoint = process.env.NEXT_PUBLIC_APPWRITE_ENDPOIN;

const appwriteConfig = {
  appwriteUrl: process.env.NEXT_PUBLIC_APPWRITE_URL!,
  projectId: process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!,
};
export default appwriteConfig;
