import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import DoctorsSection from "@/components/doctors-section"
import StatsSection from "@/components/stats-section"
import CtaSection from "@/components/cta-section"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />
      <ServicesSection />
      <StatsSection />
      <DoctorsSection />
      <CtaSection />
    </main>
  )
}
