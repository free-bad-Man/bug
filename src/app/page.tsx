import { HomePage } from '@/components/landing/HomePage';
import { home } from '@/shared/data/site';
import { buildPageMetadata } from '@/shared/lib/metadata';

export const metadata = buildPageMetadata({
  title: home.seoTitle,
  description: home.seoDescription,
  path: '/',
  image: home.background,
});

export default function Page() {
  return <HomePage />;
}