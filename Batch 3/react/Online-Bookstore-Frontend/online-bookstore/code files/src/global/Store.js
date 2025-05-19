import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./GlobalState";

export const store = configureStore({
  reducer: useReducer,
});
