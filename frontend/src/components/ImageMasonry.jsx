import { useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import c1 from "../assets/c1.webp";
import c2 from "../assets/c2.webp";
import c3 from "../assets/c3.webp";
import c4 from "../assets/c4.webp";
import c6 from "../assets/c6.webp";
import c8 from "../assets/c8.webp";
import c9 from "../assets/c9.webp";
import c10 from "../assets/c10.webp";
import c11 from "../assets/c11.webp";
import c13 from "../assets/c13.webp";
import c14 from "../assets/c14.webp";
import c15 from "../assets/c15.webp";
import c16 from "../assets/c16.webp";
import c17 from "../assets/c17.webp";

function ImageMasonry() {
  const galleryArr = [
    c15,
    c1,
    c14,
    c2,
    c3,
    c13,
    c4,
    c16,
    c6,
    c11,
    c17,
    c8,
    c9,
    c10,
  ];
  const [torchPosition, setTorchPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const rect = e.currentTarget.getBoundingClientRect();
    setTorchPosition({ x: clientX - rect.left, y: clientY - rect.top });
  };

  return (
    <div
      className="torch-container"
      onMouseMove={handleMouseMove}
      style={{
        "--x": `${torchPosition.x}px`,
        "--y": `${torchPosition.y}px`,
      }}
    >
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry gutter="1rem">
          {galleryArr.map((item, index) => (
            <img
              key={index}
              src={item}
              className="torch-effect rounded-xl object-cover h-[12rem] sm:h-auto aspect-square sm:aspect-auto"
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
}

export default ImageMasonry;
