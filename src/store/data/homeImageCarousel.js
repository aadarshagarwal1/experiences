import { createSlice } from "@reduxjs/toolkit";

const images = createSlice({
  name: "homeImageCarousel",
  initialState: [
    "main/image (1).jpg",
    "main/image (2).jpg",
    "main/image (3).jpeg",
    "main/image (4).png",
    "main/image (5).jpg",
    "main/image (7).png",
    "main/image (9).png",
  ],
});
export default images;
