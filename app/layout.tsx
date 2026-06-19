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
      <body>{children}</body>
    </html>
  )
}
