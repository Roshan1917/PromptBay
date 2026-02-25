import { NextRequest } from "next/server";
import { verifyPassword, createSession } from "@/lib/auth";
import { ApiError, handleApiError } from "@/lib/api-error";
import { rateLimit, getClientIp, RATE_LIMITS } from "@/lib/rate-limit";

export async function POST(request: NextRequest) {
  try {
    const ip = getClientIp(request);
    const { maxRequests, windowMs } = RATE_LIMITS.adminLogin;
    if (!rateLimit(ip, maxRequests, windowMs)) throw new ApiError(429, "RATE_LIMITED", "Too many login attempts.");
    const body = await request.json();
    const { password } = body;
    if (!password || typeof password !== "string") throw new ApiError(400, "VALIDATION_ERROR", "Password is required");
    const valid = await verifyPassword(password);
    if (!valid) throw new ApiError(401, "UNAUTHORIZED", "Invalid password");
    await createSession();
    return Response.json({ success: true, message: "Logged in successfully" });
  } catch (error) { return handleApiError(error); }
}
