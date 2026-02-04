import { MetadataRoute } from 'next';
import { SITE } from './lib/site';
import { practiceAreas } from './lib/practice-areas';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE.url;
  
  const staticPages = [
    '',
    '/about',
    '/accessibility',
    '/contact',
    '/message',
    '/privacy',
    '/reviews',
    '/services',
    '/terms',
    ...practiceAreas.map((a) => `/services/${a.slug}`),
  ];

  return staticPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: page === '' ? 1 : 0.8,
  }));
}
