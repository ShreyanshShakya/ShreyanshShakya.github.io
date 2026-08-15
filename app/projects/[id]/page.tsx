import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectCaseStudyClient } from "./ProjectCaseStudyClient";
import { featuredProjects } from "@/data/projects";

export function generateStaticParams() {
  return featuredProjects.map((project) => ({ id: project.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const project = featuredProjects.find((p) => p.id === id);
  
  if (!project) {
    return { title: "Project Not Found" };
  }

  const siteUrl = "https://shreyanshshakya.github.io";

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      type: "article",
      images: [
        {
          url: `${siteUrl}/og-image.png`,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.description,
      images: [`${siteUrl}/og-image.png`],
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