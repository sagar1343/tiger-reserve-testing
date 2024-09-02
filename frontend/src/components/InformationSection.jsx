import React from "react";
import H2 from "./H2";
import timings from "../assets/timings.png";

function InformationSection() {
  return (
    <>
      <H2>Tourist Information Guide</H2>
      <div className=" space-y-10">
        <section>
          <h2 className="mb-4 leading-tight text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#002C33] to-[#018399] inline-flex bg-clip-text text-transparent">
            Safari Timing
          </h2>
          <div>
            <img src={timings} alt="timing-informations" />
          </div>
        </section>
        <section>
          <h2 className="mb-4 leading-tight text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#002C33] to-[#018399] inline-flex bg-clip-text text-transparent">
            Safari Routes
          </h2>
          <p className="mb-4">
            Our Tiger Reserve offers two distinct safari experiences, each
            promising an unforgettable journey into the wild.
          </p>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold text-lg">Zone 1: Mahof Side</h3>
              <p>
                Embark on an adventure through the breathtaking landscapes of
                the Mahof side. Known for its scenic beauty, this route provides
                an excellent opportunity to witness a diverse range of wildlife,
                including the majestic tiger.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg">Zone 2: Barahi Side</h3>
              <p>
                Venture into the dense forests of the Barahi side, where rich
                biodiversity awaits. This route offers a thrilling experience
                for nature enthusiasts, showcasing the reserve's vibrant
                ecosystem from a different perspective.
              </p>
            </div>
            <p>
              Both routes invite you to explore the heart of the wilderness,
              each with its own unique charm and wildlife encounters. Choose
              your path and embark on a journey you'll never forget.
            </p>
          </div>
        </section>
        <section>
          <h2 className="mb-4 leading-tight text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#EB008D] to-[#850050] inline-flex bg-clip-text text-transparent">
            Accomodation
          </h2>
          <p className="mb-4">
            Tourists visiting the Tiger Reserve have a variety of accommodation
            options to enhance their stay:
          </p>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold">Chuka Eco-Tourism Spot</h3>
              <p>
                Enjoy a unique stay amidst nature at Chuka, where you can choose
                from Tharu huts, a water hut, or even a tree hut. These
                eco-friendly accommodations offer a truly immersive experience.
                Bookings can be conveniently made online through the UP Tourism
                website.
              </p>
            </div>
            <div>
              <h3 className="font-bold">
                Home Stays and Resorts Near Mustafabad Gate
              </h3>
              <p>
                For those preferring a homely atmosphere or resort comforts,
                numerous options are available near the Mustafabad gate. These
                can be booked directly by contacting the owners.
              </p>
            </div>
            <p>
              Whether you seek an eco-tourism adventure or a cozy retreat,
              there’s an accommodation option to suit your needs.
            </p>
          </div>
        </section>
        <section>
          <h2 className="mb-4 leading-tight text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#D88202] to-[#724501] inline-flex bg-clip-text text-transparent">
            Food & Beverage
          </h2>
          <p className="mb-4">
            Food canteens are conveniently located at both the Mustafabad and
            Chuka spots within the reserve.
          </p>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold">Mustafabad Canteen</h3>
              <p>Enjoy a variety of meals and snacks available for visitors.</p>
            </div>
            <div>
              <h3 className="font-bold">Chuka Spot</h3>
              <p>
                Lunch and dinner are prepared upon request at Chuka Spot,
                ensuring a delicious dining experience tailored to your needs.
              </p>
            </div>
            <p>
              Make the most of your visit with a satisfying meal in the heart of
              nature!
            </p>
          </div>
        </section>
      </div>
    </>
  );
}

export default InformationSection;
