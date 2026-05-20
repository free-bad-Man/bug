import type { ServicePageData } from '@/shared/types/page';
import { getSiteUrl } from '@/shared/lib/metadata';

function safeJsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}

function getSectionLabel(section: ServicePageData['section']) {
  switch (section) {
    case 'dezinfektsiya':
      return 'Р”РµР·РёРЅСЃРµРєС†РёСЏ';
    case 'deratizatsiya':
      return 'Р”РµСЂР°С‚РёР·Р°С†РёСЏ';
    case 'sanitarnoe-soprovozhdenie':
    default:
      return 'РЎР°РЅРёС‚Р°СЂРЅРѕРµ СЃРѕРїСЂРѕРІРѕР¶РґРµРЅРёРµ';
  }
}

function getServiceType(section: ServicePageData['section']) {
  switch (section) {
    case 'dezinfektsiya':
      return 'Р”РµР·РёРЅСЃРµРєС†РёСЏ РѕР±СЉРµРєС‚РѕРІ';
    case 'deratizatsiya':
      return 'Р”РµСЂР°С‚РёР·Р°С†РёСЏ РѕР±СЉРµРєС‚РѕРІ';
    case 'sanitarnoe-soprovozhdenie':
    default:
      return 'РЎР°РЅРёС‚Р°СЂРЅР°СЏ РїРѕРґРіРѕС‚РѕРІРєР° Рё СЃРѕРїСЂРѕРІРѕР¶РґРµРЅРёРµ РѕР±СЉРµРєС‚РѕРІ';
  }
}

export function ServiceJsonLd({ data }: { data: ServicePageData }) {
  const siteUrl = getSiteUrl();
  const sectionLabel = getSectionLabel(data.section);
  const sectionPath = `/${data.section}/`;
  const pagePath = `/${data.section}/${data.slug}/`;
  const pageUrl = `${siteUrl}${pagePath}`;

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Р“Р»Р°РІРЅР°СЏ',
        item: `${siteUrl}/`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: sectionLabel,
        item: `${siteUrl}${sectionPath}`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: data.h1 || data.title,
        item: pageUrl,
      },
    ],
  };

  const service = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${pageUrl}#service`,
    name: data.h1 || data.title,
    description: data.seoDescription || data.heroSubtitle,
    serviceType: getServiceType(data.section),
    provider: {
      '@id': `${siteUrl}/#organization`,
    },
    areaServed: [
      'РЎРµРІР°СЃС‚РѕРїРѕР»СЊ',
      'РЎРёРјС„РµСЂРѕРїРѕР»СЊ',
      'РЇР»С‚Р°',
      'РђР»СѓС€С‚Р°',
      'Р¤РµРѕРґРѕСЃРёСЏ',
      'Р•РІРїР°С‚РѕСЂРёСЏ',
      'РЎР°РєРё',
      'Р‘Р°С…С‡РёСЃР°СЂР°Р№',
      'РЎСѓРґР°Рє',
      'РљРµСЂС‡СЊ',
      'Р”Р¶Р°РЅРєРѕР№',
      'РљСЂС‹Рј',
    ],
    url: pageUrl,
  };

  const faq = data.faq.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: data.faq.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      }
    : null;

  const jsonLd = faq ? [breadcrumb, service, faq] : [breadcrumb, service];

  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{
        __html: safeJsonLd(jsonLd),
      }}
    />
  );
}