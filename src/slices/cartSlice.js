// slices/productSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload);
    },
    removeFromCart: (state, action) => {
       state.items= state.items.filter((x)=> x.id !== action.payload


        );
      },
      clearCart: (state) => {
        state.items =[];
      }
  },
});

export const { addToCart,removeFromCart,clearCart } = cartSlice.actions;

export const selectCartItems = (state) => state.cart.items;

export default cartSlice.reducer;
