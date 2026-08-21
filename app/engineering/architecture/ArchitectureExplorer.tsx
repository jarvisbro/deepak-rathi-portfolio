"use client";

import {
  Background,
  Controls,
  Edge,
  MiniMap,
  Node,
  ReactFlow,
} from "@xyflow/react";

import "@xyflow/react/dist/style.css";

const nodes: Node[] = [
  {
    id: "user",
    position: { x: 50, y: 200 },
    data: {
      label: "User",
    },
    style: {
      background: "#020617",
      color: "#fff",
      border: "1px solid #334155",
      borderRadius: "12px",
      padding: "16px",
      width: 160,
    },
  },

  {
    id: "frontend",
    position: { x: 300, y: 200 },
    data: {
      label: "React / Next.js",
    },
    style: {
      background: "#020617",
      color: "#fff",
      border: "1px solid #0891b2",
      borderRadius: "12px",
      padding: "16px",
      width: 180,
    },
  },

  {
    id: "state",
    position: { x: 580, y: 100 },
    data: {
      label: "TanStack Query",
    },
    style: {
      background: "#020617",
      color: "#fff",
      border: "1px solid #334155",
      borderRadius: "12px",
      padding: "16px",
      width: 180,
    },
  },

  {
    id: "api",
    position: { x: 580, y: 300 },
    data: {
      label: "API Layer",
    },
    style: {
      background: "#020617",
      color: "#fff",
      border: "1px solid #334155",
      borderRadius: "12px",
      padding: "16px",
      width: 160,
    },
  },

  {
    id: "backend",
    position: { x: 850, y: 300 },
    data: {
      label: "Backend Services",
    },
    style: {
      background: "#020617",
      color: "#fff",
      border: "1px solid #334155",
      borderRadius: "12px",
      padding: "16px",
      width: 180,
    },
  },

  {
    id: "database",
    position: { x: 1120, y: 300 },
    data: {
      label: "Database",
    },
    style: {
      background: "#020617",
      color: "#fff",
      border: "1px solid #334155",
      borderRadius: "12px",
      padding: "16px",
      width: 160,
    },
  },
];

const edges: Edge[] = [
  {
    id: "user-frontend",
    source: "user",
    target: "frontend",
    animated: true,
  },

  {
    id: "frontend-state",
    source: "frontend",
    target: "state",
    animated: true,
  },

  {
    id: "frontend-api",
    source: "frontend",
    target: "api",
    animated: true,
  },

  {
    id: "api-backend",
    source: "api",
    target: "backend",
    animated: true,
  },

  {
    id: "backend-database",
    source: "backend",
    target: "database",
    animated: true,
  },
];

export default function ArchitectureExplorer() {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950">
      <div className="border-b border-slate-800 px-6 py-5">
        <p className="text-sm font-medium">
          Application architecture
        </p>

        <p className="mt-1 text-sm text-slate-500">
          Drag nodes, zoom and explore the data flow.
        </p>
      </div>

      <div className="h-[650px]">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          fitView
          attributionPosition="bottom-left"
        >
          <Background />
          <Controls />
          <MiniMap />
        </ReactFlow>
      </div>
    </div>
  );
}