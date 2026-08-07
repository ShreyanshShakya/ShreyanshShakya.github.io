"use client";

import { motion } from "framer-motion";

interface NodeData {
  id: string;
  label: string;
  x: number;
  y: number;
}

interface EdgeData {
  from: string;
  to: string;
}

const architectures: Record<string, { nodes: NodeData[]; edges: EdgeData[] }> = {
  "distributed-ml-framework": {
    nodes: [
      { id: "master", label: "Master", x: 150, y: 30 },
      { id: "w1", label: "Worker 1", x: 30, y: 120 },
      { id: "w2", label: "Worker 2", x: 100, y: 120 },
      { id: "w3", label: "Worker 3", x: 200, y: 120 },
      { id: "w4", label: "Worker 4", x: 270, y: 120 },
      { id: "sync", label: "Gradient Sync", x: 120, y: 210 },
    ],
    edges: [
      { from: "master", to: "w1" },
      { from: "master", to: "w2" },
      { from: "master", to: "w3" },
      { from: "master", to: "w4" },
      { from: "w1", to: "sync" },
      { from: "w2", to: "sync" },
      { from: "w3", to: "sync" },
      { from: "w4", to: "sync" },
    ],
  },
  "autonomous-agents": {
    nodes: [
      { id: "orch", label: "Orchestrator", x: 130, y: 110 },
      { id: "reviewer", label: "Code Reviewer", x: 40, y: 30 },
      { id: "tester", label: "Test Writer", x: 240, y: 30 },
      { id: "architect", label: "Architect", x: 140, y: 210 },
    ],
    edges: [
      { from: "orch", to: "reviewer" },
      { from: "orch", to: "tester" },
      { from: "orch", to: "architect" },
    ],
  },
};

function getNodeCenter(node: NodeData) {
  return { cx: node.x + 40, cy: node.y + 14 };
}

export function ArchitectureDiagram({
  projectId,
  isHovered,
}: {
  projectId: string;
  isHovered: boolean;
}) {
  const arch = architectures[projectId];
  if (!arch) {
    return (
      <div className="w-full h-full flex items-center justify-center font-mono text-secondary/30 text-sm">
        {projectId}
      </div>
    );
  }

  return (
    <svg
      viewBox="0 0 320 260"
      className="w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Edges */}
      {arch.edges.map((edge, i) => {
        const fromNode = arch.nodes.find((n) => n.id === edge.from)!;
        const toNode = arch.nodes.find((n) => n.id === edge.to)!;
        const from = getNodeCenter(fromNode);
        const to = getNodeCenter(toNode);
        return (
          <motion.line
            key={i}
            x1={from.cx}
            y1={from.cy}
            x2={to.cx}
            y2={to.cy}
            stroke="var(--color-border)"
            strokeWidth={1.5}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: isHovered ? 0.8 : 0.4 }}
            transition={{ duration: 0.6, delay: i * 0.05 }}
          />
        );
      })}

      {/* Nodes */}
      {arch.nodes.map((node, i) => (
        <motion.g
          key={node.id}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: isHovered ? 1.05 : 1,
          }}
          transition={{ duration: 0.4, delay: i * 0.08 }}
        >
          <rect
            x={node.x}
            y={node.y}
            width={80}
            height={28}
            rx={6}
            fill="var(--color-card)"
            stroke="var(--color-accent)"
            strokeWidth={isHovered ? 1.5 : 0.8}
            strokeOpacity={isHovered ? 0.8 : 0.4}
          />
          <text
            x={node.x + 40}
            y={node.y + 18}
            textAnchor="middle"
            fill="var(--color-secondary)"
            fontSize={9}
            fontFamily="var(--font-mono)"
          >
            {node.label}
          </text>
        </motion.g>
      ))}
    </svg>
  );
}
