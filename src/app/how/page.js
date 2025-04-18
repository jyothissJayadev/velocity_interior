import React from "react";
import HeroSection from "@/components/sections/howPage/HeroSection"; // Assuming HeroSection is already a client component
import PageShell from "@/components/layout/PageShell"; // Ensure PageShell handles NavContext logic
import OneBreakdown from "@/components/sections/howPage/OneBreakdown";
import CTA from "@/components/layout/CTA";

const navSections = [
  { name: "PROCESS", path: "how" },
  { name: "STRATEGY", path: "strategy" },
  { name: "EXECUTION", path: "execution" },
];

const How = () => {
  return (
    <PageShell navSections={navSections}>
      <main className="">
        <HeroSection />
        <OneBreakdown />
        <CTA />
      </main>
    </PageShell>
  );
};

export default How;
