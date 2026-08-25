export const CONTACT = {
  email: 'OASolutions26@gmail.com',
  phones: [
    { display: '647-854-3079', tel: '+16478543079' },
    { display: '416-817-7112', tel: '+14168177112' },
  ],
} as const

export type ContactFormData = {
  name: string
  restaurant: string
  email: string
  message: string
}

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

  const subject = `New inquiry from ${data.name}${data.restaurant ? ` — ${data.restaurant}` : ''}`

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
      restaurant: data.restaurant || 'Not provided',
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
