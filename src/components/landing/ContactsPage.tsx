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
          <div className="glass-soft rounded-[1.8rem] p-5">
            <p className="text-sm font-bold text-[var(--accent-dark)]">Связь</p>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.04em]">{company.name}</h2>
            <div className="mt-5 grid gap-3 text-lg font-semibold">
              <a href={company.phoneHref}>{company.phone}</a>
              <a href={company.telegramHref} target="_blank" rel="noreferrer">
                {company.telegram}
              </a>
              <p>{company.city}</p>
            </div>
          </div>
          <LeadForm />
        </div>
      </Section>
    </SiteShell>
  );
}