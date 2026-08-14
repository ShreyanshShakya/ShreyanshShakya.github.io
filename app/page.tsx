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
  title: "Shreyansh Shakya — AI Engineer & ML Systems Builder",
  description: "AI Engineer building distributed ML infrastructure, agentic AI systems, and research-driven machine learning applications. Experienced with PyTorch Distributed, LLM orchestration, and scalable software engineering.",
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
