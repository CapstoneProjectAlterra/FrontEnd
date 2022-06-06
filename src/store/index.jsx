// Redux Tolkit
import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./Form";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
});
