import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  title: '佐藤 海音 | Portfolio',
  description: 'Sato Kaito portfolio site migrated to Next.js',
};

const tabs = [
  { href: '/', title: 'プロフィール' },
  { href: '/research', title: '研究' },
  { href: '/career', title: '経歴' },
  { href: '/hobby', title: '趣味' },
  { href: '/works', title: '成果物' },
  { href: '/skills', title: 'できること' },
  { href: '/server', title: '自宅サーバ' },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <div className="main">
          <aside className="nav">
            {tabs.map((tab) => (
              <Link className="tab" key={tab.href} href={tab.href}>
                {tab.title}
              </Link>
            ))}
          </aside>
          <main className="content">{children}</main>
        </div>
      </body>
    </html>
  );
}
