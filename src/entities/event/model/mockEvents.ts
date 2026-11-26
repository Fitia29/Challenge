import {EventItem} from "@/entities/event/model/types";

export const MOCK_EVENTS: EventItem[] = [
    {
        id: "1",
        badge: "Spectacle",
        category: "spectacle-concert",
        title: "Festival de la musique",
        location: "Kianja barea Mahamasina",
        date: "28 novembre 2026",
        time: "08:00 - 18:00",
        imageUrl: "/images/festival.png",
    },
    {
        id: "2",
        badge: "Culture",
        category: "cultures",  
        title: "Global Cultural Festival",
        location: "Kianja barea Mahamasina",
        date: "28 novembre 2026",
        time: "08:00 - 18:00",
        imageUrl: "/images/culture.jpg"
    },
    {
        id: "3",
        badge: "Sport",
        category: "sports-loisirs",
        title: "MotoGP Racing",
        location: "Kianja barea Mahamasina",
        date: "28 novembre 2026",
        time: "08:00 - 18:00",
        imageUrl: "/images/motogp.jpg"
    },
    {
        id: "4",
        badge: "Seminaire",
        category: "seminaires",
        title: "Conference",
        location: "Kianja barea Mahamasina",
        date: "28 novembre 2026",
        time: "08:00 - 18:00",
        imageUrl: "/images/conference.jpg"
    }
];
