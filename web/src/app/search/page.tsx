import Link from 'next/link';
import { SearchX } from 'lucide-react';
import { PostGrid } from '@/components/posts/PostGrid';
import { SearchBar } from '@/components/ui/SearchBar';
import { prisma } from '@/lib/prisma';
import type { Metadata } from 'next';
import type { Post } from '@/types';

interface SearchPageProps { searchParams: Promise<{ q?: string }>; }

export async function generateMetadata({ searchParams }: SearchPageProps): Promise<Metadata> {
  const { q } = await searchParams;
  return { title: q ? `Search: ${q}` : 'Search Prompts' };
}

async function searchPosts(query: string): Promise<Post[]> {
  const ftsResults = await prisma.$queryRaw<Array<{
    id: string; title: string; slug: string; excerpt: string | null;
    featured_image: string | null; author: string; published_at: Date; relevance: number;
  }>>`
    SELECT p.id, p.title, p.slug, p.excerpt, p."featuredImage" as featured_image,
           p.author, p."publishedAt" as published_at,
           ts_rank(p.search_vector, plainto_tsquery('english', ${query})) as relevance
    FROM posts p
    WHERE p.search_vector @@ plainto_tsquery('english', ${query})
    ORDER BY relevance DESC, p."publishedAt" DESC
    LIMIT 50
  `;
  let results = ftsResults;
  if (results.length === 0) {
    const likePattern = `%${query}%`;
    results = await prisma.$queryRaw<typeof ftsResults>`
      SELECT p.id, p.title, p.slug, p.excerpt, p."featuredImage" as featured_image,
             p.author, p."publishedAt" as published_at, 0::float as relevance
      FROM posts p WHERE p.title ILIKE ${likePattern} OR p.excerpt ILIKE ${likePattern}
      ORDER BY p."publishedAt" DESC LIMIT 50
    `;
  }
  if (results.length === 0) return [];
  const postIds = results.map((r) => r.id);
  const postCategories = await prisma.postCategory.findMany({
    where: { postId: { in: postIds } },
    select: { postId: true, category: { select: { id: true, name: true, slug: true } } },
  });
  const categoryMap = new Map<string, Array<{ id: string; name: string; slug: string }>>();
  for (const pc of postCategories) {
    const existing = categoryMap.get(pc.postId) || [];
    existing.push({ id: pc.category.id, name: pc.category.name, slug: pc.category.slug });
    categoryMap.set(pc.postId, existing);
  }
  return results.map((r) => ({
    id: r.id, title: r.title, slug: r.slug, excerpt: r.excerpt, featuredImage: r.featured_image,
    author: r.author, isScraped: false, publishedAt: r.published_at.toISOString(),
    categories: categoryMap.get(r.id) || [], promptCount: 0,
  }));
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { q } = await searchParams;
  const query = q?.trim() || '';
  const results = query.length >= 2 ? await searchPosts(query) : [];
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 bg-black min-h-[60vh]">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-neutral-100 sm:text-3xl">Search Prompts</h1>
        <div className="mt-4 max-w-xl"><SearchBar /></div>
      </div>
      {query.length >= 2 ? (
        results.length > 0 ? (
          <div>
            <p className="mb-6 text-sm text-neutral-400">Found {results.length} result{results.length !== 1 ? 's' : ''} for &quot;{query}&quot;</p>
            <PostGrid posts={results} />
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <SearchX className="mb-4 h-12 w-12 text-neutral-600" />
            <h2 className="text-lg font-semibold text-neutral-100">No prompts found</h2>
            <p className="mt-1 text-sm text-neutral-400">No prompts match &quot;{query}&quot;. Try different keywords.</p>
            <Link href="/" className="mt-4 inline-flex items-center rounded-md bg-primary-600 px-4 py-2 text-sm font-medium text-white hover:bg-primary-700">Browse All Prompts</Link>
          </div>
        )
      ) : (
        <p className="text-sm text-neutral-400">Enter at least 2 characters to search.</p>
      )}
    </div>
  );
}
