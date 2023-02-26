import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Feature/User/UserSlice";
export const store = configureStore({
  reducer: { auth: authReducer },
});
