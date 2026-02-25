import Link from 'next/link';
import { PostGrid } from '@/components/posts/PostGrid';
import { Pagination } from '@/components/ui/Pagination';
import { getPosts, getCategories } from '@/lib/data';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Prompt Bay - Trending AI Photo Editing Prompts' };

interface HomePageProps {
  searchParams: Promise<{ page?: string }>;
}

export default async function HomePage({ searchParams }: HomePageProps) {
  const { page: pageParam } = await searchParams;
  const page = Math.max(1, parseInt(pageParam || '1', 10) || 1);

  const [{ posts, pagination }, categories] = await Promise.all([
    getPosts({ page, limit: 16 }),
    getCategories(),
  ]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 bg-black">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-neutral-100 sm:text-3xl">
            <span className="shimmer-text">Trending AI Prompts</span>
          </h1>
          <p className="mt-1 text-sm text-neutral-400">
            Copy &amp; paste ready-made prompts for Gemini, ChatGPT &amp; more
          </p>
        </div>
      </div>

      <div className="mb-8 flex flex-wrap gap-2">
        <Link href="/" className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white">
          All
        </Link>
        {categories.map((cat) => (
          <Link
            key={cat.slug}
            href={`/category/${cat.slug}`}
            className="rounded-full border border-white/10 px-3 py-1 text-xs font-medium text-neutral-400 transition-colors hover:border-white/20 hover:text-white"
          >
            {cat.name}
            {cat.postCount !== undefined && (
              <span className="ml-1 text-neutral-600">({cat.postCount})</span>
            )}
          </Link>
        ))}
      </div>

      {posts.length > 0 ? (
        <>
          <PostGrid posts={posts} />
          <Pagination pagination={pagination} basePath="/" />
        </>
      ) : (
        <p className="py-16 text-center text-neutral-400">No prompts found.</p>
      )}
    </div>
  );
}
