export interface EventItem {
    id: string;
    title: string;
    description: string;
    categoryName: string;
    location?: string;
    price?: number;
    coverImage: string;
    startDate: string;
    endDate: string;
    startTime: string;
    endTime: string;
}
