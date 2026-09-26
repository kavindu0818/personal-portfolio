import avatar from "@/assets/aboutme_image.png";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-[320px_1fr] gap-12 items-center">
        <Reveal className="relative mx-auto">
          {/* Ambient background glow */}
          <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-primary/40 to-primary-glow/40 blur-2xl opacity-60 animate-pulse-slow" />

          {/* Styled portrait frame matching portfolio theme */}
          <div className="relative w-[280px] sm:w-[320px] h-[380px] rounded-3xl p-3 bg-gradient-to-b from-card via-card/90 to-background border border-border/80 shadow-elegant overflow-hidden flex flex-col justify-end group">
            <div className="absolute inset-0 bg-radial from-primary-glow/15 via-transparent to-transparent pointer-events-none" />
            <img
              src={avatar}
              alt="Portrait of Kavindu Wijerathna"
              width={320}
              height={380}
              loading="lazy"
              className="relative z-10 w-full h-full object-contain object-bottom transition-smooth group-hover:scale-105"
            />
          </div>
        </Reveal>
        <Reveal delay={150}>
          <p className="text-sm font-mono text-primary-glow mb-3">// about me</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Building thoughtful <span className="gradient-text">digital products</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            I'm a full-stack developer with 1+ years of experience designing and shipping web
            applications. I love working at the intersection of clean code and delightful UI —
            bridging engineering rigor with design sensibility.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Outside of work, I contribute to open source, write about software craft, and explore
            new tooling that helps teams move faster without breaking things.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
