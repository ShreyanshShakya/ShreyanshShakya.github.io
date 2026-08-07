"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Calendar } from "lucide-react";
import { useParams } from "next/navigation";

const notesContent: Record<
  string,
  { title: string; date: string; content: string[] }
> = {
  "gradient-synchronization": {
    title: "Understanding Gradient Synchronization in DDP",
    date: "2026-07-15",
    content: [
      "Gradient synchronization is the core communication primitive in distributed data-parallel training. Each worker computes gradients on its local mini-batch, and these gradients must be aggregated (typically via AllReduce) before the optimizer step.",
      "The fundamental challenge is that AllReduce bandwidth scales linearly with model size but is bounded by network capacity. For a 100B parameter model with fp16 gradients, each synchronization step transfers ~200GB of data across the cluster.",
      "PyTorch DDP uses a bucketed AllReduce strategy: gradients are grouped into buckets as they become ready during the backward pass, and AllReduce is overlapped with ongoing backward computation. This overlap is the single most important optimization — without it, communication would add 40-60% overhead.",
      "However, bucket ordering is determined by the model's parameter registration order, not the actual backward computation order. This mismatch causes workers to wait for buckets that aren't ready yet, creating pipeline bubbles.",
      "Our solution was to implement dynamic bucket reordering based on profiled backward pass timing. We instrumented the first few training iterations to measure actual gradient computation order, then reorganized buckets to maximize overlap. This reduced communication overhead from 22% to 5% at 16-node scale.",
      "Key takeaway: vanilla DDP is a good starting point, but production-scale training requires profiling-driven optimization of the gradient synchronization pipeline.",
    ],
  },
  "multi-agent-systems": {
    title: "Building Resilient Multi-Agent Systems",
    date: "2026-06-20",
    content: [
      "The promise of multi-agent systems is simple: specialized agents outperform generalist models on complex tasks. The reality is that coordinating multiple LLM agents introduces failure modes that don't exist in single-model architectures.",
      "The first challenge is context management. Each agent operates within a fixed context window, but the shared state of the system grows unboundedly. We found that naive context sharing (broadcasting everything to every agent) degrades performance rapidly — agents become confused by irrelevant information.",
      "Our solution was structured message passing with relevance filtering. The orchestrator maintains a shared knowledge graph, and each agent receives only the subgraph relevant to its current task. This reduced hallucination rates by 35%.",
      "The second challenge is consensus. When agents disagree (e.g., the Code Reviewer approves but the Architect flags a design issue), the system needs a resolution mechanism. We implemented a priority-weighted voting system where agents can escalate disagreements to the orchestrator with structured justifications.",
      "Fault tolerance is the third challenge. If an agent produces invalid output (malformed JSON, nonsensical review), the system must recover gracefully. We added output validation schemas and automatic retry with rephrased prompts, achieving 99.2% successful task completion.",
      "The most important lesson: treat multi-agent systems as distributed systems. Apply the same principles — idempotency, timeouts, circuit breakers, observability — that you would use for microservices.",
    ],
  },
  "distributed-training-failures": {
    title: "Debugging Distributed Training Failures",
    date: "2026-05-10",
    content: [
      "Distributed training failures are uniquely frustrating because they often manifest hours into a training run, the error messages are cryptic, and reproducing the issue is expensive.",
      "The most common failure mode is the straggler problem. One worker becomes slower than the rest (due to thermal throttling, memory pressure, or noisy neighbors on shared infrastructure), causing all workers to wait at synchronization barriers.",
      "Our monitoring solution tracks per-worker iteration time, GPU utilization, and memory bandwidth in real-time. When a worker's iteration time deviates by more than 2 standard deviations from the mean, the scheduler automatically migrates its workload to a healthy node.",
      "NCCL timeout errors are the second most common failure. These occur when AllReduce operations exceed the configured timeout, usually because a worker has crashed silently. The default NCCL timeout of 30 minutes is far too long for production — we reduced it to 5 minutes and added automatic checkpoint-and-restart on timeout.",
      "Gradient explosion is the third failure mode. In mixed-precision training, gradients can overflow fp16 range, causing NaN losses. The standard solution (loss scaling) sometimes fails when the scaling factor oscillates. We implemented a multi-level scaling strategy with separate scale factors for different parameter groups.",
      "The meta-lesson: invest in observability before you invest in optimization. You can't fix what you can't see.",
    ],
  },
};

export default function ResearchNotePage() {
  const params = useParams();
  const slug = params.slug as string;
  const note = notesContent[slug];

  if (!note) {
    return (
      <div className="container mx-auto px-6 py-24 text-center">
        <h1 className="text-2xl font-heading font-bold text-foreground mb-4">
          Note not found
        </h1>
        <Link href="/research" className="text-accent hover:underline">
          ← Back to Research Notes
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-24 max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Link
          href="/research"
          className="inline-flex items-center gap-2 text-sm text-secondary hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Research Notes
        </Link>

        <div className="flex items-center gap-2 text-xs text-secondary font-mono mb-4">
          <Calendar className="w-3 h-3" />
          {note.date}
        </div>

        <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-10 leading-tight">
          {note.title}
        </h1>

        <div className="space-y-6">
          {note.content.map((paragraph, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}
              className="text-secondary leading-relaxed"
            >
              {paragraph}
            </motion.p>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
