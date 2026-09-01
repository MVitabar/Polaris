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
  title: 'Polaris Studio | 3D & CGI Studio - Rendering, Animation and Visualization',
  description: 'Specialized 3D & CGI studio: photorealistic renders, 3D animation, product visualization and CGI compositing for advertising campaigns. Over 40 projects delivered with international studio quality.',
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
    title: 'Polaris Studio | 3D & CGI Studio - Rendering, Animation and Visualization',
    description: 'Specialized 3D & CGI studio: photorealistic renders, 3D animation, product visualization and CGI compositing for advertising campaigns.',
    url: 'https://www.polaristudio.com.br/en',
    type: 'website',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Polaris Studio - 3D & CGI Studio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Polaris Studio | 3D & CGI Studio - Rendering, Animation and Visualization',
    description: 'Specialized 3D & CGI studio: photorealistic renders, 3D animation, product visualization and CGI compositing for advertising campaigns.',
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
