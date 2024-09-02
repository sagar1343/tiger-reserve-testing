import { useEffect } from "react";
import Hero from "../components/Hero";
import safariImage from "../assets/video.webp";
import CardContainer from "../components/CardContainer";
import Container from "../components/Container";
import H2 from "../components/H2";
import HighlightsCarousel from "../components/HighlightsCarousel";
import HabitatCarousel from "../components/HabitatCarousel";
import Map from "../components/Map";
import Footer from "../components/Footer";
import LazyLoaded from "@/components/LazyLoaded";
import scrollToTop from "@/utility/scrollToTop";
import InformationSection from "@/components/InformationSection";

function Home() {
  useEffect(() => scrollToTop(), []);
  return (
    <>
      <Hero />
      <Container theme="dark" paddingBottomOnly={false}>
        <div className="flex flex-col-reverse lg:flex-row gap-8 lg:gap-40">
          <div className="flex-1">
            <H2 color="white" className="hidden lg:block text-left">
              Breathtaking Beauty of Pilibhit
            </H2>
            <p className="font-light leading-[1.75] sm:text-xl tracking-wide">
              Pilibhit Tiger Reserve, located in the heart of the Himalayan
              Terai region in Uttar Pradesh, spans 730 sq. km and is part of the
              Terai Arc Landscape, connecting reserve forests in India and
              Nepal. The reserve hosts a rich biodiversity, including over 42
              mammal species, 350 bird species, 100 butterfly species, and 30
              reptile species. It is also home to more than 550 species of
              flowering plants, including 122 tree species. Pilibhit is a key
              site for tiger conservation, with the population increasing from
              65 in 2018 to 71 in 2022. The reserve is also known for its
              healthy populations of hog deer, swamp deer, honey badger, Indian
              pangolin, and the rediscovered four-horned antelope.
            </p>
          </div>
          <div className="lg:w-[35%] overflow-hidden rounded-lg">
            <img
              onClick={() =>
                window.open("https://youtu.be/mh7yQbVZ5Dc", "_blank")
              }
              className="object-cover aspect-video h-full w-full cursor-pointer"
              src={safariImage}
              alt="One of the Safari Clip"
            />
          </div>
          <H2 color="white" className="block lg:hidden text-center mb-4">
            Breathtaking Beauty of Pilibhit
          </H2>
        </div>
      </Container>

      <LazyLoaded>
        <Container paddingBottomOnly={false}>
          <H2>Major Tourist Attractions</H2>
          <HighlightsCarousel />
        </Container>
      </LazyLoaded>
      <Container className="bg-[#F5F5F5]" paddingBottomOnly={false}>
        <InformationSection />
      </Container>
      <Container theme="dark" paddingBottomOnly={false}>
        <H2 color="white" className="text-center md:text-left">
          <span id="book">Book a Safari</span>
        </H2>
        <CardContainer />
      </Container>

      <LazyLoaded>
        <Container paddingBottomOnly={false}>
          <H2 className="text-center md:text-left">
            Wildlife in Their Natural Habitat
          </H2>
          <HabitatCarousel />
          <Map />
        </Container>
      </LazyLoaded>
      <Footer />
    </>
  );
}

export default Home;
