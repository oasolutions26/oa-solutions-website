import { CONTACT } from '../lib/contact'

const proofs = [
  {
    title: 'Restaurant-only focus',
    detail:
      'We do not build generic marketing sites. Every engagement starts from covers, rush, and staff workflow.',
  },
  {
    title: 'Direct access',
    detail: `Call ${CONTACT.phones.map((p) => p.display).join(' or ')} — you reach the people building your project.`,
  },
  {
    title: '24-hour response',
    detail: 'Inquiries get a real reply within one business day, with clear next steps — not a ticket queue.',
  },
  {
    title: 'You own the work',
    detail: 'Source, domains, and credentials are yours at handoff. No hostage hosting or lock-in contracts.',
  },
]

export default function Testimonials() {
  return (
    <section id="proof" className="relative bg-dark-950 py-24 md:py-32" aria-labelledby="proof-heading">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-40" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="section-label">Trust</p>
          <h2
            id="proof-heading"
            className="font-display mt-3 text-4xl font-bold tracking-tight text-white md:text-5xl"
          >
            Proof before the pitch
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-silver-400">
            Before you invest in another vendor pitch, here is what you can verify on day one.
          </p>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2">
          {proofs.map((item) => (
            <article key={item.title} className="glass-card rounded-2xl p-6 md:p-8">
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-silver-400">{item.detail}</p>
            </article>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-silver-500">
          Have a project with us?{' '}
          <a href={`mailto:${CONTACT.email}`} className="text-accent-400 hover:text-accent-300">
            Ask to be featured
          </a>{' '}
          — real logos and quotes convert better than any claim we write ourselves.
        </p>
      </div>
    </section>
  )
}
