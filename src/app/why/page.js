import React from "react";
import HeroSection from "@/components/sections/whyPage/HeroSection";
import PageShell from "@/components/layout/PageShell"; // Import PageShell

const navSections = [
  { name: "WHY US", path: "why" }, // You can customize this as needed
];

const Page = () => {
  return (
    <PageShell navSections={navSections}>
      <div>
        <HeroSection />
      </div>
    </PageShell>
  );
};

export default Page;
