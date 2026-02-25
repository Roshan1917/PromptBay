import { prisma } from "./prisma";
import type { Post, Category } from "@/types";

const postCardSelect = {
  id: true,
  title: true,
  slug: true,
  excerpt: true,
  featuredImage: true,
  author: true,
  isScraped: true,
  publishedAt: true,
  categories: {
    select: {
      category: { select: { id: true, name: true, slug: true } },
    },
  },
  _count: { select: { prompts: true } },
} as const;

type RawPostCard = Awaited<ReturnType<typeof prisma.post.findFirst<{ select: typeof postCardSelect }>>>;

function formatPostCard(raw: NonNullable<RawPostCard>): Post {
  return {
    id: raw.id,
    title: raw.title,
    slug: raw.slug,
    excerpt: raw.excerpt,
    featuredImage: raw.featuredImage,
    author: raw.author,
    isScraped: raw.isScraped,
    publishedAt: raw.publishedAt.toISOString(),
    categories: raw.categories.map((pc) => ({
      id: pc.category.id,
      name: pc.category.name,
      slug: pc.category.slug,
    })),
    promptCount: raw._count.prompts,
  };
}

export async function getPosts(options: {
  page?: number;
  limit?: number;
  categorySlug?: string;
} = {}) {
  const { page = 1, limit = 16, categorySlug } = options;
  const skip = (page - 1) * limit;

  const where = categorySlug
    ? { categories: { some: { category: { slug: categorySlug } } } }
    : {};

  const [posts, total] = await Promise.all([
    prisma.post.findMany({
      where,
      select: postCardSelect,
      orderBy: { publishedAt: "desc" },
      skip,
      take: limit,
    }),
    prisma.post.count({ where }),
  ]);

  const totalPages = Math.ceil(total / limit);

  return {
    posts: posts.map(formatPostCard),
    pagination: {
      page,
      limit,
      total,
      totalPages,
      hasNext: page < totalPages,
      hasPrev: page > 1,
    },
  };
}

export async function getPostBySlug(slug: string) {
  const post = await prisma.post.findUnique({
    where: { slug },
    include: {
      prompts: { orderBy: { orderIndex: "asc" } },
      images: { orderBy: { orderIndex: "asc" } },
      categories: {
        include: { category: { select: { id: true, name: true, slug: true } } },
      },
    },
  });

  if (!post) return null;

  const related = await prisma.post.findMany({
    where: {
      id: { not: post.id },
      categories: {
        some: { categoryId: { in: post.categories.map((pc) => pc.categoryId) } },
      },
    },
    select: postCardSelect,
    orderBy: { publishedAt: "desc" },
    take: 4,
  });

  return {
    post: {
      id: post.id,
      title: post.title,
      slug: post.slug,
      content: post.content,
      excerpt: post.excerpt,
      featuredImage: post.featuredImage,
      author: post.author,
      isScraped: post.isScraped,
      publishedAt: post.publishedAt.toISOString(),
      categories: post.categories.map((pc) => ({
        id: pc.category.id,
        name: pc.category.name,
        slug: pc.category.slug,
      })),
      prompts: post.prompts.map((p) => ({
        id: p.id,
        promptText: p.promptText,
        orderIndex: p.orderIndex,
      })),
      images: post.images.map((img) => ({
        id: img.id,
        imageUrl: img.imageUrl,
        altText: img.altText,
        orderIndex: img.orderIndex,
      })),
    },
    relatedPosts: related.map(formatPostCard),
  };
}

export async function getCategories(): Promise<Category[]> {
  const categories = await prisma.category.findMany({
    include: { _count: { select: { posts: true } } },
    orderBy: { name: "asc" },
  });

  return categories.map((c) => ({
    id: c.id,
    name: c.name,
    slug: c.slug,
    description: c.description,
    postCount: c._count.posts,
  }));
}

export async function getCategoryBySlug(slug: string): Promise<Category | null> {
  const cat = await prisma.category.findUnique({
    where: { slug },
    include: { _count: { select: { posts: true } } },
  });

  if (!cat) return null;

  return {
    id: cat.id,
    name: cat.name,
    slug: cat.slug,
    description: cat.description,
    postCount: cat._count.posts,
  };
}
