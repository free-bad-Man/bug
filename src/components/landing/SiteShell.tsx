import Link from 'next/link';
import type { ReactNode } from 'react';
import { company, nav } from '@/shared/data/site';
import { MobileMenu } from './MobileMenu';
import { ScrollControls } from './ScrollControls';

type SiteShellProps = {
  background: string;
  children: ReactNode;
};

const footerSocials = [
  { label: 'Telegram', short: 'TG' },
  { label: 'ВКонтакте', short: 'VK' },
  { label: 'Яндекс Бизнес', short: 'ЯБ' },
  { label: 'Электронная почта', short: '@' },
];

export function SiteShell({ background, children }: SiteShellProps) {
  return (
    <div className="page-shell relative min-h-screen overflow-hidden">
      <div
        aria-hidden="true"
        className="site-bg site-bg--desktop fixed inset-0 -z-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${background})` }}
      />
      <div
        aria-hidden="true"
        className="site-bg site-bg--mobile fixed inset-0 -z-20 bg-cover bg-center bg-no-repeat"
      />

      <header className="site-header fixed left-0 right-0 top-0 z-40 px-3 py-3 md:px-5 md:py-4">
        <div className="glass site-header__inner mx-auto max-w-7xl rounded-[1.55rem] px-3 py-2.5 md:rounded-[1.85rem] md:px-4 md:py-3">
          <div className="site-header__row flex items-center justify-between gap-3">
            <Link href="/" className="brand brand--header" aria-label={company.name}>
              <img className="brand__mark" src="/images/logo-mark.png" alt="" aria-hidden="true" />
              <span className="brand__text">
                <span className="brand__title">{company.name}</span>
                <span className="brand__subtitle">{company.descriptor}</span>
              </span>
            </Link>

            <nav className="site-header__nav hidden min-w-0 flex-1 items-center justify-center gap-0.5 xl:flex">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="site-header__nav-link rounded-2xl px-3 py-2 text-sm font-medium text-[var(--text)]/76 transition hover:bg-white/48 hover:text-[var(--accent-dark)]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

                        <Link
              href="/#lead"
              className="glass-button-strong site-header__phone shrink-0 rounded-2xl px-4 py-2 text-sm font-semibold transition"
            >
              Заявка онлайн
            </Link>

            <MobileMenu />
          </div>
        </div>
      </header>

      <ScrollControls />

      <main className="relative z-10 px-3 pb-10 pt-28 md:px-5 md:pb-16 md:pt-36 xl:pt-32">
        {children}
      </main>

      <footer className="px-3 pb-4 md:px-5 md:pb-6">
        <div className="glass mx-auto flex max-w-7xl flex-col gap-5 rounded-[1.7rem] px-5 py-5 text-sm font-medium text-[var(--muted)] md:flex-row md:items-center md:justify-between md:rounded-[2rem]">
          <Link href="/" className="footer-brand" aria-label={company.name}>
            <img className="footer-brand__mark" src="/images/logo-mark.png" alt="" aria-hidden="true" />
            <span className="footer-brand__text">
              <span className="font-semibold text-[var(--text)]">© {company.name}</span>
              <span className="mt-1 block">Севастополь и Крым. Санитарная подготовка объектов.</span>
            </span>
          </Link>

          <div className="footer-actions">
            <Link className="footer-privacy glass-button rounded-2xl px-4 py-2 transition" href="/politika-konfidentsialnosti/">
              Политика конфиденциальности
            </Link>

            <div className="footer-socials" aria-label="Каналы связи будут добавлены позже">
              {footerSocials.map((item) => (
                <span
                  key={item.label}
                  className="footer-socials__item"
                  title={`${item.label} будет подключён позже`}
                  aria-label={`${item.label} будет подключён позже`}
                >
                  {item.short}
                </span>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}