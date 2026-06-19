import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MediaHub - Post Once, Reach Everywhere',
  description: 'Built for Africa Creators',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-600">{children}</body>
    </html>
  )
}
