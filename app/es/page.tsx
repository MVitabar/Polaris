import { HeroSection } from "@/components/hero-section"
import { StatsBand } from "@/components/stats-band"
import { ServicesSection } from "@/components/services-section"
import { Services3DSection } from "@/components/services3d-section"
import dynamic from 'next/dynamic'
import { Footer } from "@/components/footer"
import { NavigationHeader } from "@/components/navigation-header"
import { Metadata } from 'next'

// Lazy load heavy components
const PortfolioSection = dynamic(() => import('@/components/portfolio-section').then(mod => ({ default: mod.PortfolioSection })), {
  loading: () => <div className="h-96 flex items-center justify-center text-muted-foreground">Cargando...</div>,
  ssr: true
})

const ProcessSection = dynamic(() => import('@/components/process-section').then(mod => ({ default: mod.ProcessSection })), {
  loading: () => <div className="h-96 flex items-center justify-center text-muted-foreground">Cargando...</div>,
  ssr: true
})

const TestimonialsSection = dynamic(() => import('@/components/testimonials-section').then(mod => ({ default: mod.TestimonialsSection })), {
  loading: () => <div className="h-96 flex items-center justify-center text-muted-foreground">Cargando...</div>,
  ssr: true
})

const CTASection = dynamic(() => import('@/components/cta-section').then(mod => ({ default: mod.CTASection })), {
  loading: () => <div className="h-96 flex items-center justify-center text-muted-foreground">Cargando...</div>,
  ssr: true
})

export const metadata: Metadata = {
  title: 'Polaris Studio | Estudio de 3D y CGI - Rendering, Animación y Visualización',
  description: 'Estudio especializado en arte 3D y CGI: renders fotorrealistas, animación 3D, visualización de productos y composición CGI para campañas publicitarias. Más de 40 proyectos entregados con calidad de estudio internacional.',
  alternates: {
    canonical: 'https://www.polaristudio.com.br/es',
    languages: {
      'es': 'https://www.polaristudio.com.br/es',
      'en': 'https://www.polaristudio.com.br/en',
      'pt': 'https://www.polaristudio.com.br/pt',
      'x-default': 'https://www.polaristudio.com.br',
    },
  },
  openGraph: {
    title: 'Polaris Studio | Estudio de 3D y CGI - Rendering, Animación y Visualización',
    description: 'Estudio especializado en arte 3D y CGI: renders fotorrealistas, animación 3D, visualización de productos y composición CGI para campañas publicitarias.',
    url: 'https://www.polaristudio.com.br/es',
    type: 'website',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Polaris Studio - Estudio de 3D y CGI',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Polaris Studio | Estudio de 3D y CGI - Rendering, Animación y Visualización',
    description: 'Estudio especializado en arte 3D y CGI: renders fotorrealistas, animación 3D, visualización de productos y composición CGI para campañas publicitarias.',
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
        <div id="services-3d">
          <Services3DSection />
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
