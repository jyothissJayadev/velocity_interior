import React from "react";
import HeroSection from "@/components/sections/whyPage/HeroSection";
import PageShell from "@/components/layout/PageShell"; // Import PageShell
import ComparisonSection from "@/components/sections/whyPage/ComparisonSection";
import FeatureShowcase from "@/components/sections/whyPage/FeatureShowcase";

const navSections = [
  { name: "WHY US", path: "why" }, // You can customize this as needed
];
const features = [
  {
    title: "Personalization",
    description:
      "Your space should reflect you. We craft designs that capture your story, style, and aspirations. No templates — just tailor-made ideas for your lifestyle.",
  },
  {
    title: "Transparency",
    description:
      "From budget to timeline, we keep everything open and clear. You’ll always know what’s happening and why — no surprises.",
  },
  {
    title: "Speed",
    description:
      "Design and execution — streamlined. With our structured workflow, your dream space comes to life faster than traditional methods.",
  },
  {
    title: "Quality Control",
    description:
      "Every material, every finish, every detail — checked and double-checked to ensure the highest quality output at every step.",
  },
  {
    title: "Real-Time Software Updates",
    description:
      "Track your project progress live through our platform. From moodboards to milestones — it’s all just a tap away.",
  },
  {
    title: "Budget-Friendly Execution",
    description:
      "Design doesn’t need to be expensive. We help you prioritize what matters, maximize value, and stay within your budget.",
  },
  {
    title: "After Work Support",
    description:
      "Even after handover, we’re here. Whether it’s fixes, upgrades, or advice — you have a partner, not just a provider.",
  },
];
const Page = () => {
  return (
    <PageShell navSections={navSections}>
      <div>
        <HeroSection />
        <ComparisonSection />
        {features.map((feature, index) => (
          <FeatureShowcase
            key={index}
            title={feature.title}
            description={feature.description}
            image={feature.image}
            reverse={index % 2 !== 0}
          />
        ))}
      </div>
    </PageShell>
  );
};

export default Page;
