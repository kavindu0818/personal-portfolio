import { Code2, Database, Layers, Palette, Server, Wrench } from "lucide-react";
import { Reveal } from "./Reveal";

const skills = [
  { Icon: Code2, title: "Frontend", items: ["React", "TypeScript", "Next.js", "Tailwind"] },
  { Icon: Server, title: "Backend", items: ["Node.js", "tRPC", "GraphQL", "REST"] },
  { Icon: Database, title: "Data", items: ["PostgreSQL", "Redis", "Prisma", "ClickHouse"] },
  { Icon: Palette, title: "Design", items: ["Figma", "Design Systems", "Motion", "A11y"] },
  { Icon: Layers, title: "Infra", items: ["AWS", "Cloudflare", "Docker", "Terraform"] },
  { Icon: Wrench, title: "Tooling", items: ["Vite", "Turborepo", "Vitest", "Playwright"] },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center mb-14">
          <p className="text-sm font-mono text-primary-glow mb-3">// toolkit</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map(({ Icon, title, items }, idx) => (
            <Reveal key={title} delay={idx * 80}>
              <div className="hover-lift group p-6 rounded-2xl border border-border bg-card hover:border-primary-glow/40 transition-smooth h-full">
                <div className="inline-flex items-center justify-center h-11 w-11 rounded-lg bg-primary/10 text-primary-glow mb-4 transition-smooth group-hover:scale-110 group-hover:rotate-3">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-lg mb-3">{title}</h3>
                <ul className="space-y-1.5">
                  {items.map((i) => (
                    <li key={i} className="text-sm text-muted-foreground font-mono">
                      — {i}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
