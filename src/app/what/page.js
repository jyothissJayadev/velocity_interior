import React from "react";
import PageShell from "@/components/layout/PageShell"; // Import PageShell
import HeroSection from "@/components/sections/WhatPage/HeroSection";

const navSections = [
  { name: "WHAT", path: "what" }, // You can update or add more sections if needed
];

const What = () => {
  return (
    <PageShell navSections={navSections}>
      <div>
        <HeroSection />
      </div>
    </PageShell>
  );
};

export default What;
