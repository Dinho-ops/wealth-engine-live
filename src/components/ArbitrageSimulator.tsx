import { useState } from "react";
import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, DollarSign } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const ArbitrageSimulator = () => {
  const [revenue, setRevenue] = useState(1000000);

  const brasilTax = 0.40;
  const xglobalTax = 0.01;

  const brasilProfit = revenue * (1 - brasilTax);
  const xglobalProfit = revenue * (1 - xglobalTax);
  const saving = xglobalProfit - brasilProfit;
  const savingPercent = ((saving / brasilProfit) * 100).toFixed(0);

  const formatCurrency = (val: number) =>
    new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(val);

  const revenueOptions = [500000, 1000000, 2500000, 5000000, 10000000];

  return (
    <section className="py-24 relative" id="simulador">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm tracking-[0.3em] uppercase font-medium">
            Simulador de Arbitragem
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-serif mt-4 mb-4">
            O Lucro que <span className="text-gold-gradient">Sobra para Você</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Compare o modelo tradicional brasileiro com a eficiência tributária XGlobal.
          </p>
          <div className="line-gold w-24 mx-auto mt-8" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          {/* Revenue selector */}
          <div className="text-center mb-12">
            <p className="text-sm text-muted-foreground mb-4 uppercase tracking-wider">
              Faturamento Anual da Operação
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {revenueOptions.map((opt) => (
                <button
                  key={opt}
                  onClick={() => setRevenue(opt)}
                  className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                    revenue === opt
                      ? "bg-gold-gradient text-primary-foreground glow-gold font-bold"
                      : "border border-primary/20 bg-[hsl(0_0%_2%)] text-muted-foreground hover:text-foreground hover:border-primary/40"
                  }`}
                >
                  {formatCurrency(opt)}
                </button>
              ))}
            </div>
          </div>

          {/* Visual bar comparison */}
          <div className="rounded-2xl border border-primary/20 p-8 md:p-10 mb-8" style={{ background: "hsl(0 0% 2%)" }}>
            <div className="space-y-8">
              {/* Brasil bar */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <TrendingDown className="w-5 h-5 text-destructive" />
                    <span className="font-semibold text-foreground">Custo Brasil</span>
                  </div>
                  <span className="text-destructive font-bold text-lg">40% impostos</span>
                </div>
                <div className="relative h-10 w-full rounded-full overflow-hidden bg-secondary">
                  <motion.div
                    key={`br-${revenue}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: "60%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="h-full rounded-full bg-destructive/60"
                  />
                  <span className="absolute inset-0 flex items-center justify-center text-sm font-bold text-foreground">
                    Lucro: {formatCurrency(brasilProfit)}
                  </span>
                </div>
              </div>

              {/* XGlobal bar */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    <span className="font-semibold text-foreground">Modelo XGlobal</span>
                  </div>
                  <span className="text-primary font-bold text-lg">1% imposto</span>
                </div>
                <div className="relative h-10 w-full rounded-full overflow-hidden bg-secondary">
                  <motion.div
                    key={`xg-${revenue}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: "99%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="h-full rounded-full bg-gold-gradient"
                  />
                  <span className="absolute inset-0 flex items-center justify-center text-sm font-bold text-primary-foreground">
                    Lucro: {formatCurrency(xglobalProfit)}
                  </span>
                </div>
              </div>

              {/* 39% difference highlight */}
              <div className="text-center pt-4 border-t border-primary/20">
                <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gold-gradient glow-gold-intense">
                  <span className="text-primary-foreground font-black text-lg tracking-wide">39% DE DIFERENÇA</span>
                </div>
                <p className="text-primary font-bold text-sm tracking-[0.2em] uppercase mt-4">
                  MARGEM REESTRUTURADA PARA O INVESTIDOR
                </p>
              </div>
            </div>
          </div>

          {/* Saving highlight */}
          <motion.div
            key={revenue}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="rounded-2xl p-8 text-center border border-primary/30 glow-gold-intense"
            style={{ background: "hsl(0 0% 2%)" }}
          >
            <DollarSign className="w-8 h-8 text-primary mx-auto mb-3" />
            <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">
              Economia Anual com o Modelo XGlobal
            </p>
            <p className="text-4xl md:text-5xl font-bold text-gold-gradient font-serif">
              {formatCurrency(saving)}
            </p>
            <p className="text-primary mt-2 font-medium">+{savingPercent}% a mais de lucro para o investidor</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ArbitrageSimulator;
