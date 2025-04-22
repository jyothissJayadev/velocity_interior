"use client";

import React from "react";
import { motion } from "framer-motion";

const FeatureShowcase = ({ title, description, reverse = false }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="min-h-screen bg-white flex items-center justify-center px-6 py-20"
    >
      <div
        className={`max-w-4xl text-center ${
          reverse ? "md:text-right" : "md:text-left"
        }`}
      >
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
          {title}
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>
    </motion.section>
  );
};

export default FeatureShowcase;
