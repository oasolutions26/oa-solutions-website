const services = [
  {
    title: 'Websites & Web Apps',
    description:
      'Professional, mobile-first sites and web applications built for performance, SEO, and conversion.',
  },
  {
    title: 'Custom Applications',
    description:
      'Internal tools, client portals, dashboards, and workflows tailored to how your business operates.',
  },
  {
    title: 'Automation & AI',
    description:
      'Phone answering, chatbots, email automation, and AI assistants that handle repetitive work 24/7.',
  },
  {
    title: 'Booking & Scheduling',
    description:
      'Online booking, appointment systems, and calendar integrations that reduce back-and-forth.',
  },
  {
    title: 'E-Commerce & Payments',
    description:
      'Online stores, invoicing, and payment processing connected to your existing tools.',
  },
  {
    title: 'Integrations',
    description:
      'Connect your POS, CRM, accounting, and third-party tools when APIs allow — mapped in discovery first.',
  },
]

export default function HomeServices() {
  return (
    <section id="services" className="relative bg-dark-950 py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,102,255,0.04),transparent_70%)]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="section-label">What We Build</p>
          <h2 className="font-display mt-3 text-4xl font-bold tracking-tight text-white md:text-5xl">
            Technology solutions for every stage of growth
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-silver-400">
            We do not sell one-size-fits-all packages. Every project starts with your business
            needs and builds from there.
          </p>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="glass-card rounded-2xl p-8">
              <div className="mb-4 h-0.5 w-10 rounded-full bg-gradient-to-r from-accent-500 to-accent-glow" />
              <h3 className="text-xl font-semibold text-white">{service.title}</h3>
              <p className="mt-3 leading-relaxed text-silver-400">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
