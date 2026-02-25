import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { ApiError, handleApiError } from "@/lib/api-error";
import { updatePostSchema } from "@/lib/validations";
import { getUniqueSlug } from "@/lib/slugify";

export async function PUT(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const existing = await prisma.post.findUnique({ where: { id } });
    if (!existing) throw new ApiError(404, "NOT_FOUND", "Post not found");
    const body = await request.json();
    const parsed = updatePostSchema.safeParse(body);
    if (!parsed.success) throw new ApiError(400, "VALIDATION_ERROR", "Validation failed", parsed.error.issues.map((i) => ({ field: i.path.join("."), message: i.message })));
    const { title, content, excerpt, featuredImage, categoryIds, prompts, images } = parsed.data;
    const newSlug = title && title !== existing.title ? await getUniqueSlug(title) : undefined;
    const post = await prisma.$transaction(async (tx) => {
      if (prompts) { await tx.prompt.deleteMany({ where: { postId: id } }); await tx.prompt.createMany({ data: prompts.map((p) => ({ postId: id, promptText: p.promptText, orderIndex: p.orderIndex })) }); }
      if (images) { await tx.postImage.deleteMany({ where: { postId: id } }); if (images.length > 0) await tx.postImage.createMany({ data: images.map((img) => ({ postId: id, imageUrl: img.imageUrl, altText: img.altText, orderIndex: img.orderIndex })) }); }
      if (categoryIds) { await tx.postCategory.deleteMany({ where: { postId: id } }); await tx.postCategory.createMany({ data: categoryIds.map((catId) => ({ postId: id, categoryId: catId })) }); }
      return tx.post.update({ where: { id }, data: { ...(title !== undefined && { title }), ...(newSlug && { slug: newSlug }), ...(content !== undefined && { content }), ...(excerpt !== undefined && { excerpt }), ...(featuredImage !== undefined && { featuredImage: featuredImage || null }) } });
    });
    return Response.json({ post: { id: post.id, title: post.title, slug: post.slug }, message: "Post updated" });
  } catch (error) { return handleApiError(error); }
}

export async function DELETE(_request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const existing = await prisma.post.findUnique({ where: { id } });
    if (!existing) throw new ApiError(404, "NOT_FOUND", "Post not found");
    await prisma.post.delete({ where: { id } });
    return Response.json({ message: "Post deleted" });
  } catch (error) { return handleApiError(error); }
}
