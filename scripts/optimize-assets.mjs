import sharp from 'sharp'
import { statSync } from 'fs'

const logo = 'public/logo.png'

await sharp(logo)
  .resize({ height: 112, withoutEnlargement: true })
  .webp({ quality: 82 })
  .toFile('public/logo.webp')

await sharp(logo)
  .resize({ height: 480, withoutEnlargement: true })
  .webp({ quality: 85 })
  .toFile('public/logo-hero.webp')

const logoBuf = await sharp(logo)
  .resize({ width: 420, withoutEnlargement: true })
  .png()
  .toBuffer()

const svg = Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#030308"/>
      <stop offset="100%" stop-color="#0d0d18"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#g)"/>
  <circle cx="200" cy="120" r="180" fill="#0066ff" fill-opacity="0.12"/>
  <circle cx="1000" cy="520" r="220" fill="#0ea5e9" fill-opacity="0.10"/>
  <text x="80" y="520" font-family="Arial, Helvetica, sans-serif" font-size="42" font-weight="700" fill="#ffffff">OA Solutions</text>
  <text x="80" y="570" font-family="Arial, Helvetica, sans-serif" font-size="26" fill="#94a3b8">Restaurant Technology and Development</text>
</svg>`)

await sharp(svg)
  .composite([{ input: logoBuf, top: 90, left: 390 }])
  .png()
  .toFile('public/og-image.png')

for (const f of ['logo.webp', 'logo-hero.webp', 'og-image.png']) {
  const kb = Math.round(statSync(`public/${f}`).size / 1024)
  console.log(`${f}: ${kb}KB`)
}
