import { motion } from "framer-motion";
import heroImg from "@/assets/hero-industrial.jpg";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Complexo Industrial XGlobal Partners"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'linear-gradient(hsl(43 56% 52% / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(43 56% 52% / 0.3) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse-gold" />
            <span className="text-sm font-medium text-primary tracking-wider uppercase">
              Investimento Exclusivo — Board Restrito
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-serif mb-6 leading-tight">
            <span className="text-foreground">X</span>
            <span className="text-gold-gradient">Global</span>
            <span className="text-foreground"> Partners</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-4 font-light leading-relaxed">
            O primeiro HUB industrial integrando <span className="text-primary font-medium">Brasil — China — Paraguai</span>.
          </p>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto mb-10 font-light">
            Uma plataforma de eficiência produtiva projetada para retorno estável, upside por expansão modular e ativos reais lastreados.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gold-gradient text-primary-foreground hover:brightness-110 transition-all duration-300 glow-gold text-base px-8 py-6 font-bold tracking-wide"
            >
              Solicitar Acesso ao Board
            </Button>
            <Button
              size="lg"
              className="bg-gold-gradient text-primary-foreground hover:brightness-110 transition-all duration-300 glow-gold text-base px-8 py-6 font-bold tracking-wide"
            >
              Entrar no Consórcio XGlobal
            </Button>
          </div>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          {[
            { value: "1%", label: "Imposto (Lei de Maquila)" },
            { value: "50/50", label: "Sociedade no Lucro" },
            { value: "−15 dias", label: "Redução no Frete" },
            { value: "30-50", label: "Empresas na Fase 1" },
          ].map((stat, i) => (
            <div key={i} className="text-center p-4">
              <div className="text-2xl md:text-3xl font-bold text-primary font-serif">{stat.value}</div>
              <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-1.5">
          <div className="w-1.5 h-3 rounded-full bg-primary/50" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
