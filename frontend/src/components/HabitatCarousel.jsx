import React from "react";
import Slider from "react-slick";
import c1 from "../assets/c1.webp";
import c2 from "../assets/c2.webp";
import c3 from "../assets/c3.webp";
import c4 from "../assets/c4.webp";
import c5 from "../assets/c5.webp";
import c6 from "../assets/c6.webp";
import c7 from "../assets/c7.webp";
import c8 from "../assets/c8.webp";
import c9 from "../assets/c9.webp";
import c10 from "../assets/c10.webp";
import c11 from "../assets/c11.webp";
import c12 from "../assets/c12.webp";

function HabitatCarousel() {
  const animalsArr = [c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12];

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
        {animalsArr.map((animal, index) => (
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

export default HabitatCarousel;
