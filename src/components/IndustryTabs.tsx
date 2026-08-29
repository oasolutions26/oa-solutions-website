import { NavLink } from 'react-router-dom'
import { industries } from '../content/industries'

export default function IndustryTabs() {
  return (
    <div className="sticky top-20 z-40 border-b border-accent-500/10 bg-dark-950/95 backdrop-blur-xl">
      <div className="mx-auto max-w-6xl px-6">
        <nav
          className="-mb-px flex flex-wrap gap-2 py-3 md:flex-nowrap md:gap-1 md:overflow-x-auto md:scroll-tabs md:scrollbar-none"
          aria-label="Industries"
        >
          {industries.map((industry) => (
            <NavLink
              key={industry.slug}
              to={`/industries/${industry.slug}`}
              className={({ isActive }) =>
                [
                  'shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors',
                  isActive
                    ? 'bg-accent-500/15 text-accent-300'
                    : 'text-silver-400 hover:bg-dark-800 hover:text-white',
                ].join(' ')
              }
            >
              {industry.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  )
}
