const integrations = [
  { name: 'POS systems', detail: 'When your provider exposes an API' },
  { name: 'OpenTable / Resy', detail: 'Booking flow handoffs' },
  { name: 'Google Business', detail: 'Hours, menus, and local SEO' },
  { name: 'Stripe / Square', detail: 'Payments and online ordering' },
  { name: 'DoorDash / Uber Eats', detail: 'Menu sync where supported' },
  { name: 'Your existing stack', detail: 'We map it in discovery first' },
]

export default function Integrations() {
  return (
    <section id="integrations" className="relative bg-dark-950 py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <p className="section-label text-center">Integrations</p>
        <h2 className="font-display mt-3 text-center text-2xl font-bold text-white md:text-3xl">
          Built to work with the tools you already use
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-sm leading-relaxed text-silver-400">
          We only promise integrations we can deliver. Discovery maps your POS, reservations,
          and delivery stack before we quote.
        </p>

        <ul className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {integrations.map((item) => (
            <li
              key={item.name}
              title={item.detail}
              className="rounded-full border border-accent-500/15 bg-dark-800/60 px-4 py-2 text-sm font-medium text-silver-300 transition-colors hover:border-accent-500/30 hover:text-white"
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
