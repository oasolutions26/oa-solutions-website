import { CONTACT } from '../lib/contact'

export default function Privacy() {
  const usesPlausible = Boolean(import.meta.env.VITE_PLAUSIBLE_DOMAIN?.trim())
  const usesGa = Boolean(import.meta.env.VITE_GA_MEASUREMENT_ID?.trim())

  return (
    <section id="privacy" className="border-t border-accent-500/10 bg-dark-950 py-16 md:py-20">
      <div className="mx-auto max-w-3xl px-6">
        <p className="section-label">Privacy</p>
        <h2 className="font-display mt-3 text-3xl font-bold text-white md:text-4xl">
          How we handle your information
        </h2>

        <div className="mt-8 space-y-6 text-sm leading-relaxed text-silver-400">
          <p>
            When you submit the contact form, we collect your name, email, phone number (if
            provided), business name (if provided), website URL (if provided), expected budget (if
            provided), and message so we can respond to your inquiry.
          </p>
          <p>
            Form submissions are delivered to OA Solutions via Web3Forms and emailed to our team.
            We do not sell your information. We use it only to communicate about your project.
          </p>
          <p>
            When you book a discovery call, you are redirected to Google Calendar (hosted on{' '}
            {CONTACT.email}). Google&apos;s privacy policy applies to information you enter on
            their booking page.
          </p>
          {(usesPlausible || usesGa) && (
            <p>
              We use privacy-conscious analytics
              {usesPlausible && usesGa
                ? ' (Plausible and Google Analytics)'
                : usesPlausible
                  ? ' (Plausible)'
                  : ' (Google Analytics)'}
              {' '}to understand site traffic and improve the experience. Analytics data is
              aggregated and does not include the contents of your contact form message.
            </p>
          )}
          <p>
            We retain inquiry details as long as needed to follow up on your request or maintain
            a business relationship. You may ask us to delete your information by emailing{' '}
            <a href={`mailto:${CONTACT.email}`} className="text-accent-400 hover:text-accent-300">
              {CONTACT.email}
            </a>
            .
          </p>
          <p className="text-silver-500">
            Last updated: {new Date().toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </div>
    </section>
  )
}
