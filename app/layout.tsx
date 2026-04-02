import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'now — what i\'m into right now',
  description: 'a quiet snapshot of this moment. no feed, no likes, just now.',
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
