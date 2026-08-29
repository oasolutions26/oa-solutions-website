import { Link } from 'react-router-dom'
import { industries } from '../content/industries'
import Reveal from './Reveal'

export default function HomeIndustries() {
  return (
    <section id="industries" className="section-alt relative py-24 md:py-32">
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="section-label">Industries We Serve</p>
          <h2 className="font-display mt-3 text-4xl font-bold tracking-tight text-white md:text-5xl">
            Solutions tailored to your industry
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-silver-400">
            We build industry-specific technology — not generic templates. Select your industry to
            see what we can do for your business.
          </p>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, i) => (
            <Reveal key={industry.slug} delay={i * 60}>
              <Link
                to={`/industries/${industry.slug}`}
                className="group glass-card flex h-full flex-col rounded-2xl p-8 transition-colors hover:border-accent-500/30"
              >
                <h3 className="text-xl font-semibold text-white group-hover:text-accent-300">
                  {industry.label}
                </h3>
                <p className="mt-3 flex-1 leading-relaxed text-silver-400">
                  {industry.shortDescription}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent-400 group-hover:text-accent-300">
                  View solutions
                  <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
