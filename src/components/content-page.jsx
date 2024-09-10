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
  function splitIntoThreeParts(arr) {
    const numParts = 3;
    const result = [];
    const partSize = Math.ceil(arr.length / numParts);

    for (let i = 0; i < numParts; i++) {
      const start = i * partSize;
      const end = start + partSize;
      result.push(arr.slice(start, end));
    }

    return result;
  }
  const renderELement = splitIntoThreeParts(images).map((item, index) => {
    const el = item.map((item) => {
      return (
        <div
          className="contentPageImageGalleryImageContainer mb-4 rounded"
          key={index}
        >
          <img
            src={item}
            className="w-100 shadow-1-strong  "
            alt="Boat on Calm Water"
          />
        </div>
      );
    });
    return <div className="col-lg-4 mb-4 mb-lg-0">{el}</div>;
  });
  useEffect(() => {
    dispatch(headerSliceActions.setColor("black"));
  }, []);
  return (
    /*
    <div className="contentPage">
      <p className="contentPageHeading">{currentItem.name}</p>
      <p className="contentPageContent content-font">
        {currentItem.description}
      </p>
      <Link to={currentItem.mapLink}>
        <div className="contentPageButton">REACH HERE</div>
      </Link>
      <div
        className="contentPageImageGallery "
        style={{ width: "70vw", marginBottom: "5rem" }}
      >
        <div className="row">{renderELement}</div>
      </div>
    </div>
    */
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
            className="d-block w-100"
            src="image (1).jpg"
            alt="First slide"
          />
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100"
            src="image (2).jpg"
            alt="Second slide"
          />
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100"
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
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
      </a>
    </div>
  );
}
