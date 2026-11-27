import type { EventItem } from '../model/types'
import { useState } from 'react'
import { Calendar, Clock, ImageOff, MapPin } from 'lucide-react'

interface EventCardProps {
  event: EventItem
}

function getCoverImageUrl(coverImage: string) {
  if (/^https?:\/\//i.test(coverImage)) return coverImage

  const apiUrl = process.env.NEXT_PUBLIC_API_URL
  if (!apiUrl) return coverImage

  const backendOrigin = apiUrl.replace(/\/api\/?$/, '')
  return new URL(coverImage.replace(/^\/+/, ''), `${backendOrigin}/`).toString()
}

function formatEventDate(startDate: string, endDate: string) {
  const start = new Date(startDate)
  const end = new Date(endDate)
  const dateOptions: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }
  const formattedStart = start.toLocaleDateString('fr-FR', dateOptions)

  if (start.toDateString() === end.toDateString()) {
    return formattedStart
  }

  return `${formattedStart} - ${end.toLocaleDateString('fr-FR', dateOptions)}`
}

function formatEventTime(startTime: string, endTime: string) {
  return `${startTime.slice(0, 5)} - ${endTime.slice(0, 5)}`
}

export function EventCard({ event }: EventCardProps) {
  const [imageFailed, setImageFailed] = useState(false)

  return (
    <article className="group relative h-[500px] w-full max-w-[320.75px] overflow-hidden rounded-[20px] bg-slate-900 text-white shadow-sm">
      {imageFailed ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-[#111944] text-sm text-white/70">
          <ImageOff aria-hidden="true" className="h-8 w-8" />
          <span>Visuel indisponible</span>
        </div>
      ) : (
        <img
          src={getCoverImageUrl(event.coverImage)}
          alt={event.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          onError={() => setImageFailed(true)}
        />
      )}

      <span className="absolute left-3 top-3 rounded-full bg-white px-2.5 py-1 text-xs font-medium text-[#111944]">
        {event.categoryName}
      </span>

      <div className="absolute bottom-3 left-4 flex h-[164px] w-[calc(100%-32px)] max-w-[288.67px] flex-col gap-2 rounded-[14px] bg-white px-6 py-3 text-left text-[#111944]">
        <h3 className="truncate text-sm font-semibold leading-5">{event.title}</h3>

        <p className="line-clamp-2 text-xs leading-4 text-[#111944]">
          {event.description}
        </p>

        <p className="flex items-center gap-2 text-xs leading-4 text-[#111944]">
          <Calendar className="h-3 w-3 shrink-0" />
          <span>{formatEventDate(event.startDate, event.endDate)}</span>
        </p>

        <p className="flex items-center gap-2 text-xs leading-4 text-[#111944]">
          <Clock className="h-3 w-3 shrink-0" />
          <span>{formatEventTime(event.startTime, event.endTime)}</span>
        </p>

        {event.location && (
          <p className="flex items-center gap-2 truncate text-xs leading-4 text-[#111944]">
            <MapPin className="h-3 w-3 shrink-0" />
            <span className="truncate">{event.location}</span>
          </p>
        )}
      </div>
    </article>
  )
}
