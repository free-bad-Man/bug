import type { ReactNode } from 'react';

type SectionProps = {
  eyebrow?: string;
  title: string;
  text?: string;
  children?: ReactNode;
  id?: string;
};

export function Section({ eyebrow, title, text, children, id }: SectionProps) {
  return (
    <section id={id} className="mx-auto mt-4 max-w-7xl scroll-mt-28 md:mt-5">
      <div className="glass rounded-[1.8rem] p-5 md:rounded-[2.2rem] md:p-8 lg:p-10">
        <div className="max-w-4xl">
          {eyebrow ? (
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent-dark)] md:text-sm">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="section-title mt-3 text-balance text-3xl font-semibold leading-[1.08] tracking-[-0.035em] md:text-[2.65rem]">
            {title}
          </h2>
          {text ? (
            <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
              {text}
            </p>
          ) : null}
        </div>
        {children ? <div className="mt-7">{children}</div> : null}
      </div>
    </section>
  );
}

export function CardGrid({ children }: { children: ReactNode }) {
  return <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">{children}</div>;
}

export function GlassCard({
  title,
  text,
  label,
}: {
  title: string;
  text: string;
  label?: string;
}) {
  return (
    <article className="glass-soft rounded-[1.5rem] p-5 transition duration-300 hover:-translate-y-1 hover:bg-white/42 md:rounded-[1.75rem] md:p-6">
      {label ? (
        <p className="inline-flex rounded-full bg-[var(--accent-light)] px-3 py-1 text-xs font-semibold text-[var(--accent-dark)]">
          {label}
        </p>
      ) : null}
      <h3 className="card-title mt-4 text-[1.35rem] font-semibold leading-[1.18] tracking-[-0.025em] md:text-[1.45rem]">
        {title}
      </h3>
      <p className="mt-4 text-base leading-7 text-[var(--muted)]">{text}</p>
    </article>
  );
}

export function StatCard({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="glass-soft rounded-[1.4rem] p-4">
      <p className="text-3xl font-semibold tracking-[-0.035em] text-[var(--accent-dark)]">
        {value}
      </p>
      <p className="mt-2 text-sm font-medium leading-6 text-[var(--muted)]">
        {label}
      </p>
    </div>
  );
}

export function ProcessStep({
  title,
  text,
}: {
  number?: string;
  title: string;
  text: string;
}) {
  return (
    <article className="glass-soft rounded-[1.5rem] p-5 md:p-6">
      <h3 className="card-title text-[1.35rem] font-semibold leading-[1.18] tracking-[-0.025em] md:text-[1.45rem]">{title}</h3>
      <p className="mt-4 text-base leading-7 text-[var(--muted)]">{text}</p>
    </article>
  );
}