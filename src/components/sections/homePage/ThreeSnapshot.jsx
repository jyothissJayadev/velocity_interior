"use client";

import React, { useState } from "react";
import clsx from "clsx";

const qualities = [
  {
    title: "Innovation",
    description:
      "We consistently push the boundaries to create cutting-edge solutions that drive impact.",
  },
  {
    title: "Reliability",
    description:
      "You can count on us. Always on time, always dependable, and always delivering quality.",
  },
  {
    title: "Transparency",
    description:
      "Open communication and honest progress updates — because trust is everything.",
  },
  {
    title: "Customer-First",
    description:
      "Your goals are our priority. Every decision we make is guided by your success.",
  },
  {
    title: "Sustainability",
    description:
      "We build with the future in mind, embracing responsible and eco-friendly practices.",
  },
];

const ThreeSnapshot = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="services"
      className="w-full min-h-screen bg-black text-white flex items-center justify-center px-4 py-10 md:py-20"
    >
      <div className="max-w-7xl w-full flex flex-col md:flex-row gap-10 md:gap-20 items-center md:items-start">
        {/* Left: Content */}
        <div className="w-full md:w-2/3 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-400 mb-6">
            how
          </h2>
          <div className="transition-all duration-500 ease-in-out">
            <h3 className="text-xl sm:text-2xl font-semibold mb-3">
              {qualities[activeIndex].title}
            </h3>
            <p className="text-blue-100 text-base sm:text-lg max-w-xl mx-auto md:mx-0">
              {qualities[activeIndex].description}
            </p>
          </div>
        </div>

        {/* Right: Option Buttons with Connecting Line */}
        <div className="relative w-full md:w-1/3 flex flex-row md:flex-col items-center justify-center gap-4 md:gap-6">
          {/* Vertical line (desktop) */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-800 z-0" />

          {/* Horizontal line (mobile) */}
          <div className="block md:hidden absolute top-1/2 transform -translate-y-1/2 w-full h-1 bg-blue-800 z-0" />

          {/* Buttons */}
          {qualities.map((quality, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={clsx(
                "z-10 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-md border text-xs sm:text-sm font-semibold flex items-center justify-center text-center px-2 transition-all duration-300",
                activeIndex === index
                  ? "bg-blue-600 border-blue-400 text-white scale-105"
                  : "bg-black border-blue-800 text-blue-300 hover:bg-blue-900/40"
              )}
            >
              {quality.title.split(" ")[0]}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThreeSnapshot;
