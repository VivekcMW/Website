import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Office Locations',
  description: 'Find Moving Walls offices worldwide. Visit us in Singapore, Kuala Lumpur, Jakarta, Mumbai, Dubai, London, New York, and Sydney.',
  openGraph: {
    title: 'Office Locations | Moving Walls',
    description: 'Find Moving Walls offices worldwide across 8 global locations.',
  },
}

export default function LocationsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
