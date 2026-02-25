import slugify from "slugify";
import { prisma } from "./prisma";

export function generateSlug(title: string): string {
  return slugify(title, { lower: true, strict: true, trim: true });
}

export async function getUniqueSlug(title: string): Promise<string> {
  const base = generateSlug(title);
  let slug = base;
  let counter = 1;
  while (true) {
    const existing = await prisma.post.findUnique({ where: { slug } });
    if (!existing) return slug;
    slug = `${base}-${counter}`;
    counter++;
  }
}
