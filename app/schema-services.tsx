export default function ServicesSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "GEO (Generative Engine Optimization) y AEO (Answer Engine Optimization) para la Era de IA 2026",
    "provider": {
      "@type": "Organization",
      "name": "Polaris Studio",
      "url": "https://www.polaristudio.com.br"
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
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Servicios Digitales",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Desarrollo Web con Next.js",
            "description": "Desarrollo de sitios web modernos y performantes utilizando Next.js, React y las mejores prácticas de SEO técnico",
            "provider": {
              "@type": "Organization",
              "name": "Polaris Studio"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "E-commerce Personalizado",
            "description": "Tiendas online personalizadas con integraciones de pago, gestión de inventario y optimización para conversión",
            "provider": {
              "@type": "Organization",
              "name": "Polaris Studio"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Desarrollo de Aplicaciones Móviles",
            "description": "Apps móviles nativas y multiplataforma para iOS y Android con experiencia de usuario optimizada",
            "provider": {
              "@type": "Organization",
              "name": "Polaris Studio"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "SEO Técnico y Marketing Digital",
            "description": "Estrategias SEO completas, auditorías técnicas, optimización de contenido y marketing digital orientado a resultados",
            "provider": {
              "@type": "Organization",
              "name": "Polaris Studio"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Transformación Digital con IA",
            "description": "Implementación de soluciones de inteligencia artificial para automatizar procesos y mejorar la experiencia del cliente",
            "provider": {
              "@type": "Organization",
              "name": "Polaris Studio"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Diseño UX/UI y Branding Digital",
            "description": "Diseño de interfaces de usuario centrado en la experiencia del cliente y desarrollo de identidad de marca digital",
            "provider": {
              "@type": "Organization",
              "name": "Polaris Studio"
            }
          }
        }
      ]
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
