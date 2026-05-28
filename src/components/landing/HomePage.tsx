import Link from 'next/link';
import { home, pages, prices, products } from '@/shared/data/site';
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

const caseItems = [
  {
    title: 'Мини-отель перед сезоном',
    label: 'запуск сезона',
    text: 'Проверка номеров, технических помещений, кухни, прачечной и территории. Стартовая обработка, рекомендации персоналу и график профилактических визитов.',
  },
  {
    title: 'Кафе с кухней и складом',
    label: 'общепит',
    text: 'Контроль кухни, зоны хранения, мойки, мусорной точки и разгрузки. Подбор режима так, чтобы работы не мешали производственному процессу.',
  },
  {
    title: 'Продуктовый склад',
    label: 'склад',
    text: 'Осмотр периметра, ворот, стеллажных зон, подсобок и внешнего контура. Настройка контроля грызунов и регулярного документального сопровождения.',
  },
  {
    title: 'Пляжный комплекс',
    label: 'сезонный объект',
    text: 'Подготовка к потоку гостей: санитарные зоны, кафе, подсобные помещения, контейнерная площадка и территория с повышенной нагрузкой.',
  },
  {
    title: 'Гостевой дом с территорией',
    label: 'гостиничный объект',
    text: 'Профилактика насекомых и грызунов в жилых, технических и внешних зонах. Отдельное внимание — подвалу, кухне, двору и местам хранения.',
  },
  {
    title: 'Коммерческий объект с подвалом',
    label: 'зоны риска',
    text: 'Разделение объекта на критические зоны, стартовая обработка, контроль точек проникновения и рекомендации по снижению повторных обращений.',
  },
];

const reviewItems = [
  {
    role: 'Управляющий мини-отеля',
    text: 'Стало понятно, какие зоны нужно контролировать до сезона, а какие держать на регулярном графике. Удобно, что после работ остаются документы и понятная история визитов.',
  },
  {
    role: 'Администратор ресторана',
    text: 'Нам важна была работа без остановки кухни и без хаоса для персонала. Зоны риска разобрали по шагам, график сделали понятным, документы закрыли без лишних вопросов.',
  },
  {
    role: 'Ответственный за склад',
    text: 'Раньше реагировали только после проблемы. После обследования появился нормальный внешний контур, контроль разгрузки и понятная схема профилактики.',
  },
];

const faqItems = [
  {
    question: 'Сколько стоит обработка объекта?',
    answer: 'Стоимость зависит от площади, типа объекта, количества рисковых зон, срочности, частоты визитов и формата сопровождения. Поэтому сначала собираем вводные, а затем даём предварительный диапазон.',
  },
  {
    question: 'Можно ли работать без остановки гостиницы, кухни или склада?',
    answer: 'Во многих случаях работы можно спланировать по зонам и времени, чтобы не мешать гостям, персоналу и производственному процессу. Ограничения зависят от объекта и выбранного режима обработки.',
  },
  {
    question: 'Что входит в договорное сопровождение?',
    answer: 'Обычно это график визитов, контроль критических зон, профилактические мероприятия, акты, журнал работ, рекомендации и понятная зона ответственности подрядчика.',
  },
  {
    question: 'Какие документы получает клиент?',
    answer: 'По объекту могут оформляться договор, акты выполненных работ, журнал визитов, рекомендации, регламент подготовки зон и иные документы, необходимые для B2B-сопровождения.',
  },
  {
    question: 'Как часто нужны плановые визиты?',
    answer: 'Частота зависит от назначения объекта, сезона, потока людей, пищевых зон, внешнего контура и истории проблем. Для сезонных объектов график обычно усиливается перед запуском и в пиковые периоды.',
  },
  {
    question: 'Работаете по Крыму или только в Севастополе?',
    answer: 'Основная зона работы — Севастополь и Крым. Логистика и стоимость зависят от города, удалённости, площади объекта и требуемой срочности.',
  },
  {
    question: 'Что подготовить перед обращением?',
    answer: 'Желательно указать город, тип объекта, площадь, проблемные зоны, срочность, сезонность, наличие кухни или склада и желаемый формат: разовый запуск, сезон или регулярный договор.',
  },
  {
    question: 'Что делать, если проблема возвращается?',
    answer: 'Повторная проблема чаще всего означает, что нужно смотреть не только точку обработки, но и причины: входы, хранение, мусорную зону, влажность, подвал, соседние помещения и внешний контур.',
  },
];

const processItems = [
  {
    title: 'Собираем параметры объекта',
    text: 'Уточняем город, тип объекта, площадь, поток людей, рисковые зоны, текущую проблему и желаемый формат работ.',
  },
  {
    title: 'Оцениваем зоны риска',
    text: 'Смотрим кухню, хранение, подсобные помещения, подвал, мусорные зоны, разгрузку, территорию и внешний контур.',
  },
  {
    title: 'Подбираем режим работ',
    text: 'Предлагаем запуск, сезонное сопровождение, регулярный договор или усиленный режим для критичных объектов.',
  },
];

const directionItems = [
  ...pages,
  {
    href: '/litsenzii/',
    eyebrow: 'Документы и допуск',
    navLabel: 'Лицензии',
    subtitle: 'Выписки, лицензии и документы, которые подтверждают право выполнять санитарные работы и сопровождать B2B-объекты.',
  },
  {
    href: '/kontakty/',
    eyebrow: 'Расчёт и обращение',
    navLabel: 'Контакты',
    subtitle: 'Раздел для подготовки вводных по объекту: город, площадь, зоны риска, срочность и формат санитарного сопровождения.',
  },
];

const benefitItems = [
  {
    title: 'Не продаём хаотичный разовый выезд — выстраиваем режим контроля',
    text: 'Объект получает понятный порядок: обследование, обработка, профилактика, график визитов и контроль повторных рисков.',
  },
  {
    title: 'Считаем цену по логике: объект, зона, риски, частота и SLA',
    text: 'Стоимость зависит от площади, назначения помещений, сезонной нагрузки, внешнего контура и требуемой скорости реагирования.',
  },
  {
    title: 'Работаем с B2B, сезонными и коммерческими объектами Крыма',
    text: 'Подходим к задаче как к управлению объектом: учитываем поток гостей, пищевые зоны, хранение, персонал и репутационные риски.',
  },
  {
    title: 'Даём договор, акты, журнал и понятную зону ответственности',
    text: 'Клиент видит, какие зоны обслуживаются, когда выполнялись работы, какие документы закрывают визиты и кто отвечает за контроль.',
  },
  {
    title: 'Помогаем спокойно войти в сезон и пройти его без санитарных сбоев',
    text: 'Перед запуском проверяем критические зоны, проводим стартовые мероприятия и задаём регулярность контроля на период нагрузки.',
  },
  {
    title: 'Фокусируемся на запуске, сопровождении и продлении договора',
    text: 'Цель — не одиночная обработка, а стабильное санитарное сопровождение объекта с прогнозируемым бюджетом и графиком.',
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
          <h1 className="hero-title mt-6 max-w-[980px] text-balance text-[2.35rem] font-semibold md:text-[3.45rem] lg:text-[4.25rem] xl:text-[4.55rem]">
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
          {processItems.map((item) => (
            <ProcessStep
              key={item.title}
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
          {benefitItems.map((item) => (
            <GlassCard key={item.title} title={item.title} text={item.text} />
          ))}
        </CardGrid>
      </Section>

      <Section
        eyebrow="Наши работы"
        title="Примеры задач, которые закрываем на объектах"
        text="Не публикуем названия объектов без разрешения клиентов, поэтому показываем типовые сценарии: какие зоны смотрим, что делаем и какой результат нужен владельцу или управляющему."
      >
        <CardGrid>
          {caseItems.map((item) => (
            <GlassCard key={item.title} title={item.title} text={item.text} label={item.label} />
          ))}
        </CardGrid>
      </Section>

      <Section
        eyebrow="Отзывы"
        title="Что отмечают клиенты после работ"
        text="Для коммерческих объектов важны не громкие обещания, а спокойная работа: понятный график, документы, контроль зон риска и отсутствие хаоса в сезон."
      >
        <div className="review-grid">
          {reviewItems.map((item) => (
            <article key={item.role} className="review-card glass-soft">
              <p className="review-card__quote">“{item.text}”</p>
              <p className="review-card__role">{item.role}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="FAQ"
        title="Частые вопросы по санитарному сопровождению"
        text="Собрали основные вопросы, которые обычно возникают перед расчётом, запуском объекта или переходом на регулярное обслуживание."
      >
        <div className="faq-list">
          {faqItems.map((item) => (
            <details key={item.question} className="faq-item glass-soft">
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Разделы"
        title="Основные направления"
        text="Разделы помогают быстро выбрать нужный сценарий: запуск и сопровождение объекта, дезинсекция, дератизация, общепит и склады, документы и обращение за расчётом."
      >
        <CardGrid>
          {directionItems.map((page) => (
            <Link key={page.href} href={page.href} className="glass-soft rounded-[1.5rem] p-5 transition duration-300 hover:-translate-y-1 hover:bg-white/46 md:rounded-[1.75rem] md:p-6">
              <p className="inline-flex rounded-full bg-[var(--accent-light)] px-3 py-1 text-xs font-semibold text-[var(--accent-dark)]">
                {page.eyebrow}
              </p>
              <h3 className="card-title mt-4 text-[1.35rem] font-semibold tracking-[-0.025em] md:text-[1.45rem]">{page.navLabel}</h3>
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
        eyebrow="Вводные для расчёта"
        title="Подготовить предварительный расчёт"
        text="Для расчёта нужны 7 параметров: город, тип объекта, площадь, рисковые зоны, характер задачи, формат работ и срочность."
      >
        <LeadForm />
      </Section>
    </SiteShell>
  );
}