import type { WorkVisual } from '../content/types'
import { useIndustry } from '../context/IndustryContext'

function ProjectVisual({ type }: { type: WorkVisual }) {
  if (type === 'reservations') {
    return (
      <div className="flex aspect-[16/10] flex-col justify-end bg-dark-900 p-5" aria-hidden="true">
        <div className="rounded-xl border border-accent-500/20 bg-dark-800/90 p-4 shadow-[0_0_40px_rgba(14,165,233,0.08)]">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-xs font-medium text-silver-400">Book a table</span>
            <span className="rounded-full bg-accent-500/15 px-2 py-0.5 text-[10px] text-accent-300">Live</span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {['7:00', '7:30', '8:00'].map((t) => (
              <div
                key={t}
                className="rounded-lg border border-accent-500/20 bg-accent-500/10 py-2 text-center text-xs font-semibold text-accent-300"
              >
                {t}
              </div>
            ))}
          </div>
          <div className="mt-3 h-8 rounded-lg bg-gradient-to-r from-accent-500 to-accent-glow" />
        </div>
      </div>
    )
  }

  if (type === 'phone') {
    return (
      <div className="flex aspect-[16/10] flex-col items-center justify-center gap-3 bg-dark-900 p-5" aria-hidden="true">
        <div className="flex h-16 w-16 items-center justify-center rounded-full border border-accent-500/30 bg-accent-500/10 text-accent-400">
          <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
        </div>
        <div className="w-full max-w-xs space-y-2">
          <div className="rounded-lg border border-accent-500/15 bg-dark-800 px-3 py-2 text-xs text-silver-400">
            Guest: &ldquo;Do you have a table for 4 at 7?&rdquo;
          </div>
          <div className="rounded-lg border border-accent-500/25 bg-accent-500/10 px-3 py-2 text-xs text-accent-300">
            Agent: &ldquo;Yes — I can hold 7:00 or 7:30. Which works?&rdquo;
          </div>
        </div>
      </div>
    )
  }

  if (type === 'website') {
    return (
      <div className="flex aspect-[16/10] flex-col justify-end bg-dark-900 p-5" aria-hidden="true">
        <div className="rounded-xl border border-accent-500/20 bg-dark-800/90 p-4">
          <div className="mb-3 flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-accent-400" />
            <span className="text-xs font-medium text-silver-400">yourbusiness.com</span>
          </div>
          <div className="space-y-2">
            <div className="h-3 w-3/4 rounded bg-accent-500/20" />
            <div className="h-2 w-full rounded bg-dark-700" />
            <div className="h-2 w-5/6 rounded bg-dark-700" />
          </div>
          <div className="mt-3 h-8 w-32 rounded-lg bg-gradient-to-r from-accent-500 to-accent-glow" />
        </div>
      </div>
    )
  }

  return (
    <div className="flex aspect-[16/10] flex-col justify-end bg-dark-900 p-5" aria-hidden="true">
      <div className="rounded-xl border border-accent-500/20 bg-dark-800/90 p-4">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-xs font-medium text-silver-400">Schedule</span>
          <span className="rounded-full bg-accent-500/15 px-2 py-0.5 text-[10px] text-accent-300">Open</span>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {['Mon 10 AM', 'Tue 2 PM', 'Wed 11 AM', 'Thu 3 PM'].map((t) => (
            <div
              key={t}
              className="rounded-lg border border-accent-500/20 bg-accent-500/10 py-2 text-center text-xs font-semibold text-accent-300"
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Work() {
  const { work } = useIndustry()

  return (
    <section id="work" className="section-alt relative py-24 md:py-32">
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="section-label">Recent Work</p>
          <h2 className="font-display mt-3 text-4xl font-bold tracking-tight text-white md:text-5xl">
            Built for real service, not slide decks
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-silver-400">{work.subtitle}</p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {work.projects.map((project) => (
            <article
              key={project.title}
              className="overflow-hidden rounded-2xl border border-accent-500/10 bg-dark-800/40"
            >
              <ProjectVisual type={project.visual} />
              <div className="p-6 md:p-8">
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <dl className="mt-4 space-y-3 text-sm leading-relaxed">
                  <div>
                    <dt className="font-medium text-silver-500">Problem</dt>
                    <dd className="mt-1 text-silver-400">{project.problem}</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-silver-500">What we build</dt>
                    <dd className="mt-1 text-silver-400">{project.solution}</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-accent-400">Outcome</dt>
                    <dd className="mt-1 text-silver-300">{project.outcome}</dd>
                  </div>
                </dl>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
