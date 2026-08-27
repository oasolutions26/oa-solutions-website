import type { ReactNode } from 'react'
import { trackEvent } from '../lib/analytics'

type TrackedPhoneLinkProps = {
  tel: string
  display: string
  source: string
  className?: string
  children?: ReactNode
}

export default function TrackedPhoneLink({
  tel,
  display,
  source,
  className,
  children,
}: TrackedPhoneLinkProps) {
  return (
    <a
      href={`tel:${tel}`}
      className={className}
      aria-label={`Call ${display}`}
      onClick={() => trackEvent('phone_click', { source })}
    >
      {children ?? display}
    </a>
  )
}
