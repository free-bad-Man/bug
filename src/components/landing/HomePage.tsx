import Link from 'next/link';
import { benefits, home, pages, prices, products } from '@/shared/data/site';
import { SiteShell } from './SiteShell';
import { CardGrid, GlassCard, Section } from './UI';
import { LeadForm } from './LeadForm';

export function HomePage() {
  return (
    <SiteShell background={home.background}>
      <section className="mx-auto grid max-w-7xl gap-6 pt-8 lg:min-h-[calc(100vh-12rem)] lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="glass rounded-[2.2rem] p-6 md:p-8 lg:p-10">
          <p className="inline-flex rounded-full border border-white/60 bg-white/48 px-4 py-2 text-sm font-bold text-[var(--accent-dark)]">
            {home.eyebrow}
          </p>
          <h1 className="mt-6 text-balance text-4xl font-black leading-[0.96] tracking-[-0.06em] md:text-6xl lg:text-7xl">
            {home.title}
          </h1>
          <p className="mt-6 max-w-3xl text-xl leading-9 text-[var(--muted)]">
            {home.subtitle}
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#lead"
              className="rounded-2xl bg-[var(--accent)] px-6 py-4 text-sm font-bold text-white shadow-xl shadow-emerald-900/10 transition hover:bg-[var(--accent-dark)]"
            >
              Получить расчёт
            </a>
            <Link
              href="/sanitarnoe-soprovozhdenie/"
              className="rounded-2xl border border-white/60 bg-white/45 px-6 py-4 text-sm font-bold transition hover:bg-white/65"
            >
              Как работаем
            </Link>
          </div>
        </div>

        <div className="glass rounded-[2.2rem] p-5 md:p-6">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--accent-dark)]">
            Для кого
          </p>
          <div className="mt-5 grid gap-3">
            {home.bullets.map((item) => (
              <div key={item} className="glass-soft rounded-3xl px-5 py-4 font-semibold">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Section
        eyebrow="Продукты"
        title="Запуск, сопровождение и регулярная защита"
        text="Основная модель проекта — не разовый дешёвый выезд, а понятная цепочка: запуск объекта, сопровождение сезона, продление договора."
      >
        <CardGrid>
          {products.map((item) => (
            <GlassCard key={item.title} title={item.title} text={item.text} label={item.price} />
          ))}
        </CardGrid>
      </Section>

      <Section
        eyebrow="Преимущества"
        title="Санитарная защита без хаоса и случайных цен"
      >
        <CardGrid>
          {benefits.map((item) => (
            <GlassCard key={item} title={item} text="Работаем спокойным B2B-языком: объект, зона, риски, график, SLA, документы и зона ответственности." />
          ))}
        </CardGrid>
      </Section>

      <Section
        eyebrow="Разделы"
        title="Основные направления"
        text="Каждый раздел получает свой статичный фон и прозрачные стеклянные блоки."
      >
        <CardGrid>
          {pages.map((page) => (
            <Link key={page.href} href={page.href} className="glass-soft rounded-[1.6rem] p-5 transition hover:-translate-y-1 hover:bg-white/42">
              <p className="text-sm font-bold text-[var(--accent-dark)]">{page.eyebrow}</p>
              <h3 className="mt-3 text-2xl font-bold tracking-[-0.03em]">{page.navLabel}</h3>
              <p className="mt-4 text-base leading-7 text-[var(--muted)]">{page.subtitle}</p>
            </Link>
          ))}
        </CardGrid>
      </Section>

      <Section
        eyebrow="Стоимость"
        title="Ориентиры для экспресс-расчёта"
        text="Финальная цена уточняется по типу объекта, зоне, рисковым помещениям, частоте визитов, SLA и внешнему контуру."
      >
        <div className="grid gap-3 md:grid-cols-2">
          {prices.map(([name, price]) => (
            <div key={name} className="glass-soft flex items-center justify-between gap-4 rounded-3xl px-5 py-4">
              <span className="font-semibold">{name}</span>
              <span className="shrink-0 font-black text-[var(--accent-dark)]">{price}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="lead"
        eyebrow="Заявка"
        title="Получить предварительный расчёт"
        text="Для расчёта нужны 7 параметров: город, тип объекта, площадь, рисковые зоны, характер задачи, формат работ и срочность."
      >
        <LeadForm />
      </Section>
    </SiteShell>
  );
}