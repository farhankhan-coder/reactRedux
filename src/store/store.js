import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../reducer/postReducer";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
