'use client';

import { useState } from 'react';
import { MOCK_EVENTS } from '@/entities/event/model/mockEvents';
import type { EventCategorySlug } from '@/entities/event/model/types';
import { Button } from '@/shared/ui/Button';
import RotatingText from "@/components/RotatingText";

const categories: { label: string; value: EventCategorySlug }[] = [
  { label: 'Tous', value: 'all' },
  { label: 'Concerts', value: 'spectacle-concert' },
  { label: 'Festivals', value: 'cultures' },
  { label: 'Spectacle', value: 'sports-loisirs' },
  { label: 'Conférences', value: 'seminaires' },
];

const visibleCategories = categories.filter(
  (category, index, items) => items.findIndex((item) => item.label === category.label) === index,
);

export default function DiscoverSection() {
  const [selectedCategory, setSelectedCategory] = useState<EventCategorySlug>('all');
  const events = selectedCategory === 'all'
    ? MOCK_EVENTS
    : MOCK_EVENTS.filter((event) => event.category === selectedCategory);

  return (
    <section className="mx-auto w-[min(1344px,calc(100%-96px))] pt-[109px] pb-[100px] text-left">
      <div className="mb-8 flex flex-col items-start gap-2">
       <h2 className="max-w-[520px] text-[clamp(2rem,3.5vw,2.5rem)] font-bold uppercase leading-[1.08] text-[#111944]">
         Découvrez les rendez-
         <br />
        vous incontournables{" "}
        <RotatingText />
        </h2>

        <p className="max-w-[470px] text-xs leading-[1.55] text-secondary-foreground">
          Avec Tikety, simplifiez et modernisez la gestion de votre billetterie grâce à une solution numérique rapide, sécurisée et fiable. Dites adieu aux files d’attente, aux billets papier et aux contraintes logistiques.
        </p>

        <div className="flex h-[52px] max-w-full flex-nowrap items-center justify-center gap-2 max-sm:h-auto max-sm:w-full max-sm:justify-start max-sm:overflow-x-auto max-sm:py-1" aria-label="Filtrer les événements">
          {visibleCategories.map((category) => (
            <Button
              key={category.value}
              type="button"
              variant={selectedCategory === category.value ? 'pill-active' : 'pill-outline'}
              className="h-[52px] shrink-0 whitespace-nowrap !px-5 !py-1 text-[11px] leading-4 max-sm:h-11"
              aria-pressed={selectedCategory === category.value}
              onClick={() => setSelectedCategory(category.value)}
            >
              {category.label}
            </Button>
          ))}
        </div>
      </div>

      {events.length > 0 ? (
        <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-4">
          {events.map((event) => (
            <article
              key={event.id}
              className="group relative h-[463px] overflow-hidden rounded-[22px] bg-slate-900 text-white"
            >
              <img
                src={event.imageUrl}
                alt={event.title}
                className="h-[463px] w-[322.5px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
              <h3 className="absolute bottom-4 left-4 right-3 text-sm font-semibold leading-5">
                {event.title}
              </h3>
            </article>
          ))}
        </div>
      ) : (
        <p className="py-8 text-sm text-secondary-foreground">Aucun événement dans cette catégorie pour le moment.</p>
      )}
    </section>
  );
}
