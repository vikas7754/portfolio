import { configureStore } from "@reduxjs/toolkit";
import navbarReducer from "./states/navbar";

export const store = configureStore({
  reducer: {
    navbar: navbarReducer,
  },
});
