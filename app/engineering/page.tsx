import Link from "next/link";
import PerformanceLab from "./PerformanceLab";

export default function EngineeringPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <Link
          href="/"
          className="text-xl font-bold"
        >
          DR<span className="text-cyan-400">.</span>
        </Link>
<Link
  href="/engineering/react-query"
  className="mt-6 block rounded-2xl border border-slate-800 bg-slate-900/40 p-6 transition hover:-translate-y-1 hover:border-cyan-500/40"
>
  <p className="text-sm text-cyan-400">
    EXPERIMENT 02
  </p>

  <h2 className="mt-2 text-2xl font-bold">
    React Query Lab
  </h2>

  <p className="mt-3 text-slate-400">
    Interactive demonstration of server-state management,
    caching, invalidation and refetching.
  </p>

  <span className="mt-6 inline-block text-sm text-cyan-400">
    Open experiment →
  </span>
</Link>
<Link
  href="/engineering/rbac"
  className="mt-6 block rounded-2xl border border-slate-800 bg-slate-900/40 p-6 transition hover:-translate-y-1 hover:border-cyan-500/40"
>
  <p className="text-sm text-cyan-400">
    EXPERIMENT 03
  </p>

  <h2 className="mt-2 text-2xl font-bold">
    RBAC Simulator
  </h2>

  <p className="mt-3 text-slate-400">
    Interactive role-based access control demonstrating
    permission-driven enterprise UI.
  </p>

  <span className="mt-6 inline-block text-sm text-cyan-400">
    Open experiment →
  </span>
</Link>
<Link
  href="/engineering/architecture"
  className="mt-6 block rounded-2xl border border-slate-800 bg-slate-900/40 p-6 transition hover:-translate-y-1 hover:border-cyan-500/40"
>
  <p className="text-sm text-cyan-400">
    EXPERIMENT 04
  </p>

  <h2 className="mt-2 text-2xl font-bold">
    Architecture Explorer
  </h2>

  <p className="mt-3 text-slate-400">
    Interactive architecture diagram showing frontend,
    state management, API and backend communication.
  </p>

  <span className="mt-6 inline-block text-sm text-cyan-400">
    Open experiment →
  </span>
</Link>
        <Link
          href="/"
          className="text-sm text-slate-400 hover:text-white"
        >
          ← Back to portfolio
        </Link>
      </nav>

      <section className="mx-auto max-w-7xl px-6 pb-16 pt-16">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
          Engineering Playground
        </p>

        <h1 className="mt-4 text-5xl font-bold tracking-tight md:text-6xl">
          Engineering in practice.
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
          Interactive experiments demonstrating frontend performance,
          data fetching, state management, architecture and scalable
          React patterns.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 md:p-8">
          <div className="mb-8">
            <p className="text-sm text-cyan-400">
              EXPERIMENT 01
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              React Performance Lab
            </h2>

            <p className="mt-3 max-w-2xl text-slate-400">
              Compare rendering a large dataset normally versus
              virtualizing the list so only visible rows are rendered.
            </p>
          </div>

          <PerformanceLab />
        </div>
      </section>
    </main>
  );
}