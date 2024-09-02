import React from "react";

function BannerContainer({ className, children }) {
  return (
    <div
      className={`w-full min-h-[50vh] sm:aspect-video bg-center bg-cover bg-no-repeat ${className} relative`}
    >
      {children}
    </div>
  );
}

export default BannerContainer;
