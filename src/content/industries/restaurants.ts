import type { IndustryContent } from '../types'

export const restaurants: IndustryContent = {
  slug: 'restaurants',
  label: 'Restaurants',
  shortDescription: 'Websites, reservations, AI phone systems, and ordering for restaurants.',
  hero: {
    badge: 'Built exclusively for restaurants',
    title: 'Technology that keeps your',
    titleHighlight: 'tables full',
    subtitle:
      'OA Solutions partners with restaurants to build websites, custom applications, online reservation systems, AI phone answering, and whatever your business needs to thrive in a digital world.',
    stats: [
      { value: '24hr', label: 'Response time' },
      { value: '1', label: 'Direct phone line' },
      { value: '100%', label: 'Restaurant-focused' },
      { value: 'Yours', label: 'Code & credentials' },
    ],
    visualType: 'restaurant',
  },
  services: {
    title: 'Everything your restaurant needs to succeed online',
    subtitle:
      'We specialize in the restaurant industry. That means we understand your rush hours, your margins, and your guests — and we build technology that works for all of it.',
    items: [
      {
        title: 'Restaurant Websites',
        description:
          'Stunning, mobile-first websites that showcase your menu, atmosphere, and brand. Built to convert visitors into diners.',
        icon: 'globe',
      },
      {
        title: 'Custom Applications',
        description:
          'Ordering platforms, loyalty programs, staff tools, and internal dashboards — tailored to how your restaurant actually operates.',
        icon: 'code',
      },
      {
        title: 'Online Reservations',
        description:
          'Seamless booking systems integrated with your website and workflow. Reduce no-shows and fill every seat.',
        icon: 'calendar',
      },
      {
        title: 'AI Phone Answering',
        description:
          'Intelligent phone systems that handle reservations, hours, directions, and common questions — 24/7, without missing a guest.',
        icon: 'phone',
      },
      {
        title: 'Menu & Ordering Systems',
        description:
          'Digital menus, online ordering, and pickup or delivery integrations that keep your kitchen and customers in sync.',
        icon: 'clipboard',
      },
      {
        title: 'Whatever You Need',
        description:
          'Have a unique challenge? We listen first, then build. From integrations to full digital overhauls — we adapt to your business.',
        icon: 'bolt',
      },
    ],
  },
  integrations: {
    subtitle:
      'We only promise integrations we can deliver. Discovery maps your POS, reservations, and delivery stack before we quote.',
    items: [
      { name: 'POS systems', detail: 'When your provider exposes an API' },
      { name: 'OpenTable / Resy', detail: 'Booking flow handoffs' },
      { name: 'Google Business', detail: 'Hours, menus, and local SEO' },
      { name: 'Stripe / Square', detail: 'Payments and online ordering' },
      { name: 'DoorDash / Uber Eats', detail: 'Menu sync where supported' },
      { name: 'Your existing stack', detail: 'We map it in discovery first' },
    ],
  },
  work: {
    subtitle:
      'Two of the systems we build most often — designed around rush hours, missed calls, and how your floor actually runs.',
    projects: [
      {
        title: 'Online Reservations',
        problem: 'Phone-only booking loses covers during rush and after hours.',
        solution: 'Web booking with confirmations, party size, and no-show controls on your site.',
        outcome: 'Guests book without calling — hosts stay focused on the floor.',
        visual: 'reservations',
      },
      {
        title: 'AI Phone Answering',
        problem: 'Missed calls during service mean empty tables and frustrated guests.',
        solution: '24/7 voice agent for hours, directions, and reservation requests.',
        outcome: 'Every ring gets an answer — staff pick up only when it matters.',
        visual: 'phone',
      },
    ],
  },
  testimonials: {
    proofs: [
      {
        title: 'Restaurant-only focus',
        detail:
          'We do not build generic marketing sites. Every engagement starts from covers, rush, and staff workflow.',
      },
      {
        title: 'Direct access',
        detail:
          'Call us directly — you reach the people building your project, not a ticket queue.',
      },
      {
        title: '24-hour response',
        detail:
          'Inquiries get a real reply within one business day, with clear next steps — not a ticket queue.',
      },
      {
        title: 'You own the work',
        detail:
          'Source, domains, and credentials are yours at handoff. No hostage hosting or lock-in contracts.',
      },
    ],
  },
  whyUs: {
    title: 'A development partner who speaks your language',
    subtitle:
      'Running a restaurant is hard enough. You should not have to become a tech expert too. We translate your business goals into technology that just works.',
    reasons: [
      {
        title: 'Restaurant-first expertise',
        description:
          'We do not build generic software. Every project starts with understanding your concept, your guests, and your daily operations.',
      },
      {
        title: 'End-to-end partnership',
        description:
          'From the first conversation to launch and beyond, you work directly with a team that cares about your success.',
      },
      {
        title: 'Built to perform',
        description:
          'Fast load times, mobile optimization, and reliable systems. Your guests expect seamless experiences, and we deliver them.',
      },
      {
        title: 'Flexible & scalable',
        description:
          'Whether you are a single-location bistro or growing into multiple sites, our solutions grow with you.',
      },
    ],
  },
  process: {
    subtitle:
      'A straightforward process designed for busy restaurant owners who want results, not runaround.',
    steps: [
      {
        number: '01',
        title: 'Discovery Call',
        description:
          'Tell us about your restaurant, your goals, and what is not working today. No jargon — just a real conversation.',
      },
      {
        number: '02',
        title: 'Custom Proposal',
        description:
          'We design a solution tailored to your needs and budget, with clear timelines and no surprises.',
      },
      {
        number: '03',
        title: 'Design & Build',
        description:
          'Our team brings your vision to life with regular updates and your feedback at every stage.',
      },
      {
        number: '04',
        title: 'Launch & Support',
        description:
          'We deploy, train your team, and stay available for updates, maintenance, and new features.',
      },
    ],
  },
  ctaBand: {
    title: 'Ready to stop losing covers to missed calls?',
    subtitle: '30-minute discovery call. Clear next steps. No hard sell.',
  },
  roi: {
    title: 'What are missed calls costing you?',
    subtitle: 'Rough estimate — adjust the sliders to match your restaurant.',
    missedLabel: 'Missed reservation calls per week',
    valueLabel: 'Average cover value ($)',
    conversionLabel: 'Calls that would have booked (%)',
  },
  faqs: [
    {
      q: 'How much does a restaurant website cost?',
      a: 'Most projects land in a scoped range after discovery. We quote fixed scope — not open-ended hourly surprises — so you know what you are paying for before we build.',
    },
    {
      q: 'Can you connect to our POS or existing tools?',
      a: 'Yes, when APIs allow. We map your POS, reservations, payments, and delivery stack in discovery and only promise integrations we can deliver.',
    },
    {
      q: 'How long until we launch?',
      a: 'Typical marketing sites: 3–5 weeks. Reservations or AI phone systems take longer depending on workflows, training data, and third-party connections.',
    },
    {
      q: 'Who owns the code and content?',
      a: 'You do. We deliver source, domains, and credentials at handoff. No hostage hosting or lock-in contracts.',
    },
    {
      q: 'Do you work with single-location restaurants only?',
      a: 'No. We build for single-location bistros and multi-site groups. Architecture scales with your growth.',
    },
    {
      q: 'What happens after launch?',
      a: 'We train your team, monitor the rollout, and stay available for updates, maintenance, and new features as your business evolves.',
    },
  ],
  contact: {
    title: 'Ready to modernize your restaurant?',
    subtitle:
      'Whether you need a new website, online reservations, an AI phone system, or something entirely custom — we would love to hear about your project.',
    businessFieldLabel: 'Restaurant Name',
    businessFieldPlaceholder: 'Your restaurant',
    emailPlaceholder: 'you@restaurant.com',
  },
}
