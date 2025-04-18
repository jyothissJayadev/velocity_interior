"use client";

import React from "react";

const TwoVideo = () => {
  return (
    <section
      id="about"
      className="w-full h-screen bg-black text-white flex items-center justify-center px-4 py-8"
    >
      <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16 h-full">
        {/* Video Section */}
        <div className="w-full md:w-[60%] h-[60vh] md:h-[70vh] rounded-xl overflow-hidden shadow-2xl border border-blue-800">
          <video
            controls
            preload="metadata"
            className="w-full h-full object-cover rounded-xl"
            poster="/video-thumbnail.jpg"
          >
            <source src="/your-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Curved Side Box */}
        <div className="w-full md:w-[40%] bg-gradient-to-br from-blue-900 to-blue-800 text-white p-6 rounded-tl-[60px] rounded-br-[60px] shadow-2xl border border-blue-600 h-fit md:h-[70vh] flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4">Watch & Learn</h2>
          <p className="text-blue-100 leading-relaxed text-sm md:text-base">
            Dive into our visual story and see how we make a difference. Our
            video explains our services, approach, and the value we deliver to
            our clients every single day.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TwoVideo;
