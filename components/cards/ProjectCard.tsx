"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { ArchitectureDiagram } from "@/components/ui/ArchitectureDiagram";

interface ProjectCardProps {
  project: {
    id: string;
    title: string;
    description: string;
    tags: string[];
    link: string;
    challenges: string[];
    lessons: string[];
  };
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Extract engineering highlights from challenges and lessons
  const engineeringHighlights = [
    ...project.challenges.slice(0, 3),
    ...project.lessons.slice(0, 3),
  ].slice(0, 6);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <Link href={project.link} className="block group">
        <div
          className="relative rounded-2xl bg-card border border-border overflow-hidden transition-all duration-500"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Border Glow */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0">
            <div className="absolute -inset-px bg-linear-to-r from-accent/50 to-transparent rounded-2xl z-0 blur-sm" />
          </div>

          <div className="relative z-10 p-6 md:p-8 bg-card rounded-2xl flex flex-col md:flex-row gap-6 md:gap-8 items-start">
            {/* Architecture Diagram - on top on mobile, side by side on desktop */}
            <div className="md:order-2 mb-0 md:w-2/5 aspect-[4/3] rounded-xl overflow-hidden bg-background relative border border-border/50 p-3 shrink-0">
              <ArchitectureDiagram
                projectId={project.id}
                isHovered={isHovered}
              />
            </div>

            <div className="md:order-1 md:w-3/5 space-y-5">
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
                {project.title}
              </h3>
              <p className="text-secondary text-base md:text-lg leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 rounded-full border border-border bg-background/50 text-xs font-mono text-secondary"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Engineering Highlights */}
              <div className="pt-3 border-t border-border/50">
                <h4 className="text-xs font-mono text-accent uppercase tracking-wider mb-2">
                  Engineering Highlights
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-secondary">
                  {engineeringHighlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-center gap-2 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent/50 flex-shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-3 flex items-center text-accent font-medium gap-2">
                <span>View Case Study</span>
                <motion.div
                  animate={{ x: isHovered ? 5 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
