import { catchAxios, catchError, tiketyApi } from "@/lib/axios";
import type { ApiResponse, Meta } from "@/interfaces/api";
import { AxiosInstance, AxiosRequestConfig } from "axios";

export async function genericCreate<TnewData, TResponse>(
  url: string,
  body: TnewData,
  client: AxiosInstance = tiketyApi,
): Promise<{ data: TResponse} | undefined> {
  try {
    const response = await client.post(url, body);

    return {
      data: response.data,
    };
  } catch (e) {
    catchError(e);
  }
}

export async function genericGetList<T>(
  url: string,
  params?: Record<string, string | number | boolean | undefined>,
  config?: AxiosRequestConfig,
  client: AxiosInstance = tiketyApi,
): Promise<{ data: T[]; meta?: Meta | null }> {
  try {
    const response = await client.get<ApiResponse<T[]> | T[]>(url, { ...config, params });
    const body = response.data;

    if (Array.isArray(body)) return { data: body };

    if (body?.success === false || !Array.isArray(body?.data)) {
      throw new Error(body?.message || "Réponse de l'API invalide");
    }

    return { data: body.data, meta: body.meta };
  } catch (error) {
    return catchAxios(error);
  }
}
