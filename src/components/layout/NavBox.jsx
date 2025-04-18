"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function NavBox({ sections = [], hidden = false }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .map((entry) => ({
            id: entry.target.id,
            ratio: entry.intersectionRatio,
          }));

        if (visibleSections.length > 0) {
          const mostVisible = visibleSections.reduce((a, b) =>
            a.ratio > b.ratio ? a : b
          );
          const index = sections.findIndex((s) => s.path === mostVisible.id);
          if (index !== -1 && index !== activeIndex) {
            setActiveIndex(index);
          }
        }
      },
      {
        rootMargin: "-30% 0px -30% 0px",
        threshold: [0.25, 0.5, 0.75, 1],
      }
    );

    const elements = [];

    sections.forEach((section) => {
      const el = document.getElementById(section.path);
      if (el) {
        observer.observe(el);
        elements.push(el);
      }
    });

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, [sections, activeIndex]);

  useEffect(() => {
    itemRefs.current[activeIndex]?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }, [activeIndex]);

  const handleNavClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const isActive = (index) => index <= activeIndex;

  if (sections.length === 0) return null;

  return (
    <AnimatePresence>
      {!hidden && (
        <motion.div
          key="navbox"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed z-40 sm:top-6 sm:left-5 top-1 left-0 right-0"
        >
          <div className="fixed z-40 sm:top-6 sm:left-5 top-1 left-0 right-0">
            {/* Desktop version - vertical */}
            <div className="hidden sm:block">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="bg-[#0a0e23]/90 backdrop-blur-md rounded-lg p-3 w-24 shadow-lg overflow-visible border border-[#1e2a55]/40"
              >
                <ul className="space-y-2">
                  {sections.map((section, index) => (
                    <motion.li
                      key={section.name}
                      className="flex justify-center"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <button
                        ref={(el) => {
                          itemRefs.current[index] = el;
                        }}
                        onClick={() => handleNavClick(section.path)}
                        className={`w-full text-center font-medium py-2 rounded-md transition-all duration-300 ${
                          isActive(index)
                            ? "text-blue-200 bg-[#1e2a55] shadow-md"
                            : "text-blue-500/70 hover:bg-[#1e2a55]/50"
                        }`}
                      >
                        {section.name}
                      </button>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Mobile version - horizontal */}
            <div className="sm:hidden flex justify-center">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-[#0a0e23]/90 backdrop-blur-md rounded-full px-3 py-1 shadow-sm border border-[#1e2a55]/40"
              >
                <ul className="flex space-x-2 px-2">
                  {sections.map((section, index) => (
                    <motion.li key={section.name} whileTap={{ scale: 0.95 }}>
                      <button
                        onClick={() => handleNavClick(section.path)}
                        className={`flex items-center justify-center rounded-full w-4 h-4 transition-all duration-300 ${
                          isActive(index)
                            ? "bg-[#1e2a55] shadow-sm"
                            : "bg-[#1e2a55]/40"
                        }`}
                        aria-label={section.name}
                      ></button>
                      <span
                        className={`text-xxs mt-0.5 block text-center ${
                          isActive(index)
                            ? "text-blue-200 font-semibold"
                            : "text-blue-500"
                        }`}
                        style={{ fontSize: "6px" }}
                      >
                        {section.name}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
