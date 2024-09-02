import { useEffect } from "react";
import Footer from "../components/Footer";
import SafariHero from "../components/SafariHero";
import ZonesCarousel from "../components/ZonesCarousel";
import HabitatCarousel from "../components/HabitatCarousel";
import Container from "../components/Container";
import H2 from "../components/H2";
import AccordionSection from "../components/AccordionSection";
import ReserveSlot from "../components/ReserveSlot";
import LazyLoaded from "@/components/LazyLoaded";
import scrollToTop from "@/utility/scrollToTop";
import useFilteredSafari from "@/hooks/useFilteredSafari";

function SafariPage() {
  const safari = useFilteredSafari();
  useEffect(() => scrollToTop(), []);
  return (
    <>
      <SafariHero />
      <ZonesCarousel />
      <Container paddingBottomOnly={false}>
        <H2>
          <span id="slot">Reserve your Slot</span>
        </H2>
        <ReserveSlot safari={safari} />
        <AccordionSection />
      </Container>
      <LazyLoaded>
        <Container>
          <H2>Animals you can spot</H2>
          <HabitatCarousel />
        </Container>
      </LazyLoaded>
      <Footer />
    </>
  );
}

export default SafariPage;
