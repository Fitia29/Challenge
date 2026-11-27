export interface EventResponse {
  id: string; 
  title: string;
  description: string | null;
  categoryName: string | null;
  coverImage: string | null; 
  location?: string | null;
  startDate: string; 
  endDate: string;
  startTime: string | null; 
  endTime: string | null; 
  price?: number | null;
}

export interface GetAllEventsParams {
  page?: number;
  limit?: number;
  search?: string;
}
