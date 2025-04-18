"use client";

import React from "react";

const FiveCustomer = () => {
  return (
    <section
      id="contact2"
      className="w-full h-screen bg-black text-white flex items-center justify-center px-6"
    >
      <div className="max-w-4xl text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-blue-400 mb-6">
          Our Commitment to Customer Value
        </h2>
        <p className="text-blue-100 text-lg sm:text-xl leading-relaxed mb-6">
          At the core of everything we do, we are driven by a commitment to
          understanding and delivering exceptional value to our customers.
          Whether through personalized support, innovative solutions, or
          consistent quality, we focus on building lasting relationships with
          our clients based on trust, transparency, and mutual growth.
        </p>
        <div className="flex justify-center items-center gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg text-lg transition-all duration-300">
            Learn More
          </button>
          <button className="bg-transparent border-2 border-blue-600 text-blue-600 py-3 px-6 rounded-lg text-lg transition-all duration-300 hover:bg-blue-600 hover:text-white">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default FiveCustomer;
