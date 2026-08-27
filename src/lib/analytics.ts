export type AnalyticsEvent =
  | 'book_call_click'
  | 'contact_form_submit'
  | 'phone_click'

type EventProps = Record<string, string>

export function trackEvent(name: AnalyticsEvent, props?: EventProps) {
  if (typeof window === 'undefined') return

  if (window.plausible) {
    window.plausible(name, props ? { props } : undefined)
  }

  if (window.gtag) {
    window.gtag('event', name, props)
  }
}

export function initAnalytics() {
  const plausibleDomain = import.meta.env.VITE_PLAUSIBLE_DOMAIN?.trim()
  const gaId = import.meta.env.VITE_GA_MEASUREMENT_ID?.trim()

  if (plausibleDomain && !document.querySelector('script[data-plausible]')) {
    const script = document.createElement('script')
    script.defer = true
    script.dataset.domain = plausibleDomain
    script.dataset.plausible = 'true'
    script.src = 'https://plausible.io/js/script.js'
    document.head.appendChild(script)
  }

  if (gaId && !document.querySelector('script[data-ga]')) {
    const loader = document.createElement('script')
    loader.async = true
    loader.dataset.ga = 'true'
    loader.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`
    document.head.appendChild(loader)

    window.gtag = function gtag(...args: unknown[]) {
      window.dataLayer = window.dataLayer ?? []
      window.dataLayer.push(args)
    }
    window.gtag('js', new Date())
    window.gtag('config', gaId, { anonymize_ip: true })
  }
}
