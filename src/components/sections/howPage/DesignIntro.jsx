"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const DesignIntro = () => {
  return (
    <section className="min-h-screen bg-white flex items-center justify-center px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-3xl text-center"
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6 leading-tight">
          You design your home and <br className="hidden sm:block" />
          <span className="text-blue-500">know how</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 mb-10">
          Discover the process, the power, and the possibilities you unlock when
          you're in control.
        </p>

        <Link
          href="/why"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold px-8 py-3 rounded-lg transition-all duration-300 shadow-md"
        >
          Learn Why →
        </Link>
      </motion.div>
    </section>
  );
};

export default DesignIntro;
