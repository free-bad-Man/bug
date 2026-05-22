import Link from 'next/link';
import { benefits, home, pages, prices, products } from '@/shared/data/site';
import { SiteShell } from './SiteShell';
import { CardGrid, GlassCard, ProcessStep, Section, StatCard } from './UI';
import { LeadForm } from './LeadForm';

const painItems = [
  {
    title: 'Цена непонятна',
    text: 'Клиент не хочет слышать случайную цену. Ему нужен диапазон, рассчитанный по объекту, зоне, рискам и режиму работ.',
  },
  {
    title: 'Сезон нельзя сорвать',
    text: 'Для гостиниц, ресторанов и пляжных объектов санитарный сбой быстро превращается в жалобы, отзывы и управленческий хаос.',
  },
  {
    title: 'Разовый выезд не решает систему',
    text: 'Объекту нужен подрядчик, график, документы и контроль, а не аварийный вызов каждый раз после проблемы.',
  },
];

const processItems = [
  {
    title: 'Собираем 7 параметров',
    text: 'Город, тип объекта, площадь, рисковые зоны, характер задачи, формат работ и срочность.',
  },
  {
    title: 'Даём предварительный диапазон',
    text: 'Расчёт за 15 минут после минимума данных. Цена объясняется логикой объекта, а не берётся наугад.',
  },
  {
    title: 'Предлагаем следующий шаг',
    text: 'Аудит, КП, запуск объекта, сопровождение сезона или регулярный договор — по ситуации.',
  },
];

export function HomePage() {
  return (
    <SiteShell background={home.background}>
      <section className="mx-auto flex max-w-7xl flex-col gap-4 pt-3 md:gap-5 md:pt-5">
        <div className="glass hero-card w-full rounded-[1.75rem] p-5 md:rounded-[2.25rem] md:p-7 lg:p-9">
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
              Получить расчёт
            </a>
            <Link
              href="/sanitarnoe-soprovozhdenie/"
              className="glass-button inline-flex min-h-12 items-center justify-center rounded-2xl px-6 text-sm font-semibold transition"
            >
              Как работаем
            </Link>
          </div>

          <div className="mt-7 grid max-w-[920px] gap-3 sm:grid-cols-3">
            <StatCard value="15 мин" label="предварительный расчёт после сбора данных" />
            <StatCard value="B2B" label="гостиницы, общепит, склады и сезонные зоны" />
            <StatCard value="договор" label="акты, журнал, график и зона ответственности" />
          </div>
        </div>

        <div className="glass w-full rounded-[1.75rem] p-4 md:rounded-[2.05rem] md:p-5 lg:p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent-dark)] md:text-sm">
            Для кого
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
        eyebrow="Боль рынка"
        title="Объекту нужен не хаотичный выезд, а санитарная система"
        text="Клиент боится не самих вредителей, а последствий: жалоб, плохих отзывов, срыва запуска, непонятной цены и отсутствия подрядчика в сезон."
      >
        <CardGrid>
          {painItems.map((item) => (
            <GlassCard key={item.title} title={item.title} text={item.text} />
          ))}
        </CardGrid>
      </Section>

      <Section
        eyebrow="Решение"
        title="Запуск, сопровождение и регулярная защита"
        text="Основная модель проекта — понятная цепочка: подготовить объект, пройти сезон под контролем и продлить договор."
      >
        <CardGrid>
          {products.map((item) => (
            <GlassCard key={item.title} title={item.title} text={item.text} label={item.price} />
          ))}
        </CardGrid>
      </Section>

      <Section
        eyebrow="Как считаем"
        title="Предварительный расчёт за 15 минут"
        text="Мы не называем цену наугад. Расчёт строится по типу объекта, зоне, рисковым помещениям, частоте визитов, SLA и внешнему контуру."
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
        eyebrow="Преимущества"
        title="Санитарная защита без случайных цен"
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
        eyebrow="Стоимость"
        title="Ориентиры для экспресс-расчёта"
        text="Финальная цена уточняется по типу объекта, зоне, рисковым помещениям, частоте визитов, SLA и внешнему контуру."
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
        eyebrow="Заявка"
        title="Получить предварительный расчёт"
        text="Для расчёта нужны 7 параметров: город, тип объекта, площадь, рисковые зоны, характер задачи, формат работ и срочность."
      >
        <LeadForm />
      </Section>
    </SiteShell>
  );
}