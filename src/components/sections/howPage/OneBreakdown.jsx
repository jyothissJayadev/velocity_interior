"use client";

import React from "react";
import { FaArrowDown } from "react-icons/fa";

const steps = [
  {
    title: "Step 1: Consultation",
    description:
      "We begin with a personalized consultation to understand your vision, lifestyle, and space requirements.",
  },
  {
    title: "Step 2: Design & Planning",
    description:
      "Our experts create detailed design concepts and 3D visualizations tailored to your needs.",
  },
  {
    title: "Step 3: Execution",
    description:
      "We handle everything from procurement to installation with precision and minimal disruption.",
  },
  {
    title: "Step 4: Final Touches",
    description:
      "We refine every detail, ensuring quality and style — delivering a space ready to inspire.",
  },
];

const OneBreakdown = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-20">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
          Our Process, Broken Down
        </h2>
        <p className="text-gray-600 mt-4">
          From concept to creation, here’s how we transform your space with
          clarity and care.
        </p>
      </div>

      <div className="flex flex-col items-center space-y-12 relative">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="bg-white shadow-lg rounded-lg px-6 py-5 w-full max-w-md">
              <h3 className="text-xl font-semibold text-indigo-600">
                {step.title}
              </h3>
              <p className="text-gray-700 mt-2">{step.description}</p>
            </div>
            {index < steps.length - 1 && (
              <div className="text-indigo-500 mt-4">
                <FaArrowDown className="text-2xl animate-bounce" />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default OneBreakdown;
