import HeroProductVisual from './HeroProductVisual'
import GenericHeroVisual from './GenericHeroVisual'
import Reveal from './Reveal'
import { useIndustry } from '../context/IndustryContext'

export default function Hero() {
  const { hero } = useIndustry()

  return (
    <section className="hero-glow grid-bg relative overflow-hidden bg-dark-950 pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-accent-glow/10 blur-[120px]" />
        <div className="absolute right-1/4 bottom-1/4 h-80 w-80 rounded-full bg-accent-500/8 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="max-w-3xl">
              <p className="badge mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent-400" aria-hidden="true" />
                {hero.badge}
              </p>

              <h1 className="font-display text-5xl leading-[1.08] font-bold tracking-tight text-white md:text-6xl lg:text-7xl">
                {hero.title}{' '}
                <span className="gradient-text">{hero.titleHighlight}</span>{' '}
                {hero.visualType === 'restaurant' ? 'and your operations running' : ''}
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-silver-400 md:text-xl">
                {hero.subtitle}
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#contact"
                  className="btn-primary inline-flex items-center justify-center rounded-full px-8 py-3.5 text-base"
                >
                  Start a Project
                </a>
                <a
                  href="#work"
                  className="btn-secondary inline-flex items-center justify-center rounded-full px-8 py-3.5 text-base"
                >
                  See Our Work
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative flex justify-center lg:justify-end">
              <div className="absolute inset-0 rounded-3xl bg-accent-glow/10 blur-3xl" aria-hidden="true" />
              {hero.visualType === 'restaurant' ? <HeroProductVisual /> : <GenericHeroVisual />}
            </div>
          </Reveal>
        </div>

        <div className="glow-line mt-16" />

        <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4">
          {hero.stats.map((stat, i) => (
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
