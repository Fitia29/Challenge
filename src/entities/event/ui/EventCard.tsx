import type { EventItem } from '../model/types'
import { Calendar, Clock, MapPin } from 'lucide-react'

interface EventCardProps {
  event: EventItem
}

export function EventCard({ event }: EventCardProps) {
  return (
    <article className="group relative h-[400px] w-[280.75px] overflow-hidden rounded-[20px] bg-slate-900 text-white shadow-sm">
      <img
        src={event.imageUrl}
        alt={event.title}
        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
      />

      <span className="absolute left-2.5 top-2.5 rounded-full bg-white px-2.5 py-1 text-xs font-medium text-[#111944]">
        {event.badge}
      </span>

      <div className="absolute inset-x-2.5 bottom-2.5 flex flex-col gap-1 rounded-[14px] bg-white px-3 py-2 text-left text-[#111944]">
        <h3 className="truncate text-xs font-semibold leading-4">{event.title}</h3>

        <p className="flex items-center gap-1 text-[10px] leading-3 text-[#111944]">
        <MapPin className="h-3 w-3 shrink-0" />
        <span className="truncate">{event.location}</span>
        </p>

        <p className="flex items-center gap-1 text-[10px] leading-3 text-[#111944]">
        <Calendar className="h-3 w-3 shrink-0" />
        <span>{event.date}</span>
        </p>

        <p className="flex items-center gap-1 text-[10px] leading-3 text-[#111944]">
        <Clock className="h-3 w-3 shrink-0" />
        <span>{event.time}</span>
        </p>
      </div>
    </article>
  )
}
