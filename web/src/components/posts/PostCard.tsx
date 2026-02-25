import Link from 'next/link';
import Image from 'next/image';
import type { Post } from '@/types';
import { formatDate } from '@/lib/utils';
import { FavoriteButton } from '@/components/ui/FavoriteButton';

interface PostCardProps {
  post: Post;
  priority?: boolean;
}

export function PostCard({ post, priority = false }: PostCardProps) {
  return (
    <article className="border-shimmer glow-hover group relative overflow-hidden rounded-lg border border-white/10 bg-white/5 shadow-sm backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.07]">
      <Link href={`/post/${post.slug}`} className="block">
        <div className="relative aspect-[4/3] overflow-hidden bg-neutral-800">
          {post.featuredImage ? (
            <Image src={post.featuredImage} alt={post.title} fill className="object-cover transition-transform duration-300 group-hover:scale-105" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" priority={priority} />
          ) : (
            <div className="flex h-full items-center justify-center"><span className="text-4xl text-neutral-600">AI</span></div>
          )}
        </div>
        <div className="p-4">
          {post.categories && post.categories.length > 0 && (
            <div className="mb-2 flex flex-wrap gap-1.5">
              {post.categories.slice(0, 2).map((cat) => (
                <span key={cat.slug} className="rounded-full bg-primary-900/40 px-2.5 py-0.5 text-xs font-medium text-primary-300">{cat.name}</span>
              ))}
            </div>
          )}
          <h3 className="line-clamp-2 text-base font-semibold text-neutral-100 group-hover:text-primary-400">{post.title}</h3>
          <div className="mt-2 flex items-center justify-between">
            <time className="text-xs text-neutral-400">{formatDate(post.publishedAt)}</time>
            {post.promptCount !== undefined && post.promptCount > 0 && (
              <span className="text-xs text-neutral-500">{post.promptCount} prompt{post.promptCount !== 1 ? 's' : ''}</span>
            )}
          </div>
        </div>
      </Link>
      <div className="absolute right-2 top-2">
        <FavoriteButton postId={post.id} size="sm" className="rounded-full bg-neutral-900/80 backdrop-blur-sm hover:bg-neutral-800" />
      </div>
    </article>
  );
}
