import React from "react";
import { twMerge } from "tailwind-merge";

function Container({
  theme = "light",
  paddingBottomOnly = true,
  children,
  className,
}) {
  const bg = {
    light: "bg-white",
    dark: "bg-[#002C33]",
    dark2: "bg-[#00171B]",
    black: "bg-black",
  };
  const textColor = {
    light: "text-black",
    dark: "text-white",
    dark2: "text-white",
    black: "text-white",
  };
  return (
    <section
      className={twMerge(
        `px-6 md:px-16 lg:px-28 ${
          paddingBottomOnly ? "pb-20 md:pb-24" : "py-12 md:py-24"
        } ${bg[theme]} ${textColor[theme]}`,
        className
      )}
    >
      {children}
    </section>
  );
}

export default Container;
