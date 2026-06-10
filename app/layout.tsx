import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import { Lora } from "next/font/google"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Suspense } from "react"
import OrganizationSchema from "./schema-organization"
import ServicesSchema from "./schema-services"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-lora",
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.polaristudio.com.br'),
  title: {
    default: 'Polaris Studio - Agencia de Desarrollo Web y Diseño Digital',
    template: '%s | Polaris Studio',
  },
  description: 'Agencia digital líder en Brasil especializada en GEO (Generative Engine Optimization) y AEO (Answer Engine Optimization) para la era de IA 2026. Optimizamos para ChatGPT, Bing Copilot y Google AI Overviews. Autoridad de marca, E-E-A-T y contenido de alta calidad que genera resultados reales en motores de búsqueda generativos. Más de 500 proyectos entregados con experiencia comprobada.',
  keywords: ['GEO generative engine optimization', 'AEO answer engine optimization', 'AI-first search', 'agencia digital 2026', 'SEO para motores de IA', 'ChatGPT SEO optimization', 'Bing Copilot optimization', 'autoridad de marca digital', 'E-E-A-T expertise', 'contenido generado por usuarios UGC', 'transformación digital con IA', 'desarrollo web Next.js 2026', 'optimización para AI Overviews', 'search intent avanzado', 'coherencia semántica SEO', 'local SEO Brasil', 'video content marketing', 'experiencia de usuario UX', 'e-commerce personalizado', 'consultoría digital estratégica', 'branding digital innovador', 'mantenimiento web profesional', 'desarrollo web responsive', 'optimización móvil', 'web performance', 'SEO técnico avanzado', 'marketing digital resultados', 'desarrollo de software a medida', 'integraciones API', 'automatización digital'],
  authors: [{ name: 'Polaris Studio' }],
  creator: 'Polaris Studio',
  publisher: 'Polaris Studio',
  generator: 'Next.js',
  applicationName: 'Polaris Studio',
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: 'Polaris Studio - Agencia GEO y AEO para la Era de IA 2026',
    description: 'Agencia digital líder en Brasil especializada en GEO (Generative Engine Optimization) y AEO (Answer Engine Optimization). Optimizamos para ChatGPT, Bing Copilot y Google AI Overviews con autoridad de marca y E-E-A-T comprobado.',
    url: 'https://www.polaristudio.com.br',
    siteName: 'Polaris Studio',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Polaris Studio - Agencia de Desarrollo Web y Diseño Digital',
      },
    ],
    locale: 'es_AR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Polaris Studio - Agencia GEO y AEO para la Era de IA 2026',
    description: 'Agencia digital líder en Brasil especializada en GEO (Generative Engine Optimization) y AEO (Answer Engine Optimization). Optimizamos para ChatGPT, Bing Copilot y Google AI Overviews con autoridad de marca y E-E-A-T comprobado.',
    images: ['/images/og-image.png'],
    creator: '@polarisstudio',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://www.polaristudio.com.br',
    languages: {
      'es': 'https://www.polaristudio.com.br/es',
      'en': 'https://www.polaristudio.com.br/en',
      'pt': 'https://www.polaristudio.com.br/pt',
      'x-default': 'https://www.polaristudio.com.br',
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/images/logo-polaris.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/images/logo-polaris.png' },
    ],
  },
  manifest: '/site.webmanifest',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        <OrganizationSchema />
        <ServicesSchema />
      </head>
      <body className={`${poppins.variable} ${lora.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={<div>Loading...</div>}>
          {children}
          <Analytics />
          <SpeedInsights />
        </Suspense>
      </body>
    </html>
  )
}
