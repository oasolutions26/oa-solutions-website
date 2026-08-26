import { faqs } from '../lib/faqs'
import { useId, useState } from 'react'

export default function Faq() {
  const baseId = useId()
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="section-alt relative py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <p className="section-label">FAQ</p>
        <h2 className="font-display mt-3 text-4xl font-bold tracking-tight text-white md:text-5xl">
          Questions owners ask first
        </h2>
        <p className="mt-4 text-lg text-silver-400">
          Straight answers before you invest time in a sales call.
        </p>

        <ul className="mt-10 divide-y divide-accent-500/10">
          {faqs.map((item, i) => {
            const panelId = `${baseId}-panel-${i}`
            const buttonId = `${baseId}-button-${i}`
            const isOpen = open === i

            return (
              <li key={item.q} className="py-4">
                <button
                  id={buttonId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className="flex w-full items-center justify-between gap-4 text-left text-lg font-medium text-white"
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  {item.q}
                  <span aria-hidden="true" className="shrink-0 text-xl text-accent-400">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                  className="overflow-hidden"
                >
                  <p className="mt-3 leading-relaxed text-silver-400">{item.a}</p>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
