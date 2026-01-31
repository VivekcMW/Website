import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Moving Walls Privacy Policy. Learn how we collect, use, and protect your personal data in compliance with GDPR and CCPA.',
  openGraph: {
    title: 'Privacy Policy | Moving Walls',
    description: 'Learn how Moving Walls collects, uses, and protects your personal data.',
  },
}

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
