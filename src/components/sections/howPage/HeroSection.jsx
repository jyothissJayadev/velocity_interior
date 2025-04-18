"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const HeroSection = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Main animation context for section
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=200%",
          scrub: 0.5,
          pin: true,
          pinSpacing: true,
        },
        defaults: {
          ease: "power3.out",
        },
      });

      // Animate heading
      tl.to(
        headingRef.current,
        {
          scale: 2.2,
          yPercent: 30,
          opacity: 0.9,
          duration: 3,
        },
        0
      );

      // Animate subheading
      tl.to(
        subheadingRef.current,
        {
          scale: 1.6,
          yPercent: 40,
          opacity: 0.85,
          duration: 3,
        },
        0.2
      );

      // Parallax background effect
      tl.to(
        sectionRef.current,
        {
          backgroundPosition: "50% 40%",
          duration: 3,
          ease: "none",
        },
        0
      );
    }, sectionRef);

    // Animations for decor elements - handled *outside* context to avoid cleanup errors
    const decorElements = document.querySelectorAll(".decor-element");
    decorElements.forEach((elem, i) => {
      gsap.to(elem, {
        y: i % 2 === 0 ? 100 : 120,
        x: i % 2 === 0 ? 30 : -30,
        opacity: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    return () => {
      ctx.revert(); // Clean GSAP timeline
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill()); // Clean triggers
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full flex items-center justify-center bg-gradient-to-b from-indigo-900 to-purple-800 bg-fixed bg-center bg-no-repeat bg-cover overflow-hidden"
      style={{ perspective: "1000px", willChange: "transform, opacity" }}
    >
      {/* Decorative blurred floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="decor-element absolute top-1/4 left-1/4 w-32 h-32 md:w-64 md:h-64 bg-purple-500 rounded-full opacity-20 blur-3xl will-change-transform"></div>
        <div className="decor-element absolute bottom-1/4 right-1/3 w-40 h-40 md:w-80 md:h-80 bg-blue-500 rounded-full opacity-20 blur-3xl will-change-transform"></div>
        <div className="decor-element absolute top-1/3 right-1/4 w-24 h-24 md:w-48 md:h-48 bg-indigo-500 rounded-full opacity-20 blur-3xl will-change-transform"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 md:px-12 py-24 text-center z-10">
        <h1
          ref={headingRef}
          className="text-4xl md:text-6xl font-bold text-white mb-8 will-change-transform"
        >
          How Velocity Interior Works
        </h1>
        <p
          ref={subheadingRef}
          className="text-xl md:text-2xl text-white max-w-3xl mx-auto font-light will-change-transform"
        >
          Fast. Smart. Effortless. We design your space with tech, taste, and
          zero delays.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
