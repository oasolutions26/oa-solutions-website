/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_WEB3FORMS_ACCESS_KEY: string
  /** Public Google Calendar Appointment Schedule URL (from calendar.google.com) */
  readonly VITE_GOOGLE_CALENDAR_BOOKING_URL: string
  /** Plausible domain, e.g. oasolutions.com — loads script when set */
  readonly VITE_PLAUSIBLE_DOMAIN: string
  /** GA4 measurement ID, e.g. G-XXXXXXXX — loads gtag when set */
  readonly VITE_GA_MEASUREMENT_ID: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare global {
  interface Window {
    plausible?: (event: string, options?: { props?: Record<string, string> }) => void
    gtag?: (...args: unknown[]) => void
    dataLayer?: unknown[]
  }
}

export {}
