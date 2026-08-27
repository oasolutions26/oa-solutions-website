export default function Privacy() {
  return (
    <section id="privacy" className="border-t border-accent-500/10 bg-dark-950 py-16 md:py-20">
      <div className="mx-auto max-w-3xl px-6">
        <p className="section-label">Privacy</p>
        <h2 className="font-display mt-3 text-3xl font-bold text-white md:text-4xl">
          How we handle your information
        </h2>

        <div className="mt-8 space-y-6 text-sm leading-relaxed text-silver-400">
          <p>
            When you submit the contact form, we collect your name, email, restaurant name (if
            provided), and message so we can respond to your inquiry.
          </p>
          <p>
            Form submissions are delivered to OA Solutions via Web3Forms and emailed to our team.
            We do not sell your information. We use it only to communicate about your project.
          </p>
          <p>
            We retain inquiry details as long as needed to follow up on your request or maintain
            a business relationship. You may ask us to delete your information by emailing{' '}
            <a href="mailto:OASolutions26@gmail.com" className="text-accent-400 hover:text-accent-300">
              OASolutions26@gmail.com
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
