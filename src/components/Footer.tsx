const Footer = () => (
  <footer className="py-12 border-t border-border">
    <div className="container mx-auto px-6 text-center">
      <p className="text-xl font-bold font-serif mb-2">
        <span className="text-foreground">X</span>
        <span className="text-gold-gradient">Global</span>
        <span className="text-foreground"> Partners</span>
      </p>
      <p className="text-xs text-muted-foreground max-w-md mx-auto mb-4">
        Primeiro HUB operacional e imobiliário integrando Brasil–China–Paraguai.
      </p>
      <div className="line-gold w-16 mx-auto mb-4" />
      <p className="text-xs text-muted-foreground">
        © {new Date().getFullYear()} XGlobal Partners Holding. Todos os direitos reservados.
      </p>
    </div>
  </footer>
);

export default Footer;
