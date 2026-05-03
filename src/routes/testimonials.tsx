import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Marquee } from "@/components/site/Marquee";
import { customers } from "@/components/site/data";
import { Quote, Star } from "lucide-react";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Customers — Nexora Studio" },
      { name: "description", content: "What our customers say about working with Nexora Studio." },
      { property: "og:title", content: "Happy Customers — Nexora Studio" },
      { property: "og:description", content: "Real stories from teams we've helped grow." },
    ],
  }),
  component: TestimonialsPage,
});

function TestimonialsPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="mx-auto max-w-7xl px-6 pt-20 pb-12 text-center">
        <span className="rounded-full border border-border bg-card/60 px-3 py-1 text-xs uppercase tracking-widest text-muted-foreground">
          Happy customers
        </span>
        <h1 className="mt-4 font-display text-5xl font-bold md:text-6xl">
          Loved by founders & <span className="text-gradient">teams worldwide</span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
          Four of our recent partners share how Nexora helped them ship and scale.
        </p>
      </section>

      {/* Featured customer cards */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="grid gap-8 md:grid-cols-2">
          {customers.map((c) => (
            <article
              key={c.name}
              className="relative overflow-hidden rounded-3xl border border-border bg-card p-10 shadow-card"
            >
              <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-brand opacity-15 blur-2xl" />
              <Quote className="absolute right-6 top-6 h-12 w-12 text-primary/20" />
              <div className="relative flex items-center gap-5">
                <img
                  src={c.image}
                  alt={c.name}
                  width={80}
                  height={80}
                  loading="lazy"
                  className="h-20 w-20 rounded-full border-2 border-primary/40 object-cover"
                />
                <div>
                  <h2 className="text-xl font-semibold">{c.name}</h2>
                  <p className="text-sm text-muted-foreground">{c.role}</p>
                  <div className="mt-1 flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="relative mt-6 text-base leading-relaxed text-muted-foreground">
                "{c.quote}"
              </p>
              <div className="relative mt-6 inline-flex rounded-full bg-secondary px-4 py-1.5 text-xs">
                Bought: {c.product}
              </div>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
