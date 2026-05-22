import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import { Lora } from "next/font/google"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Suspense } from "react"
import "./globals.css"
import { HtmlLangProvider } from "@/components/html-lang-provider"

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
  description: 'Agencia de desarrollo web especializada en crear experiencias digitales extraordinarias. Ofrecemos diseño web profesional, desarrollo de aplicaciones móviles, e-commerce, landing pages y consultoría digital para transformar tu negocio.',
  keywords: ['agencia de desarrollo web', 'diseño web profesional', 'desarrollo web Next.js', 'aplicaciones móviles a medida', 'e-commerce Brasil', 'landing pages', 'consultoría digital', 'desarrollo de sitios web', 'tiendas online', 'SEO y marketing digital', 'branding digital', 'mantenimiento web'],
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
    title: 'Polaris Studio - Agencia de Desarrollo Web y Diseño Digital',
    description: 'Agencia de desarrollo web especializada en crear experiencias digitales extraordinarias. Ofrecemos diseño web profesional, desarrollo de aplicaciones móviles, e-commerce y consultoría digital.',
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
    title: 'Polaris Studio - Agencia de Desarrollo Web y Diseño Digital',
    description: 'Agencia de desarrollo web especializada en crear experiencias digitales extraordinarias. Ofrecemos diseño web profesional, desarrollo de aplicaciones móviles, e-commerce y consultoría digital.',
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
