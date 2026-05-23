'use client';

import Link from 'next/link';
import { useState } from 'react';
import { company, nav } from '@/shared/data/site';

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <div className="mobile-burger">
      <button
        className="mobile-burger__button"
        type="button"
        aria-label={isOpen ? 'Закрыть меню' : 'Открыть меню'}
        aria-expanded={isOpen}
        aria-controls="mobile-burger-panel"
        onClick={() => setIsOpen((value) => !value)}
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </button>

      <div
        id="mobile-burger-panel"
        className={isOpen ? 'mobile-burger__panel mobile-burger__panel--open' : 'mobile-burger__panel'}
      >
        <nav className="mobile-burger__nav" aria-label="Мобильное меню">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="mobile-burger__link" onClick={closeMenu}>
              {item.label}
            </Link>
          ))}
        </nav>

        <a className="mobile-burger__phone" href={company.phoneHref} onClick={closeMenu}>
          Позвонить
        </a>
      </div>
    </div>
  );
}