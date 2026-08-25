export default function Hero() {
  return (
    <section className="hero-glow grid-bg relative overflow-hidden bg-dark-950 pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-accent-glow/10 blur-[120px]" />
        <div className="absolute right-1/4 bottom-1/4 h-80 w-80 rounded-full bg-accent-500/8 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="max-w-3xl">
            <p className="badge mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent-400" />
              Built exclusively for restaurants
            </p>

            <h1 className="font-display text-5xl leading-[1.08] font-bold tracking-tight text-white md:text-6xl lg:text-7xl">
              Technology that keeps your{' '}
              <span className="gradient-text">tables full</span> and your
              operations running
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-silver-400 md:text-xl">
              OA Solutions partners with restaurants to build websites, custom applications,
              online reservation systems, AI phone answering, and whatever your business needs
              to thrive in a digital world.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="btn-primary inline-flex items-center justify-center rounded-full px-8 py-3.5 text-base"
              >
                Start a Project
              </a>
              <a
                href="#services"
                className="btn-secondary inline-flex items-center justify-center rounded-full px-8 py-3.5 text-base"
              >
                Explore Services
              </a>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="absolute inset-0 rounded-3xl bg-accent-glow/10 blur-3xl" />
            <img
              src="/logo.png"
              alt="OA Solutions"
              className="relative w-full max-w-md md:max-w-lg"
              style={{ filter: 'drop-shadow(0 0 40px rgba(0, 102, 255, 0.25))' }}
            />
          </div>
        </div>

        <div className="glow-line mt-16" />

        <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4">
          {[
            { value: 'Websites', label: 'Beautiful & fast' },
            { value: 'Apps', label: 'Custom-built for you' },
            { value: 'Reservations', label: 'Bookings made easy' },
            { value: 'AI Phone', label: 'Never miss a call' },
          ].map((stat) => (
            <div
              key={stat.value}
              className="rounded-xl border border-accent-500/10 bg-dark-800/50 px-4 py-5 text-center"
            >
              <p className="font-display text-xl font-bold text-accent-400 md:text-2xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-silver-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
