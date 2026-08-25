const steps = [
  {
    number: '01',
    title: 'Discovery Call',
    description:
      'Tell us about your restaurant, your goals, and what\'s not working today. No jargon — just a real conversation.',
  },
  {
    number: '02',
    title: 'Custom Proposal',
    description:
      'We design a solution tailored to your needs and budget, with clear timelines and no surprises.',
  },
  {
    number: '03',
    title: 'Design & Build',
    description:
      'Our team brings your vision to life with regular updates and your feedback at every stage.',
  },
  {
    number: '04',
    title: 'Launch & Support',
    description:
      'We deploy, train your team, and stay available for updates, maintenance, and new features.',
  },
]

export default function Process() {
  return (
    <section id="process" className="section-alt relative py-24 md:py-32">
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="section-label">How It Works</p>
          <h2 className="font-display mt-3 text-4xl font-bold tracking-tight text-white md:text-5xl">
            From idea to launch in four steps
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-silver-400">
            A straightforward process designed for busy restaurant owners who want results,
            not runaround.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {index < steps.length - 1 && (
                <div className="absolute top-8 left-[calc(50%+2rem)] hidden h-px w-[calc(100%-4rem)] bg-gradient-to-r from-accent-500/40 to-transparent lg:block" />
              )}
              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-accent-500/30 bg-dark-800 shadow-[0_0_20px_rgba(14,165,233,0.15)]">
                  <span className="font-display text-xl font-bold text-accent-400">
                    {step.number}
                  </span>
                </div>
                <h3 className="mt-6 text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-silver-400">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
