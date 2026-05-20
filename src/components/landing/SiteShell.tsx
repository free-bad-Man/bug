import Link from 'next/link';
import type { ReactNode } from 'react';
import { company, nav } from '@/shared/data/site';

type SiteShellProps = {
  background: string;
  children: ReactNode;
};

export function SiteShell({ background, children }: SiteShellProps) {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div
        aria-hidden="true"
        className="fixed inset-0 -z-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${background})` }}
      />
      <div
        aria-hidden="true"
        className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.38),rgba(255,255,255,0.18)_42%,rgba(235,247,239,0.42))]"
      />

      <header className="sticky top-0 z-30 px-4 py-4">
        <div className="glass mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-3xl px-4 py-3 md:px-6">
          <Link href="/" className="min-w-0">
            <p className="text-base font-bold tracking-[-0.02em] md:text-lg">
              {company.name}
            </p>
            <p className="hidden text-xs text-[var(--muted)] sm:block">
              {company.descriptor}
            </p>
          </Link>

          <nav className="hidden items-center gap-2 lg:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-2xl px-4 py-2 text-sm font-semibold text-[var(--text)]/78 transition hover:bg-white/45 hover:text-[var(--accent-dark)]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <a
            href={company.phoneHref}
            className="shrink-0 rounded-2xl bg-[var(--accent)] px-4 py-2 text-sm font-bold text-white shadow-lg shadow-emerald-900/10 transition hover:bg-[var(--accent-dark)]"
          >
            Позвонить
          </a>
        </div>
      </header>

      <main className="relative z-10 px-4 pb-10 pt-5 md:px-6 lg:pb-16">
        {children}
      </main>

      <footer className="px-4 pb-5 md:px-6">
        <div className="glass mx-auto flex max-w-7xl flex-col gap-3 rounded-3xl px-5 py-5 text-sm text-[var(--muted)] md:flex-row md:items-center md:justify-between">
          <p>© {company.name}. Севастополь и Крым.</p>
          <div className="flex flex-wrap gap-3">
            <a href={company.phoneHref}>{company.phone}</a>
            <a href={company.telegramHref} target="_blank" rel="noreferrer">
              {company.telegram}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}