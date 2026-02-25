import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

async function hmacSign(payload: string, secret: string): Promise<string> {
  const enc = new TextEncoder();
  const key = await crypto.subtle.importKey("raw", enc.encode(secret), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  const sig = await crypto.subtle.sign("HMAC", key, enc.encode(payload));
  return Array.from(new Uint8Array(sig)).map((b) => b.toString(16).padStart(2, "0")).join("");
}

async function verifyToken(token: string, secret: string): Promise<boolean> {
  const lastDot = token.lastIndexOf(".");
  if (lastDot === -1) return false;
  const payload = token.substring(0, lastDot);
  const sig = token.substring(lastDot + 1);
  const expected = await hmacSign(payload, secret);
  if (sig !== expected) return false;
  try {
    const data = JSON.parse(payload);
    if (data.role !== "admin") return false;
    const age = Date.now() - data.iat;
    if (age > 86400 * 1000) return false;
    return true;
  } catch { return false; }
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (!pathname.startsWith("/admin") && !pathname.startsWith("/api/admin")) return NextResponse.next();
  if (pathname === "/api/admin/auth/login") return NextResponse.next();
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!secret) return new NextResponse("Server configuration error", { status: 500 });
  const token = request.cookies.get("admin_session")?.value;
  if (!token || !(await verifyToken(token, secret))) {
    if (pathname.startsWith("/api/admin")) {
      return NextResponse.json({ error: { code: "UNAUTHORIZED", message: "Authentication required" } }, { status: 401 });
    }
    const loginUrl = new URL("/admin", request.url);
    loginUrl.searchParams.set("redirect", pathname);
    return NextResponse.redirect(loginUrl);
  }
  return NextResponse.next();
}

export const config = { matcher: ["/admin/:path+", "/api/admin/:path*"] };
