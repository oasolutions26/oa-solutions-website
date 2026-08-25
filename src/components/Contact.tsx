import { useState, type FormEvent } from 'react'
import { CONTACT, sendContact } from '../lib/contact'

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    const formData = new FormData(e.currentTarget)
    const result = await sendContact({
      name: (formData.get('name') as string).trim(),
      restaurant: ((formData.get('restaurant') as string) || '').trim(),
      email: (formData.get('email') as string).trim(),
      message: (formData.get('message') as string).trim(),
    })

    if (result.ok) {
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
              Ready to modernize your restaurant?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-silver-400">
              Whether you need a new website, online reservations, an AI phone system, or something
              entirely custom — we&apos;d love to hear about your project.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-accent-500/20 bg-accent-500/10 text-accent-400">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-white">Phone</p>
                  <div className="space-y-1">
                    {CONTACT.phones.map((phone) => (
                      <a
                        key={phone.tel}
                        href={`tel:${phone.tel}`}
                        className="block text-accent-400 transition-colors hover:text-accent-300"
                      >
                        {phone.display}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-accent-500/20 bg-accent-500/10 text-accent-400">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
              <div className="flex h-full flex-col items-center justify-center py-12 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-accent-500/30 bg-accent-500/10 text-accent-400">
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="mt-6 text-2xl font-semibold text-white">Message sent!</h3>
                <p className="mt-2 text-silver-400">
                  Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                </p>
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
                  <label htmlFor="restaurant" className="mb-1.5 block text-sm font-medium text-silver-300">
                    Restaurant Name
                  </label>
                  <input
                    id="restaurant"
                    name="restaurant"
                    type="text"
                    disabled={status === 'loading'}
                    className="w-full rounded-lg border border-accent-500/10 bg-dark-800 px-4 py-3 text-white placeholder-silver-500 outline-none transition-colors focus:border-accent-500/40 focus:ring-1 focus:ring-accent-500/20 disabled:opacity-50"
                    placeholder="Your restaurant"
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
                    placeholder="you@restaurant.com"
                  />
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
                  <p className="rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-300">
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
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
