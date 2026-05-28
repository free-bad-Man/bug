import { home } from '@/shared/data/site';
import { SiteShell } from './SiteShell';
import { CardGrid, GlassCard, Section } from './UI';
import { LeadForm } from './LeadForm';
import { YandexMap } from './YandexMap';

const contactCards = [
  {
    title: 'Зона работы',
    text: 'Севастополь и Крым: гостиницы, гостевые дома, общепит, склады, пляжные и сезонные объекты.',
  },
  {
    title: 'Что подготовить',
    text: 'Тип объекта, город, площадь, рисковые зоны, срочность и желаемый формат работ: запуск, сезон или договор.',
  },
  {
    title: 'Документы',
    text: 'Для B2B-объектов готовим договорной пакет, акты, журнал работ и документы по санитарному сопровождению.',
  },
];

export function ContactsPage() {
  return (
    <SiteShell background={home.background}>
      <Section
        eyebrow="Контакты"
        title="Расчёт санитарного сопровождения объекта"
        text="Оставьте основные данные по объекту: город, формат работы, площадь, критические зоны и срочность. По этим вводным можно быстрее определить объём работ, частоту визитов и документальное сопровождение."
      >
        <div className="grid gap-4 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="glass-soft rounded-[1.7rem] p-5 md:rounded-[1.9rem] md:p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent-dark)]">
              Регион работы
            </p>
            <h2 className="card-title mt-4 text-3xl font-semibold tracking-[-0.04em] md:text-4xl">
              Севастополь и Крым
            </h2>
            <p className="mt-4 text-base leading-7 text-[var(--muted)]">
              Работаем с объектами, где важны санитарный режим, репутация, документы и понятный подрядчик на сезон или договорное сопровождение.
            </p>
            <div className="mt-6 grid gap-3 text-sm font-semibold leading-6 md:text-base">
              <p className="rounded-2xl bg-white/42 px-4 py-3">Гостиницы, гостевые дома, мини-отели и санатории</p>
              <p className="rounded-2xl bg-white/42 px-4 py-3">Кафе, рестораны, кухни, пищеблоки и пекарни</p>
              <p className="rounded-2xl bg-white/42 px-4 py-3">Склады, продуктовые базы и коммерческие площади</p>
            </div>
          </div>

          <LeadForm />
        </div>
      </Section>

      <Section
        eyebrow="Перед обращением"
        title="Какие данные ускоряют расчёт"
        text="Чем точнее вводные по объекту, тем быстрее можно определить формат работ, частоту визитов и документальное сопровождение."
      >
        <CardGrid>
          {contactCards.map((item) => (
            <GlassCard key={item.title} title={item.title} text={item.text} />
          ))}
        </CardGrid>
      </Section>

      <Section
        eyebrow="Карта"
        title="География выезда"
        text="Работаем по Севастополю и Крыму. Для расчёта учитываем город, удалённость объекта, площадь, зоны риска и срочность."
      >
        <YandexMap />
      </Section>
    </SiteShell>
  );
}