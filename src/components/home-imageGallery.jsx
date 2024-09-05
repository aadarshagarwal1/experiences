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
                src="homeGallery/image (1).png"
                alt="private_pool_villa_bali"
                width="210"
              />
            </div>
            <div className="influencer-col-item">
              <img
                src="homeGallery/image (2).png"
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
                src="homeGallery/image (3).png"
                alt="uluwatu_villa_bali_influencer"
              />
            </div>
            <div className="influencer-col-item">
              <img
                src="homeGallery/image (4).png"
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
                src="homeGallery/image (5).png"
                alt="private_pool_villas_uluwatu"
              />
            </div>
            <div className="influencer-col-item">
              <img
                src="homeGallery/image (6).png"
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
                src="homeGallery/image (7).png"
                alt="luxury_resort_villas_bukit_peninsula"
              />
            </div>
            <div className="influencer-col-item">
              <img
                src="homeGallery/image (8).png"
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
                src="homeGallery/image (9).png"
                alt="private_pool_villas_bali"
              />
            </div>
            <div className="influencer-col-item">
              <img
                src="homeGallery/image (10).png"
                alt="uluwatu_wedding_venue_bali"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
