import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, UserCog } from "lucide-react";
import { useTranslation } from "react-i18next";

const links = [
  { labelKey: "nav_pillars", href: "#pilares" },
  { labelKey: "nav_route", href: "#rota" },
  { labelKey: "nav_simulator", href: "#simulador" },
  { labelKey: "nav_assets", href: "#ativos" },
  { labelKey: "nav_phases", href: "#fases" },
];

const languages = [
  { code: "pt", flag: "https://flagcdn.com/w40/br.png", label: "PT" },
  { code: "es", flag: "https://flagcdn.com/w40/py.png", label: "ES" },
  { code: "en", flag: "https://flagcdn.com/w40/us.png", label: "EN" },
  { code: "zh", flag: "https://flagcdn.com/w40/cn.png", label: "ZH" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const closeMenu = () => setOpen(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          <a href="#" className="text-xl font-bold font-serif shrink-0">
            <span className="text-foreground">X</span>
            <span className="text-gold-gradient">Global</span>
            <span className="text-foreground font-light"> Partners</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {t(l.labelKey)}
              </a>
            ))}

            {/* Partner Page Button — premium shimmer */}
            <Link
              to="/parceiro"
              className="relative text-xs font-black px-5 py-2.5 rounded-lg border border-primary/40 text-primary hover:text-primary-foreground transition-all tracking-[0.1em] uppercase whitespace-nowrap overflow-hidden group"
              style={{ background: "transparent" }}
            >
              {/* shimmer sweep */}
              <span
                className="pointer-events-none absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background:
                    "linear-gradient(105deg, transparent 40%, hsl(40 48% 55% / 0.35) 50%, transparent 60%)",
                  backgroundSize: "200% 100%",
                  animation: "shimmerSweep 1.4s ease infinite",
                }}
              />
              <span
                className="pointer-events-none absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300"
                style={{ background: "hsl(40 48% 42% / 0.15)" }}
              />
              <span className="relative inline-flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                SEJA PARCEIRO
              </span>
            </Link>

            {/* Language Flags */}
            <div className="flex items-center gap-3 border-l border-border pl-4">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => i18n.changeLanguage(lang.code)}
                  title={lang.label}
                  className={`rounded overflow-hidden transition-all duration-200 hover:scale-110 ${i18n.language === lang.code
                      ? "ring-2 ring-primary ring-offset-1 ring-offset-background scale-110"
                      : "opacity-60 hover:opacity-100"
                    }`}
                >
                  <img src={lang.flag} alt={lang.label} className="w-7 h-[18px] object-cover block" />
                </button>
              ))}
            </div>

            {/* Admin Icon */}
            <Link
              to="/admin"
              title="Admin Board"
              className="w-8 h-8 flex items-center justify-center rounded-lg border border-primary/30 text-primary/70 hover:text-primary hover:border-primary hover:bg-primary/10 transition-all duration-200 hover:shadow-[0_0_10px_hsl(40_48%_42%/0.4)] ml-1"
            >
              <UserCog className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile: flags + admin icon + hamburger */}
          <div className="md:hidden flex items-center gap-3">
            <div className="flex items-center gap-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => i18n.changeLanguage(lang.code)}
                  title={lang.label}
                  className={`rounded overflow-hidden transition-all ${i18n.language === lang.code ? "ring-2 ring-primary scale-110" : "opacity-50"
                    }`}
                >
                  <img src={lang.flag} alt={lang.label} className="w-5 h-[13px] object-cover block" />
                </button>
              ))}
            </div>
            <Link
              to="/admin"
              title="Admin"
              className="w-7 h-7 flex items-center justify-center rounded-lg border border-primary/30 text-primary/70 hover:text-primary transition-all"
            >
              <UserCog className="w-3.5 h-3.5" />
            </Link>
            <button onClick={() => setOpen(!open)} className="text-foreground">
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border px-6 py-4 space-y-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={closeMenu}
                className="block text-sm text-muted-foreground hover:text-primary py-2"
              >
                {t(l.labelKey)}
              </a>
            ))}
            <Link
              to="/parceiro"
              onClick={closeMenu}
              className="w-full text-xs font-black py-3 rounded-lg border border-primary/40 text-primary hover:bg-primary/10 tracking-[0.1em] uppercase text-center flex items-center justify-center gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              SEJA PARCEIRO
            </Link>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;