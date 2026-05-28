import Link from 'next/link';
import type { ReactNode } from 'react';
import { FaTelegramPlane, FaVk, FaYandex } from 'react-icons/fa';
import { MdEmail, MdLocationOn, MdPhone } from 'react-icons/md';
import { company, nav } from '@/shared/data/site';
import { MobileMenu } from './MobileMenu';
import { ScrollControls } from './ScrollControls';

type SiteShellProps = {
  background: string;
  children: ReactNode;
};

const footerAddress = '299055, г. Севастополь, ул. Генерала Хрюкина, 10';
const footerPhone = '+7 (000) 000-00-00';

const footerSocials: Array<{ label: string; icon: ReactNode }> = [
  { label: 'Telegram', icon: <FaTelegramPlane aria-hidden="true" /> },
  { label: 'ВКонтакте', icon: <FaVk aria-hidden="true" /> },
  { label: 'Яндекс Бизнес', icon: <FaYandex aria-hidden="true" /> },
  { label: 'Электронная почта', icon: <MdEmail aria-hidden="true" /> },
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

      <footer className="site-footer">
        <div className="site-footer__inner site-footer__inner--final glass">
          <div className="site-footer__brand-block">
            <Link href="/" className="footer-brand footer-brand--large" aria-label={company.name}>
              <img className="footer-brand__mark" src="/images/logo-mark.png" alt="" aria-hidden="true" />
              <span className="footer-brand__text">
                <span className="footer-brand__title">© {company.name}</span>
                <span className="footer-brand__subtitle">{company.descriptor}</span>
              </span>
            </Link>
          </div>

          <div className="site-footer__contacts site-footer__contacts--stacked" aria-label="Контактная информация">
            <div className="site-footer__contact-card">
              <span className="site-footer__contact-icon" aria-hidden="true">
                <MdLocationOn />
              </span>
              <span className="site-footer__contact-text">
                <span className="site-footer__contact-label">Адрес деятельности</span>
                <span className="site-footer__contact-value">{footerAddress}</span>
              </span>
            </div>

            <div className="site-footer__contact-card">
              <span className="site-footer__contact-icon" aria-hidden="true">
                <MdPhone />
              </span>
              <span className="site-footer__contact-text">
                <span className="site-footer__contact-label">Телефон</span>
                <span className="site-footer__contact-value">{footerPhone}</span>
              </span>
            </div>
          </div>

          <div className="site-footer__center">
            <div className="footer-socials footer-socials--footer-center" aria-label="Социальные и контактные каналы">
              {footerSocials.map((item) => (
                <span
                  key={item.label}
                  className="footer-socials__item"
                  title={item.label}
                  aria-label={item.label}
                >
                  {item.icon}
                </span>
              ))}
            </div>

            <Link className="footer-privacy glass-button rounded-2xl px-4 py-2 transition" href="/politika-konfidentsialnosti/">
              Политика конфиденциальности
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}