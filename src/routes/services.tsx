import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { services } from "@/components/site/data";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Nexora Studio" },
      { name: "description", content: "UX/UI design, AI chatbots, full-stack websites and AI automation services." },
      { property: "og:title", content: "Services — Nexora Studio" },
      { property: "og:description", content: "Everything you need to launch and scale a modern digital business." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <section className="mx-auto max-w-7xl px-6 pt-20 pb-12 text-center">
        <span className="rounded-full border border-border bg-card/60 px-3 py-1 text-xs uppercase tracking-widest text-muted-foreground">
          Our services
        </span>
        <h1 className="mt-4 font-display text-5xl font-bold md:text-6xl">
          Everything you need to <span className="text-gradient">grow online</span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
          From idea to launch and beyond — we handle the design, the code, and the AI.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-6 md:grid-cols-2">
          {services.map(({ icon: Icon, title, description, points }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-card transition hover:-translate-y-1 hover:border-primary"
            >
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-brand opacity-10 blur-2xl transition group-hover:opacity-25" />
              <div className="relative flex items-start gap-5">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-brand shadow-glow">
                  <Icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold">{title}</h3>
                  <p className="mt-2 text-muted-foreground">{description}</p>
                  <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                    {points.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-7 py-3 font-medium text-primary-foreground shadow-glow transition hover:opacity-90"
          >
            Discuss your project <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
