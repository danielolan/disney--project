import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../store/reducers/authSlice";
import categoriesReducer from "../store/reducers/categorySlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    categories: categoriesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
