import { LandingPageData } from '@/shared/data/site';
import { SiteShell } from './SiteShell';
import { CardGrid, GlassCard, Section, StatCard } from './UI';
import { LeadForm } from './LeadForm';

export function SectionPage({ page }: { page: LandingPageData }) {
  return (
    <SiteShell background={page.background}>
      <section className="mx-auto flex max-w-7xl flex-col gap-4 pt-3 md:gap-5 md:pt-5">
        <div className="glass hero-card w-full rounded-[1.75rem] p-5 md:rounded-[2.25rem] md:p-7 lg:p-9">
          <p className="inline-flex rounded-full border border-white/60 bg-white/50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--accent-dark)] md:text-sm">
            {page.eyebrow}
          </p>
          <h1 className="hero-title mt-6 max-w-[980px] text-balance text-[2.35rem] font-semibold md:text-[3.45rem] lg:text-[4.25rem] xl:text-[4.55rem]">
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
              Подготовить расчёт
            </a>
            <a
              href="#details"
              className="glass-button inline-flex min-h-12 items-center justify-center rounded-2xl px-6 text-sm font-semibold transition"
            >
              Подробнее
            </a>
          </div>

          <div className="mt-7 grid max-w-[920px] gap-3 sm:grid-cols-3">
            <StatCard value="объект" label="смотрим тип, площадь, поток и рисковые зоны" />
            <StatCard value="зона" label="учитываем Севастополь, Симферополь, ЮБК и логистику" />
            <StatCard value="режим" label="подбираем запуск, договор, сезон или усиление" />
          </div>
        </div>

        <div className="glass w-full rounded-[1.75rem] p-4 md:rounded-[2.05rem] md:p-5 lg:p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent-dark)] md:text-sm">
            Что важно
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
        title="Подготовить данные для предварительного диапазона"
        text="Для расчёта нужны город, тип объекта, площадь, зоны риска, формат работ и срочность. Эти данные помогут быстрее определить подходящий режим сопровождения."
      >
        <LeadForm />
      </Section>
    </SiteShell>
  );
}