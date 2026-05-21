import { ContactsPage } from '@/components/landing/ContactsPage';
import { contactsSeo, home } from '@/shared/data/site';
import { buildPageMetadata } from '@/shared/lib/metadata';

export const metadata = buildPageMetadata({
  title: contactsSeo.title,
  description: contactsSeo.description,
  path: '/kontakty/',
  image: home.background,
});

export default function Page() {
  return <ContactsPage />;
}