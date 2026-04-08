import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://printforachild.org'
  
  // Main pages
  const mainPages = [
    '',
    '/about',
    '/our-work',
    '/gallery',
    '/blog',
    '/get-involved',
    '/contact',
    '/donate',
  ]

  // Blog posts
  const blogPosts = [
    '/blog/march-2026-book-distribution',
    '/blog/new-partnership-ncdc',
    '/blog/volunteer-spotlight-february',
  ]

  const mainPageEntries = mainPages.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' as const : 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  const blogEntries = blogPosts.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...mainPageEntries, ...blogEntries]
}
