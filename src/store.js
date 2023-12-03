import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/productSlice";
import cartReducer from "./slices/cartSlice"

const store = configureStore({
  reducer: {
    // Add other reducers here if needed
    product:productReducer,
    cart:cartReducer,
  },
});

export default store;
