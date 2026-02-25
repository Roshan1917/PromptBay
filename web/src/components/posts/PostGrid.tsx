import type { Post } from '@/types';
import { PostCard } from './PostCard';

interface PostGridProps { posts: Post[]; }

export function PostGrid({ posts }: PostGridProps) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
      {posts.map((post, index) => (
        <PostCard key={post.id} post={post} priority={index < 4} />
      ))}
    </div>
  );
}
