import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Marquee } from "@/components/site/Marquee";
import { projects } from "@/components/site/data";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Nexora Studio" },
      { name: "description", content: "Selected client projects: full-stack apps, AI chatbots, dashboards and automations." },
      { property: "og:title", content: "Projects — Nexora Studio" },
      { property: "og:description", content: "A look at the work we've shipped recently." },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <section className="mx-auto max-w-7xl px-6 pt-20 pb-12 text-center">
        <span className="rounded-full border border-border bg-card/60 px-3 py-1 text-xs uppercase tracking-widest text-muted-foreground">
          Our work
        </span>
        <h1 className="mt-4 font-display text-5xl font-bold md:text-6xl">
          Projects <span className="text-gradient">in motion</span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
          A selection of recent products, platforms and AI systems we've crafted.
        </p>
      </section>



      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative h-72 overflow-hidden rounded-2xl border border-border bg-card p-1 shadow-card transition hover:-translate-y-1 block"
            >
              <div className={`relative h-full w-full overflow-hidden rounded-xl bg-gradient-to-br ${p.color}`}>
                <img
                  src={p.image}
                  alt={p.title}
                  width={768}
                  height={512}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover opacity-80 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="relative flex h-full flex-col justify-between p-6 text-white">
                  <div className="flex justify-end w-full">
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-black/40 backdrop-blur transition-transform group-hover:scale-110 group-hover:bg-primary text-white">
                      <ArrowUpRight className="h-5 w-5" />
                    </span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{p.title}</h3>
                    <p className="mt-1 text-sm opacity-90">View project details</p>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

function ProjectCard({
  title,
  tag,
  color,
  image,
}: {
  title: string;
  tag: string;
  color: string;
  image: string;
}) {
  return (
    <div className="group h-64 w-[22rem] shrink-0 overflow-hidden rounded-2xl border border-border bg-card p-1 shadow-card transition hover:-translate-y-1 hover:border-primary">
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
          <span className="w-fit rounded-full bg-black/40 px-3 py-1 text-xs backdrop-blur">{tag}</span>
          <div>
            <h4 className="text-2xl font-bold">{title}</h4>
            <p className="mt-1 text-sm opacity-90">View case study →</p>
          </div>
        </div>
      </div>
    </div>
  );
}
