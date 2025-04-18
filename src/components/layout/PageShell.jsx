"use client";

import { useEffect, useRef, useState } from "react";
import NavBox from "./NavBox"; // Make sure you have NavBox component
import BottomNavBar from "./BottomNavBar"; // Make sure you have BottomNavBar component
import Footer from "./Footer"; // Make sure you have Footer component
import { NavContext } from "@/context/NavContext"; // Make sure the NavContext is imported

export default function PageShell({ children, navSections }) {
  const [footerVisible, setFooterVisible] = useState(false);
  const [atTopTwoPercent, setAtTopTwoPercent] = useState(true);
  const footerRef = useRef(null);

  // Detect footer visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setFooterVisible(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  // Detect top 2% of the page
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

      setAtTopTwoPercent(scrollPercent <= 1);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run once on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const hideNav = footerVisible || atTopTwoPercent;

  return (
    <NavContext.Provider value={navSections}>
      <div className="flex flex-col flex-grow">
        <NavBox sections={navSections} hidden={hideNav} />
        <main className="flex-grow">{children}</main>
        <BottomNavBar hidden={hideNav} />
        <div ref={footerRef}>
          <Footer />
        </div>
      </div>
    </NavContext.Provider>
  );
}
