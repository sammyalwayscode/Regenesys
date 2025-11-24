import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./CounterSlice";

export const store = configureStore({
  reducer: { counter: counterSlice },
});
