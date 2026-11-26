export type EventCategorySlug = "all" | "spectacle-concert" | "sports-loisirs" | "seminaires" | "cultures";

export interface EventItem {
    id: string;
    badge: string;
    category: Exclude<EventCategorySlug, "all">;
    title: string;
    location: string;
    date: string;
    time: string;
    imageUrl: string;
}