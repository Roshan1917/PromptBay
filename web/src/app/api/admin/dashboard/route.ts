import { prisma } from "@/lib/prisma";
import { handleApiError } from "@/lib/api-error";

export async function GET() {
  try {
    const [totalPosts, totalCategories, scrapedPosts, lastScrape] = await Promise.all([
      prisma.post.count(), prisma.category.count(), prisma.post.count({ where: { isScraped: true } }),
      prisma.scrapeLog.findFirst({ orderBy: { createdAt: "desc" } }),
    ]);
    return Response.json({ stats: { totalPosts, totalCategories, scrapedPosts, manualPosts: totalPosts - scrapedPosts, lastScrape: lastScrape ? { date: lastScrape.startedAt, status: lastScrape.status, postsAdded: lastScrape.postsAdded } : null } });
  } catch (error) { return handleApiError(error); }
}
