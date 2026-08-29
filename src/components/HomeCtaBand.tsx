import BookCallLink from './BookCallLink'

export default function HomeCtaBand() {
  return (
    <section className="relative bg-dark-950 py-16 md:py-20" aria-labelledby="home-cta-band-heading">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,102,255,0.06),transparent_70%)]" />

      <div className="relative mx-auto max-w-6xl px-6 text-center">
        <h2
          id="home-cta-band-heading"
          className="font-display text-3xl font-bold tracking-tight text-white md:text-4xl"
        >
          Ready to talk about your project?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-lg text-silver-400">
          30-minute discovery call on Google Calendar. Clear next steps. No hard sell.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <BookCallLink
            source="home_cta_band"
            className="btn-primary rounded-full px-8 py-3.5 text-base"
          >
            Book a discovery call
          </BookCallLink>
          <a href="#industries" className="btn-secondary rounded-full px-8 py-3.5 text-base">
            Explore industries
          </a>
        </div>
      </div>
    </section>
  )
}
