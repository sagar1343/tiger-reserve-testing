import React from "react";

function BannerHead1({ className, children }) {
  return (
    <div
      className={`text-white text-3xl md:leading-none sm:text-4xl md:text-[5.2rem] font-bold ${className}`}
    >
      {children}
    </div>
  );
}

export default BannerHead1;
