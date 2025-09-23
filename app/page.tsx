import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { ProcessSection } from "@/components/process-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { NavigationHeader } from "@/components/navigation-header"
import { AnimatedBackground } from "@/components/animated-background"
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Inicio',
  description: 'Bienvenido a Polaris Studio, tu agencia de desarrollo web. Creamos experiencias digitales únicas y efectivas para tu negocio.',
  alternates: {
    canonical: 'https://polaris-studio.vercel.app',
  },
  openGraph: {
    title: 'Inicio | Polaris Studio',
    description: 'Bienvenido a Polaris Studio, tu agencia de desarrollo web. Creamos experiencias digitales únicas y efectivas para tu negocio.',
    url: 'https://polaris-studio.vercel.app',
    type: 'website',
  },
  twitter: {
    title: 'Inicio | Polaris Studio',
    description: 'Bienvenido a Polaris Studio, tu agencia de desarrollo web. Creamos experiencias digitales únicas y efectivas para tu negocio.',
  },
}

export default function Home() {
  return (
    <>

      <NavigationHeader />
      <main className="min-h-screen relative">
        <div id="hero">
          <HeroSection />
        </div>
        <div id="services">
          <ServicesSection />
        </div>
        <div id="portfolio">
          <PortfolioSection />
        </div>
        <div id="process">
          <ProcessSection />
        </div>
        <TestimonialsSection />
        <div id="contact">
          <CTASection />
        </div>
        <Footer />
      </main>
    </>
  )
}
