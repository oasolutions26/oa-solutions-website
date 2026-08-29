export type ServiceIconKey =
  | 'globe'
  | 'code'
  | 'calendar'
  | 'phone'
  | 'clipboard'
  | 'bolt'
  | 'cart'
  | 'users'
  | 'hammer'
  | 'shirt'

export type WorkVisual = 'reservations' | 'phone' | 'website' | 'booking'

export type IndustryContent = {
  slug: string
  label: string
  shortDescription: string
  hero: {
    badge: string
    title: string
    titleHighlight: string
    subtitle: string
    stats: { value: string; label: string }[]
    visualType: 'restaurant' | 'generic'
  }
  services: {
    title: string
    subtitle: string
    items: { title: string; description: string; icon: ServiceIconKey }[]
  }
  integrations: {
    subtitle: string
    items: { name: string; detail: string }[]
  }
  work: {
    subtitle: string
    projects: {
      title: string
      problem: string
      solution: string
      outcome: string
      visual: WorkVisual
    }[]
  }
  testimonials: {
    proofs: { title: string; detail: string }[]
  }
  whyUs: {
    title: string
    subtitle: string
    reasons: { title: string; description: string }[]
  }
  process: {
    subtitle: string
    steps: { number: string; title: string; description: string }[]
  }
  ctaBand: {
    title: string
    subtitle: string
  }
  roi?: {
    title: string
    subtitle: string
    missedLabel: string
    valueLabel: string
    conversionLabel: string
  }
  faqs: { q: string; a: string }[]
  contact: {
    title: string
    subtitle: string
    businessFieldLabel: string
    businessFieldPlaceholder: string
    emailPlaceholder: string
  }
}
