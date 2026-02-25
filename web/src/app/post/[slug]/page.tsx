import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { getPostBySlug } from '@/lib/data';
import { PromptBlock } from '@/components/posts/PromptBlock';
import { PostGrid } from '@/components/posts/PostGrid';
import { formatDate } from '@/lib/utils';
import type { Metadata } from 'next';

interface PostPageProps { params: Promise<{ slug: string }>; }

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = await getPostBySlug(slug);
  if (!data) return { title: 'Post Not Found' };
  return { title: data.post.title, description: data.post.excerpt || undefined };
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const data = await getPostBySlug(slug);
  if (!data) notFound();

  const { post, relatedPosts } = data;

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12 bg-black">
      <Link href="/" className="mb-6 inline-flex items-center gap-1 text-sm text-neutral-400 hover:text-neutral-200">
        <ArrowLeft className="h-4 w-4" /> Back to prompts
      </Link>

      <article>
        <header className="mb-8">
          <div className="mb-3 flex flex-wrap gap-1.5">
            {post.categories.map((cat) => (
              <Link key={cat.slug} href={`/category/${cat.slug}`} className="rounded-full bg-primary-900/40 px-2.5 py-0.5 text-xs font-medium text-primary-300 hover:bg-primary-900/60">
                {cat.name}
              </Link>
            ))}
          </div>
          <h1 className="text-2xl font-bold text-neutral-100 sm:text-3xl">{post.title}</h1>
          <div className="mt-3 flex items-center gap-3 text-sm text-neutral-400">
            <span>By {post.author}</span>
            <span>&middot;</span>
            <time>{formatDate(post.publishedAt)}</time>
          </div>
        </header>

        {post.featuredImage && (
          <div className="relative mb-8 aspect-video overflow-hidden rounded-lg">
            <Image src={post.featuredImage} alt={post.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 768px" priority />
          </div>
        )}

        {post.excerpt && <p className="mb-8 text-neutral-300">{post.excerpt}</p>}

        {post.prompts && post.prompts.length > 0 && (
          <section>
            <h2 className="mb-4 text-lg font-semibold text-neutral-100">
              Prompts ({post.prompts.length})
            </h2>
            <div className="space-y-3">
              {post.prompts.map((prompt, index) => (
                <PromptBlock key={prompt.id} promptText={prompt.promptText} index={index} defaultExpanded={index === 0} />
              ))}
            </div>
          </section>
        )}
      </article>

      {relatedPosts.length > 0 && (
        <section className="mt-12 border-t border-neutral-800 pt-8">
          <h2 className="mb-6 text-xl font-bold text-neutral-100">Related Prompts</h2>
          <PostGrid posts={relatedPosts} />
        </section>
      )}
    </div>
  );
}
