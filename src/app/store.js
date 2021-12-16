import { configureStore } from "@reduxjs/toolkit";
import useReducer from "../features/userSlice";
import staffReducer from "../features/staffSlice";

export const store = configureStore({
  reducer: {
    user: useReducer,
    staff: staffReducer,
  },
});
