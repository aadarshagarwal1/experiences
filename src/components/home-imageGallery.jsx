import React, { useEffect, useRef } from "react";
import "./home-imageGallery.css";

export default function HomeImageGallery() {
  const scrollDivRef = useRef(null);
  useEffect(() => {
    const scrollDiv = scrollDivRef.current;
    const handleScroll = () => {
      if (!scrollDiv) return;
      const rect = scrollDiv.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalHeight = rect.height;
      const visibleHeight =
        Math.min(windowHeight, rect.bottom) - Math.max(0, rect.top);
      const percentageVisible = Math.max(
        0,
        Math.min(1, visibleHeight / totalHeight) + 0.2
      );
      scrollDiv.style.opacity = percentageVisible;
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="home-imageGallery" ref={scrollDivRef}>
      <div className="container-xlg w-hidden-medium w-hidden-small w-hidden-tiny">
        <div className="influencer-row">
          <div
            className="influencer-col"
            style={{
              willChange: "opacity, transform",
              opacity: 1,
            }}
          >
            <div className="influencer-col-item">
              <img
                src="https://assets.website-files.com/5b4f3cc33f2e3868c5a5b80c/5b7bd095bbb60b3135942d86_influencer1.jpg"
                alt="private_pool_villa_bali"
                width="210"
              />
            </div>
            <div className="influencer-col-item">
              <img
                src="https://assets.website-files.com/5b4f3cc33f2e3868c5a5b80c/5b7bd0f87e58f19305e4def2_influencer2.jpg"
                alt="uluwatu_villa_bali_influencer"
              />
            </div>
          </div>
          <div
            className="influencer-col-2"
            style={{
              willChange: "opacity, transform",
              opacity: 1,
            }}
          >
            <div className="influencer-col-item">
              <img
                src="https://assets.website-files.com/5b4f3cc33f2e3868c5a5b80c/5b7bd17bbbb60b6de0943055_influencer3.jpg"
                alt="uluwatu_villa_bali_influencer"
              />
            </div>
            <div className="influencer-col-item">
              <img
                src="https://assets.website-files.com/5b4f3cc33f2e3868c5a5b80c/5b7bd1bcbbb60bab20943086_Influencer4.jpg"
                alt="romantic_bali_accommodation"
              />
            </div>
          </div>
          <div
            className="influencer-col"
            style={{
              willChange: "opacity, transform",
              opacity: 1,
            }}
          >
            <div className="influencer-col-item">
              <img
                src="https://assets.website-files.com/5b4f3cc33f2e3868c5a5b80c/5b7bd227c80be660312c2d87_Influencer5.jpg"
                alt="private_pool_villas_uluwatu"
              />
            </div>
            <div className="influencer-col-item">
              <img
                src="https://assets.website-files.com/5b4f3cc33f2e3868c5a5b80c/5b7bd596a3bf8850bf5eb0d7_influencer6.jpg"
                alt="uluwatu_villas_king_sized_bed"
              />
            </div>
          </div>
          <div
            data-w-id="c975c2b5-1aa9-cd65-01b9-bac2cbc66b7e"
            className="influencer-col-2"
            style={{
              willChange: "opacity, transform",
              opacity: 1,
            }}
          >
            <div className="influencer-col-item">
              <img
                src="https://assets.website-files.com/5b4f3cc33f2e3868c5a5b80c/5b7bd2aa8faeeb68f8a263dc_influencer7.jpg"
                alt="luxury_resort_villas_bukit_peninsula"
              />
            </div>
            <div className="influencer-col-item">
              <img
                src="https://assets.website-files.com/5b4f3cc33f2e3868c5a5b80c/5b7bd2f57e58f1795ce4e372_influencer8.jpg"
                alt="private_uluwatu_villas_bali"
              />
            </div>
          </div>
          <div
            data-w-id="053dd753-ff2f-6f06-5557-04d7d5fa7635"
            className="influencer-col"
            style={{
              willChange: "opacity, transform",
              opacity: 1,
            }}
          >
            <div className="influencer-col-item">
              <img
                src="https://assets.website-files.com/5b4f3cc33f2e3868c5a5b80c/5b7bd522586320419dc86f6d_Influencer9.jpg"
                alt="private_pool_villas_bali"
              />
            </div>
            <div className="influencer-col-item">
              <img
                src="https://assets.website-files.com/5b4f3cc33f2e3868c5a5b80c/5b7bd39d5863206a0bc86ab2_Influencer10.jpg"
                alt="uluwatu_wedding_venue_bali"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
