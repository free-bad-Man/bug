import { SiteShell } from '@/components/landing/SiteShell';
import { CardGrid, GlassCard, Section } from '@/components/landing/UI';
import { company, home } from '@/shared/data/site';
import { buildPageMetadata } from '@/shared/lib/metadata';

export const metadata = buildPageMetadata({
  title: 'Политика конфиденциальности',
  description:
    'Политика обработки персональных данных и порядок использования информации на сайте санитарной службы.',
  path: '/politika-konfidentsialnosti/',
  image: home.background,
});

const policyItems = [
  {
    title: 'Какие данные могут обрабатываться',
    text: 'Имя, телефон, описание объекта, город, тип объекта, площадь, зоны риска и другие сведения, которые пользователь самостоятельно указывает в форме.',
  },
  {
    title: 'Для чего нужны данные',
    text: 'Для подготовки предварительного расчёта, уточнения параметров объекта, связи с пользователем и дальнейшего сопровождения обращения.',
  },
  {
    title: 'Передача третьим лицам',
    text: 'Данные не используются для публичной публикации. Передача возможна только в случаях, необходимых для обработки обращения или предусмотренных законом.',
  },
];

export default function Page() {
  return (
    <SiteShell background={home.background}>
      <Section
        eyebrow="Документы сайта"
        title="Политика конфиденциальности"
        text={`${company.name} уважает конфиденциальность пользователей сайта. Эта страница описывает общий порядок работы с персональными данными при обращении через сайт.`}
      >
        <CardGrid>
          {policyItems.map((item) => (
            <GlassCard key={item.title} title={item.title} text={item.text} />
          ))}
        </CardGrid>
      </Section>

      <Section
        eyebrow="Обращения"
        title="Использование форм на сайте"
        text="Формы на сайте предназначены для сбора вводных по объекту: город, тип объекта, площадь, рисковые зоны, формат работ и срочность. Эти данные помогают подготовить предварительный диапазон стоимости и следующий шаг по объекту."
      />

      <Section
        eyebrow="Актуальность"
        title="Контактные данные и реквизиты"
        text="Контактные данные, реквизиты и сведения о способах связи размещаются на сайте в актуальной редакции. При изменении информации страница обновляется."
      />
    </SiteShell>
  );
}