import { Link } from "@tanstack/react-router";
import { Github, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import { NeonHexLogo } from "./NeonHexLogo";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-card/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2.5">
            <NeonHexLogo size={28} />
            <h3 className="text-xl font-bold text-gradient">Nexora Studio</h3>
          </div>
          <p className="mt-3 max-w-sm text-sm text-muted-foreground">
            We design, build and automate digital products that move businesses forward.
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm text-muted-foreground">
          <Link to="/about" className="hover:text-foreground">About</Link>
          <Link to="/ai-services" className="hover:text-foreground">AI Services</Link>
          <Link to="/projects" className="hover:text-foreground">Projects</Link>
          <Link to="/pricing" className="hover:text-foreground">Pricing</Link>
          <Link to="/contact" className="hover:text-foreground">Contact</Link>
        </div>
        <div className="flex items-start gap-3 md:justify-end">
          {[
            { Icon: Twitter, href: "https://twitter.com" },
            { Icon: Instagram, href: "https://instagram.com" },
            { Icon: Linkedin, href: "https://linkedin.com" },
            { Icon: Github, href: "https://github.com" },
            { Icon: Youtube, href: "https://youtube.com" },
          ].map(({ Icon, href }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card transition hover:border-primary hover:text-primary hover:shadow-neon"
              aria-label="social link"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Nexora Studio. Crafted with care.
      </div>
    </footer>
  );
}
