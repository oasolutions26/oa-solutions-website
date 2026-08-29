# OA Solutions Website

Professional marketing website for **OA Solutions** — a development company specializing in restaurant technology.

## Services Highlighted

- Restaurant websites
- Custom applications
- Online reservation systems
- AI phone answering
- Menu & ordering systems
- Custom solutions

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Contact form setup (one-time)

The contact form sends messages automatically to your email via [Web3Forms](https://web3forms.com) (free).

1. Go to [web3forms.com](https://web3forms.com) and enter **contact@oasolutions.dev**
2. Copy the access key they email you
3. Create a `.env.local` file in the project root:

```bash
cp .env.example .env.local
```

4. Paste your key:

```
VITE_WEB3FORMS_ACCESS_KEY=your_actual_key_here
```

5. Restart the dev server (`npm run dev`)

When deploying (Vercel, Netlify, etc.), add the same environment variable in your host's dashboard.

## Build

```bash
npm run build
npm run preview
```

## Deploy

The `dist/` folder can be deployed to any static host (Vercel, Netlify, GitHub Pages, etc.).

## Tech Stack

- React + TypeScript
- Vite
- Tailwind CSS
