"use client";
import { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const innerRef = useRef(null);
  const outerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isEnabled, setIsEnabled] = useState(true);

  useEffect(() => {
    // Disable cursor on small screens
    const handleResize = () => {
      setIsEnabled(window.innerWidth >= 650);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (!isEnabled) return;

    let mouseX = 0;
    let mouseY = 0;
    let outerX = 0;
    let outerY = 0;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (innerRef.current) {
        innerRef.current.style.left = `${mouseX}px`;
        innerRef.current.style.top = `${mouseY}px`;
      }
    };

    const animateOuter = () => {
      outerX += (mouseX - outerX) / 8;
      outerY += (mouseY - outerY) / 8;

      if (outerRef.current) {
        outerRef.current.style.left = `${outerX}px`;
        outerRef.current.style.top = `${outerY}px`;
      }

      requestAnimationFrame(animateOuter);
    };

    const handleMouseDown = () => setIsDragging(true);
    const handleMouseUp = () => setIsDragging(false);

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    animateOuter(); // Start animation loop

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isEnabled]);

  if (!isEnabled) return null;

  return (
    <>
      {/* Inner Dot */}
      <div
        ref={innerRef}
        className="fixed top-0 left-0 w-[12px] h-[12px] bg-white rounded-full pointer-events-none z-[10000] transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-150"
      ></div>

      {/* Outer Ring */}
      <div
        ref={outerRef}
        className={`fixed top-0 left-0 w-16 h-16 border-2 border-white bg-transparent pointer-events-none z-[9999] backdrop-blur-[0.5px] ${
          isDragging
            ? "rounded-[60%] w-24 h-36 scale-150 animate-[wiggle_0.4s_ease-in-out]" // Droplet shape on drag
            : "rounded-full"
        } transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-out shadow-[0_0_8px_rgba(255,255,255,0.4)]`}
      />
    </>
  );
};

export default CustomCursor;
