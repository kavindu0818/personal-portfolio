import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      <div
        className="absolute inset-0 -z-10 opacity-60 dark:opacity-100"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/40 via-background/60 to-background" />

      {/* Ambient animated blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -left-24 h-80 w-80 rounded-full bg-primary/30 animate-blob -z-10"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-primary-glow/25 animate-blob -z-10"
        style={{ animationDelay: "-4s" }}
      />

      <div className="max-w-4xl mx-auto px-6 text-center">
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-card/50 backdrop-blur text-xs font-medium text-muted-foreground mb-8 animate-fade-in"
          style={{ animationDelay: "0.1s" }}
        >
          <span className="h-2 w-2 rounded-full bg-primary-glow animate-pulse" />
          Available for new projects
        </div>

        <h1
          className="font-display text-5xl md:text-7xl font-bold leading-[1.05] mb-6 animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          Hi, I'm <span className="gradient-text animate-gradient-shift">Kavindu Wijerathna</span>
          <br />
          Full-Stack Developer
        </h1>

        <p
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          I craft fast, accessible, and beautifully designed web experiences with modern
          technologies — turning ideas into polished, production-ready products.
        </p>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in-up"
          style={{ animationDelay: "0.6s" }}
        >
          <a
            href="#projects"
            className="btn-shine group inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium shadow-elegant hover:shadow-glow transition-smooth"
          >
            View my work
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-smooth" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border bg-card hover:bg-accent font-medium transition-smooth hover:-translate-y-0.5"
          >
            Get in touch
          </a>
          <a
            href="/alex-carter-cv.pdf"
            download
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border bg-card hover:bg-accent font-medium transition-smooth hover:-translate-y-0.5"
          >
            <Download className="h-4 w-4 group-hover:translate-y-0.5 transition-smooth" />
            Download CV
          </a>
        </div>

        <div
          className="flex items-center justify-center gap-4 animate-fade-in-up"
          style={{ animationDelay: "0.8s" }}
        >
          {[
            { Icon: Github, href: "https://github.com", label: "GitHub" },
            { Icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
            { Icon: Mail, href: "mailto:hello@example.com", label: "Email" },
          ].map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="p-3 rounded-lg border border-border bg-card/50 backdrop-blur hover:bg-accent hover:scale-110 hover:-translate-y-0.5 transition-smooth"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
