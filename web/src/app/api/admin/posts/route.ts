import { prisma } from "@/lib/prisma";
import { ApiError, handleApiError } from "@/lib/api-error";
import { createPostSchema } from "@/lib/validations";
import { getUniqueSlug } from "@/lib/slugify";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = createPostSchema.safeParse(body);
    if (!parsed.success) throw new ApiError(400, "VALIDATION_ERROR", "Validation failed", parsed.error.issues.map((i) => ({ field: i.path.join("."), message: i.message })));
    const { title, content, excerpt, featuredImage, categoryIds, prompts, images } = parsed.data;
    const slug = await getUniqueSlug(title);
    const post = await prisma.post.create({
      data: {
        title, slug, content, excerpt, featuredImage: featuredImage || null,
        prompts: { create: prompts.map((p) => ({ promptText: p.promptText, orderIndex: p.orderIndex })) },
        images: images ? { create: images.map((img) => ({ imageUrl: img.imageUrl, altText: img.altText, orderIndex: img.orderIndex })) } : undefined,
        categories: { create: categoryIds.map((catId) => ({ categoryId: catId })) },
      },
    });
    return Response.json({ post: { id: post.id, title: post.title, slug: post.slug }, message: "Post created" }, { status: 201 });
  } catch (error) { return handleApiError(error); }
}
