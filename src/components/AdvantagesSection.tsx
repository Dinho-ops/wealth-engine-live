import { motion } from "framer-motion";
import { TrendingUp, ShieldCheck, BarChart3, Globe } from "lucide-react";

const advantages = [
  {
    icon: TrendingUp,
    title: "Receita Recorrente",
    desc: "Locação de galpões e serviços compartilhados com contratos de longo prazo.",
  },
  {
    icon: BarChart3,
    title: "Valorização Imobiliária",
    desc: "Demanda logística internacional impulsiona a valorização dos ativos.",
  },
  {
    icon: ShieldCheck,
    title: "Ativo Real Lastreado",
    desc: "Operações industriais e fluxo transfronteiriço garantem lastro tangível.",
  },
  {
    icon: Globe,
    title: "Expansão Modular",
    desc: "Novos módulos conforme demanda: logística, armazenagem e serviços.",
  },
];

const AdvantagesSection = () => {
  return (
    <section className="py-24 relative" id="vantagens">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm tracking-[0.3em] uppercase font-medium">
            Para Investidores
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-serif mt-4 mb-4">
            Vantagens <span className="text-gold-gradient">Estratégicas</span>
          </h2>
          <div className="line-gold w-24 mx-auto mt-8" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {advantages.map((adv, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card glass-card-hover rounded-2xl p-6 text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <adv.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold font-serif text-foreground mb-2">{adv.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{adv.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
