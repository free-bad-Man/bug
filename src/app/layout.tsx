import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Санитарная подготовка и сопровождение объектов Крыма',
  description:
    'Запуск объекта, сопровождение сезона, дезинсекция, дератизация и регулярная санитарная защита по договору для бизнеса Крыма.',
  icons: {
    icon: '/icon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}