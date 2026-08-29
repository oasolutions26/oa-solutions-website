import { ServiceIcon } from './ServiceIcon'
import { useIndustry } from '../context/IndustryContext'

export default function Services() {
  const { services } = useIndustry()

  return (
    <section id="services" className="section-alt relative py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,102,255,0.04),transparent_70%)]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="section-label">What We Build</p>
          <h2 className="font-display mt-3 text-4xl font-bold tracking-tight text-white md:text-5xl">
            {services.title}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-silver-400">{services.subtitle}</p>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.items.map((service) => (
            <article key={service.title} className="glass-card rounded-2xl p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-accent-500/20 bg-accent-500/10 text-accent-400">
                <ServiceIcon icon={service.icon} />
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
