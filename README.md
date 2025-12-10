# MWWST - Modern Marketing & Advertising Website

A modern, responsive marketing agency website built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern dark theme design
- 📱 Fully responsive layout
- ✨ Smooth animations with Framer Motion
- 🚀 Built with Next.js 14 App Router
- 💪 TypeScript for type safety
- 🎯 Tailwind CSS for styling

## Sections

- **Hero** - Animated headline with CTA buttons and stats
- **Services** - Plan, Buy, Report service offerings
- **Clients** - Animated client logo carousel
- **Products** - Product showcase with gradient cards
- **About** - Company information with animated visuals
- **Newsletter** - Email subscription form
- **Footer** - Multi-column footer with social links

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)

## Project Structure

```
src/
├── app/
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── components/
│   ├── Header.tsx       # Navigation header
│   ├── Hero.tsx         # Hero section
│   ├── Services.tsx     # Services section
│   ├── Clients.tsx      # Client logos carousel
│   ├── Products.tsx     # Products showcase
│   ├── About.tsx        # About section
│   ├── Newsletter.tsx   # Newsletter signup
│   └── Footer.tsx       # Footer component
└── lib/
    └── utils.ts         # Utility functions
```

## Customization

### Colors

Edit the color palette in `tailwind.config.ts`:

```typescript
colors: {
  primary: "#0F172A",
  secondary: "#1E293B",
  accent: "#3B82F6",
  "accent-light": "#60A5FA",
}
```

### Content

Update the content in each component file to match your brand:
- Company name and logo in `Header.tsx` and `Footer.tsx`
- Hero text in `Hero.tsx`
- Services in `Services.tsx`
- Products in `Products.tsx`

## License

MIT License
