'use client';

import { FormEvent, useState } from 'react';

export function LeadForm() {
  const [status, setStatus] = useState('');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('Заявка пока не отправляется в CRM: это чистый статичный каркас. Следующим шагом подключим обработчик формы.');
  }

  return (
    <form onSubmit={handleSubmit} className="glass-soft grid gap-4 rounded-[1.8rem] p-5">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold">
          Имя
          <input
            className="min-h-12 rounded-2xl border border-white/50 bg-white/60 px-4 outline-none focus:bg-white"
            placeholder="Как к вам обращаться"
            required
          />
        </label>
        <label className="grid gap-2 text-sm font-bold">
          Телефон
          <input
            className="min-h-12 rounded-2xl border border-white/50 bg-white/60 px-4 outline-none focus:bg-white"
            placeholder="+7"
            required
          />
        </label>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold">
          Тип объекта
          <select className="min-h-12 rounded-2xl border border-white/50 bg-white/60 px-4 outline-none focus:bg-white" required>
            <option value="">Выберите</option>
            <option>Гостиница / гостевой дом</option>
            <option>Кафе / ресторан / кухня</option>
            <option>Пляжный объект</option>
            <option>Склад / продуктовая база</option>
            <option>Другое</option>
          </select>
        </label>
        <label className="grid gap-2 text-sm font-bold">
          Город / зона
          <select className="min-h-12 rounded-2xl border border-white/50 bg-white/60 px-4 outline-none focus:bg-white" required>
            <option value="">Выберите</option>
            <option>Севастополь</option>
            <option>Симферополь</option>
            <option>Ближнее ЮБК</option>
            <option>Дальнее ЮБК</option>
            <option>Саки–Евпатория</option>
          </select>
        </label>
      </div>

      <label className="grid gap-2 text-sm font-bold">
        Задача и рисковые зоны
        <textarea
          className="min-h-28 rounded-2xl border border-white/50 bg-white/60 px-4 py-3 outline-none focus:bg-white"
          placeholder="Например: запуск объекта к сезону, кухня, хранение, подвал, территория"
          required
        />
      </label>

      <button className="min-h-12 rounded-2xl bg-[var(--accent)] px-6 font-bold text-white shadow-lg shadow-emerald-900/10 transition hover:bg-[var(--accent-dark)]">
        Получить расчёт
      </button>

      {status ? <p className="text-sm leading-6 text-[var(--accent-dark)]">{status}</p> : null}
    </form>
  );
}