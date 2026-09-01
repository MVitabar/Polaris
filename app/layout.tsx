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
    default: 'Polaris Studio - Estudio de 3D, CGI y Visualización Digital',
    template: '%s | Polaris Studio',
  },
  description: 'Estudio especializado en arte 3D y CGI: renders fotorrealistas, animación 3D, visualización de productos, branding tridimensional y composición CGI. Combinamos precisión técnica con visión artística para entregar visuales que cautivan y convierten. Más de 40 proyectos entregados con calidad de estudio internacional.',
  keywords: ['arte 3D', 'CGI', 'rendimiento 3D', 'render fotorrealista', 'visualización de productos', 'animación 3D', 'composición CGI', 'branding 3D', 'estudio 3D Brasil', 'arte 3D para e-commerce', 'motion graphics 3D', 'producto 3D', 'post-producción CGI', 'Blender', 'Cinema 4D', 'modelado 3D', 'texturizado 3D', 'iluminación 3D', 'publicidad 3D', 'experiencia inmersiva'],
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
    title: 'Polaris Studio - Estudio de 3D, CGI y Visualización Digital',
    description: 'Estudio especializado en arte 3D y CGI: renders fotorrealistas, animación 3D, visualización de productos y composición CGI. Visuales que cautivan y convierten.',
    url: 'https://www.polaristudio.com.br',
    siteName: 'Polaris Studio',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Polaris Studio - Estudio de 3D y CGI',
      },
    ],
    locale: 'es_AR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Polaris Studio - Estudio de 3D, CGI y Visualización Digital',
    description: 'Estudio especializado en arte 3D y CGI: renders fotorrealistas, animación 3D, visualización de productos y composición CGI.',
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
