import { useEffect, useId, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

type NavItem = { label: string; to: string }

const homeNavLinks: NavItem[] = [
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Industries', to: '/#industries' },
  { label: 'Process', to: '/#process' },
  { label: 'Contact', to: '/contact' },
]

const industryNavLinks: NavItem[] = [
  { label: 'Services', to: '#services' },
  { label: 'Work', to: '#work' },
  { label: 'Why Us', to: '#why-us' },
  { label: 'Process', to: '#process' },
  { label: 'FAQ', to: '#faq' },
  { label: 'Contact', to: '#contact' },
]

type NavbarProps = {
  variant?: 'home' | 'industry'
}

function NavItemLink({
  item,
  className,
  onClick,
}: {
  item: NavItem
  className: string
  onClick?: () => void
}) {
  if (item.to.startsWith('#')) {
    return (
      <a href={item.to} className={className} onClick={onClick}>
        {item.label}
      </a>
    )
  }

  return (
    <Link to={item.to} className={className} onClick={onClick}>
      {item.label}
    </Link>
  )
}

export default function Navbar({ variant = 'home' }: NavbarProps) {
  const [open, setOpen] = useState(false)
  const menuId = useId()
  const location = useLocation()
  const navLinks = variant === 'home' ? homeNavLinks : industryNavLinks
  const quoteLink = variant === 'home' ? '/contact' : '#contact'

  useEffect(() => {
    if (!open) return

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false)
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open])

  useEffect(() => {
    if (!open) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previousOverflow
    }
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
            alt="OA Solutions — custom software development company"
            width={168}
            height={56}
            className="h-12 w-auto md:h-14"
            loading="eager"
            fetchPriority="high"
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
          {variant === 'industry' && (
            <li>
              <Link
                to="/services"
                className="text-sm font-medium text-silver-400 transition-colors hover:text-accent-400"
              >
                All Services
              </Link>
            </li>
          )}
          {navLinks.map((link) => (
            <li key={link.label + link.to}>
              <NavItemLink
                item={link}
                className="text-sm font-medium text-silver-400 transition-colors hover:text-accent-400"
              />
            </li>
          ))}
          <li>
            {quoteLink.startsWith('#') ? (
              <a href={quoteLink} className="btn-primary rounded-full px-5 py-2.5 text-sm">
                Get a Quote
              </a>
            ) : (
              <Link to={quoteLink} className="btn-primary rounded-full px-5 py-2.5 text-sm">
                Get a Quote
              </Link>
            )}
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
            <li key={link.label + link.to}>
              <NavItemLink
                item={link}
                className="block text-sm font-medium text-silver-400 hover:text-accent-400"
                onClick={() => setOpen(false)}
              />
            </li>
          ))}
          <li>
            {quoteLink.startsWith('#') ? (
              <a
                href={quoteLink}
                className="btn-primary inline-block rounded-full px-5 py-2.5 text-sm"
                onClick={() => setOpen(false)}
              >
                Get a Quote
              </a>
            ) : (
              <Link
                to={quoteLink}
                className="btn-primary inline-block rounded-full px-5 py-2.5 text-sm"
                onClick={() => setOpen(false)}
              >
                Get a Quote
              </Link>
            )}
          </li>
        </ul>
      </div>
    </header>
  )
}
