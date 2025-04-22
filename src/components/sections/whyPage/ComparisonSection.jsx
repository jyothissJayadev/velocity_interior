"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaUserEdit,
  FaEye,
  FaClock,
  FaClipboardCheck,
  FaTools,
  FaMoneyBillWave,
  FaHandsHelping,
} from "react-icons/fa";

const features = [
  {
    label: "Personalization",
    icon: <FaUserEdit className="text-2xl" />,
    traditional: "Limited templates",
    velocity: "Fully tailored to your lifestyle",
  },
  {
    label: "Transparency",
    icon: <FaEye className="text-2xl" />,
    traditional: "Opaque pricing & progress",
    velocity: "Real-time visibility at every step",
  },
  {
    label: "Speed",
    icon: <FaClock className="text-2xl" />,
    traditional: "Slow and outdated processes",
    velocity: "Tech-driven, fast execution",
  },
  {
    label: "Quality Control",
    icon: <FaClipboardCheck className="text-2xl" />,
    traditional: "Inconsistent supervision",
    velocity: "Strict, multi-layered inspections",
  },
  {
    label: "Software Updates",
    icon: <FaTools className="text-2xl" />,
    traditional: "Manual calls and updates",
    velocity: "Live project tracking dashboard",
  },
  {
    label: "Budget-Friendliness",
    icon: <FaMoneyBillWave className="text-2xl" />,
    traditional: "Unpredictable costs",
    velocity: "Planned, optimized budgeting",
  },
  {
    label: "After Work Support",
    icon: <FaHandsHelping className="text-2xl" />,
    traditional: "Often ends at handover",
    velocity: "Post-project care & maintenance",
  },
];

const ComparisonSection = () => {
  return (
    <section className="min-h-screen bg-white text-gray-800 py-20 px-6 sm:px-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto text-center"
      >
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900">
          Traditional vs Velocity Interiors
        </h2>
        <p className="text-lg text-gray-500 mb-12">
          See the difference. Feel the change. Choose what’s best for your home.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-7 gap-6 text-left">
          <div className="sm:col-span-2 font-semibold text-xl text-blue-600">
            Feature
          </div>
          <div className="sm:col-span-2 font-semibold text-xl text-gray-500">
            Traditional
          </div>
          <div className="sm:col-span-3 font-semibold text-xl text-green-600">
            Velocity Interiors
          </div>

          {features.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="contents"
            >
              <div className="sm:col-span-2 flex items-center gap-3 py-4 border-t border-gray-200">
                <span className="text-blue-500">{item.icon}</span>
                <span className="text-lg">{item.label}</span>
              </div>
              <div className="sm:col-span-2 py-4 border-t border-gray-200 text-gray-500">
                {item.traditional}
              </div>
              <div className="sm:col-span-3 py-4 border-t border-gray-200 text-green-700 font-medium">
                {item.velocity}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ComparisonSection;
