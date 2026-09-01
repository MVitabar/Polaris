import { redirect } from 'next/navigation'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Polaris Studio - Estudio de 3D, CGI y Visualización Digital',
  description: 'Estudio especializado en arte 3D y CGI: renders fotorrealistas, animación 3D, visualización de productos y composición CGI. Creamos experiencias visuales tridimensionales que elevan tu marca y convierten.',
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
