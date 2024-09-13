import "./aboutHome.css";
export default function aboutHome() {
  return (
    <div className="aboutHome">
      <div className="aboutHome-imgContainer">
        <div className="aboutHome-imgWrapper">
          <img src="1.jpg" alt="" />
        </div>
      </div>
      <div className="aboutHome-details">
        <p className="aboutHome-details-microHeading heading-font">
          PROUDLY PRESENTED BY
        </p>
        <div className="aboutHome-details-name-container">
          <p className="aboutHome-details-heading heading-font">
            ISTE Student's Chapter
          </p>
          <p className="aboutHome-details-heading heading-font">BIT Sindri</p>
        </div>
        <p className="aboutHome-details-content content-font">
          ISTE Student's Chapter BIT Sindri is a nationally affiliated
          techno-management society registered with ISTE New Delhi. With the
          motto of Technical Development, ISTE Student's Chapter focuses on the
          personality development and enhancement of Technical Skills of the
          students to meet the modern competitive era.
        </p>
        <a href="https://istebits.com/" target="_blank">
          <div className="aboutHome-button">KNOW MORE</div>
        </a>
      </div>
    </div>
  );
}
