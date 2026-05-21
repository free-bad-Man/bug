import type { MetadataRoute } from 'next';
import { pages } from '@/shared/data/site';
import { getSiteUrl } from '@/shared/lib/site-url';

type ChangeFrequency = NonNullable<
  MetadataRoute.Sitemap[number]['changeFrequency']
>;

type RouteEntry = {
  path: string;
  priority: number;
  changeFrequency: ChangeFrequency;
};

const staticRoutes: RouteEntry[] = [
  {
    path: '/',
    priority: 1,
    changeFrequency: 'weekly',
  },
  {
    path: '/litsenzii/',
    priority: 0.8,
    changeFrequency: 'monthly',
  },
  {
    path: '/kontakty/',
    priority: 0.7,
    changeFrequency: 'monthly',
  },
];

function normalizePath(path: string) {
  const withLeadingSlash = path.startsWith('/') ? path : `/${path}`;

  return withLeadingSlash.endsWith('/') ? withLeadingSlash : `${withLeadingSlash}/`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const now = new Date();

  const sectionRoutes: RouteEntry[] = pages.map((page) => ({
    path: page.href,
    priority: page.slug === 'sanitarnoe-soprovozhdenie' ? 0.95 : 0.9,
    changeFrequency: 'weekly',
  }));

  return [...staticRoutes, ...sectionRoutes].map((route) => ({
    url: `${siteUrl}${normalizePath(route.path)}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}