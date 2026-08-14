"use client";

import { motion, useReducedMotion } from "framer-motion";

/* -------------------------------------------------------------------------- */
/* Types                                                                      */
/* -------------------------------------------------------------------------- */

type NodeKind =
  | "input"
  | "control"
  | "process"
  | "agent"
  | "model"
  | "data"
  | "output"
  | "safety"
  | "system";

interface DiagramNode {
  id: string;
  title: string;
  subtitle?: string;
  kind: NodeKind;

  // Center position in SVG coordinates.
  x: number;
  y: number;

  width?: number;
  height?: number;
}

interface DiagramEdge {
  from: string;
  to: string;
  label?: string;
  dashed?: boolean;
  color?: "primary" | "secondary" | "success" | "warning";
}

interface DiagramDefinition {
  title: string;
  subtitle?: string;
  nodes: DiagramNode[];
  edges: DiagramEdge[];
  footer?: string;
}

/* -------------------------------------------------------------------------- */
/* Constants                                                                  */
/* -------------------------------------------------------------------------- */

const VIEWBOX_WIDTH = 1200;
const VIEWBOX_HEIGHT = 700;

const DEFAULT_NODE_WIDTH = 220;
const DEFAULT_NODE_HEIGHT = 82;

const COLORS = {
  background: "#0a0a0b",
  panel: "#111214",
  panelStrong: "#15171a",

  text: "#f5f5f5",
  muted: "#969ba3",
  border: "#2a2d32",

  primary: "#5b8cff",
  secondary: "#8b5cf6",
  success: "#22c55e",
  warning: "#f59e0b",
  danger: "#ef4444",

  primarySoft: "rgba(91,140,255,0.12)",
  secondarySoft: "rgba(139,92,246,0.12)",
  successSoft: "rgba(34,197,94,0.10)",
  warningSoft: "rgba(245,158,11,0.10)",
  neutralSoft: "rgba(255,255,255,0.035)",
};

/* -------------------------------------------------------------------------- */
/* Helpers                                                                    */
/* -------------------------------------------------------------------------- */

function nodeWidth(node: DiagramNode) {
  return node.width ?? DEFAULT_NODE_WIDTH;
}

function nodeHeight(node: DiagramNode) {
  return node.height ?? DEFAULT_NODE_HEIGHT;
}

function getNodeMap(nodes: DiagramNode[]) {
  return new Map(nodes.map((node) => [node.id, node]));
}

function clampText(text: string, maxLength = 28) {
  if (text.length <= maxLength) {
    return text;
  }

  return `${text.slice(0, maxLength - 1)}…`;
}

/**
 * Returns the point where a line from the source center to target center
 * intersects the rectangular boundary of the source node.
 */
function getBoundaryPoint(
  source: DiagramNode,
  target: DiagramNode,
  reverse = false,
) {
  const sourceWidth = nodeWidth(source);
  const sourceHeight = nodeHeight(source);

  const dx = target.x - source.x;
  const dy = target.y - source.y;

  const safeDx = Math.abs(dx) < 0.001 ? 0.001 : dx;

  const halfWidth = sourceWidth / 2;
  const halfHeight = sourceHeight / 2;

  const scaleX = halfWidth / Math.abs(safeDx);
  const scaleY = halfHeight / Math.abs(dy || 0.001);

  const scale = Math.min(scaleX, scaleY);

  const x = source.x + dx * scale;
  const y = source.y + dy * scale;

  if (reverse) {
    return {
      x: target.x - (x - source.x),
      y: target.y - (y - source.y),
    };
  }

  return { x, y };
}

function getEdgePoints(source: DiagramNode, target: DiagramNode) {
  const from = getBoundaryPoint(source, target);
  const to = getBoundaryPoint(target, source);

  return { from, to };
}

function getColors(kind: NodeKind) {
  switch (kind) {
    case "input":
      return {
        stroke: COLORS.primary,
        fill: COLORS.primarySoft,
      };

    case "control":
      return {
        stroke: COLORS.secondary,
        fill: COLORS.secondarySoft,
      };

    case "process":
      return {
        stroke: COLORS.primary,
        fill: COLORS.neutralSoft,
      };

    case "agent":
      return {
        stroke: COLORS.secondary,
        fill: COLORS.secondarySoft,
      };

    case "model":
      return {
        stroke: COLORS.success,
        fill: COLORS.successSoft,
      };

    case "data":
      return {
        stroke: "#60a5fa",
        fill: "rgba(96,165,250,0.10)",
      };

    case "output":
      return {
        stroke: COLORS.success,
        fill: COLORS.successSoft,
      };

    case "safety":
      return {
        stroke: COLORS.warning,
        fill: COLORS.warningSoft,
      };

    case "system":
    default:
      return {
        stroke: COLORS.border,
        fill: COLORS.panel,
      };
  }
}

function getEdgeColor(edge: DiagramEdge) {
  switch (edge.color) {
    case "secondary":
      return COLORS.secondary;

    case "success":
      return COLORS.success;

    case "warning":
      return COLORS.warning;

    case "primary":
    default:
      return COLORS.primary;
  }
}

/* -------------------------------------------------------------------------- */
/* Diagram Definitions                                                        */
/* -------------------------------------------------------------------------- */

const architectures: Record<string, DiagramDefinition> = {
  /* ---------------------------------------------------------------------- */
  /* DMLF                                                                     */
  /* ---------------------------------------------------------------------- */

  "distributed-ml-framework": {
    title: "Distributed ML Training Framework",
    subtitle: "Cluster management + PyTorch DDP worker plane",

    nodes: [
      {
        id: "user",
        title: "User / CLI",
        subtitle: "Submit training job",
        kind: "input",
        x: 170,
        y: 150,
        width: 220,
        height: 86,
      },

      {
        id: "manager",
        title: "Cluster Manager",
        subtitle: "gRPC + scheduler",
        kind: "control",
        x: 470,
        y: 150,
        width: 240,
        height: 86,
      },

      {
        id: "registry",
        title: "SQLite Registry",
        subtitle: "Nodes + job state",
        kind: "data",
        x: 470,
        y: 290,
        width: 240,
        height: 78,
      },

      {
        id: "agent-a",
        title: "Node Agent A",
        subtitle: "Telemetry + hardware profile",
        kind: "agent",
        x: 820,
        y: 120,
        width: 250,
        height: 86,
      },

      {
        id: "agent-b",
        title: "Node Agent B",
        subtitle: "Telemetry + hardware profile",
        kind: "agent",
        x: 820,
        y: 270,
        width: 250,
        height: 86,
      },

      {
        id: "worker-a",
        title: "DDP Worker A",
        subtitle: "PyTorch / NCCL",
        kind: "model",
        x: 820,
        y: 450,
        width: 250,
        height: 86,
      },

      {
        id: "worker-b",
        title: "DDP Worker B",
        subtitle: "PyTorch / Gloo",
        kind: "model",
        x: 820,
        y: 590,
        width: 250,
        height: 86,
      },
    ],

    edges: [
      {
        from: "user",
        to: "manager",
        label: "job submission",
        color: "primary",
      },
      {
        from: "manager",
        to: "registry",
        label: "state",
        color: "secondary",
      },
      {
        from: "manager",
        to: "agent-a",
        label: "gRPC",
        color: "primary",
      },
      {
        from: "manager",
        to: "agent-b",
        label: "gRPC",
        color: "primary",
      },
      {
        from: "agent-a",
        to: "worker-a",
        label: "launch",
        color: "success",
      },
      {
        from: "agent-b",
        to: "worker-b",
        label: "launch",
        color: "success",
      },
      {
        from: "agent-a",
        to: "manager",
        label: "telemetry",
        dashed: true,
        color: "secondary",
      },
      {
        from: "agent-b",
        to: "manager",
        label: "telemetry",
        dashed: true,
        color: "secondary",
      },
    ],

    footer:
      "Heterogeneous consumer nodes coordinated through the cluster-management layer.",
  },

  /* ---------------------------------------------------------------------- */
  /* ASTER                                                                    */
  /* ---------------------------------------------------------------------- */

  "autonomous-agents": {
    title: "AI Research Orchestrator / Multi-Agent Research Scientist",
    subtitle: "Distributed AI research orchestration",

    nodes: [
      {
        id: "question",
        title: "Research Question",
        subtitle: "Problem intake",
        kind: "input",
        x: 180,
        y: 170,
      },

      {
        id: "planner",
        title: "Research Planner",
        subtitle: "Question-aware plan",
        kind: "control",
        x: 470,
        y: 170,
      },

      {
        id: "retrieval",
        title: "Literature Retrieval",
        subtitle: "OpenAlex / Semantic Scholar",
        kind: "data",
        x: 760,
        y: 170,
        width: 250,
      },

      {
        id: "analysis",
        title: "Research Agents",
        subtitle: "Analyze evidence",
        kind: "agent",
        x: 470,
        y: 350,
      },

      {
        id: "experiment",
        title: "Experiment Planner",
        subtitle: "Metrics + training plan",
        kind: "process",
        x: 760,
        y: 350,
      },

      {
        id: "workers",
        title: "Distributed Workers",
        subtitle: "DMLF / PyTorch DDP",
        kind: "model",
        x: 760,
        y: 520,
      },

      {
        id: "report",
        title: "Research Brief",
        subtitle: "Evidence + results",
        kind: "output",
        x: 470,
        y: 520,
      },
    ],

    edges: [
      { from: "question", to: "planner", color: "primary" },
      { from: "planner", to: "retrieval", color: "secondary" },
      { from: "retrieval", to: "analysis", color: "secondary" },
      { from: "analysis", to: "experiment", color: "primary" },
      { from: "experiment", to: "workers", color: "success" },
      { from: "workers", to: "report", color: "success" },
      { from: "analysis", to: "report", color: "primary" },
    ],

    footer:
      "Offline-demo mode uses deterministic agents and simulated workers where external services are unavailable.",
  },

  "ai-research-orchestrator": {
    title: "Aster",
    subtitle: "Distributed AI research orchestration",

    nodes: [
      {
        id: "question",
        title: "Research Question",
        subtitle: "Problem intake",
        kind: "input",
        x: 180,
        y: 170,
      },

      {
        id: "planner",
        title: "Research Planner",
        subtitle: "Question-aware plan",
        kind: "control",
        x: 470,
        y: 170,
      },

      {
        id: "retrieval",
        title: "Literature Retrieval",
        subtitle: "OpenAlex / Semantic Scholar",
        kind: "data",
        x: 760,
        y: 170,
        width: 250,
      },

      {
        id: "analysis",
        title: "Research Agents",
        subtitle: "Analyze evidence",
        kind: "agent",
        x: 470,
        y: 350,
      },

      {
        id: "experiment",
        title: "Experiment Planner",
        subtitle: "Metrics + training plan",
        kind: "process",
        x: 760,
        y: 350,
      },

      {
        id: "workers",
        title: "Distributed Workers",
        subtitle: "DMLF / PyTorch DDP",
        kind: "model",
        x: 760,
        y: 520,
      },

      {
        id: "report",
        title: "Research Brief",
        subtitle: "Evidence + results",
        kind: "output",
        x: 470,
        y: 520,
      },
    ],

    edges: [
      {
        from: "question",
        to: "planner",
        color: "primary",
      },
      {
        from: "planner",
        to: "retrieval",
        color: "secondary",
      },
      {
        from: "retrieval",
        to: "analysis",
        color: "secondary",
      },
      {
        from: "analysis",
        to: "experiment",
        color: "primary",
      },
      {
        from: "experiment",
        to: "workers",
        color: "success",
      },
      {
        from: "workers",
        to: "report",
        color: "success",
      },
      {
        from: "analysis",
        to: "report",
        color: "primary",
      },
    ],

    footer:
      "Offline-demo mode uses deterministic agents and simulated workers where external services are unavailable.",
  },

  /* ---------------------------------------------------------------------- */
  /* AGENTFORGE                                                               */
  /* ---------------------------------------------------------------------- */

  agentforge: {
    title: "AgentForge",
    subtitle: "Local multi-agent software engineering assistant",

    nodes: [
      {
        id: "request",
        title: "Software Request",
        subtitle: "User requirements",
        kind: "input",
        x: 180,
        y: 170,
      },

      {
        id: "analyst",
        title: "Analyst",
        subtitle: "Requirements analysis",
        kind: "agent",
        x: 470,
        y: 110,
      },

      {
        id: "architect",
        title: "Architect",
        subtitle: "System design",
        kind: "agent",
        x: 470,
        y: 260,
      },

      {
        id: "critic",
        title: "Critic",
        subtitle: "Review + validation",
        kind: "agent",
        x: 760,
        y: 185,
      },

      {
        id: "planner",
        title: "Planner",
        subtitle: "Implementation plan",
        kind: "control",
        x: 760,
        y: 365,
      },

      {
        id: "generator",
        title: "Code Generation",
        subtitle: "Ollama / local LLM",
        kind: "model",
        x: 980,
        y: 275,
        width: 220,
      },

      {
        id: "output",
        title: "Validated Project",
        subtitle: "Code + tests + fixes",
        kind: "output",
        x: 980,
        y: 470,
        width: 220,
      },
    ],

    edges: [
      {
        from: "request",
        to: "analyst",
        color: "primary",
      },
      {
        from: "request",
        to: "architect",
        color: "primary",
      },
      {
        from: "analyst",
        to: "critic",
        color: "secondary",
      },
      {
        from: "architect",
        to: "critic",
        color: "secondary",
      },
      {
        from: "critic",
        to: "planner",
        color: "warning",
      },
      {
        from: "planner",
        to: "generator",
        color: "success",
      },
      {
        from: "generator",
        to: "output",
        color: "success",
      },
    ],

    footer:
      "Specialized agents collaborate locally with validation, caching, and code-generation workflows.",
  },

  /* ---------------------------------------------------------------------- */
  /* BRAIN MRI                                                                */
  /* ---------------------------------------------------------------------- */

  "brain-mri-segmentation": {
    title: "Brain Tumor Segmentation",
    subtitle: "3D U-Net → EfficientNet → Attention pipeline",

    nodes: [
      {
        id: "data",
        title: "BraTS 2020",
        subtitle: "3D MRI volumes",
        kind: "input",
        x: 180,
        y: 180,
      },

      {
        id: "preprocess",
        title: "Preprocessing",
        subtitle: "Normalization + patches",
        kind: "process",
        x: 470,
        y: 180,
      },

      {
        id: "baseline",
        title: "Baseline 3D U-Net",
        subtitle: "Dice 0.8057",
        kind: "model",
        x: 760,
        y: 120,
      },

      {
        id: "efficient",
        title: "EfficientNet U-Net",
        subtitle: "Dice 0.8157",
        kind: "model",
        x: 760,
        y: 270,
      },

      {
        id: "attention",
        title: "Attention + EfficientNet",
        subtitle: "Dice 0.8256",
        kind: "model",
        x: 760,
        y: 420,
        width: 250,
      },

      {
        id: "evaluation",
        title: "Validation",
        subtitle: "Dice + segmentation metrics",
        kind: "output",
        x: 470,
        y: 450,
      },
    ],

    edges: [
      {
        from: "data",
        to: "preprocess",
        color: "primary",
      },
      {
        from: "preprocess",
        to: "baseline",
        color: "success",
      },
      {
        from: "preprocess",
        to: "efficient",
        color: "success",
      },
      {
        from: "preprocess",
        to: "attention",
        color: "success",
      },
      {
        from: "baseline",
        to: "evaluation",
        color: "secondary",
      },
      {
        from: "efficient",
        to: "evaluation",
        color: "secondary",
      },
      {
        from: "attention",
        to: "evaluation",
        color: "success",
      },
    ],

    footer:
      "Best validation Dice: 0.8256 using the Attention + EfficientNet architecture.",
  },

  /* ---------------------------------------------------------------------- */
  /* OPTIMUS                                                                  */
  /* ---------------------------------------------------------------------- */

  optimus: {
    title: "Optimus",
    subtitle: "Safety-constrained EnergyPlus control loop",

    nodes: [
      {
        id: "simulation",
        title: "EnergyPlus",
        subtitle: "Building simulation",
        kind: "input",
        x: 180,
        y: 180,
      },

      {
        id: "state",
        title: "Simulation State",
        subtitle: "Temperature + load + time",
        kind: "data",
        x: 470,
        y: 180,
        width: 240,
      },

      {
        id: "controller",
        title: "AI Controller",
        subtitle: "Local LLM / deterministic fallback",
        kind: "control",
        x: 770,
        y: 180,
        width: 270,
      },

      {
        id: "safety",
        title: "Safety Validator",
        subtitle: "Bounds + constraints",
        kind: "safety",
        x: 770,
        y: 360,
      },

      {
        id: "action",
        title: "Bounded Control Action",
        subtitle: "Schedule override",
        kind: "output",
        x: 470,
        y: 360,
        width: 240,
      },

      {
        id: "audit",
        title: "Audit / Metrics",
        subtitle: "Traceable decisions",
        kind: "process",
        x: 180,
        y: 360,
      },
    ],

    edges: [
      {
        from: "simulation",
        to: "state",
        color: "primary",
      },
      {
        from: "state",
        to: "controller",
        color: "secondary",
      },
      {
        from: "controller",
        to: "safety",
        color: "warning",
      },
      {
        from: "safety",
        to: "action",
        color: "success",
      },
      {
        from: "action",
        to: "simulation",
        color: "primary",
      },
      {
        from: "action",
        to: "audit",
        dashed: true,
        color: "secondary",
      },
      {
        from: "audit",
        to: "simulation",
        dashed: true,
        color: "secondary",
      },
    ],

    footer:
      "Control actions remain bounded by explicit safety constraints before being applied to the simulation.",
  },

  /* ---------------------------------------------------------------------- */
  /* SPEECH EMOTION                                                           */
  /* ---------------------------------------------------------------------- */

  "speech-emotion-recognition": {
    title: "Speech Emotion Recognition",
    subtitle: "Audio preprocessing + neural emotion classification",

    nodes: [
      {
        id: "audio",
        title: "Audio Input",
        subtitle: "Speech waveform",
        kind: "input",
        x: 180,
        y: 180,
      },

      {
        id: "preprocess",
        title: "Preprocessing",
        subtitle: "Cleaning + augmentation",
        kind: "process",
        x: 470,
        y: 180,
      },

      {
        id: "features",
        title: "MFCC / Features",
        subtitle: "Time-frequency representation",
        kind: "data",
        x: 760,
        y: 180,
      },

      {
        id: "cnn",
        title: "CNN",
        subtitle: "Spatial feature extraction",
        kind: "model",
        x: 620,
        y: 380,
      },

      {
        id: "bilstm",
        title: "BiLSTM",
        subtitle: "Temporal modelling",
        kind: "model",
        x: 900,
        y: 380,
      },

      {
        id: "emotion",
        title: "Emotion Prediction",
        subtitle: "Emotion classes",
        kind: "output",
        x: 760,
        y: 540,
        width: 240,
      },
    ],

    edges: [
      {
        from: "audio",
        to: "preprocess",
        color: "primary",
      },
      {
        from: "preprocess",
        to: "features",
        color: "secondary",
      },
      {
        from: "features",
        to: "cnn",
        color: "success",
      },
      {
        from: "features",
        to: "bilstm",
        color: "success",
      },
      {
        from: "cnn",
        to: "emotion",
        color: "success",
      },
      {
        from: "bilstm",
        to: "emotion",
        color: "success",
      },
    ],

    footer:
      "Published research focuses on data augmentation and lightweight CNN-based speech emotion recognition.",
  },

  /* ---------------------------------------------------------------------- */
  /* WEATHER                                                                  */
  /* ---------------------------------------------------------------------- */

  "weather-prediction": {
    title: "Weather Prediction",
    subtitle: "Large-scale city-specific ML forecasting",

    nodes: [
      {
        id: "history",
        title: "Historical Weather",
        subtitle: "90 GB dataset",
        kind: "input",
        x: 180,
        y: 180,
        width: 230,
      },

      {
        id: "preprocess",
        title: "Preprocessing",
        subtitle: "Cleaning + feature engineering",
        kind: "process",
        x: 470,
        y: 180,
        width: 240,
      },

      {
        id: "city",
        title: "City-Specific Models",
        subtitle: "Thousands of locations",
        kind: "control",
        x: 780,
        y: 180,
        width: 250,
      },

      {
        id: "xgboost",
        title: "XGBoost",
        subtitle: "Per-city forecasting",
        kind: "model",
        x: 780,
        y: 370,
      },

      {
        id: "api",
        title: "FastAPI",
        subtitle: "Prediction serving",
        kind: "system",
        x: 470,
        y: 370,
      },

      {
        id: "forecast",
        title: "Forecast Output",
        subtitle: "Temperature / weather predictions",
        kind: "output",
        x: 180,
        y: 370,
        width: 230,
      },
    ],

    edges: [
      {
        from: "history",
        to: "preprocess",
        color: "primary",
      },
      {
        from: "preprocess",
        to: "city",
        color: "secondary",
      },
      {
        from: "city",
        to: "xgboost",
        color: "success",
      },
      {
        from: "xgboost",
        to: "api",
        color: "success",
      },
      {
        from: "api",
        to: "forecast",
        color: "primary",
      },
    ],

    footer:
      "City-specific XGBoost models are exposed through an API-oriented serving layer.",
  },
};

/* -------------------------------------------------------------------------- */
/* Background                                                                  */
/* -------------------------------------------------------------------------- */

function DiagramBackground() {
  return (
    <>
      <rect
        x="0"
        y="0"
        width={VIEWBOX_WIDTH}
        height={VIEWBOX_HEIGHT}
        rx="20"
        fill={COLORS.background}
      />

      <defs>
        <pattern
          id="architecture-grid"
          width="40"
          height="40"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 40 0 L 0 0 0 40"
            fill="none"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="1"
          />
        </pattern>

        <filter id="node-shadow" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow
            dx="0"
            dy="8"
            stdDeviation="12"
            floodColor="#000000"
            floodOpacity="0.35"
          />
        </filter>

        <marker
          id="arrow-primary"
          markerWidth="10"
          markerHeight="10"
          refX="8"
          refY="5"
          orient="auto"
          markerUnits="strokeWidth"
        >
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.primary} />
        </marker>

        <marker
          id="arrow-secondary"
          markerWidth="10"
          markerHeight="10"
          refX="8"
          refY="5"
          orient="auto"
          markerUnits="strokeWidth"
        >
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.secondary} />
        </marker>

        <marker
          id="arrow-success"
          markerWidth="10"
          markerHeight="10"
          refX="8"
          refY="5"
          orient="auto"
          markerUnits="strokeWidth"
        >
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.success} />
        </marker>

        <marker
          id="arrow-warning"
          markerWidth="10"
          markerHeight="10"
          refX="8"
          refY="5"
          orient="auto"
          markerUnits="strokeWidth"
        >
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.warning} />
        </marker>
      </defs>

      <rect
        x="0"
        y="0"
        width={VIEWBOX_WIDTH}
        height={VIEWBOX_HEIGHT}
        fill="url(#architecture-grid)"
        opacity="0.45"
      />
    </>
  );
}

/* -------------------------------------------------------------------------- */
/* Text                                                                       */
/* -------------------------------------------------------------------------- */

function CenteredMultilineText({
  title,
  subtitle,
  x,
  y,
}: {
  title: string;
  subtitle?: string;
  x: number;
  y: number;
}) {
  const titleText = clampText(title, 30);

  return (
    <>
      <text
        x={x}
        y={y}
        textAnchor="middle"
        dominantBaseline="middle"
        fill={COLORS.text}
        fontSize="15"
        fontWeight="700"
        fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"
      >
        {titleText}
      </text>

      {subtitle && (
        <text
          x={x}
          y={y + 25}
          textAnchor="middle"
          dominantBaseline="middle"
          fill={COLORS.muted}
          fontSize="11"
          fontWeight="400"
          fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"
        >
          {clampText(subtitle, 37)}
        </text>
      )}
    </>
  );
}

/* -------------------------------------------------------------------------- */
/* Node                                                                       */
/* -------------------------------------------------------------------------- */

function ArchitectureNode({
  node,
  isHovered,
  index,
  shouldReduceMotion,
}: {
  node: DiagramNode;
  isHovered: boolean;
  index: number;
  shouldReduceMotion: boolean;
}) {
  const width = nodeWidth(node);
  const height = nodeHeight(node);

  const left = node.x - width / 2;
  const top = node.y - height / 2;

  const colors = getColors(node.kind);

  return (
    <motion.g
      initial={{
        opacity: 0,
        y: 8,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={
        shouldReduceMotion
          ? { duration: 0 }
          : {
              duration: 0.35,
              delay: index * 0.04,
              ease: "easeOut",
            }
      }
    >
      <motion.rect
        x={left}
        y={top}
        width={width}
        height={height}
        rx={14}
        fill={colors.fill}
        stroke={colors.stroke}
        strokeWidth={isHovered ? 2 : 1.2}
        filter="url(#node-shadow)"
        animate={{
          opacity: isHovered ? 1 : 0.96,
        }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
      />

      <rect
        x={left + 1}
        y={top + 1}
        width={width - 2}
        height={height - 2}
        rx={13}
        fill="none"
        stroke="rgba(255,255,255,0.035)"
        strokeWidth="1"
      />

      <CenteredMultilineText
        title={node.title}
        subtitle={node.subtitle}
        x={node.x}
        y={node.y - (node.subtitle ? 8 : 0)}
      />
    </motion.g>
  );
}

/* -------------------------------------------------------------------------- */
/* Edge                                                                       */
/* -------------------------------------------------------------------------- */

function EdgeMarker({ color }: { color: string }) {
  if (color === COLORS.secondary) {
    return "url(#arrow-secondary)";
  }

  if (color === COLORS.success) {
    return "url(#arrow-success)";
  }

  if (color === COLORS.warning) {
    return "url(#arrow-warning)";
  }

  return "url(#arrow-primary)";
}

function ArchitectureEdge({
  edge,
  nodes,
  index,
  shouldReduceMotion,
}: {
  edge: DiagramEdge;
  nodes: DiagramNode[];
  index: number;
  shouldReduceMotion: boolean;
}) {
  const nodeMap = getNodeMap(nodes);

  const source = nodeMap.get(edge.from);
  const target = nodeMap.get(edge.to);

  if (!source || !target) {
    return null;
  }

  const { from, to } = getEdgePoints(source, target);
  const color = getEdgeColor(edge);

  const midX = (from.x + to.x) / 2;
  const midY = (from.y + to.y) / 2;

  return (
    <motion.g
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={
        shouldReduceMotion
          ? { duration: 0 }
          : {
              duration: 0.25,
              delay: index * 0.025,
            }
      }
    >
      <line
        x1={from.x}
        y1={from.y}
        x2={to.x}
        y2={to.y}
        stroke={color}
        strokeWidth="2"
        strokeDasharray={edge.dashed ? "7 6" : undefined}
        opacity="0.72"
        markerEnd={EdgeMarker({ color })}
      />

      {edge.label && (
        <g>
          <rect
            x={midX - 42}
            y={midY - 12}
            width={84}
            height={24}
            rx={12}
            fill={COLORS.background}
            stroke={COLORS.border}
            strokeWidth="1"
            opacity="0.96"
          />

          <text
            x={midX}
            y={midY + 1}
            textAnchor="middle"
            dominantBaseline="middle"
            fill={COLORS.muted}
            fontSize="10"
            fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"
          >
            {clampText(edge.label, 16)}
          </text>
        </g>
      )}
    </motion.g>
  );
}

/* -------------------------------------------------------------------------- */
/* Header                                                                     */
/* -------------------------------------------------------------------------- */

function DiagramHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <g>
      <text
        x="60"
        y="54"
        fill={COLORS.text}
        fontSize="22"
        fontWeight="800"
        fontFamily="ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif"
      >
        {title}
      </text>

      {subtitle && (
        <text
          x="60"
          y="82"
          fill={COLORS.muted}
          fontSize="12"
          fontWeight="500"
          fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"
        >
          {subtitle}
        </text>
      )}

      <line
        x1="60"
        y1="104"
        x2={VIEWBOX_WIDTH - 60}
        y2="104"
        stroke={COLORS.border}
        strokeWidth="1"
      />
    </g>
  );
}

/* -------------------------------------------------------------------------- */
/* Footer                                                                     */
/* -------------------------------------------------------------------------- */

function DiagramFooter({ text }: { text: string }) {
  return (
    <g>
      <line
        x1="60"
        y1="640"
        x2={VIEWBOX_WIDTH - 60}
        y2="640"
        stroke={COLORS.border}
        strokeWidth="1"
      />

      <text
        x="60"
        y="670"
        fill={COLORS.muted}
        fontSize="11"
        fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"
      >
        {text}
      </text>
    </g>
  );
}

/* -------------------------------------------------------------------------- */
/* Main component                                                             */
/* -------------------------------------------------------------------------- */

export function GeneratedDiagram({
  projectId,
  isHovered = false,
  customTitle,
}: {
  projectId: string;
  isHovered?: boolean;
  customTitle?: string;
}) {
  const shouldReduceMotion = useReducedMotion();
  const architecture = architectures[projectId];

  if (!architecture) {
    return (
      <div
        className="flex min-h-[420px] items-center justify-center rounded-xl border border-white/10 bg-white/[0.02] px-6 text-center font-mono text-sm text-white/40"
        role="img"
        aria-label={`Architecture diagram for ${projectId} is unavailable`}
      >
        Architecture diagram unavailable.
      </div>
    );
  }

  return (
    <div className="relative w-full">
      <svg
        viewBox={`0 0 ${VIEWBOX_WIDTH} ${VIEWBOX_HEIGHT}`}
        className="block h-auto w-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-label={`${architecture.title} architecture diagram`}
      >
        <DiagramBackground />

        <DiagramHeader
          title={customTitle ?? architecture.title}
          subtitle={architecture.subtitle}
        />

        {/* Edges render first so they remain visually behind nodes. */}
        <g>
          {architecture.edges.map((edge, index) => (
            <ArchitectureEdge
              key={`${edge.from}-${edge.to}-${index}`}
              edge={edge}
              nodes={architecture.nodes}
              index={index}
              shouldReduceMotion={Boolean(shouldReduceMotion)}
            />
          ))}
        </g>

        {/* Nodes render after edges. */}
        <g>
          {architecture.nodes.map((node, index) => (
            <ArchitectureNode
              key={node.id}
              node={node}
              index={index}
              isHovered={isHovered}
              shouldReduceMotion={Boolean(shouldReduceMotion)}
            />
          ))}
        </g>

        {architecture.footer && (
          <DiagramFooter text={architecture.footer} />
        )}
      </svg>
    </div>
  );
}