import { documents } from '@/shared/data/site';
import { SiteShell } from './SiteShell';
import { CardGrid, GlassCard, Section } from './UI';
import { LeadForm } from './LeadForm';

export function DocumentsPage() {
  return (
    <SiteShell background={documents.background}>
      <section className="mx-auto flex max-w-7xl flex-col gap-5 pt-4 md:pt-7 lg:min-h-[calc(100vh-10.5rem)] lg:justify-center">
        <div className="glass hero-card w-full rounded-[1.9rem] p-5 md:rounded-[2.4rem] md:p-8 lg:p-10">
          <p className="inline-flex rounded-full border border-white/60 bg-white/50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--accent-dark)] md:text-sm">
            {documents.eyebrow}
          </p>
          <h1 className="hero-title mt-6 max-w-[920px] text-balance text-[2.55rem] font-semibold md:text-6xl lg:text-7xl xl:text-[5rem]">
            {documents.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg font-medium leading-8 text-[var(--text-soft)] md:text-xl md:leading-9">
            {documents.subtitle}
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="#documents"
              className="glass-button-strong inline-flex min-h-12 items-center justify-center rounded-2xl px-6 text-sm font-semibold transition"
            >
              РЎРјРѕС‚СЂРµС‚СЊ РґРѕРєСѓРјРµРЅС‚С‹
            </a>
            <a
              href="#lead"
              className="glass-button inline-flex min-h-12 items-center justify-center rounded-2xl px-6 text-sm font-semibold transition"
            >
              Р—Р°РїСЂРѕСЃРёС‚СЊ РїР°РєРµС‚
            </a>
          </div>
        </div>

        <div className="glass w-full rounded-[1.9rem] p-4 md:rounded-[2.2rem] md:p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent-dark)] md:text-sm">
            Р§С‚Рѕ Р±СѓРґРµС‚ РІ СЂР°Р·РґРµР»Рµ
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {documents.bullets.map((item) => (
              <div key={item} className="glass-soft rounded-3xl px-5 py-4 text-sm font-semibold leading-6 md:text-base">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Section
        id="documents"
        eyebrow="Р”РѕРєСѓРјРµРЅС‚Р°Р»СЊРЅР°СЏ Р±Р°Р·Р°"
        title="РџР°РєРµС‚ РґРѕРєСѓРјРµРЅС‚РѕРІ РґР»СЏ РєР»РёРµРЅС‚Р° Рё РїСЂРѕРІРµСЂСЏСЋС‰РёС…"
        text="РЎРµР№С‡Р°СЃ СЂР°Р·РґРµР» РїРѕРґРіРѕС‚РѕРІР»РµРЅ РєР°Рє РѕС‚РґРµР»СЊРЅР°СЏ РІРёС‚СЂРёРЅР° РґРѕРІРµСЂРёСЏ. РљРѕРіРґР° Р±СѓРґСѓС‚ С„РёРЅР°Р»СЊРЅС‹Рµ С„Р°Р№Р»С‹, РґРѕР±Р°РІРёРј РєРЅРѕРїРєРё СЃРєР°С‡РёРІР°РЅРёСЏ, РїСЂРµРІСЊСЋ PDF Рё СЂРµРєРІРёР·РёС‚С‹ РґРѕРєСѓРјРµРЅС‚РѕРІ."
      >
        <CardGrid>
          {documents.items.map((item) => (
            <GlassCard
              key={item.title}
              title={item.title}
              text={item.text}
              label={item.status}
            />
          ))}
        </CardGrid>
      </Section>

      <Section
        eyebrow="Р’Р°Р¶РЅРѕ"
        title="Р”РѕРєСѓРјРµРЅС‚С‹ РґРѕР»Р¶РЅС‹ Р±С‹С‚СЊ Р°РєС‚СѓР°Р»СЊРЅС‹РјРё"
        text="РџРµСЂРµРґ РїСѓР±Р»РёРєР°С†РёРµР№ СЃРєР°РЅРѕРІ Рё РЅРѕРјРµСЂРѕРІ РґРѕРєСѓРјРµРЅС‚РѕРІ РЅСѓР¶РЅРѕ РїСЂРѕРІРµСЂРёС‚СЊ Р°РєС‚СѓР°Р»СЊРЅРѕСЃС‚СЊ, СЃСЂРѕРєРё РґРµР№СЃС‚РІРёСЏ, СЂРµРєРІРёР·РёС‚С‹ РєРѕРјРїР°РЅРёРё Рё СЃРѕСЃС‚Р°РІ СЂР°Р±РѕС‚, РєРѕС‚РѕСЂС‹Рµ СЂРµР°Р»СЊРЅРѕ Р·Р°РєСЂС‹РІР°РµС‚ РєР°Р¶РґС‹Р№ РґРѕРєСѓРјРµРЅС‚."
      />

      <Section
        id="lead"
        eyebrow="Р—Р°РїСЂРѕСЃ"
        title="Р—Р°РїСЂРѕСЃРёС‚СЊ РїР°РєРµС‚ РґРѕРєСѓРјРµРЅС‚РѕРІ РїРѕРґ РѕР±СЉРµРєС‚"
        text="Р”Р»СЏ B2B-РєР»РёРµРЅС‚РѕРІ РјРѕР¶РЅРѕ РїРѕРґРіРѕС‚РѕРІРёС‚СЊ РґРѕРіРѕРІРѕСЂ, РїСЂРёР»РѕР¶РµРЅРёСЏ, РіСЂР°С„РёРє РІРёР·РёС‚РѕРІ, Р°РєС‚С‹ Рё РїРµСЂРµС‡РµРЅСЊ РґРѕРєСѓРјРµРЅС‚РѕРІ, РєРѕС‚РѕСЂС‹Рµ Р±СѓРґСѓС‚ СЃРѕРїСЂРѕРІРѕР¶РґР°С‚СЊ СЂР°Р±РѕС‚С‹."
      >
        <LeadForm />
      </Section>
    </SiteShell>
  );
}