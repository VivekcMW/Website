# MWWST Project - Copilot Instructions

## Project Overview
MWWST - A modern marketing agency/advertising services website built with Next.js 14, TypeScript, and Tailwind CSS.

## Tech Stack
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **UI Components**: Custom components with Tailwind

## Project Structure
```
src/
├── app/
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── components/
│   ├── Header.tsx       # Navigation header
│   ├── Hero.tsx         # Hero section
│   ├── Services.tsx     # Services section
│   ├── Clients.tsx      # Client logos
│   ├── Products.tsx     # Products showcase
│   ├── Newsletter.tsx   # Newsletter signup
│   └── Footer.tsx       # Footer component
└── lib/
    └── utils.ts         # Utility functions
```

## Development Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Coding Guidelines
- Use TypeScript for all components
- Follow React functional component patterns
- Use Tailwind CSS for styling
- Implement responsive design (mobile-first)
- Use Framer Motion for animations
