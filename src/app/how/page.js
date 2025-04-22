import React from "react";
import HeroSection from "@/components/sections/howPage/HeroSection"; // Assuming HeroSection is already a client component
import PageShell from "@/components/layout/PageShell"; // Ensure PageShell handles NavContext logic
import OneBreakdown from "@/components/sections/howPage/OneBreakdown";
import CTA from "@/components/layout/CTA";
import StepSection from "@/components/sections/howPage/StepSection";
import DesignIntro from "@/components/sections/howPage/DesignIntro";

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
        <StepSection step="01" the="Foundation" />
        <StepSection step="02" the="Foundation" />
        <StepSection step="03" the="Foundation" />
        <StepSection step="04" the="Foundation" />
        <DesignIntro />
        <CTA />
      </main>
    </PageShell>
  );
};

export default How;
