import React from "react";

function BannerContent({ className, children }) {
  return (
    <div
      className={`absolute top-[35%] sm:top-[30%] px-6 md:px-16 lg:px-24 flex flex-col ${className}`}
    >
      {children}
    </div>
  );
}

export default BannerContent;
