import { ArrowUpRight, FolderGit2 } from "lucide-react";
import { useState } from "react";
import { Reveal } from "./Reveal";

interface Project {
  title: string;
  subtitle?: string;
  category: "personal" | "office";
  badge: string;
  description: string;
  highlights?: string[];
  tags: string[];
  href: string;
}

const projects: Project[] = [
  {
    title: "APN Approval Portal",
    subtitle: "Mobitel (Pvt) Ltd • Intern Software Engineer | 2025–2026",
    category: "office",
    badge: "Enterprise Portal",
    description:
      "A multi-module enterprise portal developed for APN creation, approval, status tracking, reporting, and termination, integrated with multi-level approval workflows.",
    highlights: [
      "Developed a multi-module enterprise portal using React.js and Spring Boot for APN creation, approval, status tracking, reporting, and termination.",
      "Integrated REST APIs with MySQL and Informix to support multi-level approval workflows and business operations.",
    ],
    tags: ["React.js", "Spring Boot", "REST APIs", "MySQL", "Informix", "Bitbucket"],
    href: "#",
  },
  {
    title: "mDass Module",
    subtitle: "Mobitel (Pvt) Ltd • Intern Software Engineer | 2025–2026",
    category: "office",
    badge: "Telecom Module",
    description:
      "Full-stack telecom features including Account Status, NIC Validation, Location Update, Retention Period, and Transaction Reports with PDF report generation.",
    highlights: [
      "Developed full-stack features using React.js and Spring Boot, including Account Status, NIC Validation, Location Update, Retention Period, and Transaction Reports.",
      "Developed REST APIs and database integrations, including transaction details and PDF report generation.",
    ],
    tags: ["React.js", "Spring Boot", "REST APIs", "Informix", "Oracle", "Bitbucket"],
    href: "#",
  },
  {
    title: "Call Centre IVR Modernization – API Development",
    subtitle: "Mobitel (Pvt) Ltd • Intern Software Engineer | 2025–2026",
    category: "office",
    badge: "IVR Modernization",
    description:
      "Spring Boot REST APIs to support customer, subscriber, service, account, call, and billing information retrieval with IVR system integration.",
    highlights: [
      "Developed Spring Boot REST APIs to support customer, subscriber, service, account, call, and billing information retrieval.",
      "Integrated APIs with Informix and implemented JSON-based data exchange for IVR system integration.",
    ],
    tags: ["Java", "Spring Boot", "REST APIs", "Informix", "JSON"],
    href: "#",
  },
  {
    title: "Car Rental Management System",
    category: "personal",
    badge: "Full-Stack System",
    description:
      "A comprehensive car rental system built with React.js, Spring Boot, JWT, Hibernate ORM, and MySQL for managing cars, customers, bookings, and reservations with secure authentication and efficient data handling.",
    tags: ["React.js", "Spring Boot", "JWT", "Hibernate", "MySQL"],
    href: "#",
  },
  {
    title: "Crop Monitoring System",
    category: "personal",
    badge: "Desktop & Web",
    description:
      "A desktop application for managing crops, fields, equipment, staff, and vehicles using React, TypeScript, Node.js, JWT, MongoDB, and Prisma for efficient database management and seamless interactions.",
    tags: ["React", "TypeScript", "Node.js", "MongoDB", "Prisma", "JWT"],
    href: "#",
  },
  {
    title: "Music Player App",
    category: "personal",
    badge: "Mobile App",
    description:
      "A mobile music player app built using React Native (Expo), Node.js, MySQL, and Prisma to play songs, add favorites, search, and manage user music libraries seamlessly.",
    tags: ["React Native", "Expo", "Node.js", "MySQL", "Prisma"],
    href: "#",
  },
  {
    title: "Voice Assistance",
    category: "personal",
    badge: "Python & Automation",
    description:
      "A hands-free voice assistant developed in Python that processes voice commands, searches for information, finds YouTube videos, and provides automated responses via Wikipedia.",
    tags: ["Python", "Speech Recognition", "Automation", "APIs"],
    href: "#",
  },
  {
    title: "Medi Flow (Health Management System)",
    subtitle: "Circle Edge Competition 2024",
    category: "personal",
    badge: "Competition Group Project",
    description:
      "Developed for the Circle Edge Competition 2024, Medi Flow is a health management system enabling secure storage, retrieval, and sharing of patient records. Built with Spring Boot, MySQL, HTML, JavaScript, and Bootstrap CSS.",
    tags: ["Spring Boot", "MySQL", "JavaScript", "Bootstrap CSS"],
    href: "#",
  },
  {
    title: "2D Platformer Game",
    category: "personal",
    badge: "Game Development",
    description:
      "A side-scrolling 2D platformer game built using HTML, CSS, and modern JavaScript featuring responsive controls, collision physics, and smooth gameplay mechanics.",
    tags: ["HTML5 Canvas", "JavaScript", "CSS3", "Game Physics"],
    href: "#",
  },
];

export function Projects() {
  const [activeTab, setActiveTab] = useState<"all" | "personal" | "office">("all");

  const filteredProjects =
    activeTab === "all" ? projects : projects.filter((p) => p.category === activeTab);

  return (
    <section id="projects" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center mb-10">
          <p className="text-sm font-mono text-primary-glow mb-3">// selected work</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A showcase of enterprise solutions, personal applications, and competition systems I have built.
          </p>
        </Reveal>

        {/* Tab Filters */}
        <div className="flex items-center justify-center gap-2 mb-12">
          {[
            { id: "all", label: "All Projects" },
            { id: "personal", label: "Personal Projects" },
            { id: "office", label: "Office / Work Projects" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={`px-4 py-2 rounded-full text-xs font-mono transition-smooth border ${
                activeTab === tab.id
                  ? "bg-primary text-primary-foreground border-primary shadow-sm"
                  : "bg-card text-muted-foreground border-border hover:border-primary-glow/40 hover:text-foreground"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 p-8 rounded-2xl border border-dashed border-border bg-card/50 max-w-md mx-auto">
            <FolderGit2 className="h-10 w-10 text-muted-foreground mx-auto mb-3 opacity-60" />
            <h4 className="font-semibold mb-1">Office projects coming soon</h4>
            <p className="text-xs text-muted-foreground">
              Production projects will be featured here once added.
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {filteredProjects.map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <a
                  href={p.href}
                  className="hover-lift group relative block p-8 rounded-2xl border border-border bg-card hover:border-primary-glow/50 transition-smooth h-full flex flex-col justify-between"
                >
                  <div>
                    {/* Top badge row */}
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <span className="px-2.5 py-1 text-[11px] font-mono rounded-full bg-primary/10 text-primary-glow border border-primary-glow/20">
                        {p.badge}
                      </span>
                      <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary-glow group-hover:-translate-y-1 group-hover:translate-x-1 transition-smooth shrink-0" />
                    </div>

                    <h3 className="text-2xl font-semibold mb-1 group-hover:gradient-text transition-smooth">
                      {p.title}
                    </h3>

                    {p.subtitle && (
                      <p className="text-xs font-mono text-primary-glow/90 mb-3">
                        {p.subtitle}
                      </p>
                    )}

                    {p.highlights && p.highlights.length > 0 ? (
                      <ul className="mb-6 space-y-2 text-sm text-muted-foreground leading-relaxed">
                        {p.highlights.map((h, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary-glow/70 shrink-0 mt-2" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                        {p.description}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-border/40">
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
        )}
      </div>
    </section>
  );
}
