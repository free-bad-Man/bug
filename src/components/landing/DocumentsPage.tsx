import { documents } from '@/shared/data/site';
import { SiteShell } from './SiteShell';
import { CardGrid, GlassCard, Section } from './UI';

const licenseDocuments = [
  {
    title: 'Выписка из реестра лицензий',
    status: 'Действующая лицензия',
    number: '78.01.01.003.Л.000006.01.26',
    erul: 'ЕРУЛ № Л064-00111-78/04225362',
    date: '26.01.2026',
    order: 'Приказ № 15 от 26.01.2026',
    authority:
      'Межрегиональное управление Роспотребнадзора по городу Санкт-Петербург и Ленинградской области',
    holder: 'ИП Гордеев Тимофей Павлович',
    address: '299055, г. Севастополь, ул. Генерала Хрюкина, 10',
    activity:
      'Дезинфекция, дезинсекция и дератизация в целях санитарно-эпидемиологического благополучия населения.',
    works: ['Дератизация', 'Дезинсекция', 'Дезинфекция'],
    pdfHref: '/docs/license-extract-78-01-01-003-l-000006-01-26.pdf',
    previewSrc: '/docs/license-extract-78-01-01-003-l-000006-01-26-preview.png',
  },
];

const trustItems = [
  {
    title: 'Легальный допуск',
    text: 'Клиент видит не обещание на словах, а конкретную выписку из реестра лицензий с номером, датой и статусом.',
  },
  {
    title: 'Профильные работы',
    text: 'Документ закрывает ключевые направления проекта: дератизацию, дезинсекцию и дезинфекцию.',
  },
  {
    title: 'Адрес осуществления деятельности',
    text: 'В выписке указан адрес места осуществления лицензируемого вида деятельности в Севастополе.',
  },
];

const allowedWorks = [
  {
    title: 'Дезинсекция',
    text: 'Работы против насекомых и профилактика рисков для гостиниц, общепита, складов и сезонных объектов.',
  },
  {
    title: 'Дератизация',
    text: 'Контроль грызунов, внешний контур, складские, разгрузочные, технические и пищевые зоны.',
  },
  {
    title: 'Дезинфекция',
    text: 'Профильные мероприятия санитарной обработки в рамках лицензируемого вида деятельности.',
  },
];

const clientDocumentFlow = [
  {
    title: 'Лицензия',
    text: 'Подтверждает допуск к профильным работам и снимает вопрос легальности подрядчика.',
  },
  {
    title: 'Договор',
    text: 'Фиксирует объект, формат обслуживания, график, зоны ответственности и порядок взаимодействия.',
  },
  {
    title: 'Акты',
    text: 'Закрывающие документы по выполненным работам для бухгалтерии, управляющего и проверяющих.',
  },
  {
    title: 'Журнал работ',
    text: 'История визитов, отметки по объекту, критические зоны и регулярность санитарного контроля.',
  },
  {
    title: 'Регламент',
    text: 'Порядок подготовки объекта, ограничения, рекомендации и действия ответственных лиц.',
  },
];

const b2bReasons = [
  'Для гостиниц и гостевых домов документальная база важна при запуске сезона и работе с гостями.',
  'Для общепита и складов документы помогают поддерживать управляемый санитарный режим.',
  'Для управляющих компаний и коммерческих объектов лицензия снижает риск работы с случайным подрядчиком.',
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
            Лицензии, выписки, договорные документы, акты и журналы работ — всё, что помогает клиенту убедиться в легальности подрядчика и прозрачности санитарного сопровождения.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="#licenses"
              className="glass-button-strong inline-flex min-h-12 items-center justify-center rounded-2xl px-6 text-sm font-semibold transition"
            >
              Смотреть лицензии
            </a>
            <a
              href="#document-flow"
              className="glass-button inline-flex min-h-12 items-center justify-center rounded-2xl px-6 text-sm font-semibold transition"
            >
              Документы по работам
            </a>
          </div>
        </div>

        <div className="glass w-full rounded-[1.75rem] p-4 md:rounded-[2.05rem] md:p-5 lg:p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent-dark)] md:text-sm">
            Документальный центр
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
        text="Раздел показывает реальные документы с визуальным предпросмотром: клиент сразу видит выписку, основные реквизиты и может открыть или скачать PDF."
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
                      <dt>Приказ</dt>
                      <dd>{item.order}</dd>
                    </div>
                    <div>
                      <dt>Лицензиат</dt>
                      <dd>{item.holder}</dd>
                    </div>
                    <div>
                      <dt>Адрес деятельности</dt>
                      <dd>{item.address}</dd>
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
                    Выписка носит информационный характер: после её составления в реестр лицензий могли быть внесены изменения. Актуальность документа проверяется по действующему реестру.
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Что подтверждает"
        title="Лицензия закрывает главный вопрос доверия"
        text="Для B2B-клиента важно понимать, что подрядчик работает не как случайный исполнитель, а как лицензированный участник санитарного процесса."
      >
        <CardGrid>
          {trustItems.map((item) => (
            <GlassCard key={item.title} title={item.title} text={item.text} />
          ))}
        </CardGrid>
      </Section>

      <Section
        eyebrow="Разрешённые работы"
        title="Направления, указанные в лицензии"
        text="На странице отдельно показываем не только сам PDF, но и понятную расшифровку работ, которые входят в профиль санитарной службы."
      >
        <CardGrid>
          {allowedWorks.map((item) => (
            <GlassCard key={item.title} title={item.title} text={item.text} />
          ))}
        </CardGrid>
      </Section>

      <Section
        id="document-flow"
        eyebrow="Документы после работ"
        title="Клиенту нужен не только выезд, но и документальный след"
        text="Для коммерческого объекта важно заранее понимать, какие документы будут сопровождать санитарные работы и кто отвечает за контроль."
      >
        <div className="document-flow">
          {clientDocumentFlow.map((item, index) => (
            <article key={item.title} className="document-flow__item glass-soft">
              <p className="document-flow__number">{String(index + 1).padStart(2, '0')}</p>
              <h3 className="card-title mt-4 text-[1.25rem] font-semibold tracking-[-0.025em] md:text-[1.35rem]">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-[var(--muted)] md:text-base md:leading-7">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Почему это важно для B2B"
        title="Документы снижают управленческий риск"
        text="Когда объект работает с гостями, продуктами, хранением или сезонным потоком, санитарное сопровождение должно быть подтверждено документально."
      >
        <div className="grid gap-3">
          {b2bReasons.map((item) => (
            <div key={item} className="glass-soft rounded-3xl px-5 py-4 text-base font-medium leading-7 text-[var(--text-soft)]">
              {item}
            </div>
          ))}
        </div>
      </Section>
    </SiteShell>
  );
}