import { useState } from 'react'

const WEEKS_PER_YEAR = 50

export default function RoiCalculator() {
  const [missedCalls, setMissedCalls] = useState(8)
  const [avgCover, setAvgCover] = useState(75)
  const [conversionRate, setConversionRate] = useState(40)

  const weekly = missedCalls * avgCover * (conversionRate / 100)
  const yearly = Math.round(weekly * WEEKS_PER_YEAR)

  return (
    <section id="roi" className="relative bg-dark-950 py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-40" />

      <div className="relative mx-auto max-w-3xl px-6">
        <p className="section-label">ROI snapshot</p>
        <h2 className="font-display mt-3 text-4xl font-bold tracking-tight text-white md:text-5xl">
          What are missed calls costing you?
        </h2>
        <p className="mt-4 text-lg text-silver-400">
          Rough estimate — adjust the sliders to match your restaurant.
        </p>

        <div className="glass-card mt-10 rounded-2xl p-6 md:p-8">
          <label className="block">
            <span className="text-sm font-medium text-silver-300">
              Missed reservation calls per week:{' '}
              <span className="text-accent-400">{missedCalls}</span>
            </span>
            <input
              type="range"
              min={1}
              max={40}
              value={missedCalls}
              onChange={(e) => setMissedCalls(Number(e.target.value))}
              className="mt-3 w-full accent-accent-500"
              aria-valuemin={1}
              aria-valuemax={40}
              aria-valuenow={missedCalls}
            />
          </label>

          <label className="mt-8 block">
            <span className="text-sm font-medium text-silver-300">
              Average cover value ($)
            </span>
            <input
              type="number"
              min={20}
              max={300}
              step={5}
              value={avgCover}
              onChange={(e) => setAvgCover(Number(e.target.value))}
              className="mt-2 w-full rounded-lg border border-accent-500/10 bg-dark-800 px-4 py-3 text-white outline-none focus:border-accent-500/40 focus:ring-1 focus:ring-accent-500/20"
            />
          </label>

          <label className="mt-8 block">
            <span className="text-sm font-medium text-silver-300">
              Calls that would have booked (%):{' '}
              <span className="text-accent-400">{conversionRate}%</span>
            </span>
            <input
              type="range"
              min={10}
              max={80}
              step={5}
              value={conversionRate}
              onChange={(e) => setConversionRate(Number(e.target.value))}
              className="mt-3 w-full accent-accent-500"
              aria-valuemin={10}
              aria-valuemax={80}
              aria-valuenow={conversionRate}
            />
          </label>

          <p className="mt-10 font-display text-3xl font-bold text-accent-400 md:text-4xl">
            ~${yearly.toLocaleString()} / year
          </p>
          <p className="mt-2 text-sm text-silver-500">
            Illustrative only — based on your inputs, not a guarantee.
          </p>

          <a
            href="#contact"
            className="btn-primary mt-8 inline-flex rounded-full px-8 py-3.5 text-base"
          >
            Talk through a real estimate
          </a>
        </div>
      </div>
    </section>
  )
}
