import { SectionPage } from '@/components/landing/SectionPage';
import { pages } from '@/shared/data/site';

const page = pages.find((item) => item.slug === 'sanitarnoe-soprovozhdenie');

export default function Page() {
  if (!page) {
    return null;
  }

  return <SectionPage page={page} />;
}