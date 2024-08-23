import { useSelector } from "react-redux";

export default function homeImageCarousel() {
  const imageList = useSelector((store) => store.homeImageCarouselImages);
  const buttonRenderElement = imageList.map((item, index) => {
    const retEl =
      index === 0 ? (
        <button
          key={index}
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to={`${index}`}
          className="active"
          aria-current="true"
          aria-label={`Slide ${index + 1}`}
        ></button>
      ) : (
        <button
          key={index}
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to={`${index}`}
          aria-label={`Slide ${index + 1}`}
        ></button>
      );
    return retEl;
  });
  const carouselItemRenderElement = imageList.map((item, index) => {
    const retEl =
      index === 0 ? (
        <div className="carousel-item active" key={index}>
          <div className="imgWrapper">
            <div className="imgContainer">
              <div className="imgOverlay"></div>
              <img src={item} className="d-block" alt="..." loading="lazy" />
            </div>
          </div>
          <div className="carousel-caption d-none d-md-block">
            <h5>{index + 1} slide label</h5>
            <p>
              Some representative placeholder content for the {index + 1} slide.
            </p>
          </div>
        </div>
      ) : (
        <div className="carousel-item" key={index}>
          <div className="imgWrapper">
            <div className="imgContainer">
              <div className="imgOverlay"></div>
              <img src={item} className="d-block" alt="..." loading="lazy" />
            </div>
          </div>
          <div className="carousel-caption d-none d-md-block">
            <h5>{index + 1} slide label</h5>
            <p>
              Some representative placeholder content for the {index + 1} slide.
            </p>
          </div>
        </div>
      );
    return retEl;
  });
  return (
    <div className="homeImageCarousel">
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">{buttonRenderElement}</div>
        <div className="carousel-inner">{carouselItemRenderElement}</div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
