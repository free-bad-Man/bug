import { DocumentsPage } from '@/components/landing/DocumentsPage';
import { documents, documentsSeo } from '@/shared/data/site';
import { buildPageMetadata } from '@/shared/lib/metadata';

export const metadata = buildPageMetadata({
  title: documentsSeo.title,
  description: documentsSeo.description,
  path: '/litsenzii/',
  image: documents.background,
});

export default function Page() {
  return <DocumentsPage />;
}