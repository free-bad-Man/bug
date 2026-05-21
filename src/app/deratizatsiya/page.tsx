import { SectionPage } from '@/components/landing/SectionPage';
import { pages } from '@/shared/data/site';
import { buildPageMetadata } from '@/shared/lib/metadata';

const page = pages.find((item) => item.slug === 'deratizatsiya')!;

export const metadata = buildPageMetadata({
  title: page.seoTitle,
  description: page.seoDescription,
  path: page.href,
  image: page.background,
});

export default function Page() {
  return <SectionPage page={page} />;
}