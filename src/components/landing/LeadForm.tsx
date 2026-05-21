'use client';

import { FormEvent, useState } from 'react';

export function LeadForm() {
  const [status, setStatus] = useState('');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('Заявка пока не отправляется в CRM: это чистый статичный каркас. Следующим шагом подключим обработчик формы.');
  }

  return (
    <form onSubmit={handleSubmit} className="glass-soft grid gap-4 rounded-[1.7rem] p-4 md:rounded-[1.9rem] md:p-5">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold">
          Имя
          <input
            className="min-h-12 rounded-2xl border border-white/55 bg-white/64 px-4 outline-none transition focus:border-[var(--accent)] focus:bg-white"
            placeholder="Как к вам обращаться"
            required
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold">
          Телефон
          <input
            className="min-h-12 rounded-2xl border border-white/55 bg-white/64 px-4 outline-none transition focus:border-[var(--accent)] focus:bg-white"
            placeholder="+7"
            required
          />
        </label>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold">
          Тип объекта
          <select className="min-h-12 rounded-2xl border border-white/55 bg-white/64 px-4 outline-none transition focus:border-[var(--accent)] focus:bg-white" required>
            <option value="">Выберите</option>
            <option>Гостиница / гостевой дом</option>
            <option>Кафе / ресторан / кухня</option>
            <option>Пляжный объект</option>
            <option>Склад / продуктовая база</option>
            <option>Другое</option>
          </select>
        </label>
        <label className="grid gap-2 text-sm font-semibold">
          Город / зона
          <select className="min-h-12 rounded-2xl border border-white/55 bg-white/64 px-4 outline-none transition focus:border-[var(--accent)] focus:bg-white" required>
            <option value="">Выберите</option>
            <option>Севастополь</option>
            <option>Симферополь</option>
            <option>Ближнее ЮБК</option>
            <option>Дальнее ЮБК</option>
            <option>Саки–Евпатория</option>
          </select>
        </label>
      </div>

      <label className="grid gap-2 text-sm font-semibold">
        Задача и рисковые зоны
        <textarea
          className="min-h-28 rounded-2xl border border-white/55 bg-white/64 px-4 py-3 outline-none transition focus:border-[var(--accent)] focus:bg-white"
          placeholder="Например: запуск объекта к сезону, кухня, хранение, подвал, территория"
          required
        />
      </label>

      <button className="min-h-12 rounded-2xl bg-[var(--accent)] px-6 font-semibold text-white shadow-lg shadow-emerald-900/10 transition hover:-translate-y-0.5 hover:bg-[var(--accent-dark)]">
        Получить расчёт
      </button>

      {status ? (
        <p className="rounded-2xl bg-white/48 px-4 py-3 text-sm font-medium leading-6 text-[var(--accent-dark)]">
          {status}
        </p>
      ) : null}
    </form>
  );
}