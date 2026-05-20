import { company, home } from '@/shared/data/site';
import { SiteShell } from './SiteShell';
import { Section } from './UI';
import { LeadForm } from './LeadForm';

export function ContactsPage() {
  return (
    <SiteShell background={home.background}>
      <Section
        eyebrow="Контакты"
        title="Запросить расчёт или аудит объекта"
        text="Базовая точка — Севастополь. Работаем по Крыму с зональной логикой: Севастополь, Симферополь, ЮБК, Саки, Евпатория и другие направления по экономике объекта."
      >
        <div className="grid gap-4 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="glass-soft rounded-[1.7rem] p-5 md:rounded-[1.9rem] md:p-6">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[var(--accent-dark)]">
              Связь
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] md:text-4xl">
              {company.name}
            </h2>
            <p className="mt-4 text-base leading-7 text-[var(--muted)]">
              Напишите или позвоните. Для предварительного расчёта нужны город, тип объекта, площадь, зоны риска и формат работ.
            </p>
            <div className="mt-6 grid gap-3 text-base font-black">
              <a className="rounded-2xl bg-white/42 px-4 py-3 transition hover:bg-white/62" href={company.phoneHref}>
                {company.phone}
              </a>
              <a className="rounded-2xl bg-white/42 px-4 py-3 transition hover:bg-white/62" href={company.telegramHref} target="_blank" rel="noreferrer">
                {company.telegram}
              </a>
              <p className="rounded-2xl bg-white/42 px-4 py-3">{company.city}</p>
            </div>
          </div>
          <LeadForm />
        </div>
      </Section>
    </SiteShell>
  );
}