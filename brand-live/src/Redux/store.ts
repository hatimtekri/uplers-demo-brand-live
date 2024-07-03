import { configureStore } from "@reduxjs/toolkit";
import pagination from "./slice/Pagination.slice";

export const store = configureStore({
  reducer: {
    pagination
  },
});
