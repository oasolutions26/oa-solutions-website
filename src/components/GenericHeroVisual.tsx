export default function GenericHeroVisual() {
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
            { label: 'Leads this week', value: '24' },
            { label: 'Bookings', value: '12' },
            { label: 'Tasks done', value: '89%' },
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
            <span className="text-xs font-medium text-white">Recent activity</span>
            <span className="rounded-full bg-accent-500/15 px-2 py-0.5 text-[10px] font-medium text-accent-300">
              Live
            </span>
          </div>
          <div className="space-y-2">
            {[
              { action: 'New inquiry', detail: 'Website contact form' },
              { action: 'Booking confirmed', detail: 'Tuesday 2:00 PM' },
              { action: 'Invoice paid', detail: '$1,250.00' },
            ].map((row) => (
              <div
                key={row.action}
                className="flex items-center justify-between rounded-lg border border-accent-500/10 bg-dark-900/80 px-3 py-2"
              >
                <span className="text-xs font-medium text-accent-300">{row.action}</span>
                <span className="text-xs text-silver-500">{row.detail}</span>
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
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>
          <div>
            <p className="text-xs font-medium text-white">Automation running</p>
            <p className="mt-0.5 text-[11px] leading-relaxed text-silver-400">
              Follow-up email sent — lead moved to &ldquo;Contacted&rdquo;
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
