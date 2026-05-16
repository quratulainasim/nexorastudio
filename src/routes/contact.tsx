import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import {
  Github, Instagram, Linkedin, Twitter, Mail, MapPin, Phone, Send,
} from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Nexora Studio" },
      { name: "description", content: "Get in touch with Nexora Studio. Connect on social media or send us a project brief." },
      { property: "og:title", content: "Contact — Nexora Studio" },
      { property: "og:description", content: "Let's build something great together." },
    ],
  }),
  component: ContactPage,
});

const socials = [
  { Icon: Twitter, label: "Twitter / X", handle: "@asim_qurat", href: "https://x.com/asim_qurat" },
  { Icon: Instagram, label: "Instagram", handle: "@quratulainasim1234", href: "https://www.instagram.com/quratulainasim1234/" },
  { Icon: Linkedin, label: "LinkedIn", handle: "Quratulain Asim", href: "https://www.linkedin.com/in/quratulain-asim/" },
  { Icon: Github, label: "GitHub", handle: "nexora-studio", href: "https://github.com" },
];

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <div className="min-h-screen">
      <Header />

      <section className="mx-auto max-w-7xl px-6 pt-20 pb-12 text-center">
        <span className="rounded-full border border-border bg-card/60 px-3 py-1 text-xs uppercase tracking-widest text-muted-foreground">
          Contact
        </span>
        <h1 className="mt-4 font-display text-5xl font-bold md:text-6xl">
          Let's build <span className="text-gradient">something great</span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
          Reach out via the form or connect with us on your favorite platform.
        </p>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 pb-24 lg:grid-cols-5">
        {/* Form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="lg:col-span-3 rounded-3xl border border-border bg-card p-8 shadow-card"
        >
          <h2 className="font-display text-2xl font-semibold">Send a message</h2>
          <p className="mt-1 text-sm text-muted-foreground">We reply within 24 hours.</p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <Field label="Name" type="text" placeholder="Jane Doe" />
            <Field label="Email" type="email" placeholder="jane@company.com" />
          </div>
          <div className="mt-4">
            <Field label="Subject" type="text" placeholder="Project inquiry" />
          </div>
          <div className="mt-4">
            <label className="text-sm font-medium">Message</label>
            <textarea
              required
              rows={5}
              placeholder="Tell us about your project..."
              className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
            />
          </div>
          <button
            type="submit"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 font-medium text-primary-foreground shadow-glow transition hover:opacity-90"
          >
            {sent ? "Sent ✓" : "Send message"} <Send className="h-4 w-4" />
          </button>
        </form>

        {/* Info + socials */}
        <div className="lg:col-span-2 space-y-6">
          <div className="rounded-3xl border border-border bg-card p-8 shadow-card">
            <h3 className="font-display text-xl font-semibold">Reach us directly</h3>
            <ul className="mt-5 space-y-4 text-sm">
              <InfoRow Icon={Mail} label="Email" value="nexorastudio@gmail.com" />
              <InfoRow Icon={Phone} label="Phone" value="+92 313 2143271" />
              <InfoRow Icon={MapPin} label="Location" value="Remote · Worldwide" />
            </ul>
          </div>

          <div className="rounded-3xl border border-border bg-card p-8 shadow-card">
            <h3 className="font-display text-xl font-semibold">Follow us</h3>
            <p className="mt-1 text-sm text-muted-foreground">Stay in the loop on socials.</p>
            <ul className="mt-5 grid gap-3">
              {socials.map(({ Icon, label, handle, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-4 rounded-xl border border-border bg-background/40 p-3 transition hover:border-primary"
                  >
                    <span className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-brand text-primary-foreground shadow-glow">
                      <Icon className="h-4 w-4" />
                    </span>
                    <div className="flex-1">
                      <div className="text-sm font-medium">{label}</div>
                      <div className="text-xs text-muted-foreground">{handle}</div>
                    </div>
                    <span className="text-muted-foreground transition group-hover:text-primary">→</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function Field({ label, ...rest }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="text-sm font-medium">{label}</span>
      <input
        required
        {...rest}
        className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
      />
    </label>
  );
}

function InfoRow({ Icon, label, value }: { Icon: React.ComponentType<{ className?: string }>; label: string; value: string }) {
  return (
    <li className="flex items-center gap-3">
      <span className="grid h-9 w-9 place-items-center rounded-lg border border-border bg-background">
        <Icon className="h-4 w-4 text-primary" />
      </span>
      <div>
        <div className="text-xs text-muted-foreground">{label}</div>
        <div className="font-medium">{value}</div>
      </div>
    </li>
  );
}
