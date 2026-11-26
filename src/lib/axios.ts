import axios, { AxiosError } from "axios";

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
