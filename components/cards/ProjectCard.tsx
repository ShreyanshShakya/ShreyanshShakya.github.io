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
  };
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

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

          <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center bg-card rounded-2xl h-full">
            <div className="flex-1 space-y-6">
              <h3 className="text-3xl font-heading font-bold text-foreground">
                {project.title}
              </h3>
              <p className="text-secondary text-lg leading-relaxed max-w-2xl">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-3">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full border border-border bg-background/50 text-xs font-mono text-secondary"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="pt-4 flex items-center text-accent font-medium gap-2">
                <span>View Case Study</span>
                <motion.div
                  animate={{ x: isHovered ? 5 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
              </div>
            </div>

            {/* Architecture Diagram */}
            <div className="w-full md:w-2/5 aspect-4/3 rounded-xl overflow-hidden bg-background relative border border-border/50 p-4">
              <ArchitectureDiagram
                projectId={project.id}
                isHovered={isHovered}
              />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
