import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { TechnicalFocus } from "@/components/sections/TechnicalFocus";
import { Research } from "@/components/sections/Research";
import { Timeline } from "@/components/sections/Timeline";
import { Skills } from "@/components/sections/Skills";
import { GithubStats } from "@/components/sections/GithubStats";
import { Contact } from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Shreyansh Shakya | Machine Learning & AI",
  description:
    "Portfolio of Shreyansh Shakya, featuring projects in machine learning, deep learning, medical image segmentation, speech emotion recognition, and predictive modeling.",
};

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <TechnicalFocus />
      <FeaturedProjects />
      <Research />
      <Timeline />
      <Skills />
      <GithubStats />
      <Contact />
    </div>
  );
}
