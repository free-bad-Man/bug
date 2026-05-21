import { LandingPageData } from '@/shared/data/site';
import { SiteShell } from './SiteShell';
import { CardGrid, GlassCard, Section, StatCard } from './UI';
import { LeadForm } from './LeadForm';

export function SectionPage({ page }: { page: LandingPageData }) {
  return (
    <SiteShell background={page.background}>
      <section className="mx-auto flex max-w-7xl flex-col gap-5 pt-4 md:pt-7 lg:min-h-[calc(100vh-10.5rem)] lg:justify-center">
        <div className="glass hero-card w-full rounded-[1.9rem] p-5 md:rounded-[2.4rem] md:p-8 lg:p-10">
          <p className="inline-flex rounded-full border border-white/60 bg-white/50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--accent-dark)] md:text-sm">
            {page.eyebrow}
          </p>
          <h1 className="hero-title mt-6 max-w-[920px] text-balance text-[2.55rem] font-semibold md:text-6xl lg:text-7xl xl:text-[5rem]">
            {page.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg font-medium leading-8 text-[var(--text-soft)] md:text-xl md:leading-9">
            {page.subtitle}
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="#lead"
              className="glass-button-strong inline-flex min-h-12 items-center justify-center rounded-2xl px-6 text-sm font-semibold transition"
            >
              РџРѕР»СѓС‡РёС‚СЊ СЂР°СЃС‡С‘С‚
            </a>
            <a
              href="#details"
              className="glass-button inline-flex min-h-12 items-center justify-center rounded-2xl px-6 text-sm font-semibold transition"
            >
              РџРѕРґСЂРѕР±РЅРµРµ
            </a>
          </div>

          <div className="mt-7 grid max-w-[920px] gap-3 sm:grid-cols-3">
            <StatCard value="РѕР±СЉРµРєС‚" label="СЃРјРѕС‚СЂРёРј С‚РёРї, РїР»РѕС‰Р°РґСЊ, РїРѕС‚РѕРє Рё СЂРёСЃРєРѕРІС‹Рµ Р·РѕРЅС‹" />
            <StatCard value="Р·РѕРЅР°" label="СѓС‡РёС‚С‹РІР°РµРј РЎРµРІР°СЃС‚РѕРїРѕР»СЊ, РЎРёРјС„РµСЂРѕРїРѕР»СЊ, Р®Р‘Рљ Рё Р»РѕРіРёСЃС‚РёРєСѓ" />
            <StatCard value="СЂРµР¶РёРј" label="РїРѕРґР±РёСЂР°РµРј Р·Р°РїСѓСЃРє, РґРѕРіРѕРІРѕСЂ, СЃРµР·РѕРЅ РёР»Рё СѓСЃРёР»РµРЅРёРµ" />
          </div>
        </div>

        <div className="glass w-full rounded-[1.9rem] p-4 md:rounded-[2.2rem] md:p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent-dark)] md:text-sm">
            Р§С‚Рѕ РІР°Р¶РЅРѕ
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {page.bullets.map((item) => (
              <div key={item} className="glass-soft rounded-3xl px-5 py-4 text-sm font-semibold leading-6 md:text-base">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Section id="details" eyebrow="РќР°РїСЂР°РІР»РµРЅРёРµ" title={page.cardsTitle} text={page.cardsText}>
        <CardGrid>
          {page.cards.map((item) => (
            <GlassCard key={item.title} title={item.title} text={item.text} label={item.price} />
          ))}
        </CardGrid>
      </Section>

      <Section
        id="lead"
        eyebrow="Р Р°СЃС‡С‘С‚"
        title="Р—Р°РїСЂРѕСЃРёС‚СЊ РїСЂРµРґРІР°СЂРёС‚РµР»СЊРЅС‹Р№ РґРёР°РїР°Р·РѕРЅ"
        text="РћРїРёС€РёС‚Рµ РѕР±СЉРµРєС‚, РіРѕСЂРѕРґ, РїР»РѕС‰Р°РґСЊ, Р·РѕРЅС‹ СЂРёСЃРєР° Рё СЃСЂРѕС‡РЅРѕСЃС‚СЊ. РЎР»РµРґСѓСЋС‰РёРј С€Р°РіРѕРј РїРѕРґРєР»СЋС‡РёРј РѕС‚РїСЂР°РІРєСѓ РІ CRM."
      >
        <LeadForm />
      </Section>
    </SiteShell>
  );
}