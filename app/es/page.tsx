import { HeroSection } from "@/components/hero-section"
import { StatsBand } from "@/components/stats-band"
import { ServicesSection } from "@/components/services-section"
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
  title: 'Inicio | Polaris Studio - Agencia GEO y AEO para la Era de IA 2026',
  description: 'Agencia digital líder en Brasil especializada en GEO (Generative Engine Optimization) y AEO (Answer Engine Optimization). Optimizamos para ChatGPT, Bing Copilot y Google AI Overviews con autoridad de marca y E-E-A-T comprobado. Más de 500 proyectos entregados con experiencia en motores de búsqueda generativos.',
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
    title: 'Inicio | Polaris Studio - Agencia GEO y AEO para la Era de IA 2026',
    description: 'Agencia digital líder en Brasil especializada en GEO (Generative Engine Optimization) y AEO (Answer Engine Optimization). Optimizamos para ChatGPT, Bing Copilot y Google AI Overviews con autoridad de marca y E-E-A-T comprobado.',
    url: 'https://www.polaristudio.com.br/es',
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
    title: 'Inicio | Polaris Studio - Agencia GEO y AEO para la Era de IA 2026',
    description: 'Agencia digital líder en Brasil especializada en GEO (Generative Engine Optimization) y AEO (Answer Engine Optimization). Optimizamos para ChatGPT, Bing Copilot y Google AI Overviews con autoridad de marca y E-E-A-T comprobado.',
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
