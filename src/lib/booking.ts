import { CONTACT } from './contact'

/** Google Calendar Appointment Schedule booking page — set in .env.local after creating the schedule. */
const DEFAULT_BOOKING_URL = 'https://calendar.app.google/4oKq2wkwPzAHUnER7'

export const BOOKING_URL =
  import.meta.env.VITE_GOOGLE_CALENDAR_BOOKING_URL?.trim() || DEFAULT_BOOKING_URL

export const hasBooking = BOOKING_URL.length > 0

export const BOOKING_ACCOUNT_EMAIL = CONTACT.email
