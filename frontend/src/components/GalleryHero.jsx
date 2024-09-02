import React from "react";
import Navbar from "./Navbar";
import BannerContainer from "./BannerContainer";
import BannerContent from "./BannerContent";
import BannerHead1 from "./BannerHead1";
import BannerHead2 from "./BannerHead2";

function GalleryHero() {
  return (
    <BannerContainer className="bg-gallery-banner bg-right md:bg-center">
      <Navbar />
      <BannerContent>
        <BannerHead2 className="text-white">Gallery</BannerHead2>
        <BannerHead1>
          WILDLIFE <br /> MOMENTS CAPTURED
        </BannerHead1>
      </BannerContent>
    </BannerContainer>
  );
}

export default GalleryHero;
