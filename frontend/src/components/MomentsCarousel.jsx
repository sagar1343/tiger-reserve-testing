import React from "react";
import Slider from "react-slick";
import p1 from "../assets/p1.webp";
import p2 from "../assets/p2.webp";
import p3 from "../assets/p3.webp";
import p4 from "../assets/p4.webp";
import p5 from "../assets/p5.webp";
import p6 from "../assets/p6.webp";
import p7 from "../assets/p7.webp";

function MomentsCarousel() {
  const momentsArr = [p1, p2, p3, p4, p5, p6, p7];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    draggable: true,
    responsive: [
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="flex justify-center">
      <Slider {...settings} className="rounded-box w-full">
        {momentsArr.map((animal, index) => (
          <div key={index} className="px-2 w-full overflow-hidden">
            <img
              src={animal}
              className="aspect-square object-cover rounded-box"
              alt={`animal ${index}`}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default MomentsCarousel;
