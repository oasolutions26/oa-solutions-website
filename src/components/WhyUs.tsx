const reasons = [
  {
    title: 'Restaurant-first expertise',
    description:
      'We don\'t build generic software. Every project starts with understanding your concept, your guests, and your daily operations.',
  },
  {
    title: 'End-to-end partnership',
    description:
      'From the first conversation to launch and beyond, you work directly with a team that cares about your success — not a ticket queue.',
  },
  {
    title: 'Built to perform',
    description:
      'Fast load times, mobile optimization, and reliable systems. Your guests expect seamless experiences, and we deliver them.',
  },
  {
    title: 'Flexible & scalable',
    description:
      'Whether you\'re a single-location bistro or growing into multiple sites, our solutions grow with you.',
  },
]

export default function WhyUs() {
  return (
    <section id="why-us" className="relative bg-dark-950 py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-50" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <p className="section-label">Why OA Solutions</p>
            <h2 className="font-display mt-3 text-4xl font-bold tracking-tight text-white md:text-5xl">
              A development partner who speaks your language
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-silver-400">
              Running a restaurant is hard enough. You shouldn&apos;t have to become a tech expert
              too. We translate your business goals into technology that just works.
            </p>

            <div className="glow-line mt-8 w-24" />
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {reasons.map((reason) => (
              <div
                key={reason.title}
                className="glass-card rounded-2xl p-6"
              >
                <div className="mb-4 h-0.5 w-10 rounded-full bg-gradient-to-r from-accent-500 to-accent-glow" />
                <h3 className="text-lg font-semibold text-white">{reason.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-silver-400">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
