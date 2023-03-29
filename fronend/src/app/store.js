import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Feature/User/UserSlice";
import productReducer from "../Feature/Products/ProductSlice";

export const store = configureStore({
  reducer: { auth: authReducer, product: productReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
