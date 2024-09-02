import React, { createContext, useContext } from "react";
import useSafari from "@/hooks/useSafari";

const SafariContext = createContext();

export const SafariProvider = ({ children }) => {
  const safaris = useSafari();
  return (
    <SafariContext.Provider value={safaris}>{children}</SafariContext.Provider>
  );
};

export const useSafariContext = () => useContext(SafariContext);
