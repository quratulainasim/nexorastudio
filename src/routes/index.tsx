import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { HangingSign } from "@/components/site/HangingSign";
import { AutoSlider } from "@/components/site/AutoSlider";
import { Typewriter } from "@/components/ui/Typewriter";
import { services, projects, customers } from "@/components/site/data";
import { ArrowRight, ArrowUpRight, CheckCircle2, Quote, Star } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nexora Studio — Modern UX/UI, Full-Stack & AI Solutions" },
      { name: "description", content: "We design websites, build full-stack platforms, craft AI chatbots and automate your business." },
      { property: "og:title", content: "Nexora Studio" },
      { property: "og:description", content: "Modern websites, AI chatbots, full-stack & AI automation." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <img
          src={heroBg}
          alt=""
          aria-hidden
          width={1536}
          height={1024}
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="relative mx-auto max-w-7xl px-6 pt-12 pb-28 text-center">
          <div className="animate-hanging origin-top">
            <HangingSign text="Open for Projects" />
          </div>

          <div className="mx-auto mt-16 max-w-4xl font-display text-5xl font-bold leading-tight md:text-7xl">
            <Typewriter text="Crafting digital experiences" speed={70} className="text-gradient" />
            <br />
            <span className="animate-fade-up" style={{ animationDelay: "2.5s", animationFillMode: "both" }}>
              that scale your business.
            </span>
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground animate-fade-up">
            UX/UI design, full-stack websites, AI chatbots and intelligent automation —
            all under one roof.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 font-medium text-primary-foreground shadow-glow transition hover:opacity-90"
            >
              Start your project
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </Link>
            <Link
              to="/projects"
              className="rounded-full border border-border bg-card/40 px-6 py-3 font-medium backdrop-blur transition hover:border-primary"
            >
              View our work
            </Link>
          </div>

          {/* stat strip */}
          <div className="mx-auto mt-16 grid max-w-3xl grid-cols-3 gap-6 glass rounded-2xl p-6">
            {[
              { v: "50+", l: "Projects shipped" },
              { v: "98%", l: "Client satisfaction" },
              { v: "24/7", l: "AI agents live" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-3xl font-bold text-gradient">{s.v}</div>
                <div className="mt-1 text-xs text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeading eyebrow="What we do" title="Services that drive growth" />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, description, points }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-card transition hover:-translate-y-1 hover:border-primary"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-brand opacity-0 blur-2xl transition group-hover:opacity-30" />
              <div className="relative">
                <div className="mb-4 inline-grid h-12 w-12 place-items-center rounded-xl bg-gradient-brand shadow-glow">
                  <Icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{description}</p>
                <ul className="mt-4 space-y-1.5">
                  {points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 text-primary" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS SLIDER — one card, slides from right */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="Selected work" title="Projects in motion" />
        </div>
        <div className="mt-12 px-6">
          <AutoSlider
            items={projects as unknown as unknown[]}
            interval={3500}
            direction="left"
            renderItem={(p: any) => <ProjectSlide {...p} />}
          />
        </div>
      </section>



      {/* TESTIMONIALS PREVIEW */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeading eyebrow="Customer stories" title="Real results, real customers" />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {customers.map((c) => (
            <article
              key={c.name}
              className="relative overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-card"
            >
              <Quote className="absolute right-6 top-6 h-10 w-10 text-primary/20" />
              <div className="flex items-center gap-4">
                <img
                  src={c.image}
                  alt={c.name}
                  width={64}
                  height={64}
                  loading="lazy"
                  className="h-16 w-16 rounded-full border-2 border-primary/40 object-cover"
                />
                <div>
                  <h4 className="font-semibold">{c.name}</h4>
                  <p className="text-xs text-muted-foreground">{c.role}</p>
                </div>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">"{c.quote}"</p>
              <div className="mt-5 flex items-center justify-between">
                <span className="rounded-full bg-secondary px-3 py-1 text-xs">{c.product}</span>
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-brand p-12 text-center shadow-glow">
          <div className="absolute inset-0 grid-pattern opacity-20" />
          <h2 className="relative font-display text-4xl font-bold text-primary-foreground md:text-5xl animate-font-movement">
            Ready to build something extraordinary?
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-primary-foreground/80">
            Let's chat about your project and craft a solution that delivers real results.
          </p>
          <Link
            to="/contact"
            className="relative mt-8 inline-flex items-center gap-2 rounded-full bg-background px-7 py-3 font-medium text-foreground transition hover:opacity-90"
          >
            Get in touch <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="text-center">
      <span className="rounded-full border border-border bg-card/60 px-3 py-1 text-xs uppercase tracking-widest text-muted-foreground">
        {eyebrow}
      </span>
      <h2 className="mt-4 font-display text-4xl font-bold md:text-5xl">{title}</h2>
    </div>
  );
}

function ProjectSlide({
  title,
  tag,
  color,
  image,
  url,
}: {
  title: string;
  tag: string;
  color: string;
  image: string;
  url?: string;
}) {
  return (
    <a href={url || "#"} target="_blank" rel="noopener noreferrer" className="group mx-auto h-80 w-full max-w-3xl overflow-hidden rounded-2xl border border-border bg-card p-1 shadow-card transition hover:border-primary md:h-[26rem] block">
      <div className={`relative h-full w-full overflow-hidden rounded-xl bg-gradient-to-br ${color}`}>
        <img
          src={image}
          alt={title}
          width={768}
          height={512}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover opacity-80 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="relative flex h-full flex-col justify-between p-5 text-white">
          <div className="flex justify-end w-full">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-black/40 backdrop-blur transition-transform group-hover:scale-110 group-hover:bg-primary text-white">
              <ArrowUpRight className="h-5 w-5" />
            </span>
          </div>
          <div>
            <h4 className="text-2xl font-bold">{title}</h4>
            <p className="mt-1 text-sm opacity-90">View project details</p>
          </div>
        </div>
      </div>
    </a>
  );
}

