import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { PaginationInfo } from '@/types';
import { cn } from '@/lib/utils';

interface PaginationProps { pagination: PaginationInfo; basePath?: string; }

export function Pagination({ pagination, basePath = '' }: PaginationProps) {
  const { page, totalPages, hasNext, hasPrev } = pagination;
  if (totalPages <= 1) return null;

  const getPageUrl = (pageNum: number) => {
    const separator = basePath.includes('?') ? '&' : '?';
    return `${basePath}${separator}page=${pageNum}`;
  };

  const getVisiblePages = (): (number | 'ellipsis')[] => {
    const pages: (number | 'ellipsis')[] = [];
    if (totalPages <= 7) { for (let i = 1; i <= totalPages; i++) pages.push(i); return pages; }
    pages.push(1);
    if (page > 3) pages.push('ellipsis');
    const start = Math.max(2, page - 1);
    const end = Math.min(totalPages - 1, page + 1);
    for (let i = start; i <= end; i++) pages.push(i);
    if (page < totalPages - 2) pages.push('ellipsis');
    pages.push(totalPages);
    return pages;
  };

  return (
    <nav className="flex items-center justify-center gap-1 py-8" aria-label="Pagination">
      {hasPrev ? (<Link href={getPageUrl(page - 1)} className="inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-neutral-400 transition-colors hover:bg-neutral-800"><ChevronLeft className="h-4 w-4" /><span className="hidden sm:inline">Previous</span></Link>) : (<span className="inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-neutral-600"><ChevronLeft className="h-4 w-4" /><span className="hidden sm:inline">Previous</span></span>)}
      <div className="flex items-center gap-1">
        {getVisiblePages().map((p, idx) => p === 'ellipsis' ? (<span key={`ellipsis-${idx}`} className="px-2 py-1 text-sm text-neutral-400">...</span>) : (<Link key={p} href={getPageUrl(p)} className={cn('rounded-md px-3 py-2 text-sm font-medium transition-colors', p === page ? 'bg-primary-600 text-white' : 'text-neutral-300 hover:bg-neutral-800')}>{p}</Link>))}
      </div>
      {hasNext ? (<Link href={getPageUrl(page + 1)} className="inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-neutral-400 transition-colors hover:bg-neutral-800"><span className="hidden sm:inline">Next</span><ChevronRight className="h-4 w-4" /></Link>) : (<span className="inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-neutral-600"><span className="hidden sm:inline">Next</span><ChevronRight className="h-4 w-4" /></span>)}
    </nav>
  );
}
