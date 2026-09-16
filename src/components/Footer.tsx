import { Link } from 'react-router-dom'
import { CONTACT } from '../lib/contact'
import { industries } from '../content/industries'
import TrackedPhoneLink from './TrackedPhoneLink'

type FooterProps = {
  variant?: 'home' | 'industry'
}

const homeFooterLinks = [
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Industries', to: '/#industries' },
  { label: 'Process', to: '/#process' },
  { label: 'Contact', to: '/contact' },
  { label: 'Privacy', to: '/#privacy' },
]

export default function Footer({ variant = 'home' }: FooterProps) {
  const year = new Date().getFullYear()

  const sectionLinks =
    variant === 'home'
      ? homeFooterLinks
      : [
          { label: 'Services', to: '#services' },
          { label: 'Work', to: '#work' },
          { label: 'Why Us', to: '#why-us' },
          { label: 'Process', to: '#process' },
          { label: 'FAQ', to: '#faq' },
          { label: 'Contact', to: '#contact' },
          { label: 'Privacy', to: '#privacy' },
        ]

  return (
    <footer className="border-t border-accent-500/10 bg-dark-950 py-12 pb-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="glow-line mb-8" />

        <div className="mb-8 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <Link to="/services" className="text-silver-500 hover:text-accent-400">
            All services
          </Link>
          <Link to="/about" className="text-silver-500 hover:text-accent-400">
            About
          </Link>
          <Link to="/contact" className="text-silver-500 hover:text-accent-400">
            Contact
          </Link>
        </div>

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
                alt="OA Solutions — software development company"
                width={120}
                height={40}
                className="h-10 w-auto"
                loading="lazy"
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
            {sectionLinks.map((link) =>
              link.to.startsWith('#') ? (
                <a
                  key={link.label}
                  href={link.to}
                  className="text-sm text-silver-500 transition-colors hover:text-accent-400"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  to={link.to}
                  className="text-sm text-silver-500 transition-colors hover:text-accent-400"
                >
                  {link.label}
                </Link>
              ),
            )}
          </nav>

          <p className="text-sm text-silver-500">
            &copy; {year} OA Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
