import { useDispatch, useSelector } from "react-redux";
import "./content-page.css";
import { useId } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { headerSliceActions } from "../store/headerSlice";
export default function contentPage(props) {
  const dispatch = useDispatch();
  const itemArray = useSelector((store) => store.places);
  const currentItem = itemArray.filter((item) => item.id === props.id)[0];
  const images = currentItem.images;
  return (
    <div>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block contentPageImage"
              src="image (1).jpg"
              alt="First slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block contentPageImage"
              src="image (2).jpg"
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block contentPageImage"
              src="image (3).jpg"
              alt="Third slide"
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
        </a>
      </div>
      <div style={{ height: "8rem" }}></div>
      <div className="contentPage">
        <p className="contentPageHeading">{currentItem.name}</p>
        <p className="contentPageContent content-font">
          {currentItem.description}
        </p>
        <Link to={currentItem.mapLink}>
          <div className="contentPageButton">REACH HERE</div>
        </Link>
      </div>
      <div className="contentPageImageOverlay"></div>
    </div>
  );
}
