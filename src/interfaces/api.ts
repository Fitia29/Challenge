export interface Meta {
  total?: number | null;
  page?: number | null;
  limit?: number | null;
}

export interface ApiResponse<T> {
  success?: boolean | null;
  data?: T | null;
  code?: string | null;
  message?: string | null;
  meta?: Meta | null;
}
