/** Google Calendar Appointment Schedule booking page — set in .env.local after creating the schedule. */
export const BOOKING_URL = import.meta.env.VITE_GOOGLE_CALENDAR_BOOKING_URL?.trim() ?? ''

export const hasBooking = BOOKING_URL.length > 0

export const BOOKING_ACCOUNT_EMAIL = 'OASolutions26@gmail.com'
