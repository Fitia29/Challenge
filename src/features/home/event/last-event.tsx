'use client';

import { useMemo, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { EventCard } from '@/entities/event/ui/EventCard';
import { Button } from '@/shared/ui/Button';
import { useEvents } from './use-events';

export default function LastEventSection() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const { data, error, isError, isPending } = useEvents('past');
  const events = useMemo(() => data ?? [], [data]);
  const categories = Array.from(new Set(events.map((event) => event.categoryName)));
  const filteredEvents = selectedCategory
    ? events.filter((event) => event.categoryName === selectedCategory)
    : events;
  const cycleEvents = filteredEvents.length
    ? Array.from({ length: Math.max(4, filteredEvents.length) }, (_, index) => filteredEvents[index % filteredEvents.length])
    : [];

  return (
    <section className="mx-auto flex min-h-screen w-[min(1337px,calc(100%-24px))] flex-col items-center justify-center py-6 text-center mt-[85px]">
      <h2 className="w-full text-[clamp(2rem,4.4vw,3.75rem)] font-bold uppercase leading-[1.1] text-[#111944] max-sm:text-[clamp(1.75rem,8vw,2.5rem)]">
        Les événements passés :
        <br />
        <span className="text-primary"> revivez les temps forts</span>
      </h2>

      <p className="mt-2 h-[72px] w-[min(710px,100%)] text-base leading-6 text-secondary-foreground max-sm:h-auto max-sm:text-sm max-sm:leading-5">
        Concerts, spectacles, festivals ou rencontres sportives : parcourez dès maintenant les archives de nos précédents rendez-vous. Replongez dans les moments marquants, redécouvrez l’ambiance des éditions écoulées et revivez ces instants inoubliables en images et en souvenirs.
      </p>

      <div className="mt-2 flex h-[52px] max-w-full flex-nowrap items-center justify-center gap-2 max-sm:grid max-sm:h-auto max-sm:w-full max-sm:grid-cols-3 max-sm:gap-2 max-sm:py-1" aria-label="Filtrer les événements passés">
        <Button
          type="button"
          variant={selectedCategory === null ? 'pill-active' : 'pill-outline'}
          className="h-[52px] shrink-0 whitespace-nowrap !px-5 !py-1 text-[11px] leading-4 max-sm:h-auto max-sm:min-h-10 max-sm:w-full max-sm:whitespace-normal max-sm:!px-2 max-sm:text-[10px]"
          aria-pressed={selectedCategory === null}
          onClick={() => setSelectedCategory(null)}
        >
          Tout
        </Button>
        {categories.map((category) => (
          <Button
            key={category}
            type="button"
            variant={selectedCategory === category ? 'pill-active' : 'pill-outline'}
            className="h-[52px] shrink-0 whitespace-nowrap !px-5 !py-1 text-[11px] leading-4 max-sm:h-auto max-sm:min-h-10 max-sm:w-full max-sm:whitespace-normal max-sm:!px-2 max-sm:text-[10px]"
            aria-pressed={selectedCategory === category}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>

      <div className="event-carousel mt-4 w-full" aria-label="Événements passés" aria-live="off">
        <div className="event-carousel-track" key={selectedCategory}>
          {isPending ? (
            <p className="w-full py-8 text-secondary-foreground">Chargement des événements…</p>
          ) : isError ? (
            <p role="alert" className="w-full py-8 text-secondary-foreground">
              Impossible de charger les événements : {error.message}
            </p>
          ) : filteredEvents.length === 0 ? (
            <p className="w-full py-8 text-secondary-foreground">Aucun événement passé pour cette catégorie.</p>
          ) : [0, 1].map((group) => (
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
