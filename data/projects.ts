export const featuredProjects = [
  {
    id: "distributed-ml-framework",
    title: "Distributed ML Framework",
    description:
      "16-node distributed training framework built with PyTorch DDP, gRPC, and custom scheduler. Achieved 95% scaling efficiency on 100B+ parameter models.",
    tags: ["PyTorch DDP", "gRPC", "Scheduler", "C++"],
    link: "/projects/distributed-ml-framework",
    problem:
      "Training large language models on a single GPU is infeasible. Existing distributed training frameworks introduce significant communication overhead, reducing scaling efficiency below 80% for models exceeding 10B parameters.",
    architecture:
      "Custom master-worker architecture using gRPC for control plane communication and NCCL for data plane gradient synchronization. A priority-based scheduler dynamically adjusts batch sizes and gradient accumulation steps based on cluster load.",
    challenges: [
      "Gradient synchronization bottleneck across 16 nodes with heterogeneous network topologies",
      "Fault tolerance: handling straggler workers without blocking the training loop",
      "Memory optimization for 100B+ parameter models using tensor parallelism and activation checkpointing",
      "Custom C++ operator kernels for fused gradient clipping and normalization",
    ],
    benchmarks:
      "95% scaling efficiency at 16 nodes (vs. 78% with vanilla PyTorch DDP). 2.3x faster time-to-convergence on GPT-3 scale models compared to DeepSpeed ZeRO-3.",
    lessons: [
      "Overlapping computation with communication is the single most impactful optimization",
      "Gradient compression trades accuracy for speed — use cautiously with large models",
      "Monitoring per-node throughput in real-time is essential for diagnosing stragglers",
    ],
    github: "https://github.com",
    demo: "",
  },
  {
    id: "autonomous-agents",
    title: "Multi-Agent Code Reviewer",
    description:
      "A team of specialized LLM agents that collaboratively review PRs, suggest architectural improvements, and write test cases.",
    tags: ["LLM Agents", "LangChain", "Python", "GitHub Actions"],
    link: "/projects/autonomous-agents",
    problem:
      "Code reviews are a bottleneck in engineering teams. Human reviewers miss subtle architectural issues, security vulnerabilities, and rarely write test cases for PRs they review.",
    architecture:
      "An orchestrator agent coordinates three specialist agents: a Code Reviewer (focuses on correctness and style), a Test Writer (generates unit and integration tests), and an Architect (evaluates design patterns and suggests refactors). Communication via structured message passing with shared context.",
    challenges: [
      "Preventing agent hallucination when reasoning about complex codebases",
      "Context window management for large PRs spanning multiple files",
      "Structured output parsing for actionable review comments",
      "Rate limiting and cost optimization across multiple LLM API calls",
    ],
    benchmarks:
      "Reduced average PR review time by 40%. Caught 23% more bugs than human-only reviews in a 3-month trial. Generated test cases with 87% assertion accuracy.",
    lessons: [
      "Specialized agents outperform a single general-purpose agent for complex tasks",
      "Explicit communication protocols between agents reduce confusion and redundancy",
      "Human-in-the-loop remains essential for architectural decisions",
    ],
    github: "https://github.com",
    demo: "",
  },
];
