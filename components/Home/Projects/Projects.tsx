import React from "react";
import Image from "next/image";

const Projects = () => {
  return (
    <div className="pt-16 pb-16">
      <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
        A small selection of recent <br />
        {""}
        <span className="text-cyan-300"> projects</span>{" "}
      </h1>
      <div className="w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
        {/* 1st project */}
        <div
          className="order-1"
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-delay="0"
        >
          <Image
            src="/images/workzUp.png"
            alt="img"
            width={800}
            height={650}
            className="rounded-lg"
          />
          <h1 className="mt-4 text-xl sm:text-2xl font-semibold text-white">
            WorkzUp
          </h1>
          <h1 className="pt-2 font-medium text-white/80">
            Online Hourly Based Job Platform
          </h1>
        </div>
        {/* 2nd project */}
        <div
          className="order-7"
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-delay="100"
        >
          <Image
            src="/images/Portfolio.png"
            alt="img"
            width={800}
            height={650}
            className="rounded-lg"
          />
          <h1 className="mt-4 text-xl sm:text-2xl font-semibold text-white">
            Portfolio Website
          </h1>
          <h1 className="pt-2 font-medium text-white/80">About Self</h1>
        </div>
        {/* 3rd project */}
        <div
          className="order-5"
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-delay="200"
        >
          <Image
            src="/images/codeflow.png"
            alt="img"
            width={800}
            height={650}
            className="rounded-lg"
          />
          <h1 className="mt-4 text-xl sm:text-2xl font-semibold text-white">
            Code-Flow Website
          </h1>
          <h1 className="pt-2 font-medium text-white/80">Simple Website</h1>
        </div>
        {/* 4th project */}
        <div
          className="order-6"
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-delay="300"
        >
          <Image
            src="/images/earthnest.png"
            alt="img"
            width={800}
            height={650}
            className="rounded-lg"
          />
          <h1 className="mt-4 text-xl sm:text-2xl font-semibold text-white">
            EarthNest
          </h1>
          <h1 className="pt-2 font-medium text-white/80">
            Lives on Earth Website
          </h1>
        </div>
        {/* 5th project */}
        <div
          className="order-3"
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-delay="300"
        >
          <Image
            src="/images/watch.png"
            alt="img"
            width={800}
            height={650}
            className="rounded-lg"
          />
          <h1 className="mt-4 text-xl sm:text-2xl font-semibold text-white">
            Watch Website
          </h1>
          <h1 className="pt-2 font-medium text-white/80">E-Commerce Website</h1>
        </div>
        {/* 6th project */}
        <div
          className="order-4"
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-delay="200"
        >
          <Image
            src="/images/foodie.png"
            alt="img"
            width={800}
            height={650}
            className="rounded-lg"
          />
          <h1 className="mt-4 text-xl sm:text-2xl font-semibold text-white">
            Foodie Website
          </h1>
          <h1 className="pt-2 font-medium text-white/80">
            Food Delivery Website
          </h1>
        </div>
        {/* 7th project */}
        <div
          className="order-2"
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-delay="200"
        >
          <Image
            src="/images/connecthub.png"
            alt="img"
            width={800}
            height={650}
            className="rounded-lg"
          />
          <h1 className="mt-4 text-xl sm:text-2xl font-semibold text-white">
            ConnectHub
          </h1>
          <h1 className="pt-2 font-medium text-white/80">
            Real-time Communication Platform
          </h1>
        </div>
        {/* 8th project */}
        <div
          className="order-8"
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-delay="200"
        >
          <Image
            src="/images/trimzy.png"
            alt="img"
            width={800}
            height={650}
            className="rounded-lg"
          />
          <h1 className="mt-4 text-xl sm:text-2xl font-semibold text-white">
            Trimzy
          </h1>
          <h1 className="pt-2 font-medium text-white/80">
            Online Saloon Booking Platform
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Projects;
