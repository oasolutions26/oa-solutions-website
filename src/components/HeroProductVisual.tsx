export default function HeroProductVisual() {
  return (
    <div
      className="relative w-full max-w-md overflow-hidden rounded-2xl border border-accent-500/20 bg-dark-900 shadow-[0_0_60px_rgba(0,102,255,0.12)] md:max-w-lg"
      aria-hidden="true"
    >
      <div className="flex items-center gap-2 border-b border-accent-500/10 bg-dark-850 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
        <span className="ml-2 text-xs text-silver-500">oasolutions.com — dashboard</span>
      </div>

      <div className="grid gap-4 p-4 sm:p-5">
        <div className="grid grid-cols-3 gap-2">
          {[
            { label: 'Covers tonight', value: '84' },
            { label: 'Bookings', value: '23' },
            { label: 'Calls handled', value: '17' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-accent-500/10 bg-dark-800/80 px-3 py-3 text-center"
            >
              <p className="font-display text-lg font-bold text-accent-400">{stat.value}</p>
              <p className="mt-0.5 text-[10px] leading-tight text-silver-500">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="rounded-xl border border-accent-500/15 bg-dark-800/60 p-4">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-xs font-medium text-white">Tonight&apos;s reservations</span>
            <span className="rounded-full bg-accent-500/15 px-2 py-0.5 text-[10px] font-medium text-accent-300">
              Live
            </span>
          </div>
          <div className="space-y-2">
            {[
              { time: '6:30 PM', party: 'Party of 2', name: 'Sarah M.' },
              { time: '7:00 PM', party: 'Party of 4', name: 'James L.' },
              { time: '7:30 PM', party: 'Party of 6', name: 'Online booking' },
            ].map((row) => (
              <div
                key={row.time + row.name}
                className="flex items-center justify-between rounded-lg border border-accent-500/10 bg-dark-900/80 px-3 py-2"
              >
                <span className="text-xs font-medium text-accent-300">{row.time}</span>
                <span className="text-xs text-silver-400">{row.party}</span>
                <span className="text-xs text-silver-500">{row.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-start gap-3 rounded-xl border border-accent-500/15 bg-accent-500/5 p-3">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-500/15 text-accent-400">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
          </div>
          <div>
            <p className="text-xs font-medium text-white">AI phone agent</p>
            <p className="mt-0.5 text-[11px] leading-relaxed text-silver-400">
              &ldquo;Table for 4 at 7:30 — confirmed and added to the book.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
