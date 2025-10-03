import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ProcessOptimizationSection } from "@/components/ProcessOptimizationSection";
import { AboutSection } from "@/components/AboutSection";
import { Layout } from "./Layout";

export const HomePage = () => {
  return (
    <Layout>
      <HeroSection />
      <ServicesSection />
      <ProcessOptimizationSection />
      <AboutSection />
    </Layout>
  );
};
