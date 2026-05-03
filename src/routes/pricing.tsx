import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Check } from "lucide-react";

export const Route = createFileRoute("/pricing")({
  component: PricingPage,
  head: () => ({
    meta: [
      { title: "Pricing — Nexora Studio" },
      { name: "description", content: "Flexible pricing plans for software development, AI solutions, and business automation." },
    ]
  }),
});

const plans = [
  {
    name: "Starter AI",
    price: "$999",
    description: "Perfect for small businesses looking to adopt AI and automation.",
    features: [
      "Custom AI Chatbot (Basic)",
      "Lead Capture Integration",
      "Standard Workflow Automation",
      "Email Support",
    ],
  },
  {
    name: "Pro Business",
    price: "$2,499",
    description: "Comprehensive solutions for growing companies needing intelligent systems.",
    features: [
      "Advanced AI Employee Agent",
      "Full-Stack Web App Integration",
      "Complex Multi-step Automations",
      "CRM & API Integrations",
      "Priority 24/7 Support",
    ],
    isPopular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Tailored AI and software architecture for large-scale operations.",
    features: [
      "Multiple Autonomous AI Agents",
      "Custom Machine Learning Models",
      "Dedicated Cloud Infrastructure",
      "Full System Audit & Consulting",
      "Dedicated Account Manager",
    ],
  },
];

function PricingPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <section className="mx-auto max-w-7xl px-6 pt-20 pb-12 text-center">
        <span className="rounded-full border border-border bg-card/60 px-3 py-1 text-xs uppercase tracking-widest text-muted-foreground animate-font-movement">
          Pricing Plans
        </span>
        <h1 className="mt-4 font-display text-5xl font-bold md:text-6xl animate-font-movement">
          Invest in <span className="text-gradient">Intelligent Growth</span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
          Choose a plan that fits your business needs. Scale effortlessly with our AI and software solutions.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col overflow-hidden rounded-3xl border bg-card p-8 shadow-card transition-transform hover:-translate-y-2 ${
                plan.isPopular ? "border-primary neon-border" : "border-border"
              }`}
            >
              {plan.isPopular && (
                <div className="absolute right-0 top-0 rounded-bl-xl bg-gradient-brand px-4 py-1 text-xs font-bold text-primary-foreground shadow-glow">
                  MOST POPULAR
                </div>
              )}
              <h3 className="font-display text-2xl font-semibold">{plan.name}</h3>
              <div className="mt-4 flex items-baseline text-5xl font-bold">
                {plan.price}
                {plan.price !== "Custom" && <span className="ml-1 text-xl font-medium text-muted-foreground">/mo</span>}
              </div>
              <p className="mt-4 text-sm text-muted-foreground">{plan.description}</p>
              
              <ul className="mt-8 flex-1 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Link
                to="/contact"
                className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-6 py-3 font-medium transition-all ${
                  plan.isPopular
                    ? "bg-gradient-brand text-primary-foreground shadow-glow hover:opacity-90"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                Get Started
              </Link>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
