import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Peter Wegmann | Quantum Computing & QEC',
  description: 'Portfolio of Peter Wegmann, Researcher in Quantum Error Correction.',
  icons: {
    icon: '/favicon.svg',
  },
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