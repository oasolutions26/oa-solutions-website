export const CONTACT = {
  email: 'contact@oasolutions.dev',
  phones: [
    { display: '647-854-3079', tel: '+16478543079' },
  ],
} as const

export type ContactFormData = {
  name: string
  businessName: string
  websiteUrl: string
  email: string
  phone: string
  budget: string
  message: string
  industry?: string
}

export const BUDGET_OPTIONS = [
  { value: '', label: 'Select a range (optional)' },
  { value: '500-1000', label: '$500 – $1,000' },
  { value: '1000-2000', label: '$1,000 – $2,000' },
  { value: '2000-5000', label: '$2,000 – $5,000' },
  { value: '5000-10000', label: '$5,000 – $10,000' },
  { value: '10000-20000', label: '$10,000 – $20,000' },
  { value: 'not-sure', label: 'Not sure yet' },
] as const

export type SendContactResult =
  | { ok: true }
  | { ok: false; error: string }

export async function sendContact(data: ContactFormData): Promise<SendContactResult> {
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY

  if (!accessKey) {
    return {
      ok: false,
      error: 'Contact form is not configured yet. Add your Web3Forms access key to .env.local',
    }
  }

  const subject = `New inquiry from ${data.name}${data.businessName ? ` — ${data.businessName}` : ''}${data.industry ? ` (${data.industry})` : ''}`

  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      access_key: accessKey,
      subject,
      from_name: data.name,
      email: data.email,
      name: data.name,
      business_name: data.businessName || 'Not provided',
      website_url: data.websiteUrl || 'Not provided',
      phone: data.phone || 'Not provided',
      expected_budget:
        BUDGET_OPTIONS.find((option) => option.value === data.budget)?.label ||
        data.budget ||
        'Not provided',
      industry: data.industry || 'Not specified',
      message: data.message,
    }),
  })

  const result = await response.json()

  if (!response.ok || !result.success) {
    return {
      ok: false,
      error: result.message || 'Something went wrong. Please try again or email us directly.',
    }
  }

  return { ok: true }
}
