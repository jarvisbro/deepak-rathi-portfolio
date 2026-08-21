import Link from "next/link";
import { notFound } from "next/navigation";
import { projects} from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Navigation */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <Link
          href="/"
          className="text-xl font-bold"
        >
          DR<span className="text-cyan-400">.</span>
        </Link>

        <Link
          href="/"
          className="text-sm text-slate-400 transition hover:text-white"
        >
          ← Back to portfolio
        </Link>
      </nav>

      {/* Project Header */}
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-16">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
          {project.category}
        </p>

        <div className="mt-6 grid gap-12 lg:grid-cols-[1fr_350px]">
          <div>
            <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
              {project.title}
            </h1>

            <p className="mt-6 max-w-3xl text-xl leading-8 text-slate-400">
              {project.description}
            </p>
          </div>

          {/* Project Info */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <p className="text-sm text-slate-500">
              Project Type
            </p>

            <p className="mt-2 font-medium">
              {project.type}
            </p>

            <div className="my-6 h-px bg-slate-800" />

            <p className="text-sm text-slate-500">
              Organization
            </p>

            <p className="mt-2 font-medium">
              {project.company}
            </p>

            <div className="my-6 h-px bg-slate-800" />

            <p className="text-sm text-slate-500">
              Technologies
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-md bg-slate-800 px-3 py-1.5 text-xs text-slate-300"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="border-y border-slate-800 bg-slate-900/30">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-12 md:grid-cols-[250px_1fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-cyan-400">
                01
              </p>

              <h2 className="mt-2 text-3xl font-bold">
                Overview
              </h2>
            </div>

            <div>
              <p className="max-w-3xl text-lg leading-8 text-slate-400">
                {project.description}
              </p>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
                The focus was on building a maintainable frontend
                experience with reusable components, responsive
                interfaces and scalable application architecture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* My Contribution */}
<section className="mx-auto max-w-7xl px-6 py-24">
  <div className="grid gap-12 md:grid-cols-[250px_1fr]">
    <div>
      <p className="text-sm uppercase tracking-[0.25em] text-cyan-400">
        02
      </p>

      <h2 className="mt-2 text-3xl font-bold">
        My contribution
      </h2>
    </div>

    <div className="space-y-4">
      {project.contribution.map((item) => (
        <div
          key={item}
          className="flex gap-4 rounded-xl border border-slate-800 bg-slate-900/40 p-5"
        >
          <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-400" />

          <p className="leading-7 text-slate-300">
            {item}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>
{/* Engineering Focus */}
<section className="border-y border-slate-800 bg-slate-900/30">
  <div className="mx-auto max-w-7xl px-6 py-24">
    <div className="grid gap-12 md:grid-cols-[250px_1fr]">
      <div>
        <p className="text-sm uppercase tracking-[0.25em] text-cyan-400">
          03
        </p>

        <h2 className="mt-2 text-3xl font-bold">
          Engineering focus
        </h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {project.focus.map((item) => (
          <div
            key={item}
            className="rounded-xl border border-slate-800 bg-slate-950 p-6"
          >
            <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-400">
              →
            </div>

            <p className="font-medium text-slate-200">
              {item}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

      {/* Architecture */}
      <section className="border-y border-slate-800 bg-slate-900/30">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-12 md:grid-cols-[250px_1fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-cyan-400">
                03
              </p>

              <h2 className="mt-2 text-3xl font-bold">
                Architecture
              </h2>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-8">
              <div className="grid gap-4 text-center md:grid-cols-5 md:items-center">
                <ArchitectureBox text="User" />

                <Arrow />

                <ArchitectureBox text="React / Next.js" />

                <Arrow />

                <ArchitectureBox text="API Layer" />
              </div>

              <div className="mx-auto mt-4 max-w-md text-center text-slate-600">
                ↓
              </div>

              <div className="mx-auto max-w-xs">
                <ArchitectureBox text="Backend Services" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-[250px_1fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-400">
              04
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              Technology
            </h2>
          </div>

          <div className="flex flex-wrap gap-3">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-slate-300"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom */}
      <section className="border-t border-slate-800">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-10">
          <Link
            href="/projects"
            className="text-sm text-slate-400 hover:text-white"
          >
            ← All projects
          </Link>

          <Link
            href="/"
            className="rounded-lg bg-white px-5 py-3 text-sm font-medium text-slate-950 hover:bg-slate-200"
          >
            Back home
          </Link>
        </div>
      </section>
    </main>
  );
}

function ArchitectureBox({
  text,
}: {
  text: string;
}) {
  return (
    <div className="rounded-xl border border-slate-700 bg-slate-900 px-5 py-4 text-sm font-medium">
      {text}
    </div>
  );
}

function Arrow() {
  return (
    <div className="hidden text-xl text-cyan-400 md:block">
      →
    </div>
  );
}