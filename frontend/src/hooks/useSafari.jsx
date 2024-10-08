import { useState, useEffect } from "react";

function useSafari() {
  const [safaris, setSafaris] = useState([]);
  useEffect(() => {
    fetch("http://3.111.234.190/api/safari")
      .then((res) => res.json())
      .then((jsonRes) => setSafaris([...jsonRes.safaris]))
      .catch((err) => console.error("Failed to fetch safaris:", err));
  }, []);
  return safaris;
}

export default useSafari;
