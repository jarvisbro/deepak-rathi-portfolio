"use client";

import { useMemo, useRef, useState } from "react";
import {
  useVirtualizer,
} from "@tanstack/react-virtual";

const ROW_COUNT = 10000;

export default function PerformanceLab() {
  const [mode, setMode] = useState<"normal" | "virtual">("virtual");

  const rows = useMemo(
    () =>
      Array.from({ length: ROW_COUNT }, (_, index) => ({
        id: index + 1,
        name: `User ${index + 1}`,
        email: `user${index + 1}@example.com`,
      })),
    []
  );

  return (
    <div>
      {/* Controls */}
      <div className="flex flex-wrap gap-3">
        <button
          onClick={() => setMode("normal")}
          className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
            mode === "normal"
              ? "bg-white text-slate-950"
              : "bg-slate-800 text-slate-300 hover:bg-slate-700"
          }`}
        >
          Normal Rendering
        </button>

        <button
          onClick={() => setMode("virtual")}
          className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
            mode === "virtual"
              ? "bg-cyan-400 text-slate-950"
              : "bg-slate-800 text-slate-300 hover:bg-slate-700"
          }`}
        >
          Virtualized Rendering
        </button>
      </div>

      {/* Stats */}
      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        <Stat
          label="Dataset"
          value={`${ROW_COUNT.toLocaleString()} rows`}
        />

        <Stat
          label="Rendering strategy"
          value={
            mode === "normal"
              ? "All rows"
              : "Virtualized"
          }
        />

        <Stat
          label="Technology"
          value="@tanstack/react-virtual"
        />
      </div>

      {/* List */}
      {mode === "normal" ? (
        <NormalList rows={rows} />
      ) : (
        <VirtualList rows={rows} />
      )}
    </div>
  );
}

function NormalList({
  rows,
}: {
  rows: {
    id: number;
    name: string;
    email: string;
  }[];
}) {
  return (
    <div className="mt-8 h-[500px] overflow-auto rounded-xl border border-slate-800">
      {rows.map((row) => (
        <div
          key={row.id}
          className="flex items-center justify-between border-b border-slate-800 px-5 py-4"
        >
          <div>
            <p className="text-sm font-medium">
              {row.name}
            </p>

            <p className="text-xs text-slate-500">
              {row.email}
            </p>
          </div>

          <span className="text-xs text-slate-600">
            #{row.id}
          </span>
        </div>
      ))}
    </div>
  );
}

function VirtualList({
  rows,
}: {
  rows: {
    id: number;
    name: string;
    email: string;
  }[];
}) {
//   const parentRef = useMemo(
//     () => ({ current: null as HTMLDivElement | null }),
//     []
//   );
const parentRef = useRef<HTMLDivElement>(null);

  const rowVirtualizer = useVirtualizer({
    count: rows.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 65,
    overscan: 5,
  });

  return (
    <div
    //   ref={(element) => {
    //     parentRef.current = element;
    //   }}
    ref={parentRef}
      className="mt-8 h-[500px] overflow-auto rounded-xl border border-slate-800"
    >
      <div
        style={{
          height: `${rowVirtualizer.getTotalSize()}px`,
          position: "relative",
        }}
      >
        {rowVirtualizer.getVirtualItems().map((virtualRow) => {
          const row = rows[virtualRow.index];

          return (
            <div
              key={row.id}
              className="absolute left-0 top-0 flex w-full items-center justify-between border-b border-slate-800 px-5 py-4"
              style={{
                height: `${virtualRow.size}px`,
                transform: `translateY(${virtualRow.start}px)`,
              }}
            >
              <div>
                <p className="text-sm font-medium">
                  {row.name}
                </p>

                <p className="text-xs text-slate-500">
                  {row.email}
                </p>
              </div>

              <span className="text-xs text-slate-600">
                #{row.id}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Stat({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-950 p-5">
      <p className="text-xs uppercase tracking-wider text-slate-500">
        {label}
      </p>

      <p className="mt-2 text-sm font-medium text-slate-200">
        {value}
      </p>
    </div>
  );
}