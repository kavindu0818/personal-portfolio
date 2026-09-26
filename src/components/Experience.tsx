import { Briefcase } from "lucide-react";
import { Reveal } from "./Reveal";

const experiences = [
  {
    role: "Software Engineer Intern",
    company: "Mobitel (Pvt) Ltd",
    period: "2025 — 2026",
    description:
      "Worked as a Software Engineer Intern contributing to production projects across frontend and backend development. Developed and maintained applications using React, Angular, Spring Boot, and relational databases, while collaborating with the development team to implement, integrate, test, and deliver production-ready features.",

  },
  // {
  //   role: "Full-Stack Developer",
  //   company: "Lumen Studio",
  //   period: "2021 — 2023",
  //   description:
  //     "Built and scaled a multi-tenant CMS with Next.js and Postgres. Led the migration from REST to tRPC, cutting client code by 40%.",
  // },
  // {
  //   role: "Frontend Developer",
  //   company: "Pixel & Co.",
  //   period: "2019 — 2021",
  //   description:
  //     "Designed and developed marketing sites and design systems for early-stage startups. Owned accessibility and performance budgets.",
  // },
  // {
  //   role: "Junior Web Developer",
  //   company: "Freelance",
  //   period: "2018 — 2019",
  //   description:
  //     "Delivered 15+ client projects ranging from landing pages to e-commerce stores while completing my CS degree.",
  // },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <Reveal className="text-center mb-14">
          <p className="text-sm font-mono text-primary-glow mb-3">// experience</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Career <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            One years of shipping products across startups and growing teams.
          </p>
        </Reveal>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent md:-translate-x-px" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <Reveal
                key={exp.role}
                delay={i * 120}
                className={`relative md:grid md:grid-cols-2 md:gap-10 ${
                  i % 2 === 0 ? "" : "md:[&>*:first-child]:col-start-2"
                }`}
              >
                <div className="absolute left-4 md:left-1/2 top-6 -translate-x-1/2 h-3 w-3 rounded-full bg-primary-glow ring-4 ring-background shadow-glow animate-pulse-slow" />

                <div className={`pl-12 md:pl-0 ${i % 2 === 0 ? "md:pr-10 md:text-right" : "md:pl-10 md:col-start-2"}`}>
                  <div className="hover-lift p-6 rounded-2xl border border-border bg-card hover:border-primary-glow/50 transition-smooth">
                    <div className={`flex items-center gap-2 mb-2 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                      <Briefcase className="h-4 w-4 text-primary-glow" />
                      <span className="text-xs font-mono text-muted-foreground">{exp.period}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-1">{exp.role}</h3>
                    <p className="text-primary-glow font-medium mb-3">{exp.company}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
