'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { NAV_ITEMS } from '@/lib/navigation';
import { Container } from './Container';
import { MobileMenu } from './MobileMenu';

export function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo-icon.png"
            alt="Automatizando Soluções"
            width={28}
            height={28}
            className="rounded-full"
          />
          <span className="text-xs font-mono uppercase tracking-widest text-white">
            Automatizando
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'text-xs font-mono uppercase tracking-widest transition-colors',
                pathname === item.href
                  ? 'text-white'
                  : 'text-neutral-500 hover:text-canvas-accent',
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <MobileMenu pathname={pathname} />
      </Container>
    </header>
  );
}
