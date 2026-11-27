import axios, { AxiosError, isAxiosError } from "axios";

export const tiketyApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export function catchError(error: unknown) {
  if (error instanceof AxiosError) {
    throw new Error(error.response?.data);
  } else {
    throw new Error("Unexpected error was occured !");
  }
}

export function catchAxios(error: unknown): never {
  if (isAxiosError(error)) {
    if (error.response) {
      const body = error.response.data as { message?: string } | undefined;
      const message = body?.message || error.message || "An unknown error occurred";
      console.warn("[API] erreur :>>", error.response.status, message);
      throw new Error(message);
    }
    console.warn(
      `[API] pas de réponse | url=${error.config?.baseURL ?? ""}${error.config?.url ?? ""} | code=${error.code} | ${error.message}`,
    );
    throw error;
  }
  throw error instanceof Error ? error : new Error("An unexpected error occurred");
}
