import { useState, type FormEvent } from 'react'
import { BUDGET_OPTIONS, CONTACT, sendContact } from '../lib/contact'
import { BOOKING_ACCOUNT_EMAIL } from '../lib/booking'
import { trackEvent } from '../lib/analytics'
import BookCallLink from './BookCallLink'
import TrackedPhoneLink from './TrackedPhoneLink'

type ContactProps = {
  title?: string
  subtitle?: string
  businessFieldLabel?: string
  businessFieldPlaceholder?: string
  emailPlaceholder?: string
  industry?: string
}

export default function Contact({
  title = 'Ready to modernize your business?',
  subtitle = 'Whether you need a website, custom application, or something entirely custom — we would love to hear about your project.',
  businessFieldLabel = 'Business Name',
  businessFieldPlaceholder = 'Your business',
  emailPlaceholder = 'you@yourbusiness.com',
  industry,
}: ContactProps = {}) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    const formData = new FormData(e.currentTarget)
    let websiteUrl = ((formData.get('websiteUrl') as string) || '').trim()
    if (websiteUrl && !/^https?:\/\//i.test(websiteUrl)) {
      websiteUrl = `https://${websiteUrl}`
    }

    const result = await sendContact({
      name: (formData.get('name') as string).trim(),
      businessName: ((formData.get('businessName') as string) || '').trim(),
      websiteUrl,
      email: (formData.get('email') as string).trim(),
      phone: ((formData.get('phone') as string) || '').trim(),
      budget: ((formData.get('budget') as string) || '').trim(),
      message: (formData.get('message') as string).trim(),
      industry,
    })

    if (result.ok) {
      trackEvent('contact_form_submit')
      setStatus('success')
      e.currentTarget.reset()
    } else {
      setStatus('error')
      setErrorMessage(result.error)
    }
  }

  return (
    <section id="contact" className="relative bg-dark-950 py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 hero-glow" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <p className="section-label">Get in Touch</p>
            <h2 className="font-display mt-3 text-4xl font-bold tracking-tight text-white md:text-5xl">
              {title}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-silver-400">{subtitle}</p>

            <div className="mt-8 rounded-2xl border border-accent-500/20 bg-accent-500/5 p-6">
              <p className="font-medium text-white">Prefer to pick a time?</p>
              <p className="mt-2 text-sm leading-relaxed text-silver-400">
                Book a 30-minute discovery call on our Google Calendar — hosted on{' '}
                {BOOKING_ACCOUNT_EMAIL}.
              </p>
              <BookCallLink
                source="contact_card"
                className="btn-primary mt-4 inline-flex rounded-full px-6 py-3 text-sm"
              >
                Schedule on Google Calendar
              </BookCallLink>
            </div>

            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-accent-500/20 bg-accent-500/10 text-accent-400">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-white">Email</p>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="text-accent-400 transition-colors hover:text-accent-300"
                  >
                    {CONTACT.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-accent-500/20 bg-accent-500/10 text-accent-400">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-white">Phone</p>
                  <div className="space-y-1">
                    {CONTACT.phones.map((phone) => (
                      <TrackedPhoneLink
                        key={phone.tel}
                        tel={phone.tel}
                        display={phone.display}
                        source="contact_section"
                        className="block text-accent-400 transition-colors hover:text-accent-300"
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-accent-500/20 bg-accent-500/10 text-accent-400">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-white">Response Time</p>
                  <p className="text-silver-400">We respond within 24 hours</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card rounded-2xl p-8 md:p-10">
            {status === 'success' ? (
              <div
                role="status"
                aria-live="polite"
                className="flex h-full flex-col items-center justify-center py-12 text-center"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-accent-500/30 bg-accent-500/10 text-accent-400">
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="mt-6 text-2xl font-semibold text-white">Message sent!</h3>
                <p className="mt-2 text-silver-400">
                  Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                </p>
                <BookCallLink
                  source="contact_success"
                  className="btn-secondary mt-6 inline-flex rounded-full px-6 py-2.5 text-sm"
                >
                  Or book a call now
                </BookCallLink>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="mt-8 text-sm text-silver-500 transition-colors hover:text-accent-400"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-silver-300">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    disabled={status === 'loading'}
                    className="w-full rounded-lg border border-accent-500/10 bg-dark-800 px-4 py-3 text-white placeholder-silver-500 outline-none transition-colors focus:border-accent-500/40 focus:ring-1 focus:ring-accent-500/20 disabled:opacity-50"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="businessName" className="mb-1.5 block text-sm font-medium text-silver-300">
                    {businessFieldLabel}
                  </label>
                  <input
                    id="businessName"
                    name="businessName"
                    type="text"
                    disabled={status === 'loading'}
                    className="w-full rounded-lg border border-accent-500/10 bg-dark-800 px-4 py-3 text-white placeholder-silver-500 outline-none transition-colors focus:border-accent-500/40 focus:ring-1 focus:ring-accent-500/20 disabled:opacity-50"
                    placeholder={businessFieldPlaceholder}
                  />
                </div>

                <div>
                  <label htmlFor="websiteUrl" className="mb-1.5 block text-sm font-medium text-silver-300">
                    Website URL <span className="text-silver-500">(optional)</span>
                  </label>
                  <input
                    id="websiteUrl"
                    name="websiteUrl"
                    type="text"
                    inputMode="url"
                    autoComplete="url"
                    disabled={status === 'loading'}
                    className="w-full rounded-lg border border-accent-500/10 bg-dark-800 px-4 py-3 text-white placeholder-silver-500 outline-none transition-colors focus:border-accent-500/40 focus:ring-1 focus:ring-accent-500/20 disabled:opacity-50"
                    placeholder="https://yourbusiness.com"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-silver-300">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    disabled={status === 'loading'}
                    className="w-full rounded-lg border border-accent-500/10 bg-dark-800 px-4 py-3 text-white placeholder-silver-500 outline-none transition-colors focus:border-accent-500/40 focus:ring-1 focus:ring-accent-500/20 disabled:opacity-50"
                    placeholder={emailPlaceholder}
                  />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-silver-300">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      disabled={status === 'loading'}
                      className="w-full rounded-lg border border-accent-500/10 bg-dark-800 px-4 py-3 text-white placeholder-silver-500 outline-none transition-colors focus:border-accent-500/40 focus:ring-1 focus:ring-accent-500/20 disabled:opacity-50"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div>
                    <label htmlFor="budget" className="mb-1.5 block text-sm font-medium text-silver-300">
                      Expected Budget
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      disabled={status === 'loading'}
                      className="w-full rounded-lg border border-accent-500/10 bg-dark-800 px-4 py-3 text-white outline-none transition-colors focus:border-accent-500/40 focus:ring-1 focus:ring-accent-500/20 disabled:opacity-50"
                      defaultValue=""
                    >
                      {BUDGET_OPTIONS.map((option) => (
                        <option key={option.value || 'empty'} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-silver-300">
                    How can we help?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    disabled={status === 'loading'}
                    className="w-full resize-none rounded-lg border border-accent-500/10 bg-dark-800 px-4 py-3 text-white placeholder-silver-500 outline-none transition-colors focus:border-accent-500/40 focus:ring-1 focus:ring-accent-500/20 disabled:opacity-50"
                    placeholder="Tell us about your project..."
                  />
                </div>

                {status === 'error' && (
                  <p
                    role="alert"
                    className="rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-300"
                  >
                    {errorMessage}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-primary w-full rounded-full py-3.5 text-base disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === 'loading' ? 'Sending...' : 'Send Message'}
                </button>

                <p className="text-center text-sm text-silver-500">
                  Rather talk live?{' '}
                  <BookCallLink
                    source="contact_form_footer"
                    className="text-accent-400 hover:text-accent-300"
                  >
                    Book a discovery call
                  </BookCallLink>
                </p>

                <p className="text-center text-xs leading-relaxed text-silver-500">
                  By submitting, you agree we may use your details to respond to your inquiry.{' '}
                  <a href="#privacy" className="text-accent-400 hover:text-accent-300">
                    Privacy policy
                  </a>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
