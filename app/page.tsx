import { redirect } from 'next/navigation'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Polaris Studio - Agencia de Desarrollo Web y Diseño Digital',
  description: 'Agencia de desarrollo web especializada en crear experiencias digitales extraordinarias. Ofrecemos diseño web profesional, desarrollo de aplicaciones móviles, e-commerce, landing pages y consultoría digital para transformar tu negocio.',
  alternates: {
    canonical: 'https://www.polaristudio.com.br',
    languages: {
      'es': 'https://www.polaristudio.com.br/es',
      'en': 'https://www.polaristudio.com.br/en',
      'pt': 'https://www.polaristudio.com.br/pt',
      'x-default': 'https://www.polaristudio.com.br',
    },
  },
}

export default function Home() {
  // Redirect to Spanish version by default
  redirect('/es')
}
