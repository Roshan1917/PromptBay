'use client';

import { Heart } from 'lucide-react';
import { useFavorites } from '@/hooks/useFavorites';
import { cn } from '@/lib/utils';

interface FavoriteButtonProps { postId: string; className?: string; size?: 'sm' | 'md'; }

export function FavoriteButton({ postId, className, size = 'md' }: FavoriteButtonProps) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const favorited = isFavorite(postId);
  const iconSize = size === 'sm' ? 'h-4 w-4' : 'h-5 w-5';

  return (
    <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggleFavorite(postId); }} className={cn('inline-flex items-center justify-center rounded-full p-1.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500', favorited ? 'text-red-500 hover:text-red-600' : 'text-neutral-400 hover:text-red-500 dark:text-neutral-500 dark:hover:text-red-400', className)} aria-label={favorited ? 'Remove from favorites' : 'Add to favorites'}>
      <Heart className={cn(iconSize, 'transition-transform duration-150', favorited && 'scale-110')} fill={favorited ? 'currentColor' : 'none'} />
    </button>
  );
}
