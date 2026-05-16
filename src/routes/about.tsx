import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import pib from "@/assets/pib.jpg";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About Us — Nexora Studio" },
      { name: "description", content: "Learn more about the team behind Nexora Studio." },
    ]
  }),
});

function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="mx-auto max-w-7xl px-6 pt-20 pb-12 text-center">
        <span className="rounded-full border border-border bg-card/60 px-3 py-1 text-xs uppercase tracking-widest text-muted-foreground animate-font-movement">
          About Us
        </span>
        <h1 className="mt-4 font-display text-5xl font-bold md:text-6xl animate-font-movement">
          About <span className="text-gradient">Nexora Studio</span>
        </h1>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-24">
        {/* Landscape Image - Modern & Clean Presentation */}
        <div className="relative w-full aspect-[21/9] md:aspect-[16/7] overflow-hidden rounded-3xl border border-border shadow-2xl mb-12 group">
          <img 
            src={pib} 
            alt="Nexora Studio — Software House" 
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Subtle overlay for better blending */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-80" />
          <div className="absolute inset-0 bg-gradient-brand opacity-10 mix-blend-overlay" />
        </div>

        {/* Text Description Container */}
        <div className="rounded-3xl border border-border bg-card p-8 md:p-12 shadow-card">
          <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-12">
            
            {/* Title Section (Left on Desktop) */}
            <div className="md:w-1/3 shrink-0">
              <h2 className="font-display text-4xl font-bold text-foreground">
                Nexora Studio
              </h2>
              <h3 className="mt-2 text-lg font-medium text-primary">
                Software House & AI Solutions
              </h3>
              
              {/* Highlights Moved under title for better layout balance */}
              <div className="mt-6 flex flex-wrap gap-2">
                {["AI & Automation", "Cloud & DevOps", "Full-Stack Dev", "UX / UI Design"].map((badge) => (
                  <span key={badge} className="rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            {/* Description Section (Right on Desktop) */}
            <div className="md:w-2/3">
              <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
                <p>
                  Nexora Studio is a next-generation software house specializing in cutting-edge web development, artificial intelligence, and cloud-powered solutions. We help startups and enterprises build, scale, and automate their digital products.
                </p>
                <p>
                  From bespoke full-stack applications and intelligent AI agents to Docker & Kubernetes-powered cloud infrastructure, our expert team delivers end-to-end solutions that are fast, reliable, and built for the future.
                </p>
                <p>
                  Founded on the belief that technology should empower every business, Nexora Studio partners with clients across industries to transform their vision into impactful digital experiences — on time, on budget, and beyond expectations.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
