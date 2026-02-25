'use client';

import { Search } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export function SearchBar({ className = '' }: { className?: string }) {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = query.trim();
    if (trimmed.length >= 2) { router.push(`/search?q=${encodeURIComponent(trimmed)}`); }
  };

  return (
    <form onSubmit={handleSubmit} className={`relative ${className}`}>
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
      <input type="search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search prompts..." className="w-full rounded-full border border-white/10 bg-white/5 py-2 pl-10 pr-4 text-sm text-neutral-100 placeholder:text-neutral-500 backdrop-blur-sm transition-colors focus:border-white/25 focus:outline-none focus:ring-2 focus:ring-white/10" />
    </form>
  );
}
