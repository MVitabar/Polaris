import { HeroSection } from "@/components/hero-section"
import { StatsBand } from "@/components/stats-band"
import { ServicesSection } from "@/components/services-section"
import dynamic from 'next/dynamic'
import { Footer } from "@/components/footer"
import { NavigationHeader } from "@/components/navigation-header"
import { Metadata } from 'next'

// Lazy load heavy components
const PortfolioSection = dynamic(() => import('@/components/portfolio-section').then(mod => ({ default: mod.PortfolioSection })), {
  loading: () => <div className="h-96 flex items-center justify-center text-muted-foreground">Loading...</div>,
  ssr: true
})

const ProcessSection = dynamic(() => import('@/components/process-section').then(mod => ({ default: mod.ProcessSection })), {
  loading: () => <div className="h-96 flex items-center justify-center text-muted-foreground">Loading...</div>,
  ssr: true
})

const TestimonialsSection = dynamic(() => import('@/components/testimonials-section').then(mod => ({ default: mod.TestimonialsSection })), {
  loading: () => <div className="h-96 flex items-center justify-center text-muted-foreground">Loading...</div>,
  ssr: true
})

const CTASection = dynamic(() => import('@/components/cta-section').then(mod => ({ default: mod.CTASection })), {
  loading: () => <div className="h-96 flex items-center justify-center text-muted-foreground">Loading...</div>,
  ssr: true
})

export const metadata: Metadata = {
  title: 'Home | Polaris Studio - Web Development Agency',
  description: 'Welcome to Polaris Studio, your web development agency. We create unique and effective digital experiences for your business. Specialists in web design, mobile apps, and e-commerce.',
  alternates: {
    canonical: 'https://www.polaristudio.com.br/en',
    languages: {
      'es': 'https://www.polaristudio.com.br/es',
      'en': 'https://www.polaristudio.com.br/en',
      'pt': 'https://www.polaristudio.com.br/pt',
      'x-default': 'https://www.polaristudio.com.br',
    },
  },
  openGraph: {
    title: 'Home | Polaris Studio - Web Development Agency',
    description: 'Welcome to Polaris Studio, your web development agency. We create unique and effective digital experiences for your business.',
    url: 'https://www.polaristudio.com.br/en',
    type: 'website',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Polaris Studio - We guide your digital course',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Home | Polaris Studio - Web Development Agency',
    description: 'Welcome to Polaris Studio, your web development agency. We create unique and effective digital experiences for your business.',
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
