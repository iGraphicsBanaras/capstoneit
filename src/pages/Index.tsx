import Layout from "@/components/Layout";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { TechnologiesSection } from "@/components/TechnologiesSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ContactSection } from "@/components/ContactSection";

const Index = () => (
  <Layout>
    <HeroSection />
    <ServicesSection />
    <WhyChooseUs />
    <TechnologiesSection />
    <PortfolioSection />
    <TestimonialsSection />
    <ContactSection />
  </Layout>
);

export default Index;
