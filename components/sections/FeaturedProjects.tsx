import { featuredProjects } from "@/data/projects";
import { ProjectCard } from "@/components/cards/ProjectCard";

export function FeaturedProjects() {
  return (
    <section id="projects" className="py-32 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-sm text-secondary uppercase tracking-widest font-mono mb-16">
          Selected Works
        </h2>
        
        <div className="space-y-12">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
