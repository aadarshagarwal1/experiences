import { createSlice } from "@reduxjs/toolkit";

const images = createSlice({
  name: "homeImageCarousel",
  initialState: [
    "1.jpg",
    "image (1).jpg",
    "image (2).jpg",
    "image (3).jpg",
    "image (4).jpg",
    "image (5).jpg",
    "image (6).jpg",
    "image (7).jpg",
    "image (8).jpg",
  ],
});
export default images;
