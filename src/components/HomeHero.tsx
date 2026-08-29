import Reveal from './Reveal'

export default function HomeHero() {
  return (
    <section className="hero-glow grid-bg relative overflow-hidden bg-dark-950 pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-accent-glow/10 blur-[120px]" />
        <div className="absolute right-1/4 bottom-1/4 h-80 w-80 rounded-full bg-accent-500/8 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="mx-auto max-w-4xl text-center">
            <p className="badge mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent-400" aria-hidden="true" />
              Technology, Automation, Digital Solutions
            </p>

            <h1 className="font-display text-5xl leading-[1.08] font-bold tracking-tight text-white md:text-6xl lg:text-7xl">
              Custom technology that helps{' '}
              <span className="gradient-text">your business grow</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-silver-400 md:text-xl">
              OA Solutions is a development partner for businesses across industries. We build
              websites, custom applications, automation, AI tools, and integrations — tailored to
              how you actually work.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#contact"
                className="btn-primary inline-flex items-center justify-center rounded-full px-8 py-3.5 text-base"
              >
                Start a Project
              </a>
              <a
                href="#industries"
                className="btn-secondary inline-flex items-center justify-center rounded-full px-8 py-3.5 text-base"
              >
                Explore Industries
              </a>
            </div>
          </div>
        </Reveal>

        <div className="glow-line mt-16" />

        <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4">
          {[
            { value: '24hr', label: 'Response time' },
            { value: '1', label: 'Direct phone line' },
            { value: '6+', label: 'Industries served' },
            { value: 'Yours', label: 'Code & credentials' },
          ].map((stat, i) => (
            <Reveal key={stat.value + stat.label} delay={i * 60}>
              <div className="rounded-xl border border-accent-500/10 bg-dark-800/50 px-4 py-5 text-center">
                <p className="font-display text-xl font-bold text-accent-400 md:text-2xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-silver-500">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function HomeAbout() {
  return (
    <section id="about" className="section-alt relative py-24 md:py-32">
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <p className="section-label">About OA Solutions</p>
            <h2 className="font-display mt-3 text-4xl font-bold tracking-tight text-white md:text-5xl">
              Your technology partner, not just a vendor
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-silver-400">
              We are an Ontario-based development team that partners with business owners to build
              technology that solves real problems — not generic templates that look good in a demo
              but fail in production.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-silver-400">
              Whether you run a restaurant, retail shop, construction company, or freelance practice,
              we start by understanding your workflow, your customers, and your goals. Then we build
              solutions that fit — websites, apps, booking systems, AI assistants, and whatever else
              your business needs.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {[
              {
                title: 'Direct partnership',
                description:
                  'You work with the people building your project — not account managers or ticket queues.',
              },
              {
                title: 'Industry expertise',
                description:
                  'We specialize in verticals where we understand the daily operations, not just the tech stack.',
              },
              {
                title: 'End-to-end delivery',
                description:
                  'From discovery to launch and beyond — design, build, deploy, train, and support.',
              },
              {
                title: 'You own everything',
                description:
                  'Source code, domains, and credentials are yours at handoff. No lock-in or hostage hosting.',
              },
            ].map((item) => (
              <div key={item.title} className="glass-card rounded-2xl p-6">
                <div className="mb-4 h-0.5 w-10 rounded-full bg-gradient-to-r from-accent-500 to-accent-glow" />
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-silver-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
