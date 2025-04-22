"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";

export default function HeroSection() {
  const [windowHeight, setWindowHeight] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const { scrollY } = useScroll();

  // Create parallax effect values
  const titleY = useTransform(scrollY, [0, windowHeight], [0, -100]);
  const titleScale = useTransform(scrollY, [0, windowHeight * 0.5], [1, 1.2]);
  const titleOpacity = useTransform(scrollY, [0, windowHeight * 0.8], [1, 0]);

  const subtitleY = useTransform(scrollY, [0, windowHeight], [0, -50]);
  const subtitleOpacity = useTransform(
    scrollY,
    [0, windowHeight * 0.6],
    [1, 0]
  );

  const backgroundY = useTransform(scrollY, [0, windowHeight], [0, 150]);

  useEffect(() => {
    // Set window height
    setWindowHeight(window.innerHeight);

    // Check if it's a hard reload
    const isHardReload =
      window.performance &&
      performance.getEntriesByType("navigation")[0]?.type === "reload";

    if (isHardReload) {
      // Simulated loading on reload
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 2000);

      // Cleanup
      return () => clearTimeout(timer);
    } else {
      // Skip loading animation if not reload
      setIsLoading(false);
    }

    // Handle resize events
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Text effect for individual letters
  const letters = "Velocity Interiors".split("");
  const subtitle = "Where Speed Meets Design".split("");

  return (
    <section
      id="home"
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      {/* Background image with parallax */}
      <motion.div
        className="absolute inset-0"
        style={{ y: backgroundY }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 1.2 }}
      >
        <Image
          src="/images/hero_back.jpg"
          alt="Velocity Interiors"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="z-0"
          priority
        />
      </motion.div>

      {/* Loading animation */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 360],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-24 h-24 flex items-center justify-center"
            >
              <div className="w-full h-full border-t-4 border-l-4 border-blue-500 rounded-full"></div>
            </motion.div>
            <motion.p
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="absolute mt-32 text-blue-300 text-lg"
            >
              Velocity Interiors
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content with welcome effects */}
      <div className="relative z-10 text-center px-6 py-12 max-w-4xl mx-auto">
        {/* Animated title */}
        <motion.div
          className="mb-8"
          style={{ y: titleY, scale: titleScale, opacity: titleOpacity }}
        >
          <div className="inline-block px-8 py-4 rounded-lg bg-black bg-opacity-40 backdrop-filter backdrop-blur-sm">
            <div className="flex flex-wrap justify-center">
              {letters.map((letter, index) => (
                <motion.span
                  key={index}
                  className={`inline-block ${letter === " " ? "w-6" : ""}`}
                  initial={{ opacity: 0, y: -50, rotateY: 90 }}
                  animate={{
                    opacity: isLoading ? 0 : 1,
                    y: isLoading ? -50 : 0,
                    rotateY: isLoading ? 90 : 0,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: isLoading ? 0 : 2 + index * 0.08,
                    type: "spring",
                    stiffness: 100,
                  }}
                >
                  <span className="text-5xl md:text-6xl font-bold text-white relative">
                    {letter}
                    <motion.span
                      className="absolute -bottom-2 left-0 w-full h-1 bg-blue-500"
                      initial={{ width: 0 }}
                      animate={{ width: isLoading ? 0 : "100%" }}
                      transition={{
                        delay: isLoading ? 0 : 3.5 + index * 0.03,
                        duration: 0.2,
                      }}
                    />
                  </span>
                </motion.span>
              ))}
            </div>

            {/* Animated glowing text effect */}
            <motion.div
              className="mt-2 h-px w-full bg-gradient-to-r from-transparent via-blue-400 to-transparent"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{
                opacity: isLoading ? 0 : [0, 1, 0.8],
                scaleX: isLoading ? 0 : 1,
              }}
              transition={{
                delay: isLoading ? 0 : 3.8,
                duration: 1.5,
                opacity: {
                  repeat: Infinity,
                  duration: 2,
                  repeatType: "reverse",
                },
              }}
            />
          </div>
        </motion.div>

        {/* Animated subtitle */}
        <motion.div
          className="mb-12"
          style={{ y: subtitleY, opacity: subtitleOpacity }}
        >
          <div className="inline-block px-6 py-2 rounded-full bg-black bg-opacity-30 backdrop-filter backdrop-blur-sm">
            <div className="flex justify-center">
              {subtitle.map((letter, index) => (
                <motion.span
                  key={index}
                  className={`inline-block ${letter === " " ? "w-3" : ""}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: isLoading ? 0 : 1,
                    y: isLoading ? 20 : 0,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: isLoading ? 0 : 4 + index * 0.05,
                  }}
                >
                  <span className="text-xl text-white">{letter}</span>
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Call to action button with spotlight effect */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{
            opacity: isLoading ? 0 : 1,
            y: isLoading ? 30 : 0,
          }}
          transition={{
            delay: isLoading ? 0 : 5.2,
            duration: 0.8,
          }}
          className="relative"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-lg"
            animate={{
              opacity: [0.4, 0.7, 0.4],
              scale: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          <a
            href="#about"
            className="relative inline-block px-8 py-3 bg-blue-900 bg-opacity-80 text-white border border-blue-300 rounded-full 
            hover:bg-opacity-90 transition duration-300 shadow-lg transform hover:scale-105"
          >
            Experience Our Vision
          </a>
        </motion.div>
      </div>

      {/* Animated decorative elements */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-48 h-48"
        initial={{ opacity: 0 }}
        animate={{
          opacity: isLoading ? 0 : 0.2,
          rotate: 360,
        }}
        transition={{
          opacity: { delay: 4, duration: 1 },
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
        }}
      >
        <div className="w-full h-full border-2 border-white rounded-full"></div>
      </motion.div>

      <motion.div
        className="absolute bottom-1/3 left-1/5 w-32 h-32"
        initial={{ opacity: 0 }}
        animate={{
          opacity: isLoading ? 0 : 0.2,
          rotate: -360,
        }}
        transition={{
          opacity: { delay: 4.3, duration: 1 },
          rotate: { duration: 15, repeat: Infinity, ease: "linear" },
        }}
      >
        <div className="w-full h-full border border-blue-300 rounded-full"></div>
      </motion.div>

      {/* Scroll indicator with pulse animation */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: isLoading ? 0 : 1,
          y: isLoading ? 20 : 0,
        }}
        transition={{
          delay: isLoading ? 0 : 5.5,
          duration: 0.8,
        }}
      >
        <motion.div
          animate={{
            y: [0, 10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: "easeInOut",
          }}
          className="flex flex-col items-center"
        >
          <div className="w-6 h-10 border-2 border-white border-opacity-60 rounded-full flex justify-center bg-black bg-opacity-30 mb-2">
            <motion.div
              className="w-1 h-3 bg-white rounded-full mt-2"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </div>
          <motion.p
            className="text-xs text-white font-light"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            Scroll to discover
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
}
