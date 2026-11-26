'use client';

import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { EventCard } from '@/entities/event/ui/EventCard';
import { MOCK_EVENTS } from '@/entities/event/model/mockEvents';
import type { EventCategorySlug } from '@/entities/event/model/types';
import { Button } from '@/shared/ui/Button';

const categories: { label: string; value: EventCategorySlug }[] = [
  { label: 'Tout', value: 'all' },
  { label: 'Spectacle et concert', value: 'spectacle-concert' },
  { label: 'Sports et loisirs', value: 'sports-loisirs' },
  { label: 'Seminaires', value: 'seminaires' },
  { label: 'Cultures', value: 'cultures' },
];

export default function LastEventSection() {
  const [selectedCategory, setSelectedCategory] = useState<EventCategorySlug>('all');
  const events = selectedCategory === 'all'
    ? MOCK_EVENTS
    : MOCK_EVENTS.filter((event) => event.category === selectedCategory);
  const cycleEvents = events.length
    ? Array.from({ length: Math.max(4, events.length) }, (_, index) => events[index % events.length])
    : [];

  return (
    <section className="mx-auto flex min-h-screen w-[min(1337px,calc(100%-24px))] flex-col items-center justify-center py-6 text-center">
      <h1 className="w-full text-[clamp(2rem,4.4vw,3.75rem)] font-bold uppercase leading-[1.1] text-[#111944] max-sm:text-[clamp(1.75rem,8vw,2.5rem)]">
        Les événements passés :
        <br />
        <span className="text-primary"> revivez les temps forts</span>
      </h1>

      <p className="mt-2 h-[72px] w-[min(710px,100%)] text-base leading-6 text-secondary-foreground max-sm:h-auto max-sm:text-sm max-sm:leading-5">
        Concerts, spectacles, festivals ou rencontres sportives : parcourez dès maintenant les archives de nos précédents rendez-vous. Replongez dans les moments marquants, redécouvrez l’ambiance des éditions écoulées et revivez ces instants inoubliables en images et en souvenirs.
      </p>

      <div className="mt-2 flex h-[52px] max-w-full flex-nowrap items-center justify-center gap-2 max-sm:h-auto max-sm:w-full max-sm:justify-start max-sm:overflow-x-auto max-sm:py-1" aria-label="Filtrer les événements passés">
        {categories.map((category) => (
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

      <div className="event-carousel mt-4 w-full" aria-label="Événements passés" aria-live="off">
        <div className="event-carousel-track" key={selectedCategory}>
          {[0, 1].map((group) => (
            <div
              key={group}
              className="event-carousel-group"
              aria-hidden={group === 1 ? true : undefined}
            >
              {cycleEvents.map((event, index) => (
                <div className="event-carousel-slide" key={`${group}-${event.id}-${index}`}>
                  <EventCard event={event} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <Button
        type="button"
        className="mt-8 h-[52px] w-[189px] rounded-full !px-4 !py-2 text-xs leading-4"
      >
        <ArrowRight aria-hidden="true" className="h-3 w-3" />
        Voir plus d’événements
      </Button>
    </section>
  );
}
