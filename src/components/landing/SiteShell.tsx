import Link from 'next/link';
import type { ReactNode } from 'react';
import { company, nav } from '@/shared/data/site';

type SiteShellProps = {
  background: string;
  children: ReactNode;
};

export function SiteShell({ background, children }: SiteShellProps) {
  return (
    <div className="page-shell relative min-h-screen overflow-hidden">
      <div
        aria-hidden="true"
        className="fixed inset-0 -z-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${background})` }}
      />

      <header className="sticky top-0 z-30 px-3 py-3 md:px-5 md:py-4">
        <div className="glass mx-auto max-w-7xl rounded-[1.7rem] px-3 py-3 md:rounded-[2rem] md:px-5">
          <div className="flex items-center justify-between gap-3">
            <Link href="/" className="min-w-0">
              <p className="truncate text-base font-semibold tracking-[-0.025em] md:text-lg">
                {company.name}
              </p>
              <p className="hidden max-w-[460px] truncate text-xs font-medium text-[var(--muted)] sm:block">
                {company.descriptor}
              </p>
            </Link>

            <nav className="hidden items-center gap-1 xl:flex">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-2xl px-4 py-2 text-sm font-medium text-[var(--text)]/76 transition hover:bg-white/48 hover:text-[var(--accent-dark)]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <a
              href={company.phoneHref}
              className="shrink-0 rounded-2xl bg-[var(--accent)] px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-emerald-900/10 transition hover:bg-[var(--accent-dark)]"
            >
              Позвонить
            </a>
          </div>

          <nav className="mobile-scroll -mx-1 mt-3 flex gap-2 overflow-x-auto pb-1 xl:hidden">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="shrink-0 rounded-2xl border border-white/45 bg-white/30 px-3.5 py-2 text-xs font-medium text-[var(--text)]/78 transition hover:bg-white/58 hover:text-[var(--accent-dark)]"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main className="relative z-10 px-3 pb-10 pt-3 md:px-5 md:pb-16">
        {children}
      </main>

      <footer className="px-3 pb-4 md:px-5 md:pb-6">
        <div className="glass mx-auto flex max-w-7xl flex-col gap-4 rounded-[1.7rem] px-5 py-5 text-sm font-medium text-[var(--muted)] md:flex-row md:items-center md:justify-between md:rounded-[2rem]">
          <div>
            <p className="font-semibold text-[var(--text)]">© {company.name}</p>
            <p className="mt-1">Севастополь и Крым. Санитарная подготовка объектов.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a className="rounded-2xl bg-white/34 px-4 py-2 transition hover:bg-white/58" href={company.phoneHref}>
              {company.phone}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}