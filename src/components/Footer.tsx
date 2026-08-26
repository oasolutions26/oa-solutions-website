import { CONTACT } from '../lib/contact'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-accent-500/10 bg-dark-950 py-12 pb-28 md:pb-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="glow-line mb-8" />

        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex flex-col items-center gap-3 md:items-start">
            <img
              src="/logo.webp"
              alt="OA Solutions"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-sm text-silver-500 md:justify-start">
              <a
                href={`mailto:${CONTACT.email}`}
                className="transition-colors hover:text-accent-400"
              >
                {CONTACT.email}
              </a>
              {CONTACT.phones.map((phone) => (
                <a
                  key={phone.tel}
                  href={`tel:${phone.tel}`}
                  className="transition-colors hover:text-accent-400"
                >
                  {phone.display}
                </a>
              ))}
            </div>
          </div>

          <nav className="flex flex-wrap justify-center gap-6" aria-label="Footer">
            {[
              { label: 'Services', href: '#services' },
              { label: 'Work', href: '#work' },
              { label: 'Why Us', href: '#why-us' },
              { label: 'Process', href: '#process' },
              { label: 'FAQ', href: '#faq' },
              { label: 'Contact', href: '#contact' },
              { label: 'Privacy', href: '#privacy' },
            ].map((link) => (
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
