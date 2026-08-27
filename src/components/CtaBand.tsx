export default function CtaBand() {
  return (
    <section className="relative bg-dark-950 py-16 md:py-20" aria-labelledby="cta-band-heading">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,102,255,0.06),transparent_70%)]" />

      <div className="relative mx-auto max-w-6xl px-6 text-center">
        <h2
          id="cta-band-heading"
          className="font-display text-3xl font-bold tracking-tight text-white md:text-4xl"
        >
          Ready to stop losing covers to missed calls?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-lg text-silver-400">
          15-minute discovery call. Clear next steps. No hard sell.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a href="#contact" className="btn-primary rounded-full px-8 py-3.5 text-base">
            Book a discovery call
          </a>
          <a href="#work" className="btn-secondary rounded-full px-8 py-3.5 text-base">
            See recent work
          </a>
        </div>
      </div>
    </section>
  )
}
