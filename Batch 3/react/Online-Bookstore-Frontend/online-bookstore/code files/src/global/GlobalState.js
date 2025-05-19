import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  createdUsers: null,
};

const GlobalState = createSlice({
  name: "book",
  initialState,
  reducers: {
    createUser: (state, { payload }) => {
      state.createdUsers = payload;
    },
    signOut: (state) => {
      state.createdUsers = null;
    },
  },
});

export const { createUser, signOut } = GlobalState.actions;

export default GlobalState.reducer;
