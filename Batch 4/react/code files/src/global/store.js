import { configureStore } from "@reduxjs/toolkit";
import myReducer from "./action";

export const store = configureStore({
  reducer: { myReducer },
});
