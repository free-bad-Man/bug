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
    <section id={id} className="mx-auto mt-8 max-w-7xl">
      <div className="glass rounded-[2rem] p-6 md:p-8 lg:p-10">
        <div className="max-w-4xl">
          {eyebrow ? (
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--accent-dark)]">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-[-0.04em] md:text-5xl">
            {title}
          </h2>
          {text ? (
            <p className="mt-5 text-lg leading-8 text-[var(--muted)]">
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
    <article className="glass-soft rounded-[1.6rem] p-5">
      {label ? (
        <p className="text-sm font-bold text-[var(--accent-dark)]">{label}</p>
      ) : null}
      <h3 className="mt-2 text-2xl font-bold tracking-[-0.03em]">{title}</h3>
      <p className="mt-4 text-base leading-7 text-[var(--muted)]">{text}</p>
    </article>
  );
}