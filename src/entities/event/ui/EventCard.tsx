import type { EventItem } from '../model/types'
import { Calendar, Clock, MapPin } from 'lucide-react'

interface EventCardProps {
  event: EventItem
}

export function EventCard({ event }: EventCardProps) {
  return (
    <article className="group relative h-[500px] w-[min(320.75px,calc(100vw-40px))] overflow-hidden rounded-[20px] bg-slate-900 text-white shadow-sm">
      <img
        src={event.imageUrl}
        alt={event.title}
        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
      />

      <span className="absolute left-3 top-3 rounded-full bg-white px-2.5 py-1 text-xs font-medium text-[#111944]">
        {event.badge}
      </span>

      <div className="absolute bottom-3 left-4 flex h-[144.4px] w-[calc(100%-32px)] max-w-[288.67px] flex-col gap-2 rounded-[14px] bg-white px-6 py-3 text-left text-[#111944]">
        <h3 className="truncate text-sm font-semibold leading-5">{event.title}</h3>

        <p className="flex items-center gap-2 text-xs leading-4 text-[#111944]">
        <MapPin className="h-3 w-3 shrink-0" />
        <span className="truncate">{event.location}</span>
        </p>

        <p className="flex items-center gap-2 text-xs leading-4 text-[#111944]">
        <Calendar className="h-3 w-3 shrink-0" />
        <span>{event.date}</span>
        </p>

        <p className="flex items-center gap-2 text-xs leading-4 text-[#111944]">
        <Clock className="h-3 w-3 shrink-0" />
        <span>{event.time}</span>
        </p>
      </div>
    </article>
  )
}
