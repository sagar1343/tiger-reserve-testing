import Container from "./Container";
import EmblaCarousel from "./EmblaCarousel";
import H2 from "./H2";
// import zone1 from "../assets/zones1.webp";
// import zone2 from "../assets/zones2.webp";
import zone1 from "../assets/carousel1.png";
import zone2 from "../assets/carousel1.png";
import LazyLoaded from "./LazyLoaded";

function ZonesCarousel() {
  const OPTIONS = { loop: true, align: "start" };
  const SLIDES = [
    {
      image: zone1,
      title: "Chuka eco-tourism spot and beach",
      content:
        "On the northeastern boundary of Pilibhit Tiger Reserve lies Sarda Sagar, a large reservoir creating a 12 km natural border. When the water recedes 60-150 feet, it unveils a unique sandy beach, nestled at the foot of the great Sal forest. This scenic spot offers a peaceful retreat for nature lovers, with accommodations in tree huts, Tharu huts, or bamboo huts along the shore. Summer nights are enchanting, with moonlit waters and the sounds of nocturnal birds, while mornings come alive with the calls of peacocks and vibrant bird species. Winter brings many migratory birds, adding to the area’s allure.",
    },
    {
      image: zone2,
      title: "Jungle Safari",
      content:
        "The Pilibhit Tiger Reserve offers an exhilarating Jungle Safari experience. Venture deep into the heart of the dense Sal forest, where you can spot the majestic Bengal tiger, leopards, and a variety of other wildlife. The safari provides an immersive experience in the natural habitat of these incredible animals, along with sightings of elephants, deer, and a multitude of bird species. It's an adventure that brings you up close and personal with the raw beauty of the reserve.",
    },
  ];
  return (
    <LazyLoaded>
      <Container className="bg-[#002C33] text-white" paddingBottomOnly={false}>
        <H2 className="text-white">Safari Zones</H2>
        <EmblaCarousel slideSize="100%" slides={SLIDES} options={OPTIONS} />
      </Container>
    </LazyLoaded>
  );
}

export default ZonesCarousel;
