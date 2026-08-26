const services = [
  {
    title: 'Restaurant Websites',
    description:
      'Stunning, mobile-first websites that showcase your menu, atmosphere, and brand. Built to convert visitors into diners.',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
  },
  {
    title: 'Custom Applications',
    description:
      'Ordering platforms, loyalty programs, staff tools, and internal dashboards — tailored to how your restaurant actually operates.',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    title: 'Online Reservations',
    description:
      'Seamless booking systems integrated with your website and workflow. Reduce no-shows and fill every seat.',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'AI Phone Answering',
    description:
      'Intelligent phone systems that handle reservations, hours, directions, and common questions — 24/7, without missing a guest.',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    title: 'Menu & Ordering Systems',
    description:
      'Digital menus, online ordering, and pickup or delivery integrations that keep your kitchen and customers in sync.',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
  },
  {
    title: 'Whatever You Need',
    description:
      'Have a unique challenge? We listen first, then build. From integrations to full digital overhauls — we adapt to your business.',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
]

export default function Services() {
  return (
    <section id="services" className="section-alt relative py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,102,255,0.04),transparent_70%)]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="section-label">What We Build</p>
          <h2 className="font-display mt-3 text-4xl font-bold tracking-tight text-white md:text-5xl">
            Everything your restaurant needs to succeed online
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-silver-400">
            We specialize in the restaurant industry. That means we understand your rush hours,
            your margins, and your guests — and we build technology that works for all of it.
          </p>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="glass-card rounded-2xl p-8"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-accent-500/20 bg-accent-500/10 text-accent-400">
                {service.icon}
              </div>
              <h3 className="mt-6 text-xl font-semibold text-white">{service.title}</h3>
              <p className="mt-3 leading-relaxed text-silver-400">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
