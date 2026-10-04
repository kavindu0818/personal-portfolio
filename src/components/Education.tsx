import { Award, BookOpen, Calendar, GraduationCap, MapPin } from "lucide-react";
import { Reveal } from "./Reveal";

interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  location: string;
  status?: string;
  description: string;
  achievements?: string[];
  coursework?: string[];
}

const educationList: EducationItem[] = [
  {
    degree: "BSc (Hons) Computer Science (Software Engineering)",
    institution: "University of Wolverhampton UK",
    period: "2022 — 2026",
    location: "Colombo, Sri Lanka",
    status: "Undergraduate • Final Year",
    description:
      "Reading for a BSc (Hons) in Computer Science specializing in Software Engineering. Focused on advanced software design, distributed architectures, intelligent systems, data structures, and industry-standard research methodologies.",
    coursework: [
      "Advanced Software Engineering",
      "Distributed & Cloud Systems",
      "Data Structures & Algorithms",
      "Database Systems & Big Data",
      "Cybersecurity & Secure Systems",
      "Research Methods & Dissertation",
    ],
  },
  {
    degree: "Higher Diploma in Software Engineering",
    institution: "Institute of Software Engineering - IJSE",
    period: "2023 — 2025",
    location: "Colombo, Sri Lanka",
    status: "Successfully Completed",
    description:
      "Intensive hands-on professional software engineering curriculum focused on enterprise application development, layered architecture, OOP principles, RESTful microservices, and modern frontend/backend integration.",
    coursework: [
      "Enterprise Java & Spring Boot",
      "Layered Architecture & MVC",
      "Object-Oriented Programming (OOP)",
      "Full-Stack Web Development",
      "Advanced DBMS & SQL",
      "RESTful API Development & Testing",
    ],
  },
  {
    degree: "G.C.E. Advanced Level (Physical Science Stream)",
    institution: "Dambulla Central College",
    period: "2019 — 2021",
    location: "Sri Lanka",
    status: "Successfully Completed",
    description:
      "Completed secondary education in the Physical Science stream with an intensive focus on Combined Mathematics, Physics, and Chemistry, establishing strong quantitative, logical, and analytical foundations.",
    coursework: [
      "Combined Mathematics",
      "Physics",
      "Chemistry",
      "General English",
    ],
  },
];

export function Education() {
  return (
    <section id="education" className="py-24 px-6 bg-secondary/20">
      <div className="max-w-5xl mx-auto">
        <Reveal className="text-center mb-14">
          <p className="text-sm font-mono text-primary-glow mb-3">// education</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Academic <span className="gradient-text">Background</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            My academic journey, foundational qualifications, and continuous learning in technology.
          </p>
        </Reveal>

        <div className="grid gap-8">
          {educationList.map((item, index) => (
            <Reveal key={item.degree} delay={index * 120}>
              <div className="hover-lift p-8 rounded-2xl border border-border bg-card hover:border-primary-glow/50 transition-smooth">
                {/* Header row */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-5">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary-glow flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                      <GraduationCap className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-1">
                        {item.degree}
                      </h3>
                      <p className="text-lg font-medium text-primary-glow">
                        {item.institution}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap md:flex-col md:items-end gap-2 text-xs font-mono">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent text-accent-foreground border border-border/60">
                      <Calendar className="h-3.5 w-3.5 text-primary-glow" />
                      {item.period}
                    </span>
                    <span className="inline-flex items-center gap-1 text-muted-foreground px-1">
                      <MapPin className="h-3.5 w-3.5" />
                      {item.location}
                    </span>
                  </div>
                </div>

                {/* Status pill if present */}
                {item.status && (
                  <div className="mb-4">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-md bg-primary-glow/10 text-primary-glow border border-primary-glow/20">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary-glow animate-pulse" />
                      {item.status}
                    </span>
                  </div>
                )}

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Achievements / Highlights */}
                {item.achievements && item.achievements.length > 0 && (
                  <div className="mb-6 space-y-2">
                    <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                      <Award className="h-3.5 w-3.5 text-primary-glow" />
                      Key Highlights & Achievements
                    </p>
                    <ul className="space-y-1.5 pl-1">
                      {item.achievements.map((ach) => (
                        <li
                          key={ach}
                          className="text-sm text-foreground/90 flex items-start gap-2"
                        >
                          <span className="text-primary-glow mt-1 font-bold text-xs">▸</span>
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Relevant Coursework */}
                {item.coursework && item.coursework.length > 0 && (
                  <div className="pt-4 border-t border-border/60">
                    <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-1.5">
                      <BookOpen className="h-3.5 w-3.5 text-primary-glow" />
                      Key Coursework & Modules
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.coursework.map((course) => (
                        <span
                          key={course}
                          className="px-3 py-1 text-xs font-mono rounded-lg bg-secondary text-secondary-foreground border border-border/50 transition-smooth hover:border-primary-glow/40"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
