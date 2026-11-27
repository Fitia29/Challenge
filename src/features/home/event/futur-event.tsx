'use client';

import { useMemo, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { EventCard } from '@/entities/event/ui/EventCard';
import { Button } from '@/shared/ui/Button';
import { useEvents } from './use-events';

export default function FuturEventSection() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(4);
  const { data, error, isError, isPending } = useEvents();
  const events = useMemo(
    () => (data ?? []).filter((event) => new Date(event.endDate).getTime() >= Date.now()),
    [data],
  );
  const categories = Array.from(new Set(events.map((event) => event.categoryName)));
  const filteredEvents = selectedCategory
    ? events.filter((event) => event.categoryName === selectedCategory)
    : events;
  const visibleEvents = filteredEvents.slice(0, visibleCount);
  return (
    <section className="mx-auto flex min-h-screen w-[min(1337px,calc(100%-24px))] flex-col items-center justify-center py-6 text-center mt-[85px]">
      <div className="flex min-h-[288px] w-full flex-none flex-col items-center gap-2 max-sm:h-auto max-sm:min-h-0">
        <h2 className="w-full text-[clamp(2rem,4.4vw,3.75rem)] font-bold uppercase leading-[1.1] text-[#111944] max-sm:text-[clamp(1.75rem,8vw,2.5rem)]">
          Les événements à venir : préparez
          <br />
          <span className="text-primary">vos prochaines sorties</span>
        </h2>

        <p className="h-[72px] w-[min(710px,100%)] text-base leading-6 text-secondary-foreground max-sm:h-auto max-sm:text-sm max-sm:leading-5">
          Concerts, spectacles, festivals ou rencontres sportives : explorez dès maintenant notre calendrier des prochains mois. Anticipez vos envies, choisissez les meilleures places avant tout le monde et réservez vos billets en toute simplicité.
        </p>

        <div className="flex h-[52px] max-w-full flex-nowrap items-center justify-center gap-2 max-sm:grid max-sm:h-auto max-sm:w-full max-sm:grid-cols-3 max-sm:gap-2 max-sm:py-1" aria-label="Filtrer les événements">
          <Button
            type="button"
            variant={selectedCategory === null ? 'pill-active' : 'pill-outline'}
            className="h-[52px] shrink-0 whitespace-nowrap !px-5 !py-1 text-[11px] leading-4 max-sm:h-auto max-sm:min-h-10 max-sm:w-full max-sm:whitespace-normal max-sm:!px-2 max-sm:text-[10px]"
            aria-pressed={selectedCategory === null}
            onClick={() => {
              setSelectedCategory(null);
              setVisibleCount(4);
            }}
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
              onClick={() => {
                setSelectedCategory(category);
                setVisibleCount(4);
              }}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>
      <div className="mt-4 grid w-full grid-cols-1 justify-items-center gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" aria-label="Événements à venir" aria-live="off">
        {isPending ? (
          <p className="col-span-full py-8 text-secondary-foreground">Chargement des événements…</p>
        ) : isError ? (
          <p role="alert" className="col-span-full py-8 text-secondary-foreground">
            Impossible de charger les événements à venir : {error.message}
          </p>
        ) : filteredEvents.length === 0 ? (
          <p className="col-span-full py-8 text-secondary-foreground">Aucun événement à venir pour cette catégorie.</p>
        ) : visibleEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>

      {!isPending && !isError && filteredEvents.length > visibleCount && (
        <Button
          type="button"
          onClick={() => setVisibleCount((count) => count + 4)}
          className="mt-8 h-[52px] w-[220px] rounded-full !px-4 !py-2 text-xs leading-4"
        >
          <ArrowRight aria-hidden="true" className="h-3 w-3" />
          Voir plus d’événements
        </Button>
      )}
    </section>
  );
}
