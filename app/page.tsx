import { projects } from "@/data/projects";
import { experience } from "@/data/experience";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Navigation */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <div className="text-xl font-bold">
          DR<span className="text-cyan-400">.</span>
        </div>

        <div className="hidden gap-8 text-sm text-slate-300 md:flex">
          <a href="#about" className="hover:text-white">
            About
          </a>
          <a href="#projects" className="hover:text-white">
            Projects
          </a>
          <a href="#skills" className="hover:text-white">
            Skills
          </a>
          <a href="#contact" className="hover:text-white">
            Contact
          </a>
        </div>

        <a
          href="mailto:rathi0056@gmail.com"
          className="rounded-lg border border-slate-700 px-4 py-2 text-sm hover:bg-slate-900"
        >
          Contact
        </a>
      </nav>

      {/* Hero */}
      <section
        id="about"
        className="mx-auto grid max-w-7xl gap-12 px-6 pb-24 pt-20 md:grid-cols-[1.4fr_0.6fr] md:items-center"
      >
        <div>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
            Senior Frontend Engineer
          </p>

          <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
            Deepak
            <br />
            <span className="text-slate-400">Rathi.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            Senior Frontend Engineer specializing in React, Next.js and TypeScript, with 6.5+ years building scalable enterprise and product applications.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-white px-6 py-3 font-medium text-slate-950 hover:bg-slate-200"
            >
              View Projects
            </a>

            <a
              href="https://www.linkedin.com/in/deepak-rathi-a7ab75127"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-slate-700 px-6 py-3 font-medium hover:bg-slate-900"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Developer card */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl">
          <div className="mb-6 flex items-center gap-3">
            <div className="h-3 w-3 rounded-full bg-green-400" />
            <span className="text-sm text-slate-400">
              Currently building
            </span>
          </div>

          <div className="space-y-4 font-mono text-sm">
            <p>
              <span className="text-purple-400">const</span>{" "}
              <span className="text-cyan-300">developer</span> = {"{"}
            </p>

            <p className="pl-4">
              experience: <span className="text-green-400">"6.5+ years"</span>,
            </p>

            <p className="pl-4">
              focus: <span className="text-green-400">"Frontend"</span>,
            </p>

            <p className="pl-4">
              stack: <span className="text-green-400">"React + Next.js"</span>,
            </p>

            <p className="pl-4">
              location: <span className="text-green-400">"Gurugram"</span>,
            </p>

            <p>{"};"}</p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-slate-800 bg-slate-900/40">
        <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4">
          {[
            ["6.5+", "Years Experience"],
            ["React", "Primary Expertise"],
            ["4", "Major Products"],
            ["TypeScript", "Modern Stack"],
          ].map(([value, label]) => (
            <div
              key={label}
              className="border-r border-slate-800 px-6 py-8 last:border-r-0"
            >
              <p className="text-2xl font-bold">{value}</p>
              <p className="mt-1 text-sm text-slate-500">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12">
          <p className="text-sm uppercase tracking-[0.25em] text-cyan-400">
            Selected Work
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            Engineering projects
          </h2>

          <p className="mt-4 max-w-2xl text-slate-400">
            A selection of enterprise and product experiences I have worked
            on across fintech, AI, operations and gamification.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
           <a
  key={project.slug}
  href={`/projects/${project.slug}`}
  className="group block rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-500/40 hover:bg-slate-900"
>
              <p className="text-sm text-cyan-400">{project.category}</p>

              <h3 className="mt-3 text-2xl font-semibold">
                {project.title}
              </h3>

              <p className="mt-4 min-h-24 text-sm leading-6 text-slate-400">
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
            </a>
          ))}
        </div>
      </section>
<section
  id="experience"
  className="border-t border-slate-800 bg-slate-950"
>
  <div className="mx-auto max-w-7xl px-6 py-24">

    <div className="max-w-2xl">
      <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
        Career
      </p>

      <h2 className="mt-3 text-4xl font-bold">
        Experience
      </h2>

      <p className="mt-4 text-lg leading-8 text-slate-400">
        6.5+ years building frontend products, enterprise
        applications and interactive web experiences.
      </p>
    </div>

    <div className="mt-16">
      {experience.map((job, index) => (
        <div
          key={`${job.company}-${job.period}`}
          className="grid gap-8 border-t border-slate-800 py-10 md:grid-cols-[180px_1fr]"
        >

          {/* Period */}
          <div>
            <p className="text-sm font-medium text-cyan-400">
              {job.period}
            </p>
          </div>

          {/* Content */}
          <div>

            <div className="flex flex-col justify-between gap-2 md:flex-row">
              <div>
                <h3 className="text-2xl font-semibold">
                  {job.role}
                </h3>

                <p className="mt-1 text-slate-400">
                  {job.company} · {job.location}
                </p>
              </div>
            </div>

            {/* Technologies */}
            <div className="mt-5 flex flex-wrap gap-2">
              {job.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-md bg-slate-900 px-3 py-1.5 text-xs text-slate-400"
                >
                  {technology}
                </span>
              ))}
            </div>

            {/* Highlights */}
            <ul className="mt-6 space-y-3">
              {job.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex gap-3 text-slate-400"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />

                  <span className="leading-7">
                    {highlight}
                  </span>
                </li>
              ))}
            </ul>

          </div>
        </div>
      ))}
    </div>

  </div>
</section>
      {/* Skills */}
      <section id="skills" className="border-t border-slate-800">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <p className="text-sm uppercase tracking-[0.25em] text-cyan-400">
            Technology
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            My engineering stack
          </h2>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            {[
              "React.js",
              "Next.js",
              "TypeScript",
              "JavaScript",
              "Tailwind CSS",
              "Material UI",
              "Redux",
              "React Query",
              "Node.js",
              "REST APIs",
              "GraphQL",
              "AWS",
              "Docker",
              "CI/CD",
              "Jest",
              "React Testing Library",
            ].map((skill) => (
              <div
                key={skill}
                className="rounded-xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-300"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-slate-800">
        <div className="mx-auto max-w-7xl px-6 py-24 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-cyan-400">
            Let's connect
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Looking for my next challenge.
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-slate-400">
            Open to senior frontend and React opportunities, including
            relocation opportunities in Europe.
          </p>

          <a
            href="mailto:rathi0056@gmail.com"
            className="mt-8 inline-block rounded-lg bg-white px-6 py-3 font-medium text-slate-950"
          >
            rathi0056@gmail.com
          </a>
        </div>
      </section>

      <footer className="border-t border-slate-800 py-8 text-center text-sm text-slate-500">
        © 2026 Deepak Rathi. Built with Next.js and TypeScript.
      </footer>
    </main>
  );
}