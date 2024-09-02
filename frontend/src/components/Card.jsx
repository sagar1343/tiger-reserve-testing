import React from "react";
import peacock from "../assets/peacock.webp";
import tiger from "../assets/tiger.webp";
import treeHouse from "../assets/treeHouse.webp";
import ImageGrid from "./ImageGrid";
import { Link, useNavigate } from "react-router-dom";

function Card({ data, index }) {
  const navigate = useNavigate();
  const images = [peacock, tiger, treeHouse];
  return (
    <div
      className={`card card-side gap-6 md:gap-8 w-full p-4 sm:p-8 bg-white/10 text-[#E7E7E7] border-[1px] border-[#E7E7E7] border-opacity-40 shadow-xl aspect-[4/1] grid grid-cols-1 md:grid-cols-2 lg:max-h-[16rem] `}
    >
      <figure className={`${index % 2 === 1 ? "mmd:order-0" : "mmd:order-1"}`}>
        <ImageGrid images={images} />
      </figure>
      <div className="card-body gap-4 p-0">
        <h2 className="card-title text-xl md:text-2xl text-white">
          {data.title}
        </h2>
        <p className="font-light">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab
        </p>
        <div className="card-actions items-center justify-start gap-3 sm:gap-8 md:gap-4 flex-nowrap">
          <button
            onClick={() => navigate(`/safari/${data._id}`)}
            className="backdrop-blur-sm bg-white/10 text-white border-white px-4 sm:px-10 lg:px-12 py-1.5 border-[1.5px] text-nowrap rounded-2xl"
          >
            Book Now
          </button>
          <Link
            to={`/safari/${data._id}`}
            className="hover:opacity-80 whitespace-nowrap"
          >
            Know More &gt;
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
