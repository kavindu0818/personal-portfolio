import {
  Cloud,
  Code2,
  Database,
  GitBranch,
  Layout,
  Server,
  Smartphone,
  Terminal,
} from "lucide-react";
import { Reveal } from "./Reveal";

const skills = [
  {
    Icon: Code2,
    title: "Programming Languages",
    items: ["Java", "JavaScript", "TypeScript", "Python"],
  },
  {
    Icon: Layout,
    title: "Frontend",
    items: ["React", "Tailwind CSS", "Bootstrap", "HTML/CSS"],
  },
  {
    Icon: Server,
    title: "Backend",
    items: ["Spring Boot", "Node.js"],
  },
  {
    Icon: Smartphone,
    title: "Mobile",
    items: ["React Native"],
  },
  {
    Icon: Database,
    title: "Databases",
    items: ["MySQL", "MongoDB"],
  },
  {
    Icon: Cloud,
    title: "DevOps & Cloud",
    items: ["Docker", "AWS"],
  },
  {
    Icon: GitBranch,
    title: "Version Control",
    items: ["Git", "GitHub", "GitLab"],
  },
  {
    Icon: Terminal,
    title: "Operating Systems",
    items: ["Windows", "Linux"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center mb-14">
          <p className="text-sm font-mono text-primary-glow mb-3">// toolkit</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm md:text-base">
            Technologies, frameworks, and tools I use to build scalable, reliable software.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skills.map(({ Icon, title, items }, idx) => (
            <Reveal key={title} delay={idx * 60}>
              <div className="hover-lift group p-6 rounded-2xl border border-border bg-card hover:border-primary-glow/40 transition-smooth h-full flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center justify-center h-11 w-11 rounded-lg bg-primary/10 text-primary-glow mb-4 transition-smooth group-hover:scale-110 group-hover:rotate-3">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-lg mb-3">{title}</h3>
                </div>
                <div className="flex flex-wrap gap-2 pt-2">
                  {items.map((i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 text-xs font-mono rounded-lg bg-secondary text-secondary-foreground border border-border/60 transition-smooth group-hover:border-primary-glow/30"
                    >
                      {i}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

