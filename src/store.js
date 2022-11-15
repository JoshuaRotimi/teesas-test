import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./store/Categories";
import authReducer from "./store/Auth";

export const store = configureStore({
  reducer: {
    category: categoryReducer,
    auth: authReducer,
  },
});
