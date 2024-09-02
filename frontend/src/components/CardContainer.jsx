import Card from "../components/Card";
import { useSafariContext } from "@/context/SafariContext";

function CardContainer() {
  const safaris = useSafariContext();
  return (
    <ul className="flex flex-col items-center gap-12 justify-between">
      {safaris.map((safari, index) => (
        <li key={safari.id}>
          <Card data={safari} index={index} />
        </li>
      ))}
    </ul>
  );
}

export default CardContainer;
