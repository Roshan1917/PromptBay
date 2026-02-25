import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { ApiError, handleApiError } from "@/lib/api-error";

export async function GET(_request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const post = await prisma.post.findUnique({
      where: { id },
      include: { prompts: { orderBy: { orderIndex: "asc" } }, images: { orderBy: { orderIndex: "asc" } }, categories: { include: { category: { select: { id: true, name: true, slug: true } } } } },
    });
    if (!post) throw new ApiError(404, "NOT_FOUND", "Post not found");
    return Response.json({ post: {
      id: post.id, title: post.title, slug: post.slug, content: post.content, excerpt: post.excerpt, featuredImage: post.featuredImage,
      prompts: post.prompts.map((p) => ({ id: p.id, promptText: p.promptText, orderIndex: p.orderIndex })),
      images: post.images.map((img) => ({ id: img.id, imageUrl: img.imageUrl, altText: img.altText, orderIndex: img.orderIndex })),
      categories: post.categories.map((pc) => ({ id: pc.category.id, name: pc.category.name, slug: pc.category.slug })),
    }});
  } catch (error) { return handleApiError(error); }
}
