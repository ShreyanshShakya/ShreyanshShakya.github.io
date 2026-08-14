import { featuredProjects } from "@/data/projects";
import { ProjectCard } from "@/components/cards/ProjectCard";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const FEATURED_COUNT = 3;

export function FeaturedProjects() {
  const featured = featuredProjects.slice(0, FEATURED_COUNT);

  return (
    <section id="projects" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between mb-16">
          <h2 className="text-sm text-secondary uppercase tracking-widest font-mono">
            Selected Work
          </h2>
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-sm text-secondary hover:text-foreground transition-colors font-mono"
          >
            View all {featuredProjects.length} projects
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="space-y-12">
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
