"use client";
import React from "react";
import Carousel from "react-multi-carousel";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 3,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const reviews = [
  {
    id: 1,
    name: "Hirusha Maduranga",
    text: "Absolutely loved working with Chamalsha — delivered beyond expectations!",
  },
  {
    id: 2,
    name: "Viraj Jayasiri",
    text: "Great communication and fast turnaround. Highly recommend.",
  },
  {
    id: 3,
    name: "Kaveesh Dassanayaka",
    text: "Professional and detail-oriented — my site looks amazing.",
  },
  {
    id: 4,
    name: "Kavindu Sandeepa",
    text: "Creative, punctual and very easy to work with.",
  },
];

const ClientReview: React.FC = () => {
  return (
    <div className="pt-16 pb-16">
      <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
        Kind words from satisfied <br />{" "}
        <span className="text-cyan-200">clients</span>
      </h1>

      <div className="mt-12 w-[90%] mx-auto relative">
        <Carousel
          responsive={responsive}
          infinite
          autoPlay
          autoPlaySpeed={4000}
          keyBoardControl
          showDots={false}
          arrows
          containerClass="mx-4"
          itemClass="px-4"
          customLeftArrow={<Arrow direction="left" />}
          customRightArrow={<Arrow direction="right" />}
        >
          {reviews.map((r) => (
            <div
              key={r.id}
              className="bg-[#0f1724] rounded-xl p-8 shadow-md text-white mx-2"
            >
              <p className="text-lg mb-4">{r.text}</p>
              <p className="text-cyan-200 font-semibold">— {r.name}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default ClientReview;

function Arrow({
  onClick,
  direction,
}: {
  onClick?: () => void;
  direction: "left" | "right";
}) {
  return (
    <button
      onClick={onClick}
      aria-label={direction === "left" ? "Previous" : "Next"}
      className={`absolute top-1/2 z-20 -translate-y-1/2 p-3 rounded-full bg-[#0b1220] text-white shadow-lg flex items-center justify-center ${
        direction === "left" ? "left-2" : "right-2"
      }`}
      style={{ width: 40, height: 40 }}
    >
      {direction === "left" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      )}
    </button>
  );
}
