'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Heart } from 'lucide-react';
import { SearchBar } from '@/components/ui/SearchBar';

const navLinks = [
  { label: 'Latest', href: '/category/latest-prompt' },
  { label: 'Boys', href: '/category/boys-prompt' },
  { label: 'Girls', href: '/category/girls-prompt' },
  { label: 'Festival', href: '/category/festival-prompt' },
  { label: 'AI Art', href: '/category/ai-art' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-800/50 bg-black/90 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (<Link key={link.href} href={link.href} className="rounded-md px-3 py-2 text-sm font-medium text-neutral-400 transition-colors hover:bg-neutral-800/60 hover:text-white">{link.label}</Link>))}
        </nav>
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="inline-flex items-center justify-center rounded-full p-2 text-neutral-400 transition-colors hover:bg-neutral-800 md:hidden" aria-label="Toggle menu">
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
        <div className="flex items-center gap-1.5">
          <SearchBar className="hidden w-56 lg:block" />
          <Link href="/favorites" className="inline-flex items-center justify-center rounded-full p-2 text-neutral-400 transition-colors duration-200 hover:bg-neutral-800 hover:text-neutral-200" aria-label="Favorites"><Heart className="h-5 w-5" /></Link>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="border-t border-neutral-800 bg-black md:hidden">
          <div className="space-y-1 px-4 py-3">
            <SearchBar className="mb-3" />
            {navLinks.map((link) => (<Link key={link.href} href={link.href} onClick={() => setMobileMenuOpen(false)} className="block rounded-md px-3 py-2.5 text-sm font-medium text-neutral-300 transition-colors hover:bg-neutral-800">{link.label}</Link>))}
          </div>
        </div>
      )}
    </header>
  );
}
