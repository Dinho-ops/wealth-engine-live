import { motion } from "framer-motion";
import hubImg from "@/assets/hub-industrial.jpg";
import chinaImg from "@/assets/china-logistics.jpg";
import aeroportoImg from "@/assets/aeroporto.jpg";
import { Factory, Handshake, Ship } from "lucide-react";

const pillars = [
  {
    icon: Factory,
    number: "01",
    title: "Hub Industrial",
    subtitle: "Pedro Juan Caballero, Paraguai",
    image: hubImg,
    highlights: [
      "Complexo com galpões modulares em U",
      "Aeroporto privativo dentro do pátio",
      "Aduana e portaria corporativa integrada",
      "Lei de Maquila: apenas 1% de imposto",
      "Segurança 24/7 e shared services",
    ],
    description:
      "Localização fronteiriça com acesso direto ao mercado brasileiro. Integração planejada à Rota Bioceânica para exportação com custo e tempo reduzidos.",
    badge: null,
  },
  {
    icon: Handshake,
    number: "02",
    title: "Sociedade 50/50",
    subtitle: "Cooperativa Industrial",
    image: aeroportoImg,
    highlights: [
      "Consórcio investe no CAPEX (fábrica)",
      "Giro de caixa na China incluído",
      "50% do lucro de cada operação",
      "Contratos de longo prazo",
      "Retorno estável + upside modular",
    ],
    description:
      "Modelo de cooperativa industrial onde o investidor participa diretamente da cadeia produtiva, com receita recorrente por locação e participação nos lucros.",
    badge: null,
  },
  {
    icon: Ship,
    number: "03",
    title: "Braço Logístico",
    subtitle: "Shenzhen, China",
    image: chinaImg,
    highlights: [
      "Centro logístico em Shenzhen",
      "Containers próprios consolidados",
      "Tax Rebate na exportação chinesa",
      "Fabricação de peças e kits com escala",
      "Custo competitivo de produção",
    ],
    description:
      "Inteligência de sourcing e consolidação direta na origem. Tax Rebate (reembolso de imposto) na exportação chinesa maximiza a margem do investidor.",
    badge: "TAX REBATE: Lucro na origem chinesa",
  },
];

const PillarsSection = () => {
  return (
    <section className="py-24 relative" id="pilares">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-primary text-sm tracking-[0.3em] uppercase font-medium">
            Engrenagem de Riqueza
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-serif mt-4 mb-4">
            Os <span className="text-gold-gradient">3 Pilares</span> da Operação
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Uma cadeia binacional e transcontinental claramente segmentada: Brasil (marca), China (produção), Paraguai (montagem e logística).
          </p>
          <div className="line-gold w-24 mx-auto mt-8" />
        </motion.div>

        {/* Pillars */}
        <div className="space-y-16">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className={`relative rounded-2xl overflow-hidden flex flex-col border border-primary/30 ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              }`}
              style={{
                background: "hsl(0 0% 2%)",
                boxShadow: "0 0 30px hsl(43 56% 52% / 0.12), inset 0 1px 0 hsl(43 56% 52% / 0.1)",
              }}
            >
              {/* Badge for Pilar 3 */}
              {pillar.badge && (
                <div className="absolute top-4 right-4 z-20">
                  <div className="bg-gold-gradient text-primary-foreground px-4 py-2 rounded-lg font-bold text-xs tracking-wider uppercase glow-gold-intense">
                    {pillar.badge}
                  </div>
                </div>
              )}

              {/* Image */}
              <div className="lg:w-2/5 h-64 lg:h-auto relative overflow-hidden">
                <img
                  src={pillar.image}
                  alt={pillar.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[hsl(0_0%_2%)]/90 to-transparent" />
                <div className="absolute top-6 left-6">
                  <span className="text-7xl font-serif font-bold text-primary/15">{pillar.number}</span>
                </div>
              </div>

              {/* Content */}
              <div className="lg:w-3/5 p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 rounded-xl bg-gold-gradient flex items-center justify-center glow-gold">
                    <pillar.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold font-serif text-foreground">
                      {pillar.title}
                    </h3>
                    <span className="text-sm text-primary font-medium">{pillar.subtitle}</span>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">{pillar.description}</p>

                <ul className="space-y-3">
                  {pillar.highlights.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-1.5 shrink-0 glow-gold" />
                      <span className="text-sm text-foreground/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PillarsSection;
