import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="text-primary text-sm tracking-[0.3em] uppercase font-medium">
            Próximo Passo
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-serif mt-4 mb-6">
            Participe da Fase Piloto
          </h2>
          <p className="text-muted-foreground mb-10 leading-relaxed">
            Convidamos investidores e parceiros logísticos a estruturar o futuro da indústria regional. Validação regulatória e fiscal em andamento. Captação de investidores âncora aberta.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gold-gradient text-primary-foreground hover:brightness-110 transition-all duration-300 glow-gold text-base px-10 py-7 font-bold tracking-wide group"
            >
              Solicitar Acesso ao Board
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              className="bg-gold-gradient text-primary-foreground hover:brightness-110 transition-all duration-300 glow-gold text-base px-10 py-7 font-bold tracking-wide"
            >
              Entrar no Consórcio XGlobal
            </Button>
          </div>

          <p className="text-xs text-muted-foreground mt-8">
            Acesso restrito a investidores qualificados. Informações sob NDA.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
