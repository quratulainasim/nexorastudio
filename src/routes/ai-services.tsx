import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Bot, Workflow, Cpu, ArrowRight, Code2 } from "lucide-react";

export const Route = createFileRoute("/ai-services")({
  component: AIServicesPage,
  head: () => ({
    meta: [
      { title: "AI Services — Nexora Studio" },
      { name: "description", content: "Empower your business with cutting-edge AI Chatbots, AI Agents, and Intelligent Automation." },
    ]
  }),
});

const aiServices = [
  {
    icon: Bot,
    title: "AI Chatbot Development",
    description: "Custom AI-powered chatbots for customer support, sales, and lead generation. Smart, fast, and available 24/7 to serve your customers without human intervention.",
    features: ["Natural Language Processing", "Contextual Understanding", "Multi-platform Integration (Web, WhatsApp, Messenger)"],
  },
  {
    icon: Cpu,
    title: "AI Employee / AI Agents",
    description: "Autonomous AI agents that work like real employees — handling tasks, making decisions, and completing workflows independently so your business runs smarter and faster.",
    features: ["Autonomous Task Execution", "Complex Decision Making", "Continuous Learning & Adaptation"],
  },
  {
    icon: Workflow,
    title: "AI Automation & Integration",
    description: "Integrate AI into your existing systems and automate repetitive business processes — from data processing and reporting to email handling and workflow management.",
    features: ["End-to-end Workflow Automation", "Seamless CRM/ERP Integration", "Data Extraction & Processing"],
  },
  {
    icon: Code2,
    title: "Full-Stack Web App",
    description: "Custom, highly scalable full-stack web applications built with the latest technologies. We create robust platforms that integrate seamlessly with your AI solutions.",
    features: ["React & Next.js Architecture", "Database Design & Optimization", "API & Third-party Integrations"],
  },
];

function AIServicesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <section className="mx-auto max-w-7xl px-6 pt-20 pb-12 text-center">
        <span className="rounded-full border border-border bg-card/60 px-3 py-1 text-xs uppercase tracking-widest text-muted-foreground animate-font-movement">
          Intelligent Solutions
        </span>
        <h1 className="mt-4 font-display text-5xl font-bold md:text-6xl animate-font-movement">
          Transform Your Business with <span className="text-gradient">Agentic AI</span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
          We deliver cutting-edge software and Agentic AI solutions that drive real business growth and innovation.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-8 md:grid-cols-2">
          {aiServices.map((service, idx) => (
            <div
              key={service.title}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-card transition-all hover:-translate-y-2 hover:border-primary hover:shadow-neon"
            >
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-brand opacity-10 blur-2xl transition group-hover:opacity-30" />
              <div className="relative">
                <div className="mb-6 inline-grid h-16 w-16 place-items-center rounded-2xl bg-gradient-brand shadow-glow">
                  <service.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="mb-4 font-display text-2xl font-semibold text-foreground">{service.title}</h3>
                <p className="mb-6 leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <div className="mt-auto">
                  <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">Core Capabilities</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {feature}
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
            className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-8 py-4 font-medium text-primary-foreground shadow-glow transition hover:scale-105 hover:opacity-90"
          >
            Start Your AI Journey <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
