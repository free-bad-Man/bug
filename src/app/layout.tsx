import type { Metadata } from 'next';
import { Manrope, Montserrat } from 'next/font/google';
import './globals.css';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { MobileStickyBar } from '@/components/layout/MobileStickyBar';
import { GlobalJsonLd } from '@/components/seo/GlobalJsonLd';

const manrope = Manrope({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-body',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-heading',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'РЎР°РЅРёС‚Р°СЂРЅР°СЏ РїРѕРґРіРѕС‚РѕРІРєР° Рё СЃРѕРїСЂРѕРІРѕР¶РґРµРЅРёРµ РѕР±СЉРµРєС‚РѕРІ РљСЂС‹РјР°',
  description:
    'РЎР°РЅРёС‚Р°СЂРЅР°СЏ РїРѕРґРіРѕС‚РѕРІРєР°, РґРµР·РёРЅСЃРµРєС†РёСЏ, РґРµСЂР°С‚РёР·Р°С†РёСЏ Рё РґРѕРіРѕРІРѕСЂРЅРѕРµ СЃРѕРїСЂРѕРІРѕР¶РґРµРЅРёРµ РіРѕСЃС‚РёРЅРёС†, РѕР±С‰РµРїРёС‚Р°, РїР»СЏР¶РЅС‹С… Рё РєРѕРјРјРµСЂС‡РµСЃРєРёС… РѕР±СЉРµРєС‚РѕРІ РљСЂС‹РјР°.',
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${manrope.variable} ${montserrat.variable}`}>
        <GlobalJsonLd />

        <div className="relative z-10 min-h-screen bg-transparent">
          <SiteHeader />
          <main className="bg-transparent">{children}</main>
          <SiteFooter />
          <MobileStickyBar />
        </div>
      </body>
    </html>
  );
}