import { LandingPageData } from '@/shared/data/site';
import { SiteShell } from './SiteShell';
import { CardGrid, GlassCard, Section } from './UI';
import { LeadForm } from './LeadForm';

export function SectionPage({ page }: { page: LandingPageData }) {
  return (
    <SiteShell background={page.background}>
      <section className="mx-auto grid max-w-7xl gap-6 pt-8 lg:min-h-[calc(100vh-12rem)] lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="glass rounded-[2.2rem] p-6 md:p-8 lg:p-10">
          <p className="inline-flex rounded-full border border-white/60 bg-white/48 px-4 py-2 text-sm font-bold text-[var(--accent-dark)]">
            {page.eyebrow}
          </p>
          <h1 className="mt-6 text-balance text-4xl font-black leading-[0.96] tracking-[-0.06em] md:text-6xl lg:text-7xl">
            {page.title}
          </h1>
          <p className="mt-6 max-w-3xl text-xl leading-9 text-[var(--muted)]">
            {page.subtitle}
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#lead"
              className="rounded-2xl bg-[var(--accent)] px-6 py-4 text-sm font-bold text-white shadow-xl shadow-emerald-900/10 transition hover:bg-[var(--accent-dark)]"
            >
              Получить расчёт
            </a>
            <a
              href="#details"
              className="rounded-2xl border border-white/60 bg-white/45 px-6 py-4 text-sm font-bold transition hover:bg-white/65"
            >
              Подробнее
            </a>
          </div>
        </div>

        <div className="glass rounded-[2.2rem] p-5 md:p-6">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--accent-dark)]">
            Что важно
          </p>
          <div className="mt-5 grid gap-3">
            {page.bullets.map((item) => (
              <div key={item} className="glass-soft rounded-3xl px-5 py-4 font-semibold">
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