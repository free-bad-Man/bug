import type { Metadata } from 'next';
import './globals.css';
import { company, home } from '@/shared/data/site';
import { getMetadataBase } from '@/shared/lib/metadata';

export const metadata: Metadata = {
  metadataBase: getMetadataBase(),
  title: {
    default: home.seoTitle,
    template: `%s | ${company.name}`,
  },
  description: home.seoDescription,
  applicationName: company.name,
  authors: [{ name: company.name }],
  creator: company.name,
  publisher: company.name,
  formatDetection: {
    telephone: false,
  },
  icons: {
    icon: '/images/logo-mark.png',
    shortcut: '/images/logo-mark.png',
    apple: '/images/logo-mark.png',
  },
  openGraph: {
    title: home.seoTitle,
    description: home.seoDescription,
    url: '/',
    siteName: company.name,
    locale: 'ru_RU',
    type: 'website',
    images: [
      {
        url: '/backgrounds/main.png',
        width: 1200,
        height: 630,
        alt: home.seoTitle,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: home.seoTitle,
    description: home.seoDescription,
    images: ['/backgrounds/main.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}