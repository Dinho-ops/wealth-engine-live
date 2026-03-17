import { motion } from "framer-motion";
import { Building2, Warehouse, PlaneTakeoff, Shield } from "lucide-react";

const assets = [
  {
    icon: Building2,
    title: "Terrenos Industriais",
    area: "150.000 m²",
    status: "Fase de Aquisição",
    description: "Área estratégica na fronteira Brasil-Paraguai com infraestrutura logística planejada.",
  },
  {
    icon: Warehouse,
    title: "Galpões Modulares",
    area: "30-50 unidades",
    status: "Projeto Aprovado",
    description: "Configuração em U para máxima eficiência logística. Expansão modular conforme demanda.",
  },
  {
    icon: PlaneTakeoff,
    title: "Aeroporto Privativo",
    area: "Pista executiva",
    status: "Em Planejamento",
    description: "Redução de deslocamentos, ciclos de negociação mais curtos e eficiência operacional máxima.",
  },
  {
    icon: Shield,
    title: "Portaria Aduaneira",
    area: "Dentro do pátio",
    status: "Integrada ao HUB",
    description: "Controle de acesso, segurança 24/7 e procedimentos aduaneiros internos para cada empresa.",
  },
];

const AssetsDashboard = () => {
  return (
    <section className="py-24 relative" id="ativos">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm tracking-[0.3em] uppercase font-medium">
            Dashboard de Ativos
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-serif mt-4 mb-4">
            Ativos <span className="text-gold-gradient">Reais & Tangíveis</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Investimento lastreado por operações industriais e fluxo transfronteiriço.
          </p>
          <div className="line-gold w-24 mx-auto mt-8" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {assets.map((asset, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card glass-card-hover rounded-2xl p-8 group cursor-default"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:glow-gold transition-all">
                  <asset.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-[10px] uppercase tracking-wider px-3 py-1 rounded-full border border-primary/20 text-primary font-medium">
                  {asset.status}
                </span>
              </div>

              <h3 className="text-xl font-bold font-serif text-foreground mb-1">{asset.title}</h3>
              <p className="text-primary font-medium text-sm mb-3">{asset.area}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{asset.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AssetsDashboard;
