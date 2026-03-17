const Parceiro = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#030303] text-white px-4 text-center">
      <div className="space-y-6">
        <h1 className="text-4xl md:text-6xl font-serif font-black bg-gradient-to-b from-[#F3E2B3] via-[#D4AF37] to-[#8A6E2F] bg-clip-text text-transparent uppercase tracking-wider">
          Área do Parceiro
        </h1>
        <p className="text-xl text-white/60 italic font-light">
          Em breve, o seu portal de investimentos XGlobal Partners.
        </p>
        <div className="pt-8">
          <a href="/" className="inline-block border border-[#C5A059]/40 text-[#C5A059] px-8 py-3 rounded-lg hover:bg-[#C5A059]/10 transition-all uppercase tracking-widest font-bold text-sm">
            Voltar para o Início
          </a>
        </div>
      </div>
    </div>
  );
};

export default Parceiro;