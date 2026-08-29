import { CONTACT } from '../lib/contact'
import BookCallLink from './BookCallLink'
import TrackedPhoneLink from './TrackedPhoneLink'

export default function MobileStickyBar() {
  const primary = CONTACT.phones[0]

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-accent-500/15 bg-dark-950/95 p-3 backdrop-blur-xl md:hidden"
      style={{ paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom))' }}
    >
      <div className="mx-auto flex max-w-6xl gap-3">
        <TrackedPhoneLink
          tel={primary.tel}
          display={primary.display}
          source="mobile_sticky_bar"
          className="btn-secondary inline-flex flex-1 items-center justify-center rounded-full py-3 text-sm"
        >
          Call
        </TrackedPhoneLink>
        <BookCallLink
          source="mobile_sticky_bar"
          className="btn-primary inline-flex flex-1 items-center justify-center rounded-full py-3 text-sm"
        >
          Book call
        </BookCallLink>
      </div>
    </div>
  )
}
