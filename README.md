# Signalist 📈  
AI-powered stock tracking app with real-time prices, charts, alerts, and smart insights.

## Features
- Live stock prices & charts  
- Smart search & company insights  
- Watchlists & price alerts  
- AI summaries & notifications  
- Admin dashboard for stock/user management  

## Tech Stack
Next.js, TypeScript, Tailwind CSS, Shadcn UI, MongoDB, Better Auth, Inngest, Finnhub API, Nodemailer

## Quick Start
```bash
git clone https://github.com/aarav-12/Signalist.git
cd Signalist
npm install

Create .env:

NODE_ENV=development
NEXT_PUBLIC_BASE_URL=http://localhost:3000
NEXT_PUBLIC_FINNHUB_API_KEY=
MONGODB_URI=
BETTER_AUTH_SECRET=
GEMINI_API_KEY=
NODEMAILER_EMAIL=
NODEMAILER_PASSWORD=


Run:

npm run dev
npx inngest-cli@latest dev


Open: http://localhost:3000