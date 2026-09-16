import type { IndustryContent } from '../content/types'
import { CONTACT } from './contact'

const configuredSiteUrl = import.meta.env.VITE_SITE_URL?.trim()
export const SITE_URL = configuredSiteUrl || 'https://oasolutions.dev'
export const OG_IMAGE = `${SITE_URL}/og-image.png`
export const SITE_NAME = 'OA Solutions'

export type PageMeta = {
  title: string
  description: string
  path: string
}

export function absoluteUrl(path: string): string {
  const normalized = path.startsWith('/') ? path : `/${path}`
  return `${SITE_URL}${normalized}`
}

export const homeMeta: PageMeta = {
  title: 'Custom Software Development Company | OA Solutions',
  description:
    'Custom software development, web application development, CRM development & business process automation for Ontario & Canada. Book a free discovery call.',
  path: '/',
}

export const servicesMeta: PageMeta = {
  title: 'Custom Software & Web App Services | OA Solutions',
  description:
    'Custom software development, web applications, CRM development, and business automation tailored to how your business operates.',
  path: '/services',
}

export const aboutMeta: PageMeta = {
  title: 'About OA Solutions | Software Development Partner',
  description:
    'Meet OA Solutions — an Ontario software development company building custom apps, CRM tools, and business automation for growing businesses.',
  path: '/about',
}

export const contactMeta: PageMeta = {
  title: 'Contact OA Solutions | Start Your Project',
  description:
    'Contact our software development team for custom software, web apps, CRM development, or business process automation. We respond within 24 hours.',
  path: '/contact',
}

export function getIndustryMeta(industry: IndustryContent): PageMeta {
  const title = `${industry.label} Software & Automation | OA Solutions`.slice(0, 60)
  const description = `${industry.shortDescription} Custom software development and business automation from OA Solutions.`.slice(
    0,
    160,
  )
  return {
    title,
    description,
    path: `/industries/${industry.slug}`,
  }
}

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.webp`,
    email: CONTACT.email,
    telephone: CONTACT.phones.map((p) => p.tel),
    description:
      'Software development company specializing in custom software, web application development, CRM development, and business process automation.',
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'Ontario, Canada',
    },
  }
}

export function localBusinessJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: SITE_NAME,
    url: SITE_URL,
    image: OG_IMAGE,
    email: CONTACT.email,
    telephone: CONTACT.phones.map((p) => p.tel),
    priceRange: '$$',
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'Ontario, Canada',
    },
    description:
      'Custom software development and business automation services for businesses across Ontario and Canada.',
  }
}

const coreServices = [
  {
    name: 'Custom Software Development',
    description:
      'End-to-end custom software development — discovery, build, launch, and support for business-critical tools.',
  },
  {
    name: 'Custom Web Application Development',
    description:
      'Mobile-first custom web application development built for performance, security, and growth.',
  },
  {
    name: 'CRM Development',
    description:
      'CRM development and integrations connected to sales, support, and operations workflows.',
  },
  {
    name: 'Business Process Automation',
    description:
      'Business process automation with AI assistants, workflows, and integrations that reduce manual work.',
  },
]

export function servicesPageJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: coreServices.map((service, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Service',
        name: service.name,
        description: service.description,
        provider: {
          '@type': 'Organization',
          name: SITE_NAME,
          url: SITE_URL,
        },
        areaServed: {
          '@type': 'AdministrativeArea',
          name: 'Ontario, Canada',
        },
      },
    })),
  }
}

export function industryServicesJsonLd(industry: IndustryContent) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${industry.label} technology services`,
    description: industry.shortDescription,
    provider: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'Ontario, Canada',
    },
    serviceType: industry.services.items.map((item) => item.title),
  }
}

export function faqPageJsonLd(faqs: readonly { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  }
}
