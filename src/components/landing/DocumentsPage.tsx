import { documents } from '@/shared/data/site';
import { SiteShell } from './SiteShell';
import { CardGrid, GlassCard, Section } from './UI';
import { LeadForm } from './LeadForm';

export function DocumentsPage() {
  return (
    <SiteShell background={documents.background}>
      <section className="mx-auto flex max-w-7xl flex-col gap-4 pt-3 md:gap-5 md:pt-5">
        <div className="glass hero-card w-full rounded-[1.75rem] p-5 md:rounded-[2.25rem] md:p-7 lg:p-9">
          <p className="inline-flex rounded-full border border-white/60 bg-white/50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--accent-dark)] md:text-sm">
            {documents.eyebrow}
          </p>
          <h1 className="hero-title mt-6 max-w-[980px] text-balance text-[2.35rem] font-semibold md:text-[3.45rem] lg:text-[4.25rem] xl:text-[4.55rem]">
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
              Смотреть документы
            </a>
            <a
              href="#lead"
              className="glass-button inline-flex min-h-12 items-center justify-center rounded-2xl px-6 text-sm font-semibold transition"
            >
              Запросить пакет
            </a>
          </div>
        </div>

        <div className="glass w-full rounded-[1.75rem] p-4 md:rounded-[2.05rem] md:p-5 lg:p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent-dark)] md:text-sm">
            Что будет в разделе
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
        eyebrow="Документальная база"
        title="Пакет документов для клиента и проверяющих"
        text="Сейчас раздел подготовлен как отдельная витрина доверия. Когда будут финальные файлы, добавим кнопки скачивания, превью PDF и реквизиты документов."
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
        eyebrow="Важно"
        title="Документы должны быть актуальными"
        text="Перед публикацией сканов и номеров документов нужно проверить актуальность, сроки действия, реквизиты компании и состав работ, которые реально закрывает каждый документ."
      />

      <Section
        id="lead"
        eyebrow="Запрос"
        title="Запросить пакет документов под объект"
        text="Для B2B-клиентов можно подготовить договор, приложения, график визитов, акты и перечень документов, которые будут сопровождать работы."
      >
        <LeadForm />
      </Section>
    </SiteShell>
  );
}