import { useMemo } from "react";
import { useSafariContext } from "@/context/SafariContext";
import { useParams } from "react-router-dom";

function useFilteredSafari() {
  const safaris = useSafariContext();
  const { id } = useParams();

  const safari = useMemo(() => {
    return safaris.find((safari) => safari._id === id);
  }, [safaris, id]);

  return safari;
}

export default useFilteredSafari;
