import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { NeonHexLogo } from "./NeonHexLogo";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/ai-services", label: "AI Services" },
  { to: "/projects", label: "Projects" },
  { to: "/pricing", label: "Pricing" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 glass">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2.5 font-display text-lg font-bold">
          <NeonHexLogo size={36} />
          <span className="text-gradient">Nexora Studio</span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="rounded-md px-3 py-2 text-sm text-muted-foreground transition hover:text-foreground"
              activeProps={{ className: "rounded-md px-3 py-2 text-sm text-foreground font-medium" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link
            to="/contact"
            className="hidden rounded-full bg-gradient-brand px-5 py-2 text-sm font-medium text-primary-foreground shadow-glow transition hover:opacity-90 md:inline-block"
          >
            Hire Us
          </Link>
          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle mobile menu"
            className="grid h-9 w-9 place-items-center rounded-full border border-border bg-card text-foreground md:hidden"
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="border-t border-border bg-card/95 backdrop-blur px-6 py-4 md:hidden">
          <div className="flex flex-col gap-2">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-4 py-2.5 text-sm text-muted-foreground transition hover:bg-accent/20 hover:text-foreground"
                activeProps={{ className: "rounded-lg px-4 py-2.5 text-sm text-foreground font-medium bg-accent/10" }}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 rounded-full bg-gradient-brand px-5 py-2.5 text-center text-sm font-medium text-primary-foreground shadow-glow"
            >
              Hire Us
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
