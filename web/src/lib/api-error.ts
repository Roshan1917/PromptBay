export type ErrorCode =
  | "VALIDATION_ERROR"
  | "UNAUTHORIZED"
  | "FORBIDDEN"
  | "NOT_FOUND"
  | "CONFLICT"
  | "RATE_LIMITED"
  | "SERVER_ERROR";

const STATUS_MAP: Record<ErrorCode, number> = {
  VALIDATION_ERROR: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  RATE_LIMITED: 429,
  SERVER_ERROR: 500,
};

export class ApiError extends Error {
  public readonly statusCode: number;
  public readonly code: ErrorCode;
  public readonly details?: unknown;

  constructor(statusCode: number, code: ErrorCode, message: string, details?: unknown) {
    super(message);
    this.statusCode = statusCode;
    this.code = code;
    this.details = details;
  }
}

export function handleApiError(error: unknown) {
  if (error instanceof ApiError) {
    return Response.json(
      { error: { code: error.code, message: error.message, details: error.details } },
      { status: error.statusCode },
    );
  }
  console.error("Unhandled API error:", error);
  return Response.json(
    { error: { code: "SERVER_ERROR", message: "Internal server error" } },
    { status: 500 },
  );
}
