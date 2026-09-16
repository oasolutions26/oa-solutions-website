import { Link } from 'react-router-dom'
import { CORE_SERVICE_OFFERINGS } from '../content/coreServices'

export default function HomeServices() {
  return (
    <section id="services" className="relative bg-dark-950 py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,102,255,0.04),transparent_70%)]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="section-label">What We Build</p>
          <h2 className="font-display mt-3 text-4xl font-bold tracking-tight text-white md:text-5xl">
            Custom software development for every stage of growth
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-silver-400">
            As a software development company, we focus on custom web application development, CRM
            development, and business process automation — scoped to your business, not a generic
            template.
          </p>
          <Link to="/services" className="mt-6 inline-flex text-sm font-medium text-accent-400 hover:text-accent-300">
            View all services →
          </Link>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CORE_SERVICE_OFFERINGS.map((service) => (
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
