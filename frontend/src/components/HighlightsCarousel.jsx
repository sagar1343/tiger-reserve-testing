import EmblaCarousel from "./EmblaCarousel";
import carousel1 from "../assets/carousel1.png";
import carousel2 from "../assets/carousel2.png";
import carousel3 from "../assets/carousel3.png";
import carousel4 from "../assets/carousel4.png";
import carousel5 from "../assets/carousel5.png";
import carousel6 from "../assets/carousel6.png";
import carousel7 from "../assets/carousel7.png";
import carousel8 from "../assets/carousel8.png";
import carousel9 from "../assets/carousel9.png";
import carousel10 from "../assets/carousel10.png";
import carousel11 from "../assets/carousel11.png";
import carousel12 from "../assets/carousel12.png";

function Carousel() {
  const OPTIONS = { loop: true, align: "start" };
  const SLIDES = [
    {
      image: carousel1,
      title: "Chuka eco-tourism spot and beach",
      content:
        "On the northeastern boundary of Pilibhit Tiger Reserve lies Sarda Sagar, a large reservoir creating a 12 km natural border. When the water recedes 60-150 feet, it unveils a unique sandy beach, nestled at the foot of the great Sal forest. This scenic spot offers a peaceful retreat for nature lovers, with accommodations in tree huts, Tharu huts, or bamboo huts along the shore. Summer nights are enchanting, with moonlit waters and the sounds of nocturnal birds, while mornings come alive with the calls of peacocks and vibrant bird species. Winter brings many migratory birds, adding to the area’s allure.",
    },
    {
      image: carousel2,
      title: "Jungle Safari",
      content:
        "The Pilibhit Tiger Reserve offers an exhilarating Jungle Safari experience. Venture deep into the heart of the dense Sal forest, where you can spot the majestic Bengal tiger, leopards, and a variety of other wildlife. The safari provides an immersive experience in the natural habitat of these incredible animals, along with sightings of elephants, deer, and a multitude of bird species. It's an adventure that brings you up close and personal with the raw beauty of the reserve.",
    },
    {
      image: carousel3,
      title: "Bifurcation Point",
      content:
        "Bifurcation Point is where the Sarda canal splits into two separate channels, feeding into the surrounding agricultural lands. This spot is not just an engineering marvel but also a peaceful place where visitors can enjoy the serene flow of water amidst the natural surroundings. The area is rich in birdlife, making it a perfect spot for birdwatching.",
    },
    {
      image: carousel4,
      title: "Kheri Siphon",
      content:
        "Kheri Siphon is a significant point where the Sarda canal passes beneath another watercourse through a siphon. It's a fascinating example of water management and engineering. The surrounding area is tranquil, with lush greenery and a variety of wildlife. It's a great place for visitors to learn about the intricate water systems that sustain the region.",
    },
    {
      image: carousel5,
      title: "Jhand or Chandra Taal",
      content:
        "Jhand, also known as Chandra Taal, is a serene lake located within the Pilibhit Tiger Reserve. Surrounded by dense forests, this lake is a perfect spot for nature enthusiasts and bird watchers. The calm waters reflect the surrounding greenery, creating a picturesque setting. Visitors can enjoy the peaceful environment, with the sounds of the jungle providing a soothing backdrop.",
    },
    {
      image: carousel6,
      title: "Lakkurwa bridge",
      content:
        "Lakkurwa Bridge offers a scenic view of the Pilibhit Tiger Reserve's landscape. Spanning across the Sarda canal, this bridge is a great vantage point for photography and bird watching. The area around the bridge is rich in flora and fauna, making it a popular spot for visitors looking to experience the natural beauty of the reserve.",
    },
    {
      image: carousel7,
      title: "Barsingha Tal",
      content:
        "Barsingha Tal is a beautiful wetland area within the Pilibhit Tiger Reserve, home to the endangered Barasingha (swamp deer). The tal, or lake, is surrounded by tall grasses and serves as a crucial habitat for a variety of wildlife. Visitors can witness the grace of the Barasingha as they move through the water, making it a must-visit spot for wildlife enthusiasts.",
    },
    {
      image: carousel8,
      title: "Otter Point",
      content:
        "Otter Point is a unique location within the Pilibhit Tiger Reserve where visitors can observe otters in their natural habitat. The point is situated near a calm stretch of water where these playful creatures can often be seen swimming and hunting. It's a rare and delightful sight, offering a glimpse into the life of these elusive animals.",
    },
    {
      image: carousel9,
      title: "Crocodile Point",
      content:
        "Crocodile Point is one of the most thrilling spots within the Pilibhit Tiger Reserve. As the name suggests, this area is known for its population of crocodiles that can be seen basking in the sun along the riverbanks. The point provides a safe viewing area where visitors can observe these powerful reptiles in their natural environment.",
    },
    {
      image: carousel10,
      title: "Sapt Sarovar or Satjal",
      content:
        "Sapt Sarovar, also known as Satjal, is a cluster of seven interconnected lakes within the Pilibhit Tiger Reserve. These lakes are a haven for migratory birds and provide a breathtaking view of the surrounding forests. The area is a popular destination for birdwatchers and photographers, offering a peaceful retreat into nature.",
    },
    {
      image: carousel11,
      title: "Bhim Tal",
      content:
        "Bhim Tal is a large and picturesque lake located within the reserve. Surrounded by dense forest, the lake is named after Bhima, a character from the Indian epic Mahabharata. The calm waters and the lush greenery around make it an ideal spot for a tranquil day out. The lake also attracts a variety of bird species, making it a great place for birdwatching.",
    },
    {
      image: carousel12,
      title: "Chaugedi chandra",
      content:
        "Chaugedi Chandra is a sacred site within the Pilibhit Tiger Reserve, revered by the local Tharu community. The area is known for its natural beauty and spiritual significance. Visitors can explore the site and learn about the cultural heritage of the Tharu people, while enjoying the serene environment and stunning views of the surrounding forest.",
    },
  ];
  return <EmblaCarousel slideSize="100%" slides={SLIDES} options={OPTIONS} />;
}

export default Carousel;
