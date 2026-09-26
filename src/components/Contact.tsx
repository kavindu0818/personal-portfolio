import { useState, type FormEvent } from "react";
import { Github, Linkedin, Mail, MapPin, Send, Twitter } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";
import { Reveal } from "./Reveal";


const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  subject: z.string().trim().min(1, "Subject is required").max(150),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(2000),
});

const RECIPIENT = "hello@example.com";

export function Contact() {
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      subject: (form.elements.namedItem("subject") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      parsed.error.issues.forEach((issue) => {
        const key = issue.path[0] as string;
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      });
      setErrors(fieldErrors);
      setSubmitting(false);
      toast.error("Please fix the form errors");
      return;
    }

    setErrors({});
    const body = `Hi Alex,\n\n${parsed.data.message}\n\n— ${parsed.data.name}\n${parsed.data.email}`;
    const mailto = `mailto:${RECIPIENT}?subject=${encodeURIComponent(
      parsed.data.subject,
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    toast.success("Opening your email client…");
    form.reset();
    setSubmitting(false);
  };

  return (
    <section id="contact" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center mb-14">
          <p className="text-sm font-mono text-primary-glow mb-3">// contact</p>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Let's build something <span className="gradient-text">great together</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Have a project in mind, or just want to say hi? Send me a message and I'll do my best
            to get back to you within a day.
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-8">
          {/* Info card */}
          <Reveal className="p-8 rounded-2xl border border-border bg-card space-y-6 h-fit hover-lift">
            <div>
              <h3 className="text-xl font-semibold mb-2">Contact info</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Open to freelance projects, full-time roles, and interesting collaborations.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary-glow flex items-center justify-center shrink-0">
                  <Mail className="h-4 w-4" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-mono text-muted-foreground">Email</p>
                  <a
                    href={`mailto:${RECIPIENT}`}
                    className="text-sm font-medium hover:text-primary-glow transition-smooth break-all"
                  >
                    {RECIPIENT}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary-glow flex items-center justify-center shrink-0">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs font-mono text-muted-foreground">Based in</p>
                  <p className="text-sm font-medium">Remote — Worldwide</p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-border">
              <p className="text-xs font-mono text-muted-foreground mb-3">Find me on</p>
              <div className="flex gap-2">
                {[
                  { Icon: Github, href: "https://github.com", label: "GitHub" },
                  { Icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                  { Icon: Twitter, href: "https://twitter.com", label: "Twitter" },
                ].map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="p-2.5 rounded-lg border border-border bg-background hover:bg-accent transition-smooth"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={120}>
            <form
              onSubmit={handleSubmit}
              noValidate
              className="p-8 rounded-2xl border border-border bg-card space-y-5 hover-lift"
            >
            <div className="grid sm:grid-cols-2 gap-5">
              <Field name="name" label="Your name" placeholder="Jane Doe" error={errors.name} />
              <Field
                name="email"
                label="Email address"
                type="email"
                placeholder="jane@company.com"
                error={errors.email}
              />
            </div>

            <Field
              name="subject"
              label="Subject"
              placeholder="Project inquiry"
              error={errors.subject}
            />

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                maxLength={2000}
                placeholder="Tell me a bit about your project, timeline, and goals…"
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary-glow focus:ring-2 focus:ring-primary-glow/20 transition-smooth resize-none"
              />
              {errors.message && (
                <p className="mt-1.5 text-xs text-destructive">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="group w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium shadow-elegant hover:shadow-glow disabled:opacity-60 transition-smooth"
            >
              <Send className="h-4 w-4 group-hover:translate-x-0.5 transition-smooth" />
              {submitting ? "Sending…" : "Send message"}
            </button>

            <p className="text-xs text-muted-foreground text-center">
              Your message will open in your default email app — no data is stored.
            </p>
          </form>
          </Reveal>
        </div>

        <footer className="mt-24 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Alex Carter. Crafted with care.
        </footer>
      </div>
    </section>
  );
}

function Field({
  name,
  label,
  type = "text",
  placeholder,
  error,
}: {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  error?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium mb-2">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        maxLength={255}
        className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary-glow focus:ring-2 focus:ring-primary-glow/20 transition-smooth"
      />
      {error && <p className="mt-1.5 text-xs text-destructive">{error}</p>}
    </div>
  );
}
