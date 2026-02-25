import bcrypt from "bcryptjs";
import { cookies } from "next/headers";
import crypto from "crypto";

const SESSION_COOKIE = "admin_session";
const SESSION_MAX_AGE = 86400;

function sign(payload: string, secret: string): string {
  const hmac = crypto.createHmac("sha256", secret);
  hmac.update(payload);
  return `${payload}.${hmac.digest("hex")}`;
}

function verify(token: string, secret: string): string | null {
  const lastDot = token.lastIndexOf(".");
  if (lastDot === -1) return null;
  const payload = token.substring(0, lastDot);
  const expected = sign(payload, secret);
  if (token !== expected) return null;
  return payload;
}

export async function verifyPassword(password: string): Promise<boolean> {
  const hash = process.env.ADMIN_PASSWORD_HASH;
  if (!hash) return false;
  return bcrypt.compare(password, hash);
}

export async function createSession(): Promise<void> {
  const secret = process.env.ADMIN_SESSION_SECRET!;
  const payload = JSON.stringify({ role: "admin", iat: Date.now() });
  const token = sign(payload, secret);
  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: SESSION_MAX_AGE,
    path: "/",
  });
}

export async function destroySession(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE);
}

export async function isAuthenticated(): Promise<boolean> {
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!secret) return false;
  const cookieStore = await cookies();
  const token = cookieStore.get(SESSION_COOKIE)?.value;
  if (!token) return false;
  const payload = verify(token, secret);
  if (!payload) return false;
  try {
    const data = JSON.parse(payload);
    if (data.role !== "admin") return false;
    const age = Date.now() - data.iat;
    if (age > SESSION_MAX_AGE * 1000) return false;
    return true;
  } catch {
    return false;
  }
}
