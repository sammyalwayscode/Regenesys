import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  QTY: 0,
  totalPrice: 0,
  currentUser: null,
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
      state.QTY += 1;
      state.totalPrice += payload.price;
    },

    subtractFromCart: (state, { payload }) => {
      const check = state.cart.findIndex((el) => el._id === payload._id);
      if (state.cart[check].QTY > 1) {
        state.cart[check].QTY -= 1;
      } else {
        state.cart = state.cart.filter((el) => el._id !== payload._id);
      }
      state.QTY -= 1;
      state.totalPrice -= payload.price;
    },

    removeFromCart: (state, { payload }) => {
      const itemIndex = (state.cart = state.cart.filter(
        (item) => item._id !== payload._id
      ));
      if (initialState >= 0) {
        state.QTY -= state.cart[itemIndex].QTY;
        state.totalPrice -=
          state.cart[itemIndex].QTY * state.cart[itemIndex].price;
        state.cart.splice(itemIndex, 1);
      }
    },
    resetPrice: (state) => {
      state.totalPrice = 0;
    },
    clearCart: (state) => {
      state.cart = [];
    },
    resetQty: (state) => {
      state.QTY = 0;
    },

    //User signin
    createUser: (state, { payload }) => {
      state.currentUser = payload;
    },

    sighOut: (state) => {
      state.currentUser = null;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  subtractFromCart,
  resetPrice,
  resetQty,
  clearCart,
  createUser,
  sighOut,
} = action.actions;

export default action.reducer;
