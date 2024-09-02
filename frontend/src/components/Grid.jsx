import React from "react";

function Grid({ arr }) {
  return (
    <div className="grid grid-cols-2  sm:grid-cols-4 gap-3 mt-8">
      {arr.map((item, index) => (
        <img key={index} src={item} className="" />
      ))}
    </div>
  );
}

export default Grid;
