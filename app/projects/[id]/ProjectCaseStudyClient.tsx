"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Code2 } from "lucide-react";
import { ArchitectureDiagram } from "@/components/ui/ArchitectureDiagram";
import { architectures } from "@/data/architectures";

interface ProjectCaseStudyClientProps {
  project: {
    id: string;
    title: string;
    description: string;
    tags: string[];
    github: string;
    demo: string;
    problem: string;
    architecture: string;
    challenges: string[];
    benchmarks: string;
    lessons: string[];
    relatedProjects?: string[];
  };
}

export function ProjectCaseStudyClient({ project }: ProjectCaseStudyClientProps) {
  const sections = [
    { title: "Problem", content: project.problem },
    { title: "Architecture", content: project.architecture },
    {
      title: "Challenges",
      content: null,
      list: project.challenges,
    },
    { title: "Benchmarks", content: project.benchmarks },
    {
      title: "Lessons Learned",
      content: null,
      list: project.lessons,
    },
  ];

  return (
    <div className="container mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-secondary hover:text-foreground transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(280px,0.8fr)_minmax(520px,1.2fr)] lg:items-start gap-y-10">
          {/* Left Column - Project Info */}
          <div>
            <h1 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4 leading-tight">
              {project.title}
            </h1>
            <p className="text-secondary text-lg leading-relaxed mb-8">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full border border-border bg-card text-xs font-mono text-secondary"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-4 mb-8">
              {project.github && (
                <Link
                  href={project.github}
                  target="_blank"
                  className="inline-flex items-center gap-2 px-4 py-2 border border-border rounded-lg text-sm text-secondary hover:text-foreground hover:bg-card transition-colors"
                >
                  <Code2 className="w-4 h-4" />
                  Source Code
                </Link>
              )}
              {project.demo && (
                <Link
                  href={project.demo}
                  target="_blank"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-background rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </Link>
              )}
            </div>

            {/* Related Projects */}
            {project.relatedProjects && project.relatedProjects.length > 0 && (
              <div className="mt-8">
                <h3 className="text-sm text-secondary uppercase tracking-widest font-mono mb-4">
                  Related Projects
                </h3>
                <div className="flex flex-wrap gap-3">
                  {project.relatedProjects.map((relatedId) => (
                    <Link
                      key={relatedId}
                      href={`/projects/${relatedId}`}
                      className="px-3 py-1.5 rounded-lg border border-border bg-card text-sm text-secondary hover:text-foreground hover:border-accent/30 hover:bg-accent/5 transition-colors"
                    >
                      {relatedId.replace(/-/g, ". ")}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Architecture Diagram */}
          <div className="w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full overflow-hidden rounded-2xl border border-white/10 bg-black/20 p-4 sm:p-6"
            >
              <h2 className="text-sm text-secondary uppercase tracking-widest font-mono mb-4">
                SYSTEM ARCHITECTURE
              </h2>
              <ArchitectureDiagram projectId={project.id} isHovered={true} />
              {architectures[project.id]?.footer && (
                <p className="mt-4 text-sm text-secondary/80 font-mono leading-relaxed">
                  {architectures[project.id].footer}
                </p>
              )}
            </motion.div>
          </div>
        </div>

        {/* Case study sections */}
        <div className="space-y-12 lg:col-span-2 mt-10 pt-10 border-t border-white/10">
          {sections.map((section, i) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <h2 className="text-sm text-secondary uppercase tracking-widest font-mono mb-4">
                {section.title}
              </h2>
              {section.content && (
                <p className="text-foreground/80 leading-relaxed text-lg">
                  {section.content}
                </p>
              )}
              {section.list && (
                <ul className="space-y-3">
                  {section.list.map((item, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-3 text-foreground/80 leading-relaxed"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}