'use client';

import { useEffect, useRef } from 'react';

const YANDEX_MAP_SRC =
  'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Afdfa91fa92e01470a5eae4f5c4377bfd8b9ad92944e980c32c161027fe8bafd6&width=100%25&height=398&lang=ru_RU&scroll=true';

export function YandexMap() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) {
      return;
    }

    container.innerHTML = '';

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.charset = 'utf-8';
    script.async = true;
    script.src = YANDEX_MAP_SRC;

    container.appendChild(script);

    return () => {
      container.innerHTML = '';
    };
  }, []);

  return (
    <div className="yandex-map-card glass">
      <div ref={containerRef} className="yandex-map-frame" aria-label="Карта зоны работы санитарной службы" />
    </div>
  );
}