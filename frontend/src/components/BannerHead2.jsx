import React from "react";

function BannerHead2({ className, children }) {
  return (
    <div
      className={`text-lg sm:text-xl md:text-4xl mb-2 sm:smb-4 md:mb-8 ${className}`}
    >
      {children}
    </div>
  );
}

export default BannerHead2;
