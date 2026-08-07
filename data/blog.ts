import type { ComponentType } from "react";
import DistributedTraining from "@/content/blog/distributed-training.mdx";
import MultiAgentSystems from "@/content/blog/multi-agent-systems.mdx";

type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  component: ComponentType;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "distributed-training",
    title: "Why Distributed Training Still Bottlenecks at Scale",
    excerpt:
      "A practical look at gradient synchronization, communication overlap, and the hidden costs of scaling PyTorch DDP.",
    date: "2026-07-15",
    readTime: "6 min read",
    tags: ["Distributed Systems", "PyTorch", "ML Infra"],
    component: DistributedTraining,
  },
  {
    slug: "multi-agent-systems",
    title: "What I Learned Building Multi-Agent Systems",
    excerpt:
      "Notes on orchestration, context management, and fault tolerance for specialized LLM agent teams.",
    date: "2026-06-20",
    readTime: "5 min read",
    tags: ["LLMs", "Agents", "Architecture"],
    component: MultiAgentSystems,
  },
];