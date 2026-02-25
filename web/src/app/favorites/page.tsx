'use client';

import { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';
import Link from 'next/link';
import { PostGrid } from '@/components/posts/PostGrid';
import { useFavorites } from '@/hooks/useFavorites';
import type { Post } from '@/types';

export default function FavoritesPage() {
  const { favorites } = useFavorites();
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (favorites.length === 0) { setLoading(false); return; }
    fetch(`/api/posts?ids=${favorites.join(',')}`)
      .then((r) => r.json())
      .then((data) => setPosts(data.posts || []))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [favorites]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 bg-black min-h-[60vh]">
      <h1 className="mb-8 text-2xl font-bold text-neutral-100 sm:text-3xl">Favorites</h1>
      {loading ? (
        <div className="flex items-center justify-center py-16"><div className="h-8 w-8 animate-spin rounded-full border-2 border-neutral-600 border-t-primary-500" /></div>
      ) : posts.length > 0 ? (
        <PostGrid posts={posts} />
      ) : (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <Heart className="mb-4 h-12 w-12 text-neutral-600" />
          <h2 className="text-lg font-semibold text-neutral-100">No favorites yet</h2>
          <p className="mt-1 text-sm text-neutral-400">Click the heart icon on any prompt to save it here.</p>
          <Link href="/" className="mt-4 inline-flex items-center rounded-md bg-primary-600 px-4 py-2 text-sm font-medium text-white hover:bg-primary-700">Browse Prompts</Link>
        </div>
      )}
    </div>
  );
}
