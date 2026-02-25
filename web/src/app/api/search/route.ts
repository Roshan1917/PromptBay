import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { ApiError, handleApiError } from "@/lib/api-error";
import { searchQuerySchema } from "@/lib/validations";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const parsed = searchQuerySchema.safeParse({
      q: searchParams.get("q") ?? undefined,
      page: searchParams.get("page") ?? undefined,
      limit: searchParams.get("limit") ?? undefined,
    });
    if (!parsed.success) throw new ApiError(400, "VALIDATION_ERROR", "Invalid search parameters", parsed.error.issues.map((i) => ({ field: i.path.join("."), message: i.message })));
    const { q: query, page, limit } = parsed.data;
    const offset = (page - 1) * limit;
    const results = await prisma.$queryRaw<Array<{ id: string; title: string; slug: string; excerpt: string | null; featured_image: string | null; author: string; published_at: Date; relevance: number; }>>`
      SELECT p.id, p.title, p.slug, p.excerpt, p."featuredImage" as featured_image, p.author, p."publishedAt" as published_at, ts_rank(p.search_vector, plainto_tsquery('english', ${query})) as relevance
      FROM posts p WHERE p.search_vector @@ plainto_tsquery('english', ${query}) ORDER BY relevance DESC, p."publishedAt" DESC LIMIT ${limit} OFFSET ${offset}
    `;
    const countResult = await prisma.$queryRaw<Array<{ count: bigint }>>`SELECT count(*) as count FROM posts p WHERE p.search_vector @@ plainto_tsquery('english', ${query})`;
    const total = Number(countResult[0]?.count ?? 0);
    const totalPages = Math.ceil(total / limit);
    const postIds = results.map((r) => r.id);
    const postCategories = postIds.length > 0 ? await prisma.postCategory.findMany({ where: { postId: { in: postIds } }, select: { postId: true, category: { select: { name: true, slug: true } } } }) : [];
    const categoryMap = new Map<string, Array<{ name: string; slug: string }>>();
    for (const pc of postCategories) { const e = categoryMap.get(pc.postId) || []; e.push({ name: pc.category.name, slug: pc.category.slug }); categoryMap.set(pc.postId, e); }
    return Response.json({
      query,
      results: results.map((r) => ({ id: r.id, title: r.title, slug: r.slug, excerpt: r.excerpt, featuredImage: r.featured_image, author: r.author, publishedAt: r.published_at, categories: categoryMap.get(r.id) || [], relevance: r.relevance })),
      pagination: { page, limit, total, totalPages },
    });
  } catch (error) { return handleApiError(error); }
}
