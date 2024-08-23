import "./home.css";
import HomeImageCarousel from "./homeImageCarousel";
import Hero from "./hero";
import Card from "./card";
import AboutHome from "./aboutHome";
import HomeImageGallery from "./home-imageGallery";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { headerSliceActions } from "../store/headerSlice";
export default function home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(headerSliceActions.setColor("white"));
  }, []);
  const placesArray = useSelector((store) => store.places);
  const renderElement = placesArray.map((item, index) => {
    return (
      <Card
        img={item.images[0]}
        rowRev={index % 2 === 0 ? true : false}
        heading={item.name}
        content={item.description}
        key={index}
        mapLink={item.mapLink}
        link={item.link}
      />
    );
  });
  return (
    <div className="home">
      <HomeImageCarousel />
      <Hero />
      <HomeImageGallery />
      <AboutHome />
      {renderElement}
    </div>
  );
}
