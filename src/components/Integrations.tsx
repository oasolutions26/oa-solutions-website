import { useIndustry } from '../context/IndustryContext'

export default function Integrations() {
  const { integrations } = useIndustry()

  return (
    <section id="integrations" className="relative bg-dark-950 py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <p className="section-label text-center">Integrations</p>
        <h2 className="font-display mt-3 text-center text-2xl font-bold text-white md:text-3xl">
          Built to work with the tools you already use
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-sm leading-relaxed text-silver-400">
          {integrations.subtitle}
        </p>

        <ul className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {integrations.items.map((item) => (
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
