import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { getCategoryBySlug, getPosts } from '@/lib/data';
import { PostGrid } from '@/components/posts/PostGrid';
import { Pagination } from '@/components/ui/Pagination';
import type { Metadata } from 'next';

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ page?: string }>;
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = await getCategoryBySlug(slug);
  if (!category) return { title: 'Category Not Found' };
  return { title: `${category.name} Prompts`, description: category.description || undefined };
}

export default async function CategoryPage({ params, searchParams }: CategoryPageProps) {
  const { slug } = await params;
  const { page: pageParam } = await searchParams;
  const page = Math.max(1, parseInt(pageParam || '1', 10) || 1);

  const category = await getCategoryBySlug(slug);
  if (!category) notFound();

  const { posts, pagination } = await getPosts({ page, limit: 16, categorySlug: slug });

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 bg-black min-h-[60vh]">
      <Link href="/" className="mb-6 inline-flex items-center gap-1 text-sm text-neutral-400 hover:text-neutral-200">
        <ArrowLeft className="h-4 w-4" /> All prompts
      </Link>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-neutral-100 sm:text-3xl">{category.name}</h1>
        {category.description && <p className="mt-2 text-sm text-neutral-400">{category.description}</p>}
        <p className="mt-1 text-xs text-neutral-500">{category.postCount} prompt{category.postCount !== 1 ? 's' : ''}</p>
      </div>
      {posts.length > 0 ? (
        <>
          <PostGrid posts={posts} />
          <Pagination pagination={pagination} basePath={`/category/${slug}`} />
        </>
      ) : (
        <p className="py-16 text-center text-neutral-400">No prompts in this category yet.</p>
      )}
    </div>
  );
}
