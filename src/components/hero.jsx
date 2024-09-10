import "./hero.css";
export default function hero() {
  return (
    <div className="hero">
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <div className="row">
              <div className="col">
                <div className="hero-dataBlock">
                  <p className="hero-dataBlock-data">#200-250</p>
                  <img
                    src="nirfLogo.png"
                    className="hero-dataBlock-tag"
                    alt=""
                  />{" "}
                  <p className="hero-dataBlock-comment">RANKING - 2024</p>
                </div>
              </div>
              <div className="col">
                <div className="hero-dataBlock">
                  <p className="hero-dataBlock-data">#51</p>
                  <img
                    src="iirflogo.png"
                    className="hero-dataBlock-tag"
                    alt=""
                  />{" "}
                  <p className="hero-dataBlock-comment">national rank</p>
                </div>
              </div>
              <div className="col">
                <div className="hero-dataBlock">
                  <p className="hero-dataBlock-data">400 ACRES</p>
                  <img
                    src="campusAreaLogo.png"
                    className="hero-dataBlock-tag"
                    alt=""
                  />{" "}
                  <p className="hero-dataBlock-comment">Campus Area</p>
                </div>
              </div>
              <div className="w-100"></div>
              <div className="col">
                <div className="hero-dataBlock">
                  <p className="hero-dataBlock-data">75 YEARS</p>
                  <img
                    src="historyLogo.png"
                    className="hero-dataBlock-tag"
                    alt=""
                  />{" "}
                  <p className="hero-dataBlock-comment">of glorious history</p>
                </div>
              </div>
              <div className="col">
                <div className="hero-dataBlock">
                  <p className="hero-dataBlock-data">50LPA</p>
                  <img
                    src="placementLogo.png"
                    className="hero-dataBlock-tag"
                    alt=""
                  />{" "}
                  <p className="hero-dataBlock-comment">Highest Package</p>
                </div>
              </div>
              <div className="col">
                <div className="hero-dataBlock">
                  <p className="hero-dataBlock-data">50K+</p>
                  <img
                    src="graduationLogo.png"
                    className="hero-dataBlock-tag"
                    alt=""
                  />{" "}
                  <p className="hero-dataBlock-comment">students graduated</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-4 heading-font hero-heading">
              Lorem, ipsum dolor sit amet consectetur adipisicing
            </h1>
            <p className="lead content-font hero-content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              aperiam quis consequuntur amet nobis cupiditate, laboriosam iste
              veniam deleniti expedita quisquam molestias? Consequuntur, impedit
              cumque eum porro beatae modi esse. Sapiente, aliquid. Accusantium
              nemo consequatur est voluptatibus minima maxime fugit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
