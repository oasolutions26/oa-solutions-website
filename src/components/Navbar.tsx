import { useEffect, useId, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const homeNavLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Industries', href: '#industries' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
]

const industryNavLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Process', href: '#process' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

type NavbarProps = {
  variant?: 'home' | 'industry'
}

export default function Navbar({ variant = 'home' }: NavbarProps) {
  const [open, setOpen] = useState(false)
  const menuId = useId()
  const location = useLocation()
  const navLinks = variant === 'home' ? homeNavLinks : industryNavLinks

  useEffect(() => {
    if (!open) return

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false)
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-accent-500/10 bg-dark-950/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4" aria-label="Primary">
        <Link to="/" className="group flex items-center">
          <img
            src="/logo.webp"
            alt="OA Solutions — Technology, Automation, Digital Solutions"
            width={168}
            height={56}
            className="h-12 w-auto md:h-14"
          />
        </Link>

        <ul className="hidden items-center gap-6 lg:flex xl:gap-8">
          {variant === 'industry' && (
            <li>
              <Link
                to="/"
                className="text-sm font-medium text-silver-400 transition-colors hover:text-accent-400"
              >
                Home
              </Link>
            </li>
          )}
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-silver-400 transition-colors hover:text-accent-400"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="btn-primary rounded-full px-5 py-2.5 text-sm"
            >
              Get a Quote
            </a>
          </li>
        </ul>

        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls={menuId}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-accent-500/15 text-silver-300 lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      <div
        id={menuId}
        hidden={!open}
        className="border-t border-accent-500/10 bg-dark-950 px-6 py-4 lg:hidden"
      >
        <ul className="flex flex-col gap-4">
          {variant === 'industry' && (
            <li>
              <Link
                to="/"
                className="block text-sm font-medium text-silver-400 hover:text-accent-400"
                onClick={() => setOpen(false)}
              >
                Home
              </Link>
            </li>
          )}
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block text-sm font-medium text-silver-400 hover:text-accent-400"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="btn-primary inline-block rounded-full px-5 py-2.5 text-sm"
              onClick={() => setOpen(false)}
            >
              Get a Quote
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
