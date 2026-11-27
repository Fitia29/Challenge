import type { EventItem } from "@/entities/event/model/types";

export const MOCK_EVENTS: EventItem[] = [
    {
        id: "1",
        title: "Festival de la musique",
        description: "Festival de musique à Antananarivo.",
        categoryName: "Spectacle et concert",
        coverImage: "/images/festival.png",
        startDate: "2026-11-28T00:00:00",
        endDate: "2026-11-28T00:00:00",
        startTime: "08:00:00",
        endTime: "18:00:00",
    },
    {
        id: "2",
        title: "Global Cultural Festival",
        description: "Un rendez-vous consacré aux cultures du monde.",
        categoryName: "Cultures",
        coverImage: "/images/culture.jpg",
        startDate: "2026-11-28T00:00:00",
        endDate: "2026-11-28T00:00:00",
        startTime: "08:00:00",
        endTime: "18:00:00",
    },
    {
        id: "3",
        title: "MotoGP Racing",
        description: "Une journée dédiée aux sports mécaniques.",
        categoryName: "Sports et loisirs",
        coverImage: "/images/motogp.jpg",
        startDate: "2026-11-28T00:00:00",
        endDate: "2026-11-28T00:00:00",
        startTime: "08:00:00",
        endTime: "18:00:00",
    },
    {
        id: "4",
        title: "Conference",
        description: "Une conférence autour des nouveaux usages.",
        categoryName: "Seminaires",
        coverImage: "/images/conference.jpg",
        startDate: "2026-11-28T00:00:00",
        endDate: "2026-11-28T00:00:00",
        startTime: "08:00:00",
        endTime: "18:00:00",
    }
];
