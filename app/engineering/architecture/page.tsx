import Link from "next/link";
import ArchitectureExplorer from "./ArchitectureExplorer";

export default function ArchitecturePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <Link href="/" className="text-xl font-bold">
          DR<span className="text-cyan-400">.</span>
        </Link>

        <Link
          href="/engineering"
          className="text-sm text-slate-400 hover:text-white"
        >
          ← Engineering Playground
        </Link>
      </nav>

      <section className="mx-auto max-w-7xl px-6 pb-12 pt-16">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
          Experiment 04
        </p>

        <h1 className="mt-4 text-5xl font-bold tracking-tight md:text-6xl">
          Architecture Explorer
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
          An interactive view of how a modern frontend application
          can communicate across the UI, state, API and backend layers.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <ArchitectureExplorer />
      </section>
    </main>
  );
}