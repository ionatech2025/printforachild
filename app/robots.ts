import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/', '/blog/_template-post/'],
    },
    sitemap: 'https://printforachild.org/sitemap.xml',
  }
}
