"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Code2 } from "lucide-react";
import { useParams } from "next/navigation";
import { featuredProjects } from "@/data/projects";
import { ArchitectureDiagram } from "@/components/ui/ArchitectureDiagram";

export default function ProjectCaseStudy() {
  const params = useParams();
  const id = params.id as string;
  const project = featuredProjects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="container mx-auto px-6 py-24 text-center">
        <h1 className="text-2xl font-heading font-bold text-foreground mb-4">
          Project not found
        </h1>
        <Link href="/projects" className="text-accent hover:underline">
          ← Back to Projects
        </Link>
      </div>
    );
  }

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
    <div className="container mx-auto px-6 py-24 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-secondary hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>

        <h1 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4 leading-tight">
          {project.title}
        </h1>
        <p className="text-secondary text-lg leading-relaxed mb-6">
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
        <div className="flex gap-4 mb-16">
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

        {/* Architecture Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-xl border border-border bg-card p-8 mb-16"
        >
          <h2 className="text-sm text-secondary uppercase tracking-widest font-mono mb-6">
            System Architecture
          </h2>
          <div className="max-w-md mx-auto aspect-4/3">
            <ArchitectureDiagram projectId={project.id} isHovered={true} />
          </div>
        </motion.div>

        {/* Case study sections */}
        <div className="space-y-12">
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
