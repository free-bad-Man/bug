import Link from 'next/link';
import { benefits, home, pages, prices, products } from '@/shared/data/site';
import { SiteShell } from './SiteShell';
import { CardGrid, GlassCard, ProcessStep, Section, StatCard } from './UI';
import { LeadForm } from './LeadForm';

const painItems = [
  {
    title: 'Р¦РµРЅР° РЅРµРїРѕРЅСЏС‚РЅР°',
    text: 'РљР»РёРµРЅС‚ РЅРµ С…РѕС‡РµС‚ СЃР»С‹С€Р°С‚СЊ СЃР»СѓС‡Р°Р№РЅСѓСЋ С†РµРЅСѓ. Р•РјСѓ РЅСѓР¶РµРЅ РґРёР°РїР°Р·РѕРЅ, СЂР°СЃСЃС‡РёС‚Р°РЅРЅС‹Р№ РїРѕ РѕР±СЉРµРєС‚Сѓ, Р·РѕРЅРµ, СЂРёСЃРєР°Рј Рё СЂРµР¶РёРјСѓ СЂР°Р±РѕС‚.',
  },
  {
    title: 'РЎРµР·РѕРЅ РЅРµР»СЊР·СЏ СЃРѕСЂРІР°С‚СЊ',
    text: 'Р”Р»СЏ РіРѕСЃС‚РёРЅРёС†, СЂРµСЃС‚РѕСЂР°РЅРѕРІ Рё РїР»СЏР¶РЅС‹С… РѕР±СЉРµРєС‚РѕРІ СЃР°РЅРёС‚Р°СЂРЅС‹Р№ СЃР±РѕР№ Р±С‹СЃС‚СЂРѕ РїСЂРµРІСЂР°С‰Р°РµС‚СЃСЏ РІ Р¶Р°Р»РѕР±С‹, РѕС‚Р·С‹РІС‹ Рё СѓРїСЂР°РІР»РµРЅС‡РµСЃРєРёР№ С…Р°РѕСЃ.',
  },
  {
    title: 'Р Р°Р·РѕРІС‹Р№ РІС‹РµР·Рґ РЅРµ СЂРµС€Р°РµС‚ СЃРёСЃС‚РµРјСѓ',
    text: 'РћР±СЉРµРєС‚Сѓ РЅСѓР¶РµРЅ РїРѕРґСЂСЏРґС‡РёРє, РіСЂР°С„РёРє, РґРѕРєСѓРјРµРЅС‚С‹ Рё РєРѕРЅС‚СЂРѕР»СЊ, Р° РЅРµ Р°РІР°СЂРёР№РЅС‹Р№ РІС‹Р·РѕРІ РєР°Р¶РґС‹Р№ СЂР°Р· РїРѕСЃР»Рµ РїСЂРѕР±Р»РµРјС‹.',
  },
];

const processItems = [
  {
    title: 'РЎРѕР±РёСЂР°РµРј 7 РїР°СЂР°РјРµС‚СЂРѕРІ',
    text: 'Р“РѕСЂРѕРґ, С‚РёРї РѕР±СЉРµРєС‚Р°, РїР»РѕС‰Р°РґСЊ, СЂРёСЃРєРѕРІС‹Рµ Р·РѕРЅС‹, С…Р°СЂР°РєС‚РµСЂ Р·Р°РґР°С‡Рё, С„РѕСЂРјР°С‚ СЂР°Р±РѕС‚ Рё СЃСЂРѕС‡РЅРѕСЃС‚СЊ.',
  },
  {
    title: 'Р”Р°С‘Рј РїСЂРµРґРІР°СЂРёС‚РµР»СЊРЅС‹Р№ РґРёР°РїР°Р·РѕРЅ',
    text: 'Р Р°СЃС‡С‘С‚ Р·Р° 15 РјРёРЅСѓС‚ РїРѕСЃР»Рµ РјРёРЅРёРјСѓРјР° РґР°РЅРЅС‹С…. Р¦РµРЅР° РѕР±СЉСЏСЃРЅСЏРµС‚СЃСЏ Р»РѕРіРёРєРѕР№ РѕР±СЉРµРєС‚Р°, Р° РЅРµ Р±РµСЂС‘С‚СЃСЏ РЅР°СѓРіР°Рґ.',
  },
  {
    title: 'РџСЂРµРґР»Р°РіР°РµРј СЃР»РµРґСѓСЋС‰РёР№ С€Р°Рі',
    text: 'РђСѓРґРёС‚, РљРџ, Р·Р°РїСѓСЃРє РѕР±СЉРµРєС‚Р°, СЃРѕРїСЂРѕРІРѕР¶РґРµРЅРёРµ СЃРµР·РѕРЅР° РёР»Рё СЂРµРіСѓР»СЏСЂРЅС‹Р№ РґРѕРіРѕРІРѕСЂ вЂ” РїРѕ СЃРёС‚СѓР°С†РёРё.',
  },
];

export function HomePage() {
  return (
    <SiteShell background={home.background}>
      <section className="mx-auto flex max-w-7xl flex-col gap-5 pt-4 md:pt-7 lg:min-h-[calc(100vh-10.5rem)] lg:justify-center">
        <div className="glass hero-card w-full rounded-[1.9rem] p-5 md:rounded-[2.4rem] md:p-8 lg:p-10">
          <p className="inline-flex rounded-full border border-white/60 bg-white/50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--accent-dark)] md:text-sm">
            {home.eyebrow}
          </p>
          <h1 className="hero-title mt-6 max-w-[920px] text-balance text-[2.55rem] font-semibold md:text-6xl lg:text-7xl xl:text-[5rem]">
            {home.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg font-medium leading-8 text-[var(--text-soft)] md:text-xl md:leading-9">
            {home.subtitle}
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="#lead"
              className="glass-button-strong inline-flex min-h-12 items-center justify-center rounded-2xl px-6 text-sm font-semibold transition"
            >
              РџРѕР»СѓС‡РёС‚СЊ СЂР°СЃС‡С‘С‚
            </a>
            <Link
              href="/sanitarnoe-soprovozhdenie/"
              className="glass-button inline-flex min-h-12 items-center justify-center rounded-2xl px-6 text-sm font-semibold transition"
            >
              РљР°Рє СЂР°Р±РѕС‚Р°РµРј
            </Link>
          </div>

          <div className="mt-7 grid max-w-[920px] gap-3 sm:grid-cols-3">
            <StatCard value="15 РјРёРЅ" label="РїСЂРµРґРІР°СЂРёС‚РµР»СЊРЅС‹Р№ СЂР°СЃС‡С‘С‚ РїРѕСЃР»Рµ СЃР±РѕСЂР° РґР°РЅРЅС‹С…" />
            <StatCard value="B2B" label="РіРѕСЃС‚РёРЅРёС†С‹, РѕР±С‰РµРїРёС‚, СЃРєР»Р°РґС‹ Рё СЃРµР·РѕРЅРЅС‹Рµ Р·РѕРЅС‹" />
            <StatCard value="РґРѕРіРѕРІРѕСЂ" label="Р°РєС‚С‹, Р¶СѓСЂРЅР°Р», РіСЂР°С„РёРє Рё Р·РѕРЅР° РѕС‚РІРµС‚СЃС‚РІРµРЅРЅРѕСЃС‚Рё" />
          </div>
        </div>

        <div className="glass w-full rounded-[1.9rem] p-4 md:rounded-[2.2rem] md:p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent-dark)] md:text-sm">
            Р”Р»СЏ РєРѕРіРѕ
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {home.bullets.map((item) => (
              <div key={item} className="glass-soft rounded-3xl px-5 py-4 text-sm font-semibold leading-6 md:text-base">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Section
        eyebrow="Р‘РѕР»СЊ СЂС‹РЅРєР°"
        title="РћР±СЉРµРєС‚Сѓ РЅСѓР¶РµРЅ РЅРµ С…Р°РѕС‚РёС‡РЅС‹Р№ РІС‹РµР·Рґ, Р° СЃР°РЅРёС‚Р°СЂРЅР°СЏ СЃРёСЃС‚РµРјР°"
        text="РљР»РёРµРЅС‚ Р±РѕРёС‚СЃСЏ РЅРµ СЃР°РјРёС… РІСЂРµРґРёС‚РµР»РµР№, Р° РїРѕСЃР»РµРґСЃС‚РІРёР№: Р¶Р°Р»РѕР±, РїР»РѕС…РёС… РѕС‚Р·С‹РІРѕРІ, СЃСЂС‹РІР° Р·Р°РїСѓСЃРєР°, РЅРµРїРѕРЅСЏС‚РЅРѕР№ С†РµРЅС‹ Рё РѕС‚СЃСѓС‚СЃС‚РІРёСЏ РїРѕРґСЂСЏРґС‡РёРєР° РІ СЃРµР·РѕРЅ."
      >
        <CardGrid>
          {painItems.map((item) => (
            <GlassCard key={item.title} title={item.title} text={item.text} />
          ))}
        </CardGrid>
      </Section>

      <Section
        eyebrow="Р РµС€РµРЅРёРµ"
        title="Р—Р°РїСѓСЃРє, СЃРѕРїСЂРѕРІРѕР¶РґРµРЅРёРµ Рё СЂРµРіСѓР»СЏСЂРЅР°СЏ Р·Р°С‰РёС‚Р°"
        text="РћСЃРЅРѕРІРЅР°СЏ РјРѕРґРµР»СЊ РїСЂРѕРµРєС‚Р° вЂ” РїРѕРЅСЏС‚РЅР°СЏ С†РµРїРѕС‡РєР°: РїРѕРґРіРѕС‚РѕРІРёС‚СЊ РѕР±СЉРµРєС‚, РїСЂРѕР№С‚Рё СЃРµР·РѕРЅ РїРѕРґ РєРѕРЅС‚СЂРѕР»РµРј Рё РїСЂРѕРґР»РёС‚СЊ РґРѕРіРѕРІРѕСЂ."
      >
        <CardGrid>
          {products.map((item) => (
            <GlassCard key={item.title} title={item.title} text={item.text} label={item.price} />
          ))}
        </CardGrid>
      </Section>

      <Section
        eyebrow="РљР°Рє СЃС‡РёС‚Р°РµРј"
        title="РџСЂРµРґРІР°СЂРёС‚РµР»СЊРЅС‹Р№ СЂР°СЃС‡С‘С‚ Р·Р° 15 РјРёРЅСѓС‚"
        text="РњС‹ РЅРµ РЅР°Р·С‹РІР°РµРј С†РµРЅСѓ РЅР°СѓРіР°Рґ. Р Р°СЃС‡С‘С‚ СЃС‚СЂРѕРёС‚СЃСЏ РїРѕ С‚РёРїСѓ РѕР±СЉРµРєС‚Р°, Р·РѕРЅРµ, СЂРёСЃРєРѕРІС‹Рј РїРѕРјРµС‰РµРЅРёСЏРј, С‡Р°СЃС‚РѕС‚Рµ РІРёР·РёС‚РѕРІ, SLA Рё РІРЅРµС€РЅРµРјСѓ РєРѕРЅС‚СѓСЂСѓ."
      >
        <div className="grid gap-4 lg:grid-cols-3">
          {processItems.map((item, index) => (
            <ProcessStep
              key={item.title}
              number={`0${index + 1}`}
              title={item.title}
              text={item.text}
            />
          ))}
        </div>
      </Section>

      <Section
        eyebrow="РџСЂРµРёРјСѓС‰РµСЃС‚РІР°"
        title="РЎР°РЅРёС‚Р°СЂРЅР°СЏ Р·Р°С‰РёС‚Р° Р±РµР· СЃР»СѓС‡Р°Р№РЅС‹С… С†РµРЅ"
        text="РљР»РёРµРЅС‚ РїРѕРєСѓРїР°РµС‚ РЅРµ РїСЂРѕСЃС‚Рѕ РѕР±СЂР°Р±РѕС‚РєСѓ, Р° СЃРїРѕРєРѕР№РЅС‹Р№ Р·Р°РїСѓСЃРє РѕР±СЉРµРєС‚Р°, СЂРµРіСѓР»СЏСЂРЅС‹Р№ РєРѕРЅС‚СЂРѕР»СЊ, РґРѕРєСѓРјРµРЅС‚С‹ Рё СЃРЅРёР¶РµРЅРёРµ СѓРїСЂР°РІР»РµРЅС‡РµСЃРєРѕРіРѕ СЂРёСЃРєР°."
      >
        <CardGrid>
          {benefits.map((item) => (
            <GlassCard key={item} title={item} text="Р Р°Р±РѕС‚Р°РµРј СЃРїРѕРєРѕР№РЅС‹Рј B2B-СЏР·С‹РєРѕРј: РѕР±СЉРµРєС‚, Р·РѕРЅР°, СЂРёСЃРєРё, РіСЂР°С„РёРє, SLA, РґРѕРєСѓРјРµРЅС‚С‹ Рё Р·РѕРЅР° РѕС‚РІРµС‚СЃС‚РІРµРЅРЅРѕСЃС‚Рё." />
          ))}
        </CardGrid>
      </Section>

      <Section
        eyebrow="Р Р°Р·РґРµР»С‹"
        title="РћСЃРЅРѕРІРЅС‹Рµ РЅР°РїСЂР°РІР»РµРЅРёСЏ"
        text="РљР°Р¶РґС‹Р№ СЂР°Р·РґРµР» РїРѕР»СѓС‡Р°РµС‚ СЃРІРѕР№ СЃС‚Р°С‚РёС‡РЅС‹Р№ С„РѕРЅ Рё РїСЂРѕР·СЂР°С‡РЅС‹Рµ СЃС‚РµРєР»СЏРЅРЅС‹Рµ Р±Р»РѕРєРё."
      >
        <CardGrid>
          {pages.map((page) => (
            <Link key={page.href} href={page.href} className="glass-soft rounded-[1.5rem] p-5 transition duration-300 hover:-translate-y-1 hover:bg-white/46 md:rounded-[1.75rem] md:p-6">
              <p className="inline-flex rounded-full bg-[var(--accent-light)] px-3 py-1 text-xs font-semibold text-[var(--accent-dark)]">
                {page.eyebrow}
              </p>
              <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em]">{page.navLabel}</h3>
              <p className="mt-4 text-base leading-7 text-[var(--muted)]">{page.subtitle}</p>
            </Link>
          ))}
        </CardGrid>
      </Section>

      <Section
        eyebrow="РЎС‚РѕРёРјРѕСЃС‚СЊ"
        title="РћСЂРёРµРЅС‚РёСЂС‹ РґР»СЏ СЌРєСЃРїСЂРµСЃСЃ-СЂР°СЃС‡С‘С‚Р°"
        text="Р¤РёРЅР°Р»СЊРЅР°СЏ С†РµРЅР° СѓС‚РѕС‡РЅСЏРµС‚СЃСЏ РїРѕ С‚РёРїСѓ РѕР±СЉРµРєС‚Р°, Р·РѕРЅРµ, СЂРёСЃРєРѕРІС‹Рј РїРѕРјРµС‰РµРЅРёСЏРј, С‡Р°СЃС‚РѕС‚Рµ РІРёР·РёС‚РѕРІ, SLA Рё РІРЅРµС€РЅРµРјСѓ РєРѕРЅС‚СѓСЂСѓ."
      >
        <div className="grid gap-3 md:grid-cols-2">
          {prices.map(([name, price]) => (
            <div key={name} className="glass-soft flex flex-col gap-2 rounded-3xl px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
              <span className="font-medium leading-6">{name}</span>
              <span className="shrink-0 font-semibold text-[var(--accent-dark)]">{price}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="lead"
        eyebrow="Р—Р°СЏРІРєР°"
        title="РџРѕР»СѓС‡РёС‚СЊ РїСЂРµРґРІР°СЂРёС‚РµР»СЊРЅС‹Р№ СЂР°СЃС‡С‘С‚"
        text="Р”Р»СЏ СЂР°СЃС‡С‘С‚Р° РЅСѓР¶РЅС‹ 7 РїР°СЂР°РјРµС‚СЂРѕРІ: РіРѕСЂРѕРґ, С‚РёРї РѕР±СЉРµРєС‚Р°, РїР»РѕС‰Р°РґСЊ, СЂРёСЃРєРѕРІС‹Рµ Р·РѕРЅС‹, С…Р°СЂР°РєС‚РµСЂ Р·Р°РґР°С‡Рё, С„РѕСЂРјР°С‚ СЂР°Р±РѕС‚ Рё СЃСЂРѕС‡РЅРѕСЃС‚СЊ."
      >
        <LeadForm />
      </Section>
    </SiteShell>
  );
}