import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.polaristudio.com.br'
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
      alternates: {
        languages: {
          es: `${baseUrl}/es`,
          en: `${baseUrl}/en`,
          pt: `${baseUrl}/pt`,
          'x-default': baseUrl,
        },
      },
    },
    {
      url: `${baseUrl}/es`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
      alternates: {
        languages: {
          es: `${baseUrl}/es`,
          en: `${baseUrl}/en`,
          pt: `${baseUrl}/pt`,
          'x-default': baseUrl,
        },
      },
    },
    {
      url: `${baseUrl}/pt`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
      alternates: {
        languages: {
          es: `${baseUrl}/es`,
          en: `${baseUrl}/en`,
          pt: `${baseUrl}/pt`,
          'x-default': baseUrl,
        },
      },
    },
    {
      url: `${baseUrl}/en`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
      alternates: {
        languages: {
          es: `${baseUrl}/es`,
          en: `${baseUrl}/en`,
          pt: `${baseUrl}/pt`,
          'x-default': baseUrl,
        },
      },
    },
    {
      url: `${baseUrl}/es#services`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/es#portfolio`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/es#process`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/es#contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/pt#services`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/pt#portfolio`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/pt#process`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/pt#contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/en#services`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/en#portfolio`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/en#process`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/en#contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ]
}
