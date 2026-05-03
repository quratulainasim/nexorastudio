import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import mypic from "@/assets/mypic.jpg";

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
          Meet the <span className="text-gradient">Founder</span>
        </h1>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div className="overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-card md:p-12">
          <div className="flex flex-col items-center gap-10 md:flex-row md:items-start md:gap-16">
            
            {/* Image Container with Neon Glow */}
            <div className="group relative shrink-0">
              <div className="absolute -inset-4 rounded-full bg-gradient-brand opacity-20 blur-xl transition group-hover:opacity-40" />
              <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-primary/20 shadow-neon transition-transform duration-500 group-hover:scale-105">
                <img 
                  src={mypic} 
                  alt="Quratulain" 
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Text Content */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="font-display text-4xl font-bold text-foreground">
                Quratulain
              </h2>
              <h3 className="mt-2 text-lg font-medium text-primary">
                Founder & CEO
              </h3>
              
              <div className="mt-8 space-y-6 text-lg leading-relaxed text-muted-foreground">
                <p>
                  Passionate about building innovative software and AI solutions that help businesses grow in the digital era.
                </p>
                <p>
                  At Nexora Studio, we believe that technology should be an enabler, not a bottleneck. My mission is to bridge the gap between complex AI systems and practical business applications, ensuring our clients stay ahead of the curve.
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
