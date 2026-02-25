import { z } from "zod";

export const paginationSchema = z.object({
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(50).default(16),
});

export const postListSchema = paginationSchema.extend({
  category: z.string().optional(),
  sort: z.enum(["newest", "oldest"]).default("newest"),
});

export const searchQuerySchema = z.object({
  q: z.string().min(2, "Search query must be at least 2 characters").max(200),
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(50).default(16),
});

export const createPostSchema = z.object({
  title: z.string().min(5, "Title must be at least 5 characters").max(500),
  content: z.string().optional(),
  excerpt: z.string().max(300).optional(),
  featuredImage: z.string().url("Must be a valid URL").optional().or(z.literal("")),
  categoryIds: z.array(z.string().uuid()).min(1, "Select at least one category"),
  prompts: z
    .array(
      z.object({
        promptText: z.string().min(10, "Prompt must be at least 10 characters"),
        orderIndex: z.number().int().min(0),
      }),
    )
    .min(1, "Add at least one prompt"),
  images: z
    .array(
      z.object({
        imageUrl: z.string().url(),
        altText: z.string().max(500).optional(),
        orderIndex: z.number().int().min(0),
      }),
    )
    .optional(),
});

export const updatePostSchema = createPostSchema.partial();
