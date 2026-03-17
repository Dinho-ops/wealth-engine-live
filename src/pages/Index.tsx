import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PillarsSection from "@/components/PillarsSection";
import BioceanicRoute from "@/components/BioceanicRoute";
import ArbitrageSimulator from "@/components/ArbitrageSimulator";
import AssetsDashboard from "@/components/AssetsDashboard";
import AdvantagesSection from "@/components/AdvantagesSection";
import PhasesSection from "@/components/PhasesSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <PillarsSection />
      <BioceanicRoute />
      <ArbitrageSimulator />
      <AssetsDashboard />
      <AdvantagesSection />
      <PhasesSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
