import { prisma } from "@/lib/prisma";
import { handleApiError } from "@/lib/api-error";

export async function GET() {
  try {
    const categories = await prisma.category.findMany({
      include: { _count: { select: { posts: true } } },
      orderBy: { name: "asc" },
    });
    return Response.json({
      categories: categories.map((c) => ({
        id: c.id, name: c.name, slug: c.slug, description: c.description, postCount: c._count.posts,
      })),
    });
  } catch (error) { return handleApiError(error); }
}
