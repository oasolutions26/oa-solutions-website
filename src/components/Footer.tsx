export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-accent-500/10 bg-dark-950 py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="glow-line mb-8" />

        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="OA Solutions"
              className="h-10 w-auto"
            />
          </div>

          <nav className="flex flex-wrap justify-center gap-6">
            {[
              { label: 'Services', href: '#services' },
              { label: 'Why Us', href: '#why-us' },
              { label: 'Process', href: '#process' },
              { label: 'Contact', href: '#contact' },
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
