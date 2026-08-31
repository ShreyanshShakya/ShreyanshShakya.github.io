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
  title: "Shreyansh Shakya — AI Engineer & ML Practitioner",
  description: "AI engineer building practical machine learning applications across medical imaging, speech emotion recognition, and weather prediction using Python, TensorFlow, PyTorch, and modern machine learning methods.",
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
