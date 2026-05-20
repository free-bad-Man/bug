import { LeadForm } from '@/components/forms/LeadForm';
import { CasesTeaser } from '@/components/ui/CasesTeaser';
import { GeoBlock } from '@/components/ui/GeoBlock';
import { PageFaq } from '@/components/ui/PageFaq';
import { PageHero } from '@/components/ui/PageHero';
import { PhotoCta } from '@/components/ui/PhotoCta';
import { SectionShell } from '@/components/ui/SectionShell';
import { ServiceJsonLd } from '@/components/seo/ServiceJsonLd';
import type { FaqItem, ServicePageData } from '@/shared/types/page';

type ServiceSection =
  | 'sanitarnoe-soprovozhdenie'
  | 'dezinfektsiya'
  | 'deratizatsiya';

type LegacyServicePageTemplateProps = {
  slug: string;
  section: ServiceSection;
  title: string;
  subtitle: string;
  priceLabel?: string;
  whenUseful: string[];
  includes: string[];
  advantages: string[];
  faq: FaqItem[];
};

type ServicePageTemplateProps =
  | { data: ServicePageData }
  | LegacyServicePageTemplateProps;

function isDataMode(
  props: ServicePageTemplateProps,
): props is { data: ServicePageData } {
  return 'data' in props;
}

function getSectionEyebrow(section: ServiceSection) {
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

function normalizeData(props: ServicePageTemplateProps): ServicePageData {
  if (isDataMode(props)) {
    return props.data;
  }

  return {
    slug: props.slug,
    section: props.section,
    title: props.title,
    h1: props.title,
    seoTitle: props.title,
    seoDescription: props.subtitle,
    heroSubtitle: props.subtitle,
    priceLabel: props.priceLabel,
    bullets: props.advantages,
    whenItFitsTitle: 'РљРѕРіРґР° РїРѕРґС…РѕРґРёС‚ СѓСЃР»СѓРіР°',
    whenItFitsText:
      'РќРёР¶Рµ вЂ” СЃРёС‚СѓР°С†РёРё, РєРѕРіРґР° РѕР±СЉРµРєС‚Сѓ РЅСѓР¶РµРЅ РЅРµ С…Р°РѕС‚РёС‡РЅС‹Р№ РІС‹РµР·Рґ, Р° РїРѕРЅСЏС‚РЅС‹Р№ СЃР°РЅРёС‚Р°СЂРЅС‹Р№ СЂРµР¶РёРј, СЂР°СЃС‡С‘С‚ Рё РґР°Р»СЊРЅРµР№С€РёР№ РєРѕРЅС‚СЂРѕР»СЊ.',
    signs: props.whenUseful,
    noFullReplaceTitle: 'РџРѕС‡РµРјСѓ РІР°Р¶РЅР° СЃРёСЃС‚РµРјРЅР°СЏ СЂР°Р±РѕС‚Р°',
    noFullReplaceText:
      'Р”Р»СЏ Р±РёР·РЅРµСЃР° РІР°Р¶РЅР° РЅРµ С‚РѕР»СЊРєРѕ СЂР°Р·РѕРІР°СЏ РѕР±СЂР°Р±РѕС‚РєР°, Р° СѓРїСЂР°РІР»СЏРµРјС‹Р№ СЂРµР¶РёРј: РѕРїСЂРµРґРµР»РёС‚СЊ Р·РѕРЅС‹ СЂРёСЃРєР°, Р·Р°С„РёРєСЃРёСЂРѕРІР°С‚СЊ РіСЂР°С„РёРє, РґРѕРєСѓРјРµРЅС‚С‹, РѕС‚РІРµС‚СЃС‚РІРµРЅРЅРѕСЃС‚СЊ Рё РїРѕРЅСЏС‚РЅС‹Р№ СЃР»РµРґСѓСЋС‰РёР№ С€Р°Рі.',
    includesTitle: 'Р§С‚Рѕ РІС…РѕРґРёС‚ РІ СЂР°Р±РѕС‚Сѓ',
    includesItems: props.includes,
    faq: props.faq,
    relatedCases: [],
    relatedArticles: [],
    leadFormTitle: 'РћСЃС‚Р°РІРёС‚СЊ Р·Р°СЏРІРєСѓ РїРѕ СѓСЃР»СѓРіРµ',
    leadFormSubtitle:
      'РЎРІСЏР¶РµРјСЃСЏ, СѓС‚РѕС‡РЅРёРј РіРѕСЂРѕРґ, С‚РёРї РѕР±СЉРµРєС‚Р°, РїР»РѕС‰Р°РґСЊ, СЂРёСЃРєРѕРІС‹Рµ Р·РѕРЅС‹ Рё РїРѕРґРіРѕС‚РѕРІРёРј РїСЂРµРґРІР°СЂРёС‚РµР»СЊРЅС‹Р№ РґРёР°РїР°Р·РѕРЅ.',
    photoCtaTitle: 'РќСѓР¶РЅРѕ РїРѕРЅСЏС‚СЊ СЂРёСЃРєРё РїРѕ РѕР±СЉРµРєС‚Сѓ?',
    photoCtaText:
      'РћРїРёС€РёС‚Рµ РѕР±СЉРµРєС‚, РіРѕСЂРѕРґ, СЂРёСЃРєРѕРІС‹Рµ Р·РѕРЅС‹ Рё СЃСЂРѕС‡РЅРѕСЃС‚СЊ. РџРѕРґСЃРєР°Р¶РµРј, РєР°РєРѕР№ С„РѕСЂРјР°С‚ РїРѕРґРѕР№РґС‘С‚: Р·Р°РїСѓСЃРє, СЃРѕРїСЂРѕРІРѕР¶РґРµРЅРёРµ СЃРµР·РѕРЅР°, СЂРµРіСѓР»СЏСЂРЅС‹Р№ РґРѕРіРѕРІРѕСЂ РёР»Рё СѓСЃРёР»РµРЅРЅС‹Р№ СЂРµР¶РёРј.',
  };
}

export function ServicePageTemplate(props: ServicePageTemplateProps) {
  const data = normalizeData(props);

  return (
    <>
      <ServiceJsonLd data={data} />

      <PageHero
        eyebrow={getSectionEyebrow(data.section)}
        title={data.h1}
        subtitle={data.heroSubtitle}
        bullets={data.bullets}
        priceLabel={data.priceLabel}
      />

      <SectionShell title={data.whenItFitsTitle} intro={data.whenItFitsText}>
        {data.signs?.length ? (
          <div className="grid gap-4 md:grid-cols-2">
            {data.signs.map((item) => (
              <div
                key={item}
                className="rounded-[24px] border border-white/20 bg-white/32 p-5 shadow-[0_18px_40px_rgba(15,23,42,0.08)] backdrop-blur-sm"
              >
                <p className="text-[17px] leading-8 text-[var(--brand-graphite)]/78">
                  вЂ” {item}
                </p>
              </div>
            ))}
          </div>
        ) : null}
      </SectionShell>

      <SectionShell
        title={data.noFullReplaceTitle}
        intro={data.noFullReplaceText}
      />

      <SectionShell title={data.includesTitle}>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {data.includesItems.map((item) => (
            <div
              key={item}
              className="rounded-[24px] border border-white/20 bg-white/32 p-5 shadow-[0_18px_40px_rgba(15,23,42,0.08)] backdrop-blur-sm"
            >
              <p className="text-[17px] leading-8 text-[var(--brand-graphite)]/78">
                {item}
              </p>
            </div>
          ))}
        </div>
      </SectionShell>

      {data.steps?.length ? (
        <SectionShell title={data.stepsTitle || 'Р­С‚Р°РїС‹ СЂР°Р±РѕС‚'}>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {data.steps.map((item, index) => (
              <div
                key={item}
                className="rounded-[24px] border border-white/20 bg-white/32 p-5 shadow-[0_18px_40px_rgba(15,23,42,0.08)] backdrop-blur-sm"
              >
                <p className="text-sm font-semibold text-red-700">
                  Р­С‚Р°Рї {index + 1}
                </p>
                <p className="mt-3 text-[17px] leading-8 text-[var(--brand-graphite)]/78">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </SectionShell>
      ) : null}

      <CasesTeaser items={data.relatedCases || []} />

      <PageFaq items={data.faq} />

      <LeadForm
        variant="service"
        title={data.leadFormTitle || 'РћСЃС‚Р°РІРёС‚СЊ Р·Р°СЏРІРєСѓ РїРѕ СѓСЃР»СѓРіРµ'}
        subtitle={
          data.leadFormSubtitle ||
          'РЎРІСЏР¶РµРјСЃСЏ, СѓС‚РѕС‡РЅРёРј РґРµС‚Р°Р»Рё Рё РїРѕРґСЃРєР°Р¶РµРј СЃР»РµРґСѓСЋС‰РёР№ С€Р°Рі.'
        }
        serviceHiddenValue={data.title}
      />

      <PhotoCta title={data.photoCtaTitle} text={data.photoCtaText} />
      <GeoBlock />
    </>
  );
}