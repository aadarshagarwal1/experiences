import collegeDetails from "./data/collegeDetails";
import images from "./data/homeImageCarousel";
import places from "./data/places";
import { configureStore } from "@reduxjs/toolkit";
import headerSlice from "./headerSlice";
import menuSlice from "./menuSlice";
const store = configureStore({
  reducer: {
    collegeDetails: collegeDetails.reducer,
    homeImageCarouselImages: images.reducer,
    places: places.reducer,
    headerSlice: headerSlice.reducer,
    menuSlice: menuSlice.reducer,
  },
});
export default store;
