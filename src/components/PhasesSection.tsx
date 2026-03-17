import { motion } from "framer-motion";

const phases = [
  {
    number: "01",
    title: "Fase Inicial",
    desc: "30–50 empresas com foco em componentes e montagem. Setores-alvo: autopeças, eletrônica, eletroeletrônicos e bens de capital leves.",
    active: true,
  },
  {
    number: "02",
    title: "Modelo Replicável",
    desc: "Layout modular e contratos padronizados para rápida expansão do ecossistema industrial.",
    active: false,
  },
  {
    number: "03",
    title: "Expansão",
    desc: "Novos módulos conforme demanda: logística, armazenagem e serviços compartilhados.",
    active: false,
  },
  {
    number: "04",
    title: "Logística de Alto Desempenho",
    desc: "Infraestrutura aeroportuária para reduzir deslocamentos e ampliar eficiência operacional.",
    active: false,
  },
];

const PhasesSection = () => {
  return (
    <section className="py-24 relative" id="fases">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm tracking-[0.3em] uppercase font-medium">
            Escala do Projeto
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-serif mt-4 mb-4">
            Fases de <span className="text-gold-gradient">Crescimento</span>
          </h2>
          <div className="line-gold w-24 mx-auto mt-8" />
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent md:-translate-x-px" />

          {phases.map((phase, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`relative flex items-start mb-12 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Dot */}
              <div className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full bg-primary border-2 border-background -translate-x-1/2 mt-6 z-10 glow-gold" />

              {/* Content */}
              <div className={`ml-16 md:ml-0 md:w-[45%] ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                <div className={`glass-card rounded-xl p-6 ${phase.active ? "border-primary/30 glow-gold" : ""}`}>
                  <span className="text-3xl font-serif font-bold text-primary/30">{phase.number}</span>
                  <h3 className="text-lg font-bold font-serif text-foreground mt-2">{phase.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{phase.desc}</p>
                  {phase.active && (
                    <span className="inline-block mt-3 text-[10px] uppercase tracking-wider px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
                      Fase Atual
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhasesSection;
