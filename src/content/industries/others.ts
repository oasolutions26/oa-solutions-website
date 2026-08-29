import type { IndustryContent } from '../types'

const sharedProcess = {
  subtitle:
    'A straightforward process designed for busy owners who want results, not runaround.',
  steps: [
    {
      number: '01',
      title: 'Discovery Call',
      description:
        'Tell us about your business, your goals, and what is not working today. No jargon — just a real conversation.',
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
}

const sharedFaqs = [
  {
    q: 'How much does a website or app cost?',
    a: 'Most projects land in a scoped range after discovery. We quote fixed scope — not open-ended hourly surprises — so you know what you are paying for before we build.',
  },
  {
    q: 'Can you connect to our existing tools?',
    a: 'Yes, when APIs allow. We map your current stack in discovery and only promise integrations we can deliver.',
  },
  {
    q: 'How long until we launch?',
    a: 'Typical marketing sites: 3–5 weeks. Custom apps or automation take longer depending on workflows and third-party connections.',
  },
  {
    q: 'Who owns the code and content?',
    a: 'You do. We deliver source, domains, and credentials at handoff. No hostage hosting or lock-in contracts.',
  },
  {
    q: 'What happens after launch?',
    a: 'We train your team, monitor the rollout, and stay available for updates, maintenance, and new features as your business evolves.',
  },
]

export const smallBusiness: IndustryContent = {
  slug: 'small-business',
  label: 'Small Business',
  shortDescription: 'Websites, apps, and automation tailored for small businesses.',
  hero: {
    badge: 'Built for small businesses',
    title: 'Technology that helps your',
    titleHighlight: 'business grow',
    subtitle:
      'OA Solutions builds websites, custom applications, booking systems, and AI tools for small businesses — so you can compete with bigger players without the enterprise price tag.',
    stats: [
      { value: '24hr', label: 'Response time' },
      { value: '2', label: 'Direct phone lines' },
      { value: '100%', label: 'Custom-built' },
      { value: 'Yours', label: 'Code & credentials' },
    ],
    visualType: 'generic',
  },
  services: {
    title: 'Everything your small business needs online',
    subtitle:
      'We understand tight budgets, lean teams, and the need to look professional from day one. We build technology that earns its keep.',
    items: [
      {
        title: 'Business Websites',
        description:
          'Professional, mobile-first sites that explain what you do, build trust, and turn visitors into customers.',
        icon: 'globe',
      },
      {
        title: 'Custom Applications',
        description:
          'Client portals, internal tools, and workflows that replace spreadsheets and save hours every week.',
        icon: 'code',
      },
      {
        title: 'Online Booking',
        description:
          'Let customers schedule appointments, consultations, or services without back-and-forth emails.',
        icon: 'calendar',
      },
      {
        title: 'AI Phone & Chat',
        description:
          'Answer common questions, capture leads, and route urgent calls — even when you are with a client.',
        icon: 'phone',
      },
      {
        title: 'Invoicing & CRM',
        description:
          'Simple systems to track leads, send invoices, and follow up — connected to how you actually work.',
        icon: 'clipboard',
      },
      {
        title: 'Whatever You Need',
        description:
          'Have a unique challenge? We listen first, then build. From integrations to full digital overhauls.',
        icon: 'bolt',
      },
    ],
  },
  integrations: {
    subtitle:
      'We connect with the tools you already use — accounting, email, payments, and scheduling — when APIs allow.',
    items: [
      { name: 'QuickBooks / Xero', detail: 'Invoicing and bookkeeping sync' },
      { name: 'Google Business', detail: 'Local SEO and reviews' },
      { name: 'Stripe / Square', detail: 'Payments and subscriptions' },
      { name: 'Calendly / Google Calendar', detail: 'Booking handoffs' },
      { name: 'Mailchimp / HubSpot', detail: 'Email and CRM where supported' },
      { name: 'Your existing stack', detail: 'We map it in discovery first' },
    ],
  },
  work: {
    subtitle:
      'Common projects for small businesses — designed around limited time and real ROI.',
    projects: [
      {
        title: 'Professional Website',
        problem: 'Word-of-mouth is not enough — prospects Google you and find nothing.',
        solution: 'A fast, credible site with clear services, contact options, and local SEO.',
        outcome: 'You look established online and capture leads while you work.',
        visual: 'website',
      },
      {
        title: 'Online Booking',
        problem: 'Scheduling by phone and text eats hours and leads fall through the cracks.',
        solution: 'Self-serve booking with confirmations and reminders on your site.',
        outcome: 'Customers book themselves — you focus on delivery.',
        visual: 'booking',
      },
    ],
  },
  testimonials: {
    proofs: [
      {
        title: 'Small-business focus',
        detail:
          'We build for owner-operators and lean teams — not enterprise procurement cycles.',
      },
      {
        title: 'Direct access',
        detail: 'Call us directly — you reach the people building your project.',
      },
      {
        title: '24-hour response',
        detail: 'Inquiries get a real reply within one business day with clear next steps.',
      },
      {
        title: 'You own the work',
        detail: 'Source, domains, and credentials are yours at handoff. No lock-in.',
      },
    ],
  },
  whyUs: {
    title: 'A tech partner who gets small business',
    subtitle:
      'You wear every hat already. We handle the digital side so you can focus on customers and growth.',
    reasons: [
      {
        title: 'Right-sized solutions',
        description:
          'No bloated platforms or features you will never use. We build what you need, when you need it.',
      },
      {
        title: 'End-to-end partnership',
        description:
          'From discovery to launch, you work directly with the team building your project.',
      },
      {
        title: 'Built to perform',
        description:
          'Fast, mobile-friendly, and reliable — because first impressions happen on a phone screen.',
      },
      {
        title: 'Grows with you',
        description:
          'Start simple and add features as revenue grows. Architecture that scales without a rewrite.',
      },
    ],
  },
  process: sharedProcess,
  ctaBand: {
    title: 'Ready to look as professional online as you are in person?',
    subtitle: '30-minute discovery call. Clear next steps. No hard sell.',
  },
  faqs: sharedFaqs,
  contact: {
    title: 'Ready to grow your small business online?',
    subtitle:
      'Whether you need a website, booking system, or something custom — we would love to hear about your project.',
    businessFieldLabel: 'Business Name',
    businessFieldPlaceholder: 'Your business',
    emailPlaceholder: 'you@yourbusiness.com',
  },
}

export const shops: IndustryContent = {
  slug: 'shops',
  label: 'Shops & Retail',
  shortDescription: 'E-commerce, inventory, and in-store tech for retail shops.',
  hero: {
    badge: 'Built for shops & retail',
    title: 'Technology that drives',
    titleHighlight: 'foot traffic and sales',
    subtitle:
      'OA Solutions helps retail shops build online stores, inventory tools, loyalty programs, and point-of-sale integrations — bridging your physical and digital presence.',
    stats: [
      { value: '24hr', label: 'Response time' },
      { value: '2', label: 'Direct phone lines' },
      { value: '100%', label: 'Retail-focused' },
      { value: 'Yours', label: 'Code & credentials' },
    ],
    visualType: 'generic',
  },
  services: {
    title: 'Everything your shop needs to sell online and in-store',
    subtitle:
      'We understand retail margins, seasonal peaks, and the balance between e-commerce and walk-in customers.',
    items: [
      {
        title: 'Shop Websites',
        description:
          'Beautiful storefronts that showcase products, hours, and location — optimized for local search.',
        icon: 'globe',
      },
      {
        title: 'E-Commerce Stores',
        description:
          'Online selling with inventory sync, pickup options, and payment processing built in.',
        icon: 'cart',
      },
      {
        title: 'Inventory Tools',
        description:
          'Track stock, get low-inventory alerts, and connect online and in-store counts.',
        icon: 'clipboard',
      },
      {
        title: 'Loyalty & Promotions',
        description:
          'Reward repeat customers with points, email offers, and seasonal campaigns.',
        icon: 'users',
      },
      {
        title: 'POS Integrations',
        description:
          'Connect Square, Shopify POS, or your existing system when APIs allow.',
        icon: 'code',
      },
      {
        title: 'Whatever You Need',
        description:
          'Custom solutions for unique retail workflows — we adapt to how your shop runs.',
        icon: 'bolt',
      },
    ],
  },
  integrations: {
    subtitle:
      'We integrate with retail platforms you already use — POS, payments, and shipping — when APIs allow.',
    items: [
      { name: 'Shopify / Square', detail: 'E-commerce and POS sync' },
      { name: 'Stripe / PayPal', detail: 'Online payments' },
      { name: 'Google Business', detail: 'Local listings and reviews' },
      { name: 'Canada Post / UPS', detail: 'Shipping where supported' },
      { name: 'Mailchimp / Klaviyo', detail: 'Email marketing' },
      { name: 'Your existing stack', detail: 'We map it in discovery first' },
    ],
  },
  work: {
    subtitle: 'Retail projects we build most often — designed for real shop workflows.',
    projects: [
      {
        title: 'Online Store',
        problem: 'Customers want to browse and buy outside store hours.',
        solution: 'E-commerce with local pickup, inventory sync, and mobile checkout.',
        outcome: 'Sales continue when the doors are closed.',
        visual: 'website',
      },
      {
        title: 'Inventory Dashboard',
        problem: 'Spreadsheets and guesswork lead to stockouts and over-ordering.',
        solution: 'Real-time inventory tracking connected to your sales channels.',
        outcome: 'Order smarter and never disappoint a customer on a popular item.',
        visual: 'booking',
      },
    ],
  },
  testimonials: {
    proofs: [
      {
        title: 'Retail expertise',
        detail: 'We understand the balance between online and in-store — not just generic e-commerce.',
      },
      { title: 'Direct access', detail: 'Call us directly — you reach the people building your project.' },
      { title: '24-hour response', detail: 'Real replies within one business day with clear next steps.' },
      { title: 'You own the work', detail: 'Source and credentials are yours at handoff. No lock-in.' },
    ],
  },
  whyUs: {
    title: 'A partner who understands retail',
    subtitle:
      'Running a shop means juggling inventory, staff, and customers. We handle the tech so you can focus on selling.',
    reasons: [
      {
        title: 'Omnichannel thinking',
        description: 'We build for customers who browse online and buy in-store — or the other way around.',
      },
      {
        title: 'End-to-end partnership',
        description: 'From discovery to launch, direct access to the team building your tools.',
      },
      {
        title: 'Built to perform',
        description: 'Fast mobile experiences — because most shoppers browse on their phones.',
      },
      {
        title: 'Scales with seasons',
        description: 'Handle holiday peaks and slow periods without rebuilding from scratch.',
      },
    ],
  },
  process: sharedProcess,
  ctaBand: {
    title: 'Ready to sell beyond your storefront?',
    subtitle: '30-minute discovery call. Clear next steps. No hard sell.',
  },
  faqs: sharedFaqs,
  contact: {
    title: 'Ready to modernize your shop?',
    subtitle:
      'Whether you need an online store, inventory tools, or POS integration — we would love to hear about your project.',
    businessFieldLabel: 'Shop Name',
    businessFieldPlaceholder: 'Your shop',
    emailPlaceholder: 'you@yourshop.com',
  },
}

export const freelancers: IndustryContent = {
  slug: 'freelancers',
  label: 'Freelancers',
  shortDescription: 'Portfolios, booking, invoicing, and client tools for self-employed professionals.',
  hero: {
    badge: 'Built for freelancers & self-employed',
    title: 'Technology that lets you',
    titleHighlight: 'focus on your craft',
    subtitle:
      'OA Solutions builds portfolio sites, client portals, booking systems, and invoicing tools for freelancers — so you spend less time on admin and more time on billable work.',
    stats: [
      { value: '24hr', label: 'Response time' },
      { value: '2', label: 'Direct phone lines' },
      { value: '100%', label: 'Solo-friendly' },
      { value: 'Yours', label: 'Code & credentials' },
    ],
    visualType: 'generic',
  },
  services: {
    title: 'Everything a freelancer needs to look pro and get paid',
    subtitle:
      'We build for solo operators who need to impress clients, manage projects, and get paid without hiring a team.',
    items: [
      {
        title: 'Portfolio Websites',
        description:
          'Showcase your work, testimonials, and services with a site that wins clients.',
        icon: 'globe',
      },
      {
        title: 'Client Portals',
        description:
          'Share files, collect feedback, and keep project communication in one place.',
        icon: 'code',
      },
      {
        title: 'Booking & Scheduling',
        description:
          'Let clients book consultations or discovery calls without email ping-pong.',
        icon: 'calendar',
      },
      {
        title: 'Invoicing & Payments',
        description:
          'Send professional invoices, accept online payments, and track what is outstanding.',
        icon: 'clipboard',
      },
      {
        title: 'Proposal Tools',
        description:
          'Templates and workflows to send quotes faster and close deals sooner.',
        icon: 'bolt',
      },
      {
        title: 'Whatever You Need',
        description:
          'Custom tools for your specific freelance workflow — we adapt to how you work.',
        icon: 'users',
      },
    ],
  },
  integrations: {
    subtitle:
      'Connect with the tools freelancers already use — payments, calendar, and accounting.',
    items: [
      { name: 'Stripe / PayPal', detail: 'Invoice payments' },
      { name: 'Google Calendar', detail: 'Booking sync' },
      { name: 'QuickBooks / Wave', detail: 'Accounting handoffs' },
      { name: 'Google Workspace', detail: 'Email and file sharing' },
      { name: 'Notion / Trello', detail: 'Project management where supported' },
      { name: 'Your existing stack', detail: 'We map it in discovery first' },
    ],
  },
  work: {
    subtitle: 'Common freelancer projects — built to save time and win clients.',
    projects: [
      {
        title: 'Portfolio Site',
        problem: 'Social media alone does not convert — clients want a professional presence.',
        solution: 'A fast portfolio with case studies, services, and easy contact options.',
        outcome: 'You look established and clients know exactly how to hire you.',
        visual: 'website',
      },
      {
        title: 'Client Booking',
        problem: 'Scheduling calls by email wastes hours every week.',
        solution: 'Self-serve booking with calendar sync and automatic confirmations.',
        outcome: 'Clients book themselves — you protect your focus time.',
        visual: 'booking',
      },
    ],
  },
  testimonials: {
    proofs: [
      {
        title: 'Freelancer-friendly',
        detail: 'We build for solo operators — no enterprise bloat or minimum team sizes.',
      },
      { title: 'Direct access', detail: 'Call us directly — you reach the people building your project.' },
      { title: '24-hour response', detail: 'Real replies within one business day with clear next steps.' },
      { title: 'You own the work', detail: 'Source and credentials are yours at handoff. No lock-in.' },
    ],
  },
  whyUs: {
    title: 'Tech built for how freelancers actually work',
    subtitle:
      'You are the sales team, the delivery team, and the admin team. We automate the parts that do not need you.',
    reasons: [
      {
        title: 'Solo-operator pricing',
        description: 'Solutions sized for one-person businesses — not enterprise contracts.',
      },
      {
        title: 'End-to-end partnership',
        description: 'Direct access from discovery to launch. No account managers in between.',
      },
      {
        title: 'Built to perform',
        description: 'Your portfolio loads fast and looks great on every device — because clients judge quickly.',
      },
      {
        title: 'Grows with your practice',
        description: 'Add client portals, team features, or automation as your freelance business scales.',
      },
    ],
  },
  process: sharedProcess,
  ctaBand: {
    title: 'Ready to spend less time on admin?',
    subtitle: '30-minute discovery call. Clear next steps. No hard sell.',
  },
  faqs: sharedFaqs,
  contact: {
    title: 'Ready to level up your freelance business?',
    subtitle:
      'Whether you need a portfolio, booking system, or client tools — we would love to hear about your project.',
    businessFieldLabel: 'Business / Brand Name',
    businessFieldPlaceholder: 'Your brand',
    emailPlaceholder: 'you@yourdomain.com',
  },
}

export const construction: IndustryContent = {
  slug: 'construction',
  label: 'Construction',
  shortDescription: 'Websites, quoting tools, and field apps for construction companies.',
  hero: {
    badge: 'Built for construction companies',
    title: 'Technology that keeps',
    titleHighlight: 'projects on track',
    subtitle:
      'OA Solutions builds websites, quote calculators, job tracking tools, and client portals for construction companies — so you win more bids and run smoother jobs.',
    stats: [
      { value: '24hr', label: 'Response time' },
      { value: '2', label: 'Direct phone lines' },
      { value: '100%', label: 'Trade-focused' },
      { value: 'Yours', label: 'Code & credentials' },
    ],
    visualType: 'generic',
  },
  services: {
    title: 'Everything your construction company needs online',
    subtitle:
      'We understand bids, change orders, field crews, and the need to look credible before the first site visit.',
    items: [
      {
        title: 'Company Websites',
        description:
          'Professional sites showcasing projects, services, licenses, and testimonials — built for local search.',
        icon: 'globe',
      },
      {
        title: 'Quote & Estimate Tools',
        description:
          'Online quote requests, estimate calculators, and lead capture that feeds your sales pipeline.',
        icon: 'clipboard',
      },
      {
        title: 'Job Tracking',
        description:
          'Track projects, milestones, photos, and client updates in one dashboard — accessible from the field.',
        icon: 'code',
      },
      {
        title: 'Client Portals',
        description:
          'Share progress photos, documents, and change orders so clients stay informed without constant calls.',
        icon: 'users',
      },
      {
        title: 'Scheduling & Dispatch',
        description:
          'Coordinate crews, equipment, and site visits with tools built for how trades actually schedule.',
        icon: 'calendar',
      },
      {
        title: 'Whatever You Need',
        description:
          'Custom solutions for your trade — roofing, general contracting, landscaping, and more.',
        icon: 'hammer',
      },
    ],
  },
  integrations: {
    subtitle:
      'We connect with construction and business tools when APIs allow — accounting, CRM, and scheduling.',
    items: [
      { name: 'QuickBooks / Sage', detail: 'Job costing and invoicing' },
      { name: 'Google Business', detail: 'Local SEO and reviews' },
      { name: 'DocuSign / HelloSign', detail: 'Contract signing where supported' },
      { name: 'Google Maps', detail: 'Service area and directions' },
      { name: 'Stripe / Square', detail: 'Deposit and payment collection' },
      { name: 'Your existing stack', detail: 'We map it in discovery first' },
    ],
  },
  work: {
    subtitle: 'Construction projects we build most often — designed for field and office workflows.',
    projects: [
      {
        title: 'Quote Request System',
        problem: 'Phone tag and missed leads mean lost jobs to faster competitors.',
        solution: 'Online quote forms with photo upload, service area check, and instant confirmation.',
        outcome: 'Leads come in organized — your team responds while interest is hot.',
        visual: 'website',
      },
      {
        title: 'Project Portal',
        problem: 'Clients call constantly for updates — pulling foremen off the job.',
        solution: 'Client-facing portal with progress photos, timelines, and document sharing.',
        outcome: 'Clients stay informed — your crew stays on site.',
        visual: 'booking',
      },
    ],
  },
  testimonials: {
    proofs: [
      {
        title: 'Construction expertise',
        detail: 'We build for trades and contractors — not generic corporate sites.',
      },
      { title: 'Direct access', detail: 'Call us directly — you reach the people building your project.' },
      { title: '24-hour response', detail: 'Real replies within one business day with clear next steps.' },
      { title: 'You own the work', detail: 'Source and credentials are yours at handoff. No lock-in.' },
    ],
  },
  whyUs: {
    title: 'A tech partner who understands construction',
    subtitle:
      'You manage crews, materials, and deadlines. We build tools that work in the office and on the job site.',
    reasons: [
      {
        title: 'Field-ready design',
        description: 'Mobile-first tools that work on a phone at the job site — not just at a desk.',
      },
      {
        title: 'End-to-end partnership',
        description: 'Direct access from discovery to launch. We speak business, not just code.',
      },
      {
        title: 'Built to perform',
        description: 'Fast sites and reliable systems — because slow load times lose bids.',
      },
      {
        title: 'Scales with your company',
        description: 'From solo contractor to multi-crew operation — architecture that grows with you.',
      },
    ],
  },
  process: sharedProcess,
  ctaBand: {
    title: 'Ready to win more bids and run smoother jobs?',
    subtitle: '30-minute discovery call. Clear next steps. No hard sell.',
  },
  faqs: sharedFaqs,
  contact: {
    title: 'Ready to modernize your construction company?',
    subtitle:
      'Whether you need a website, quote system, or job tracking tools — we would love to hear about your project.',
    businessFieldLabel: 'Company Name',
    businessFieldPlaceholder: 'Your company',
    emailPlaceholder: 'you@yourcompany.com',
  },
}

export const clothing: IndustryContent = {
  slug: 'clothing',
  label: 'Clothing & Fashion',
  shortDescription: 'E-commerce, lookbooks, and inventory for clothing brands and boutiques.',
  hero: {
    badge: 'Built for clothing & fashion businesses',
    title: 'Technology that showcases',
    titleHighlight: 'your brand',
    subtitle:
      'OA Solutions builds online stores, lookbooks, inventory systems, and brand websites for clothing businesses — from boutiques to emerging fashion labels.',
    stats: [
      { value: '24hr', label: 'Response time' },
      { value: '2', label: 'Direct phone lines' },
      { value: '100%', label: 'Fashion-focused' },
      { value: 'Yours', label: 'Code & credentials' },
    ],
    visualType: 'generic',
  },
  services: {
    title: 'Everything your clothing business needs to sell and shine online',
    subtitle:
      'We understand seasonal collections, sizing complexity, and the visual-first nature of fashion retail.',
    items: [
      {
        title: 'Brand Websites',
        description:
          'Stunning sites that tell your brand story, showcase collections, and drive sales.',
        icon: 'globe',
      },
      {
        title: 'E-Commerce Stores',
        description:
          'Online shops with size guides, variant management, and a checkout built for fashion.',
        icon: 'cart',
      },
      {
        title: 'Lookbooks & Catalogs',
        description:
          'Digital lookbooks and seasonal catalogs that look as good as your products.',
        icon: 'shirt',
      },
      {
        title: 'Inventory & Sizing',
        description:
          'Track stock by size, color, and SKU — with alerts before bestsellers sell out.',
        icon: 'clipboard',
      },
      {
        title: 'Wholesale Portals',
        description:
          'B2B ordering for retailers and stockists with tiered pricing and order history.',
        icon: 'users',
      },
      {
        title: 'Whatever You Need',
        description:
          'Custom solutions for your brand — pop-up shops, pre-orders, and limited drops.',
        icon: 'bolt',
      },
    ],
  },
  integrations: {
    subtitle:
      'We integrate with fashion and retail platforms — e-commerce, payments, and shipping — when APIs allow.',
    items: [
      { name: 'Shopify / WooCommerce', detail: 'E-commerce platforms' },
      { name: 'Stripe / PayPal', detail: 'Payments and subscriptions' },
      { name: 'Instagram / Pinterest', detail: 'Social shopping where supported' },
      { name: 'ShipStation / Canada Post', detail: 'Fulfillment and shipping' },
      { name: 'Klaviyo / Mailchimp', detail: 'Email and retention marketing' },
      { name: 'Your existing stack', detail: 'We map it in discovery first' },
    ],
  },
  work: {
    subtitle: 'Fashion projects we build most often — designed for visual brands and seasonal drops.',
    projects: [
      {
        title: 'Online Store',
        problem: 'Social media drives interest but there is nowhere to buy.',
        solution: 'E-commerce with collection pages, size guides, and mobile-first checkout.',
        outcome: 'Turn followers into customers with a seamless buying experience.',
        visual: 'website',
      },
      {
        title: 'Seasonal Lookbook',
        problem: 'PDF catalogs are static and hard to share on mobile.',
        solution: 'Interactive digital lookbook with shoppable products and easy sharing.',
        outcome: 'Buyers and customers browse collections the way fashion should look.',
        visual: 'booking',
      },
    ],
  },
  testimonials: {
    proofs: [
      {
        title: 'Fashion expertise',
        detail: 'We build for visual brands — not generic template stores.',
      },
      { title: 'Direct access', detail: 'Call us directly — you reach the people building your project.' },
      { title: '24-hour response', detail: 'Real replies within one business day with clear next steps.' },
      { title: 'You own the work', detail: 'Source and credentials are yours at handoff. No lock-in.' },
    ],
  },
  whyUs: {
    title: 'A partner who understands fashion retail',
    subtitle:
      'Your brand is visual. Your tech should be too — fast, beautiful, and built to convert browsers into buyers.',
    reasons: [
      {
        title: 'Visual-first design',
        description: 'We prioritize photography, typography, and layout — because fashion is seen before it is bought.',
      },
      {
        title: 'End-to-end partnership',
        description: 'Direct access from discovery to launch. We understand collections and drops.',
      },
      {
        title: 'Built to perform',
        description: 'Fast mobile experiences — because most fashion browsing happens on Instagram and phones.',
      },
      {
        title: 'Scales with your label',
        description: 'From boutique to wholesale — architecture that grows with your brand.',
      },
    ],
  },
  process: sharedProcess,
  ctaBand: {
    title: 'Ready to sell your collections beyond social media?',
    subtitle: '30-minute discovery call. Clear next steps. No hard sell.',
  },
  faqs: sharedFaqs,
  contact: {
    title: 'Ready to grow your clothing brand online?',
    subtitle:
      'Whether you need an online store, lookbook, or wholesale portal — we would love to hear about your project.',
    businessFieldLabel: 'Brand / Store Name',
    businessFieldPlaceholder: 'Your brand',
    emailPlaceholder: 'you@yourbrand.com',
  },
}
