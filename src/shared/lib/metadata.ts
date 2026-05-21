import type { Metadata } from 'next';
import { absoluteUrl, getSiteUrl } from './site-url';

type BuildPageMetadataInput = {
  title: string;
  description: string;
  path?: string;
  image?: string;
};

export function buildPageMetadata({
  title,
  description,
  path = '/',
  image = '/backgrounds/main.png',
}: BuildPageMetadataInput): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: absoluteUrl(path),
      siteName: 'Санитарная служба Крыма',
      locale: 'ru_RU',
      type: 'website',
      images: [
        {
          url: absoluteUrl(image),
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [absoluteUrl(image)],
    },
  };
}

export function getMetadataBase() {
  return new URL(getSiteUrl());
}