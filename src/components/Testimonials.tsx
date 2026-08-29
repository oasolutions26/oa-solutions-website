import { CONTACT } from '../lib/contact'
import { useIndustry } from '../context/IndustryContext'

export default function Testimonials() {
  const { testimonials } = useIndustry()

  const proofs = testimonials.proofs.map((proof) => {
    if (proof.title === 'Direct access') {
      return {
        ...proof,
        detail: `Call ${CONTACT.phones.map((p) => p.display).join(' or ')} — you reach the people building your project.`,
      }
    }
    return proof
  })

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
