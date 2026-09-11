import { AmbulatorioSection } from "@/components/AmbulatorioSection";
import { ContactSection } from "@/components/ContactSection";
import { FelineSection } from "@/components/FelineSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { MobileCallBar } from "@/components/MobileCallBar";
import { ProfileSection } from "@/components/ProfileSection";
import { ServicesSection } from "@/components/ServicesSection";
import { TrustBar } from "@/components/TrustBar";
import { WhatsAppFloatingButton } from "@/components/WhatsAppFloatingButton";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <TrustBar />
        <AmbulatorioSection />
        <FelineSection />
        <ServicesSection />
        <ProfileSection />
        <ContactSection />
      </main>
      <Footer />
      <MobileCallBar />
      <WhatsAppFloatingButton />
    </>
  );
}
