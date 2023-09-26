import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isMobileMenuOpen: true,
  authStatus: false,
  user: null,
  isProfileOpen: false,
  isMobileProfileOpen: false,
  cartProducts: [],
  wishlist: [],
  userChartWith: {},
};

const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    openMobileMenu(state) {
      state.isMobileMenuOpen = !state.isMobileMenuOpen;
    },
    getCart(state, action) {
      state.cartProducts = action.payload;
    },
    getWishlist(state, action) {
      state.wishlist = action.payload;
    },
    getAuthStatus(state, action) {
      state.authStatus = action.payload;
    },
    addAuthenticatedUser(state, action) {
      state.user = action.payload;
    },
    openProfile(state) {
      state.isProfileOpen = !state.isProfileOpen;
    },
    openMobileProfile(state) {
      state.isMobileProfileOpen = !state.isMobileProfileOpen;
    },
    onChangeUserChat(state, action) {
      console.log(state.userChartWith);
      state.userChartWith = action.payload;
    },
  },
});

export const {
  openMobileMenu,
  getAuthStatus,
  addAuthenticatedUser,
  openProfile,
  openMobileProfile,
  getCart,
  getWishlist,
  onChangeUserChat,
} = shopSlice.actions; // Update the export here
export default shopSlice.reducer;
