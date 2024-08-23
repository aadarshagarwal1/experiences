import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
  name: "menuSlice",
  initialState: { value: "slide-out" },
  reducers: {
    changeValue: (state) => {
      state.value = state.value === "slide-out" ? "slide-in" : "slide-out";
    },
  },
});
export default menuSlice;
export const menuSliceActions = menuSlice.actions;
