import { catchError, tiketyApi } from "@/lib/axios";
import { AxiosInstance } from "axios";

export async function genericCreate<T>(
  url: string,
  body: T,
  client: AxiosInstance = tiketyApi,
): Promise<{ data: T } | undefined> {
  try {
    const response = await client.post(url, body);

    return {
      data: response.data,
    };
  } catch (e) {
    catchError(e);
  }
}
