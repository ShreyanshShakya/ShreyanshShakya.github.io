import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectCaseStudyClient } from "./ProjectCaseStudyClient";
import { featuredProjects } from "@/data/projects";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const project = featuredProjects.find((p) => p.id === id);
  
  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.description,
    },
  };
}

export default async function ProjectCaseStudy({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const id = resolvedParams.id;
  const project = featuredProjects.find((p) => p.id === id);
  
  if (!project) {
    notFound();
  }

  return <ProjectCaseStudyClient project={project} />;
}