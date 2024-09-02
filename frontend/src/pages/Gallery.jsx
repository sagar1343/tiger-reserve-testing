import { useEffect } from "react";
import Footer from "../components/Footer";
import GalleryHero from "../components/GalleryHero";
import Container from "../components/Container";
import H2 from "../components/H2";
import React from "react";
import GalleryGrid from "../components/ImageMasonry";
import MomentsCarousel from "../components/MomentsCarousel";
import scrollToTop from "@/utility/scrollToTop";
import LazyLoaded from "@/components/LazyLoaded";

function Gallery() {
  useEffect(() => scrollToTop(), []);
  return (
    <>
      <GalleryHero />
      <Container
        theme='black'
        paddingBottomOnly={false}
      >
        <h2 className='mb-8 sm:mb-12 leading-tight inline-flex text-[1.6rem] lg:text-[2.9rem] font-bold  bg-gradient-to-r from-[#018399] to-[#002C33] text-transparent bg-clip-text'>
          Explore the WILD !
        </h2>
        <LazyLoaded>
          <GalleryGrid />
        </LazyLoaded>
      </Container>
      <Container>
        <h2 className='my-8 sm:my-12 leading-tight text-[1.6rem] lg:text-[2.9rem] font-bold  inline-flex bg-gradient-to-r from-[#002C33] to-[#006E81] text-transparent bg-clip-text'>
          Proud Moments
        </h2>
        <LazyLoaded>
          <MomentsCarousel />
        </LazyLoaded>
      </Container>
      <Footer />
    </>
  )
}

export default Gallery;
