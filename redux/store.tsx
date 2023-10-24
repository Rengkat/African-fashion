import { configureStore } from "@reduxjs/toolkit";
import shopReducer, {
  addAuthenticatedUser,
  getAuthStatus,
  getCart,
  getWishlist,
} from "./features/shopSlice";
import appwriteServices from "@/lib/appwrite";

export const store = configureStore({
  reducer: {
    shop: shopReducer,
  },
});
(async () => {
  const isAuthenticated = await appwriteServices.isLogin();
  store.dispatch(getAuthStatus(isAuthenticated));

  if (isAuthenticated) {
    const currentUser = await appwriteServices.getCurrentUser();
    const currentUserCollectionByEmail = await appwriteServices.getCurrentUserCollection(
      currentUser.email
    );
    const currentStylistCollectionByEmail = await appwriteServices.getCurrentStylistCollection(
      currentUser.email
    );

    const userDetail = currentUserCollectionByEmail.documents[0];
    const stylistDetail = currentStylistCollectionByEmail.documents[0];
    // if the login user is not a customer, will be a stylist
    const detailCollection = userDetail || stylistDetail;

    const userId = userDetail?.$id;
    console.log(userId);

    const cart = await appwriteServices.getCartProducts(userId);
    const wishlist = await appwriteServices.getWishlist(userId);
    store.dispatch(addAuthenticatedUser({ ...currentUser, ...detailCollection }));
    console.log();
    store.dispatch(getCart(cart));
    store.dispatch(getWishlist(wishlist?.documents));
  }
})();
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
