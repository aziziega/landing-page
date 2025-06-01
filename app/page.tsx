import HeroSection from "@/components/hero-section";
import Image from "next/image";
import Features from "@/components/features-12";
import FooterSection from "@/components/footer";
import LogoCloud from "@/components/logo-cloud";
import Features2 from "@/components/features-2";
import IntegrationsSection from "@/components/integrations-7";
import StatsSection from "@/components/stats";

export default function Home() {
  return (
    <>
      <HeroSection />
      <LogoCloud />
      <Features2/>
      <Features />
      <IntegrationsSection />
      <StatsSection />  
      <FooterSection />
    </>
  );
}
