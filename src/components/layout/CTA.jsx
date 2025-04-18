"use client";

import React from "react";

const CTA = () => {
  return (
    <section className="w-full h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="max-w-4xl text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-400 mb-6">
          Transform Your Space with Our Expert Interior Design Services
        </h2>
        <p className="text-blue-100 text-lg sm:text-xl leading-relaxed mb-6">
          Whether you're designing your dream home or renovating an office, our
          expert designers are here to make your vision a reality. Let's work
          together to create spaces that inspire and elevate.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-lg text-lg transition-all duration-300">
            Request a Consultation
          </button>
          <button className="bg-transparent border-2 border-blue-600 text-blue-600 py-3 px-8 rounded-lg text-lg transition-all duration-300 hover:bg-blue-600 hover:text-white">
            Explore Our Portfolio
          </button>
          <a
            href="/price-calculator" // Change this to your actual route
            className="bg-green-600 hover:bg-green-700 text-white py-3 px-8 rounded-lg text-lg transition-all duration-300"
          >
            Price Calculator
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
