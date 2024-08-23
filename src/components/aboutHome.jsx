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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi vel
          dolores excepturi similique sapiente magni corporis alias laborum,
          ducimus eveniet aperiam at! Placeat quo inventore perspiciatis rem,
          omnis eveniet? Sed amet ducimus quos laboriosam. Nostrum mollitia
          quibusdam quas temporibus eum, ut, voluptatem laborum alias facilis
          ratione sunt ex perferendis deserunt saepe natus error ducimus! Eaque
          impedit inventore earum officiis. Sint facere aliquid nisi obcaecati
          tempora laborum deleniti, neque maiores suscipit, asperiores ex vitae
          molestias illo beatae! Facere ullam nesciunt sit nulla commodi
          incidunt perferendis voluptate provident, dicta reprehenderit ut quo
          id repellendus dolor saepe porro in, veniam neque placeat corporis.
        </p>
        <a href="https://istebits.in/">
          <div className="aboutHome-button">KNOW MORE</div>
        </a>
      </div>
    </div>
  );
}
