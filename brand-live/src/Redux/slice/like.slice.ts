import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type NumberBooleanMap = {
  [key: number]: boolean;
};
type IInitialState = {
  likes: NumberBooleanMap;
};

const initialState: IInitialState = {
  likes: {},
};

const likeSlice = createSlice({
  name: "like",
  initialState: initialState,
  reducers: {
    updateLike: (state, action: PayloadAction<number>) => {
      const id = action.payload;

      if (state.likes[id]) {
        state.likes[id] = !state.likes[id];
      } else {
        state.likes[id] = true;
      }
    },
  },
});

export const { updateLike } = likeSlice.actions;
export default likeSlice.reducer;
