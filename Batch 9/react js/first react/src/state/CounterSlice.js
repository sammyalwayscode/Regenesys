import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  date: 23,
};

const CounterSlice = createSlice({
  name: "counterslice",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    reset: (state) => {
      state.value = 0;
    },
  },
});

export const { increment, decrement, reset } = CounterSlice.actions;

export default CounterSlice.reducer;
