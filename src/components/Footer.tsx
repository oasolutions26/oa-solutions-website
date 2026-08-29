import { Link } from 'react-router-dom'
import { CONTACT } from '../lib/contact'
import { industries } from '../content/industries'
import TrackedPhoneLink from './TrackedPhoneLink'

type FooterProps = {
  variant?: 'home' | 'industry'
}

export default function Footer({ variant = 'home' }: FooterProps) {
  const year = new Date().getFullYear()

  const sectionLinks =
    variant === 'home'
      ? [
          { label: 'About', href: '#about' },
          { label: 'Services', href: '#services' },
          { label: 'Industries', href: '#industries' },
          { label: 'Process', href: '#process' },
          { label: 'Contact', href: '#contact' },
          { label: 'Privacy', href: '#privacy' },
        ]
      : [
          { label: 'Services', href: '#services' },
          { label: 'Work', href: '#work' },
          { label: 'Why Us', href: '#why-us' },
          { label: 'Process', href: '#process' },
          { label: 'FAQ', href: '#faq' },
          { label: 'Contact', href: '#contact' },
          { label: 'Privacy', href: '#privacy' },
        ]

  return (
    <footer className="border-t border-accent-500/10 bg-dark-950 py-12 pb-28 md:pb-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="glow-line mb-8" />

        <div className="mb-8">
          <p className="mb-4 text-sm font-medium text-silver-400">Industries</p>
          <nav className="flex flex-wrap gap-x-4 gap-y-2" aria-label="Industries">
            {industries.map((industry) => (
              <Link
                key={industry.slug}
                to={`/industries/${industry.slug}`}
                className="text-sm text-silver-500 transition-colors hover:text-accent-400"
              >
                {industry.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex flex-col items-center gap-3 md:items-start">
            <Link to="/">
              <img
                src="/logo.webp"
                alt="OA Solutions"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-sm text-silver-500 md:justify-start">
              <a
                href={`mailto:${CONTACT.email}`}
                className="transition-colors hover:text-accent-400"
              >
                {CONTACT.email}
              </a>
              {CONTACT.phones.map((phone) => (
                <TrackedPhoneLink
                  key={phone.tel}
                  tel={phone.tel}
                  display={phone.display}
                  source="footer"
                  className="transition-colors hover:text-accent-400"
                />
              ))}
            </div>
          </div>

          <nav className="flex flex-wrap justify-center gap-6" aria-label="Footer">
            {sectionLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-silver-500 transition-colors hover:text-accent-400"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <p className="text-sm text-silver-500">
            &copy; {year} OA Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
