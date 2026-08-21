import Link from "next/link";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-20 text-white">
      <div className="mx-auto max-w-7xl">
        <Link
          href="/"
          className="text-sm text-slate-400 hover:text-white"
        >
          ← Back home
        </Link>

        <p className="mt-16 text-sm uppercase tracking-[0.3em] text-cyan-400">
          Selected Work
        </p>

        <h1 className="mt-3 text-5xl font-bold">
          Engineering Projects
        </h1>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="rounded-2xl border border-slate-800 bg-slate-900/50 p-7 transition hover:-translate-y-1 hover:border-cyan-500/40"
            >
              <p className="text-sm text-cyan-400">
                {project.category}
              </p>

              <h2 className="mt-3 text-2xl font-bold">
                {project.title}
              </h2>

              <p className="mt-4 leading-7 text-slate-400">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-md bg-slate-800 px-3 py-1 text-xs text-slate-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <p className="mt-8 text-sm font-medium text-cyan-400">
                View case study →
              </p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}