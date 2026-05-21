export function getSiteUrl() {
  const url = process.env.NEXT_PUBLIC_SITE_URL || 'https://free-bad-man.github.io/bug';

  return url.replace(/\/$/, '');
}

export function absoluteUrl(path = '/') {
  const siteUrl = getSiteUrl();
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;

  return `${siteUrl}${normalizedPath}`;
}