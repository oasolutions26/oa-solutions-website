import { CONTACT } from '../lib/contact'

export default function MobileStickyBar() {
  const primary = CONTACT.phones[0]

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-accent-500/15 bg-dark-950/95 p-3 backdrop-blur-xl md:hidden"
      style={{ paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom))' }}
    >
      <div className="mx-auto flex max-w-6xl gap-3">
        <a
          href={`tel:${primary.tel}`}
          className="btn-secondary inline-flex flex-1 items-center justify-center rounded-full py-3 text-sm"
          aria-label={`Call ${primary.display}`}
        >
          Call
        </a>
        <a
          href="#contact"
          className="btn-primary inline-flex flex-1 items-center justify-center rounded-full py-3 text-sm"
        >
          Get a Quote
        </a>
      </div>
    </div>
  )
}
