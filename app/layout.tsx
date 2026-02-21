import type { Metadata } from 'next';
import './globals.css';
import LayoutClient from './layoutClient';

export const metadata: Metadata = {
  title: '佐藤 海音 | Portfolio',
  description: 'Portfolio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className="light">
      <body>
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}
