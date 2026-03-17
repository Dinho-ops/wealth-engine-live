import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Pilares", href: "#pilares" },
  { label: "Rota", href: "#rota" },
  { label: "Simulador", href: "#simulador" },
  { label: "Ativos", href: "#ativos" },
  { label: "Fases", href: "#fases" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto px-6 flex items-center justify-between h-16">
        <a href="#" className="text-xl font-bold font-serif">
          <span className="text-foreground">X</span>
          <span className="text-gold-gradient">Global</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#cta"
            className="text-sm font-medium px-5 py-2 rounded-lg bg-gold-gradient text-primary-foreground hover:opacity-90 transition-all"
          >
            Acessar Board
          </a>
        </div>

        {/* Mobile */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border px-6 py-4 space-y-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-sm text-muted-foreground hover:text-primary py-2"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
