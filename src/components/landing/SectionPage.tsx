import { LandingPageData } from '@/shared/data/site';
import { SiteShell } from './SiteShell';
import { CardGrid, GlassCard, Section, StatCard } from './UI';
import { LeadForm } from './LeadForm';

export function SectionPage({ page }: { page: LandingPageData }) {
  return (
    <SiteShell background={page.background}>
      <section className="mx-auto grid max-w-7xl gap-5 pt-4 md:pt-7 lg:min-h-[calc(100vh-10.5rem)] lg:grid-cols-[minmax(0,1.05fr)_minmax(340px,0.55fr)] lg:items-center">
        <div className="glass hero-card rounded-[1.9rem] p-5 md:rounded-[2.4rem] md:p-8 lg:p-10">
          <p className="inline-flex rounded-full border border-white/60 bg-white/50 px-4 py-2 text-xs font-black uppercase tracking-[0.12em] text-[var(--accent-dark)] md:text-sm">
            {page.eyebrow}
          </p>
          <h1 className="hero-title mt-6 text-balance text-[2.7rem] font-black md:text-6xl lg:text-7xl xl:text-[5.25rem]">
            {page.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg font-semibold leading-8 text-[var(--text-soft)] md:text-xl md:leading-9">
            {page.subtitle}
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="#lead"
              className="inline-flex min-h-12 items-center justify-center rounded-2xl bg-[var(--accent)] px-6 text-sm font-black text-white shadow-xl shadow-emerald-900/10 transition hover:-translate-y-0.5 hover:bg-[var(--accent-dark)]"
            >
              Получить расчёт
            </a>
            <a
              href="#details"
              className="inline-flex min-h-12 items-center justify-center rounded-2xl border border-white/60 bg-white/45 px-6 text-sm font-black transition hover:bg-white/68"
            >
              Подробнее
            </a>
          </div>

          <div className="mt-7 grid gap-3 sm:grid-cols-3">
            <StatCard value="объект" label="смотрим тип, площадь, поток и рисковые зоны" />
            <StatCard value="зона" label="учитываем Севастополь, Симферополь, ЮБК и логистику" />
            <StatCard value="режим" label="подбираем запуск, договор, сезон или усиление" />
          </div>
        </div>

        <div className="glass rounded-[1.9rem] p-4 md:rounded-[2.2rem] md:p-5">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-[var(--accent-dark)] md:text-sm">
            Что важно
          </p>
          <div className="mt-4 grid gap-3">
            {page.bullets.map((item) => (
              <div key={item} className="glass-soft rounded-3xl px-5 py-4 text-sm font-black leading-6 md:text-base">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Section id="details" eyebrow="Направление" title={page.cardsTitle} text={page.cardsText}>
        <CardGrid>
          {page.cards.map((item) => (
            <GlassCard key={item.title} title={item.title} text={item.text} label={item.price} />
          ))}
        </CardGrid>
      </Section>

      <Section
        id="lead"
        eyebrow="Расчёт"
        title="Запросить предварительный диапазон"
        text="Опишите объект, город, площадь, зоны риска и срочность. Следующим шагом подключим отправку в CRM."
      >
        <LeadForm />
      </Section>
    </SiteShell>
  );
}