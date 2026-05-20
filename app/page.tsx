import { HeroSection } from "@/components/hero-section"
import { StatsBand } from "@/components/stats-band"
import { ServicesSection } from "@/components/services-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { ProcessSection } from "@/components/process-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { NavigationHeader } from "@/components/navigation-header"
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Inicio | Polaris Studio - Agencia de Desarrollo Web',
  description: 'Bienvenido a Polaris Studio, tu agencia de desarrollo web. Creamos experiencias digitales únicas y efectivas para tu negocio. Especialistas en diseño web, aplicaciones móviles y e-commerce.',
  alternates: {
    canonical: 'https://www.polaristudio.com.br',
    languages: {
      'es': 'https://www.polaristudio.com.br',
      'en': 'https://www.polaristudio.com.br',
      'pt': 'https://www.polaristudio.com.br',
      'x-default': 'https://www.polaristudio.com.br',
    },
  },
  openGraph: {
    title: 'Inicio | Polaris Studio - Agencia de Desarrollo Web',
    description: 'Bienvenido a Polaris Studio, tu agencia de desarrollo web. Creamos experiencias digitales únicas y efectivas para tu negocio.',
    url: 'https://www.polaristudio.com.br',
    type: 'website',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Polaris Studio - Guiamos tu rumbo digital',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Inicio | Polaris Studio - Agencia de Desarrollo Web',
    description: 'Bienvenido a Polaris Studio, tu agencia de desarrollo web. Creamos experiencias digitales únicas y efectivas para tu negocio.',
    images: ['/images/og-image.png'],
  },
}

export default function Home() {
  return (
    <>
      <NavigationHeader />
      <main className="min-h-screen relative animate-fade-in">
        <div id="hero">
          <HeroSection />
        </div>
        <StatsBand />
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
