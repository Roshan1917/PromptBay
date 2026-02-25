const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

export function rateLimit(ip: string, maxRequests: number, windowMs: number): boolean {
  const now = Date.now();
  const key = ip;
  const entry = rateLimitMap.get(key);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(key, { count: 1, resetAt: now + windowMs });
    return true;
  }

  if (entry.count >= maxRequests) return false;

  entry.count++;
  return true;
}

export function getClientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return "127.0.0.1";
}

export const RATE_LIMITS = {
  general: { maxRequests: 60, windowMs: 60_000 },
  search: { maxRequests: 30, windowMs: 60_000 },
  adminLogin: { maxRequests: 5, windowMs: 900_000 },
} as const;
