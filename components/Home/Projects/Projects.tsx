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
        <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="0">
          <Image
            src="/images/p1.png"
            alt="img"
            width={800}
            height={650}
            className="rounded-lg"
          />
          <h1 className="mt-4 text-xl sm:text-2xl font-semibold text-white">
            Hourly-Based job Platform
          </h1>
          <h1 className="pt-2 font-medium text-white/80">Apps , UI/UX</h1>
        </div>
        {/* 2nd project */}
        <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="100">
          <Image
            src="/images/p2.png"
            alt="img"
            width={800}
            height={650}
            className="rounded-lg"
          />
          <h1 className="mt-4 text-xl sm:text-2xl font-semibold text-white">
            Portfolio Website
          </h1>
          <h1 className="pt-2 font-medium text-white/80">Web Design</h1>
        </div>
        {/* 3rd project */}
        <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="200">
          <Image
            src="/images/p3.png"
            alt="img"
            width={800}
            height={650}
            className="rounded-lg"
          />
          <h1 className="mt-4 text-xl sm:text-2xl font-semibold text-white">
            Code-Flow Website
          </h1>
          <h1 className="pt-2 font-medium text-white/80">Pixel-Perfect UI</h1>
        </div>
        {/* 4th project */}
        <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="300">
          <Image
            src="/images/p4.png"
            alt="img"
            width={800}
            height={650}
            className="rounded-lg"
          />
          <h1 className="mt-4 text-xl sm:text-2xl font-semibold text-white">
            EarthNest
          </h1>
          <h1 className="pt-2 font-medium text-white/80">
            Branding & Identity
          </h1>
          </div>
          {/* 5th project */}
        <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="300">
          <Image
            src="/images/p5.png"
            alt="img"
            width={800}
            height={650}
            className="rounded-lg"
          />
          <h1 className="mt-4 text-xl sm:text-2xl font-semibold text-white">
            Watch Website
          </h1>
          <h1 className="pt-2 font-medium text-white/80">
            E-Commerce Website
          </h1>
          {/* 6th project */}
        <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="300">
          <Image
            src="/images/p4.png"
            alt="img"
            width={800}
            height={650}
            className="rounded-lg"
          />
          <h1 className="mt-4 text-xl sm:text-2xl font-semibold text-white">
            EarthNest
          </h1>
          <h1 className="pt-2 font-medium text-white/80">
            Branding & Identity
          </h1>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
