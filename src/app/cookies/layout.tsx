import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'Moving Walls Cookie Policy. Understand how we use cookies and similar technologies to enhance your browsing experience.',
  openGraph: {
    title: 'Cookie Policy | Moving Walls',
    description: 'Understand how Moving Walls uses cookies and similar technologies.',
  },
}

export default function CookiesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
