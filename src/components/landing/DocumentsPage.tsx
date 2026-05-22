import { documents } from '@/shared/data/site';
import { SiteShell } from './SiteShell';
import { CardGrid, GlassCard, Section } from './UI';
import { LeadForm } from './LeadForm';

const licenseDocuments = [
  {
    title: 'Выписка из реестра лицензий',
    status: 'Действующая лицензия',
    number: '78.01.01.003.Л.000006.01.26',
    erul: 'ЕРУЛ № Л064-00111-78/04225362',
    date: '26.01.2026',
    authority:
      'Межрегиональное управление Роспотребнадзора по городу Санкт-Петербург и Ленинградской области',
    holder: 'ИП Гордеев Тимофей Павлович',
    activity:
      'Дезинфекция, дезинсекция и дератизация в целях санитарно-эпидемиологического благополучия населения.',
    works: ['Дератизация', 'Дезинсекция', 'Дезинфекция'],
    pdfHref: '/docs/license-extract-78-01-01-003-l-000006-01-26.pdf',
    previewSrc: '/docs/license-extract-78-01-01-003-l-000006-01-26-preview.png',
  },
];

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
              href="#licenses"
              className="glass-button-strong inline-flex min-h-12 items-center justify-center rounded-2xl px-6 text-sm font-semibold transition"
            >
              Смотреть лицензии
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
        id="licenses"
        eyebrow="Лицензия"
        title="Документальное подтверждение допуска к работам"
        text="В разделе размещаем реальные документы с визуальным предпросмотром: клиент сразу видит документ, реквизиты и может открыть или скачать PDF."
      >
        <div className="grid gap-5">
          {licenseDocuments.map((item) => (
            <article key={item.number} className="document-card glass-soft rounded-[1.6rem] p-4 md:rounded-[1.9rem] md:p-5 lg:p-6">
              <div className="grid gap-5 lg:grid-cols-[minmax(300px,0.68fr)_minmax(0,1fr)] lg:items-start">
                <a
                  className="document-preview"
                  href={item.pdfHref}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Открыть PDF: ${item.title}`}
                >
                  <img
                    className="document-preview__image"
                    src={item.previewSrc}
                    alt={`${item.title}: предпросмотр первой страницы`}
                    loading="lazy"
                  />
                </a>

                <div className="min-w-0">
                  <p className="inline-flex rounded-full bg-[var(--accent-light)] px-3 py-1 text-xs font-semibold text-[var(--accent-dark)]">
                    {item.status}
                  </p>
                  <h2 className="card-title mt-4 text-[1.6rem] font-semibold leading-[1.12] tracking-[-0.03em] md:text-[2rem]">
                    {item.title}
                  </h2>

                  <dl className="document-meta mt-5 grid gap-3">
                    <div>
                      <dt>Номер лицензии</dt>
                      <dd>{item.number}</dd>
                    </div>
                    <div>
                      <dt>ЕРУЛ</dt>
                      <dd>{item.erul}</dd>
                    </div>
                    <div>
                      <dt>Дата предоставления</dt>
                      <dd>{item.date}</dd>
                    </div>
                    <div>
                      <dt>Лицензиат</dt>
                      <dd>{item.holder}</dd>
                    </div>
                    <div>
                      <dt>Лицензирующий орган</dt>
                      <dd>{item.authority}</dd>
                    </div>
                    <div>
                      <dt>Вид деятельности</dt>
                      <dd>{item.activity}</dd>
                    </div>
                  </dl>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.works.map((work) => (
                      <span key={work} className="rounded-2xl border border-white/55 bg-white/42 px-3 py-2 text-xs font-semibold text-[var(--text)]/80">
                        {work}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                    <a
                      className="glass-button-strong inline-flex min-h-12 items-center justify-center rounded-2xl px-5 text-sm font-semibold transition"
                      href={item.pdfHref}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Открыть PDF
                    </a>
                    <a
                      className="glass-button inline-flex min-h-12 items-center justify-center rounded-2xl px-5 text-sm font-semibold transition"
                      href={item.pdfHref}
                      download
                    >
                      Скачать PDF
                    </a>
                  </div>

                  <p className="mt-4 text-sm leading-6 text-[var(--muted)]">
                    Предпросмотр показывает первую страницу документа. Полная версия открывается по кнопке PDF.
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section
        id="documents"
        eyebrow="Документальная база"
        title="Пакет документов для клиента и проверяющих"
        text="Кроме лицензии, в этом разделе можно размещать договоры, приложения, регламенты, акты, журналы работ и инструкции для ответственных лиц клиента."
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
        text="Перед публикацией новых сканов и номеров документов нужно проверять сроки действия, реквизиты компании и состав работ, которые закрывает каждый документ."
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