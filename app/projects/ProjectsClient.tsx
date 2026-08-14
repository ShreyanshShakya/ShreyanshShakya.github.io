"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { featuredProjects } from "@/data/projects";
import { ArchitectureDiagram } from "@/components/ui/ArchitectureDiagram";

export function ProjectsClient() {
  return (
    <div className="container mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
          Projects
        </h1>
        <p className="text-secondary text-lg mb-16 max-w-2xl">
          Engineering case studies — each project is documented with the
          problem, architecture, challenges, benchmarks, and lessons learned.
        </p>
      </motion.div>

      <div className="space-y-8">
        {featuredProjects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <Link href={project.link} className="group block">
              <div className="rounded-xl border border-border bg-card p-8 md:p-10 hover:border-accent/30 transition-colors duration-300 flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                    {project.title}
                  </h2>
                  <p className="text-secondary leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full border border-border bg-background/50 text-xs font-mono text-secondary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-sm text-accent font-medium inline-flex items-center gap-1">
                    View Case Study
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
                <div className="w-full md:w-1/3 aspect-[4/3] rounded-lg border border-border/50 bg-background p-3 shrink-0">
                  <ArchitectureDiagram projectId={project.id} isHovered={false} />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}