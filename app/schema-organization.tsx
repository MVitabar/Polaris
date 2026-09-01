export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Polaris Studio",
    "url": "https://www.polaristudio.com.br",
    "logo": "https://www.polaristudio.com.br/images/logo-polaris.png",
    "description": "Estudio especializado en arte 3D y CGI con sede en Brasil. Creamos renders fotorrealistas, animación 3D, visualización de productos y composición CGI para marcas que buscan destacar en cualquier pantalla.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "BR",
      "addressRegion": "SC"
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
      "Arte 3D",
      "CGI",
      "Render fotorrealista",
      "Visualización de productos",
      "Animación 3D",
      "Composición CGI",
      "Branding 3D",
      "Modelado 3D",
      "Texturizado 3D",
      "Iluminación 3D",
      "Motion graphics 3D",
      "Blender",
      "Cinema 4D",
      "ZBrush",
      "Octane Render",
      "Publicidad 3D",
      "Experiencia inmersiva",
      "Desarrollo web 3D"
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
