import React from "react";
import image from "../assets/safari.webp";

const ShowDetails = () => {
  return (
    <div className="book  rounded-xl  h-max m-8 mt-5 ">
      <h2 className="text-2xl m-4">Booking Summary</h2>
      <hr />
      <div className="">
        <h3 className="m-3 font-semibold text-xl">
          Jungle Safari from Mustafabad to chuka
        </h3>

        <div className="flex m-3 gap-2 text-sm ">
          <div>
            <img src={image} alt="tiger safari" style={{ height: "100px" }} />
          </div>
          <div>
            <ul className="">
              <li className="flex">
                <svg
                  className="me-2 mt-1"
                  xmlns="http://www.w3.org/2000/svg"
                  height={14}
                  viewBox="0 0 448 512"
                >
                  <path d="M128 0c17.7 0 32 14.3 32 32l0 32 128 0 0-32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32 48 0c26.5 0 48 21.5 48 48l0 48L0 160l0-48C0 85.5 21.5 64 48 64l48 0 0-32c0-17.7 14.3-32 32-32zM0 192l448 0 0 272c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 192zm64 80l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm128 0l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zM64 400l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zm112 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16z" />
                </svg>
                Fri, Aug 2
              </li>
              <li className="flex">
                <svg
                  className="me-2 mt-1"
                  xmlns="http://www.w3.org/2000/svg"
                  height={14}
                  viewBox="0 0 512 512"
                >
                  <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                </svg>
                07.00
              </li>
              <li className="flex">
                <svg
                  className="me-2 mt-1"
                  xmlns="http://www.w3.org/2000/svg"
                  height={14}
                  viewBox="0 0 640 512"
                >
                  <path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3zM609.3 512l-137.8 0c5.4-9.4 8.6-20.3 8.6-32l0-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2l61.4 0C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7zM432 256c-31 0-59-12.6-79.3-32.9C372.4 196.5 384 163.6 384 128c0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112z" />
                </svg>
                1 Adult | 1 Children
              </li>
            </ul>
          </div>
        </div>
        <div className="m-3 flex justify-between">
          <div className="my-2">
            <p className="font-semibold">Total :</p>
            <p>with tax & fees</p>
          </div>
          <div className="text-right   my-2">
            <p className="text-xl font-semibold text-red-500">INR 2,895</p>
          </div>
        </div>
        <hr />
        <div className="m-3">
          <p>
            This booking is{" "}
            <span className="font-semibold">non-refundable</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShowDetails;
