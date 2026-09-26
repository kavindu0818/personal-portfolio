import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";

const projects = [
  {
    title: "Nimbus Analytics",
    description: "Real-time dashboard for SaaS metrics with sub-second query performance.",
    tags: ["React", "TypeScript", "ClickHouse"],
    href: "#",
  },
  {
    title: "Orbit Design System",
    description: "Open-source component library used by 12+ teams across the company.",
    tags: ["React", "Tailwind", "Storybook"],
    href: "#",
  },
  {
    title: "Quill CMS",
    description: "Headless content platform with collaborative editing and versioning.",
    tags: ["Next.js", "Postgres", "tRPC"],
    href: "#",
  },
  {
    title: "Pulse Mobile",
    description: "Cross-platform fitness app with offline-first sync and HealthKit integration.",
    tags: ["React Native", "Expo", "SQLite"],
    href: "#",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center mb-14">
          <p className="text-sm font-mono text-primary-glow mb-3">// selected work</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A handful of products I've designed, built, and shipped.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <a
                href={p.href}
                className="hover-lift group relative block p-8 rounded-2xl border border-border bg-card hover:border-primary-glow/50 transition-smooth"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-semibold group-hover:gradient-text transition-smooth">
                    {p.title}
                  </h3>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary-glow group-hover:-translate-y-1 group-hover:translate-x-1 transition-smooth" />
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">{p.description}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-xs font-mono rounded-full bg-accent text-accent-foreground transition-smooth hover:scale-105"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
