"use client";

import React from "react";
import { motion } from "framer-motion";

const features = [
  "Add meaning",
  "Personalization",
  "Speed",
  "Customization",
  "Transparency",
  "Quality Control",
  "Thorough Inspection",
  "Software to get you updated",
];

const StepSection = ({ step, the }) => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-black to-gray-900 text-white flex items-center justify-center px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl text-center"
      >
        <h2 className="text-3xl sm:text-5xl font-extrabold text-blue-400 mb-6">
          Step {step} — The {the}
        </h2>

        <p className="text-lg sm:text-xl text-gray-300 mb-8">
          Here’s how we elevate your experience:
        </p>

        <ul className="grid sm:grid-cols-2 gap-4 text-lg text-blue-100">
          {features.map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              className="bg-white bg-opacity-5 p-4 rounded-lg hover:bg-opacity-10 transition"
            >
              ✅ {item}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
};

export default StepSection;
