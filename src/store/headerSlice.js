import { createSlice } from "@reduxjs/toolkit";

const headerSlice = createSlice({
  name: "headerSlice",
  initialState: {
    color: "white",
  },
  reducers: {
    setColor: (state, action) => {
      state.color = "white";
    },
  },
});
export default headerSlice;
export const headerSliceActions = headerSlice.actions;
