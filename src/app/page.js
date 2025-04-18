import HeroSection from "@/components/sections/homePage/HeroSection";
import PageShell from "@/components/layout/PageShell";
import { NavContext } from "@/context/NavContext";
import TwoVideo from "@/components/sections/homePage/TwoVideo";
import ThreeSnapshot from "@/components/sections/homePage/ThreeSnapshot";
import FourTech from "@/components/sections/homePage/FourTech";
import FiveCustomer from "@/components/sections/homePage/FiveCustomer";
import CTA from "@/components/layout/CTA";
import React from "react";
const navSections = [
  { name: "image", path: "home" },
  { name: "video", path: "about" },
  { name: "snapshot", path: "services" },
  { name: "TECHNOLOGY", path: "contact1" },
  { name: "CUSTOMER VALUING", path: "contact2" },
  { name: "PRICING/TIME", path: "contact2" },
  { name: "emotional", path: "contact2" },
];

export default function Page() {
  return (
    <PageShell navSections={navSections}>
      <main>
        <HeroSection id="home" title="Welcome" />
        <TwoVideo id="about" />
        <ThreeSnapshot id="services" />
        <FourTech id="contact1" />
        <FiveCustomer id="contact2" />
        <CTA />
      </main>
    </PageShell>
  );
}
