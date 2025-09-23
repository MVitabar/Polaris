import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import { Lora } from "next/font/google"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"
import { LanguageProvider } from "@/contexts/language-context"

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
  metadataBase: new URL('https://polaris-studio.vercel.app'),
  title: {
    default: 'Polaris Studio - Guiamos tu rumbo digital',
    template: '%s | Polaris Studio',
  },
  description: 'Agencia de desarrollo web especializada en landing pages, aplicaciones web, e-commerce y consultoría digital. Transformamos ideas en experiencias digitales únicas.',
  keywords: ['desarrollo web', 'diseño web', 'aplicaciones web', 'e-commerce', 'landing pages', 'consultoría digital', 'agencia digital', 'páginas web'],
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
    title: 'Polaris Studio - Guiamos tu rumbo digital',
    description: 'Agencia de desarrollo web especializada en landing pages, aplicaciones web, e-commerce y consultoría digital.',
    url: 'https://polaris-studio.vercel.app',
    siteName: 'Polaris Studio',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Polaris Studio - Guiamos tu rumbo digital',
      },
    ],
    locale: 'es_AR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Polaris Studio - Guiamos tu rumbo digital',
    description: 'Agencia de desarrollo web especializada en landing pages, aplicaciones web, e-commerce y consultoría digital.',
    images: ['/images/og-image.jpg'],
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
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#5bbad5',
      },
    ],
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${poppins.variable} ${lora.variable} ${GeistMono.variable} antialiased`}>
        <LanguageProvider>
          <Suspense fallback={<div>Loading...</div>}>
            {children}
            <Analytics />
          </Suspense>
        </LanguageProvider>
      </body>
    </html>
  )
}
