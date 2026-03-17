import { motion } from "framer-motion";
import { MapPin, Clock, Ship, Plane } from "lucide-react";

const nodes = [
  { label: "Shenzhen", sub: "Centro Logístico", icon: Ship, position: "left-[5%] top-[40%]" },
  { label: "Oceano Pacífico", sub: "Rota Marítima", icon: Ship, position: "left-[30%] top-[55%]" },
  { label: "Pedro Juan Caballero", sub: "Hub Industrial", icon: MapPin, position: "left-[60%] top-[35%]" },
  { label: "Brasil", sub: "Mercado Final", icon: Plane, position: "left-[85%] top-[45%]" },
];

const BioceanicRoute = () => {
  return (
    <section className="py-24 relative overflow-hidden" id="rota">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm tracking-[0.3em] uppercase font-medium">
            Infraestrutura Global
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-serif mt-4 mb-4">
            Rota <span className="text-gold-gradient">Bioceânica</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Conexão Ásia-Pacífico com redução de 15 dias no frete. Uma vantagem logística sem precedentes na América do Sul.
          </p>
          <div className="line-gold w-24 mx-auto mt-8" />

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-8 inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gold-gradient glow-gold-intense"
          >
            <Ship className="w-5 h-5 text-primary-foreground" />
            <span className="text-primary-foreground font-black text-sm tracking-[0.15em] uppercase">
              CONEXÃO SHENZHEN — PEDRO JUAN | ECONOMIA DE 15 DIAS
            </span>
          </motion.div>
        </motion.div>

        {/* Route Infographic */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="relative max-w-5xl mx-auto"
        >
          <div className="rounded-2xl p-8 md:p-12 border border-primary/20" style={{ background: "hsl(0 0% 2%)" }}>
            <div className="relative h-48 md:h-64">
              {/* Connection line */}
              <div className="absolute top-1/2 left-[8%] right-[8%] h-px">
                <div className="w-full h-full bg-gradient-to-r from-primary/60 via-primary to-primary/60" />
                <motion.div
                  animate={{ x: ["0%", "100%"] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                  className="absolute top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-primary/20 blur-md"
                />
              </div>

              {/* Nodes */}
              {nodes.map((node, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className={`absolute ${node.position} -translate-x-1/2 -translate-y-1/2 text-center`}
                >
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-2 glow-gold">
                    <node.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <p className="text-xs md:text-sm font-semibold text-foreground whitespace-nowrap">{node.label}</p>
                  <p className="text-[10px] md:text-xs text-muted-foreground">{node.sub}</p>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-primary/20">
              <div className="text-center">
                <Clock className="w-5 h-5 text-primary mx-auto mb-2" />
                <p className="text-2xl font-bold font-serif text-primary">−15</p>
                <p className="text-xs text-muted-foreground">Dias no frete</p>
              </div>
              <div className="text-center">
                <Ship className="w-5 h-5 text-primary mx-auto mb-2" />
                <p className="text-2xl font-bold font-serif text-primary">Próprios</p>
                <p className="text-xs text-muted-foreground">Containers consolidados</p>
              </div>
              <div className="text-center">
                <MapPin className="w-5 h-5 text-primary mx-auto mb-2" />
                <p className="text-2xl font-bold font-serif text-primary">Fronteira</p>
                <p className="text-xs text-muted-foreground">Acesso direto ao BR</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BioceanicRoute;
