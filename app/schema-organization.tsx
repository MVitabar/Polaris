export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Polaris Studio",
    "url": "https://www.polaristudio.com.br",
    "logo": "https://www.polaristudio.com.br/images/logo-polaris.png",
    "description": "Agencia digital líder en Brasil especializada en GEO (Generative Engine Optimization) y AEO (Answer Engine Optimization) para la era de IA 2026. Optimizamos para ChatGPT, Bing Copilot y Google AI Overviews con autoridad de marca y E-E-A-T comprobado.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "BR",
      "addressRegion": "SP"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+55-48-996209954",
      "contactType": "customer service",
      "email": "contato@polaristudio.com.br",
      "availableLanguage": ["Spanish", "English", "Portuguese"]
    },
    "sameAs": [
      "https://www.linkedin.com/company/polaris-studio",
      "https://twitter.com/polarisstudio",
      "https://www.instagram.com/polarisstudio"
    ],
    "founder": "Polaris Studio",
    "foundingDate": "2020",
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "value": "10-50"
    },
    "areaServed": [
      {
        "@type": "Country",
        "name": "Brazil"
      },
      {
        "@type": "Country",
        "name": "Argentina"
      },
      {
        "@type": "Country",
        "name": "Mexico"
      },
      {
        "@type": "Country",
        "name": "Spain"
      },
      {
        "@type": "Country",
        "name": "Portugal"
      }
    ],
    "knowsAbout": [
      "GEO Generative Engine Optimization",
      "AEO Answer Engine Optimization",
      "SEO para motores de IA",
      "ChatGPT SEO optimization",
      "Bing Copilot optimization",
      "Google AI Overviews",
      "Autoridad de marca digital",
      "E-E-A-T expertise",
      "Contenido generado por usuarios UGC",
      "Desarrollo web Next.js",
      "Transformación digital con IA",
      "SEO técnico avanzado",
      "E-commerce personalizado",
      "Desarrollo de aplicaciones móviles",
      "Experiencia de usuario UX",
      "Marketing digital",
      "Integraciones API",
      "Automatización digital",
      "Coherencia semántica SEO",
      "Local SEO Brasil"
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
