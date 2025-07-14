import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const action = createSlice({
  name: "actions",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const cartValue = state.cart.findIndex((el) => el._id === payload._id);
      if (cartValue >= 0) {
        state.cart[cartValue].QTY += 1;
      } else {
        const addCart = { ...payload, QTY: 1 };
        state.cart.push(addCart);
      }
    },

    removeFromCart: (state, { payload }) => {
      state.cart = state.cart.filter((item) => item._id !== payload._id);
    },
  },
});

export const { addToCart, removeFromCart } = action.actions;

export default action.reducer;
