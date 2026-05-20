import Link from 'next/link';
import { benefits, home, pages, prices, products } from '@/shared/data/site';
import { SiteShell } from './SiteShell';
import { CardGrid, GlassCard, Section, StatCard } from './UI';
import { LeadForm } from './LeadForm';

export function HomePage() {
  return (
    <SiteShell background={home.background}>
      <section className="mx-auto grid max-w-7xl gap-5 pt-4 md:pt-7 lg:min-h-[calc(100vh-10.5rem)] lg:grid-cols-[minmax(0,1.05fr)_minmax(340px,0.55fr)] lg:items-center">
        <div className="glass hero-card rounded-[1.9rem] p-5 md:rounded-[2.4rem] md:p-8 lg:p-10">
          <p className="inline-flex rounded-full border border-white/60 bg-white/50 px-4 py-2 text-xs font-black uppercase tracking-[0.12em] text-[var(--accent-dark)] md:text-sm">
            {home.eyebrow}
          </p>
          <h1 className="hero-title mt-6 text-balance text-[2.7rem] font-black md:text-6xl lg:text-7xl xl:text-[5.25rem]">
            {home.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg font-semibold leading-8 text-[var(--text-soft)] md:text-xl md:leading-9">
            {home.subtitle}
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="#lead"
              className="inline-flex min-h-12 items-center justify-center rounded-2xl bg-[var(--accent)] px-6 text-sm font-black text-white shadow-xl shadow-emerald-900/10 transition hover:-translate-y-0.5 hover:bg-[var(--accent-dark)]"
            >
              Получить расчёт
            </a>
            <Link
              href="/sanitarnoe-soprovozhdenie/"
              className="inline-flex min-h-12 items-center justify-center rounded-2xl border border-white/60 bg-white/45 px-6 text-sm font-black transition hover:bg-white/68"
            >
              Как работаем
            </Link>
          </div>

          <div className="mt-7 grid gap-3 sm:grid-cols-3">
            <StatCard value="15 мин" label="предварительный расчёт после сбора данных" />
            <StatCard value="B2B" label="гостиницы, общепит, склады и сезонные зоны" />
            <StatCard value="договор" label="акты, журнал, график и зона ответственности" />
          </div>
        </div>

        <div className="glass rounded-[1.9rem] p-4 md:rounded-[2.2rem] md:p-5">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-[var(--accent-dark)] md:text-sm">
            Для кого
          </p>
          <div className="mt-4 grid gap-3">
            {home.bullets.map((item) => (
              <div key={item} className="glass-soft rounded-3xl px-5 py-4 text-sm font-black leading-6 md:text-base">
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
        text="Клиент покупает не просто обработку, а спокойный запуск объекта, регулярный контроль, документы и снижение управленческого риска."
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
            <Link key={page.href} href={page.href} className="glass-soft rounded-[1.5rem] p-5 transition duration-300 hover:-translate-y-1 hover:bg-white/46 md:rounded-[1.75rem] md:p-6">
              <p className="inline-flex rounded-full bg-[var(--accent-light)] px-3 py-1 text-xs font-black text-[var(--accent-dark)]">
                {page.eyebrow}
              </p>
              <h3 className="mt-4 text-2xl font-black tracking-[-0.035em]">{page.navLabel}</h3>
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
            <div key={name} className="glass-soft flex flex-col gap-2 rounded-3xl px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
              <span className="font-bold leading-6">{name}</span>
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