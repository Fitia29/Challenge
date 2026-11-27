import { catchError, tiketyApi } from "@/lib/axios";
import { AxiosInstance } from "axios";

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
