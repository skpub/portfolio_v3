'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const tabs = [
  { id: '/', title: 'プロフィール', icon: '/assets/prof.svg' },
  { id: '/research', title: '研究', icon: '/assets/research.svg' },
  { id: '/career', title: '経歴', icon: '/assets/bag.svg' },
  { id: '/hobby', title: '趣味', icon: '/assets/hobby.svg' },
  { id: '/works', title: '成果物', icon: '/assets/works.svg' },
  { id: '/skills', title: 'できること', icon: '/assets/build.svg' },
  { id: '/server', title: '自宅サーバ', icon: '/assets/server.svg' },
];

export default function LayoutClient({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const mediaDark = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(mediaDark.matches);
    const listener = () => setIsDarkMode(mediaDark.matches);
    mediaDark.addEventListener('change', listener);
    return () => mediaDark.removeEventListener('change', listener);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  }, [isDarkMode]);

  return (
    <div id="main">
      <div id="tab_container">
        {tabs.map((tab) =>
          tab.id === pathname ? (
            <button id="selected" className="tab" key={tab.id}>
              <div style={{ maskImage: `url("${tab.icon}")` }} />
              <p>{tab.title}</p>
            </button>
          ) : (
            <Link className="tab-shadow tab clickable" href={tab.id} key={tab.id}>
              <div style={{ maskImage: `url("${tab.icon}")` }} />
              <p>{tab.title}</p>
            </Link>
          ),
        )}
        <div id="tab_padding" className="tab-shadow" />
      </div>
      <div id="slot_container">{children}</div>
    </div>
  );
}
