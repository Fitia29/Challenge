export const API_URL = process.env.NEXT_PUBLIC_API_URL?.trim() || undefined;

export const BACK_URL = process.env.NEXT_PUBLIC_BACK_URL?.trim().replace(/\/+$/, "") || undefined;

export const ENABLE_MOCKS = process.env.NEXT_PUBLIC_ENABLE_MOCKS?.trim().toLowerCase() !== "false";
