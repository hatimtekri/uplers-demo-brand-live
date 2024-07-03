import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const paginationSlice = createSlice({
  name: "pagination",
  initialState: {
    pageNumber: 1,
    totalRecords: 0,
  },
  reducers: {
    updatePageNumber: (state, action: PayloadAction<number>) => {
      state.pageNumber = action.payload;
    },
    updateTotalRecords: (state, action: PayloadAction<number>) => {
      state.totalRecords = action.payload;
    },
  },
});

export const { updatePageNumber, updateTotalRecords } = paginationSlice.actions;
export default paginationSlice.reducer;
