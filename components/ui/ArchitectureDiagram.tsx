"use client";

import { GeneratedDiagram } from "./GeneratedDiagram";

interface ArchitectureDiagramProps {
  projectId: string;
  isHovered?: boolean;
  title?: string;
}

export function ArchitectureDiagram({
  projectId,
  isHovered = false,
  title = "SYSTEM ARCHITECTURE",
}: ArchitectureDiagramProps) {
  return (
    <GeneratedDiagram projectId={projectId} isHovered={isHovered} customTitle={title} />
  );
}