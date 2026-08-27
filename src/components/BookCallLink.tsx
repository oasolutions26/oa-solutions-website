import type { ReactNode } from 'react'
import { BOOKING_URL, hasBooking } from '../lib/booking'
import { trackEvent } from '../lib/analytics'

type BookCallLinkProps = {
  source: string
  className?: string
  children: ReactNode
  fallbackHref?: string
}

export default function BookCallLink({
  source,
  className,
  children,
  fallbackHref = '#contact',
}: BookCallLinkProps) {
  if (!hasBooking) {
    return (
      <a href={fallbackHref} className={className}>
        {children}
      </a>
    )
  }

  return (
    <a
      href={BOOKING_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={() => trackEvent('book_call_click', { source })}
    >
      {children}
    </a>
  )
}
