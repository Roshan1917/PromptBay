import { destroySession } from "@/lib/auth";
import { handleApiError } from "@/lib/api-error";

export async function POST() {
  try { await destroySession(); return Response.json({ success: true, message: "Logged out" }); }
  catch (error) { return handleApiError(error); }
}
