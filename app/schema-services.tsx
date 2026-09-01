export default function ServicesSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Estudio de 3D y CGI: rendering fotorrealista, animación 3D y visualización",
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
      "name": "Servicios 3D y CGI",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Visualización de Productos 3D",
            "description": "Renders fotorrealistas de productos para e-commerce y campañas publicitarias que destacan cada detalle",
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
            "name": "Animación 3D",
            "description": "Animaciones 3D y motion graphics que dan vida a tu marca y elevan el storytelling visual",
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
            "name": "Branding 3D",
            "description": "Identidad visual tridimensional coherente que refleja la esencia de tu marca",
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
            "name": "Composición CGI",
            "description": "Composición y post-producción CGI para campañas publicitarias impactantes",
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
            "name": "Experiencias Web 3D",
            "description": "Sitios web interactivos con visualización 3D en el navegador usando WebGL y Three.js",
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
            "name": "Desarrollo Web y E-commerce",
            "description": "Desarrollo web complementario y tiendas online optimizadas para mostrar tus productos al mundo",
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