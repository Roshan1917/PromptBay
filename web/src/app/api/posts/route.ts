import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { handleApiError } from "@/lib/api-error";
import { postListSchema } from "@/lib/validations";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const parsed = postListSchema.safeParse({
      page: searchParams.get("page") ?? undefined,
      limit: searchParams.get("limit") ?? undefined,
      category: searchParams.get("category") ?? undefined,
      sort: searchParams.get("sort") ?? undefined,
    });
    const { page, limit, category, sort } = parsed.success ? parsed.data : { page: 1, limit: 16, category: undefined, sort: "newest" as const };
    const skip = (page - 1) * limit;
    const ids = searchParams.get("ids");
    const idFilter = ids ? { id: { in: ids.split(",").filter(Boolean) } } : {};
    const categoryFilter = category ? { categories: { some: { category: { slug: category } } } } : {};
    const where = { ...idFilter, ...categoryFilter };
    const orderBy = sort === "oldest" ? { publishedAt: "asc" as const } : { publishedAt: "desc" as const };
    const [posts, total] = await Promise.all([
      prisma.post.findMany({
        where, orderBy, skip, take: limit,
        select: {
          id: true, title: true, slug: true, excerpt: true, featuredImage: true, author: true, isScraped: true, publishedAt: true,
          categories: { select: { category: { select: { id: true, name: true, slug: true } } } },
          _count: { select: { prompts: true } },
        },
      }),
      prisma.post.count({ where }),
    ]);
    const totalPages = Math.ceil(total / limit);
    return Response.json({
      posts: posts.map((p) => ({
        id: p.id, title: p.title, slug: p.slug, excerpt: p.excerpt, featuredImage: p.featuredImage, author: p.author, isScraped: p.isScraped, publishedAt: p.publishedAt.toISOString(),
        categories: p.categories.map((pc) => ({ id: pc.category.id, name: pc.category.name, slug: pc.category.slug })),
        promptCount: p._count.prompts,
      })),
      pagination: { page, limit, total, totalPages, hasNext: page < totalPages, hasPrev: page > 1 },
    });
  } catch (error) { return handleApiError(error); }
}
