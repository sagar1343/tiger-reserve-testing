import React from "react";
import Button from "./Button";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import BannerContainer from "./BannerContainer";
import BannerContent from "./BannerContent";
import BannerHead2 from "./BannerHead2";
import useFilteredSafari from "@/hooks/useFilteredSafari";

function SafariHero() {
  const safari = useFilteredSafari();
  const navigate = useNavigate();
  const bannerId = Math.floor(Math.random() * 2) + 1;
  const bannerClass =
    bannerId === 1 ? "bg-safari-banner-1" : "bg-safari-banner-2";

  return (
    <div
      className={`${bannerClass} w-full sm:aspect-video bg-center bg-cover bg-no-repeat`}
    >
      <Navbar />
      <div className="py-12 md:py-16 px-6 md:px-16 lg:px-24 flex flex-col">
        <BannerHead2 className="text-white leading-tight font-bold">
          {safari?.title}
        </BannerHead2>
        <div className="space-y-8 mt-2">
          <p className="text-white lg:w-[50%]">
            We at ‘Pilibhit Tiger Reserve’ invite all Tiger Lover and students
            who cherish watching Tiger in their natural habitat, photographing
            them, taking notes & collecting data and wish to work as Tiger
            conservationists on a Three day ‘Weekend Tiger Safari and
            Photography’. The primary objective of this workshop is to educate
            the participants with both the importance of the Tiger and impart
            knowle......dge . The workshop would invariably be conducted in both
            the theoretical and practical manners.
          </p>
          <Button
            onClickHandler={() => navigate(`/safari/${safari._id}#slot`)}
            type="glossy"
            size="md"
          >
            Book Now
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SafariHero;
